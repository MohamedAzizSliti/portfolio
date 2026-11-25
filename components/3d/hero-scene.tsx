"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Lightformer, RoundedBox } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

type Quality = "low" | "high"

const shards: Array<{
  position: [number, number, number]
  rotation: [number, number, number]
  size: [number, number, number]
}> = [
  { position: [1.65, 0.72, 0.25], rotation: [0.4, 0.2, 0.6], size: [0.16, 0.42, 0.06] },
  { position: [-1.55, -0.55, 0.4], rotation: [0.2, 0.8, -0.4], size: [0.22, 0.12, 0.08] },
  { position: [0.35, 1.55, -0.3], rotation: [0.9, 0.1, 0.2], size: [0.34, 0.08, 0.08] },
  { position: [-0.85, 0.95, 0.85], rotation: [0.3, 0.5, 1.1], size: [0.1, 0.28, 0.08] },
]

function createCore(detail: number) {
  const geometry = new THREE.IcosahedronGeometry(1.02, detail)
  const position = geometry.attributes.position
  const vertex = new THREE.Vector3()

  for (let index = 0; index < position.count; index += 1) {
    vertex.fromBufferAttribute(position, index)
    const normal = vertex.clone().normalize()
    const ridge =
      Math.sin(normal.x * 4.2 + normal.y * 2.1) * Math.cos(normal.z * 3.4) * 0.045 +
      Math.sin(normal.y * 6.5 + normal.x * 2) * 0.018
    vertex.addScaledVector(normal, ridge)
    position.setXYZ(index, vertex.x, vertex.y, vertex.z)
  }

  geometry.computeVertexNormals()
  return geometry
}

function createParticles(count: number) {
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)

  for (let index = 0; index < count; index += 1) {
    const radius = 2.2 + Math.random() * 1.9
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.68
    positions[index * 3 + 2] = radius * Math.cos(phi)
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  return geometry
}

function Sculpture({ quality }: { quality: Quality }) {
  const group = useRef<THREE.Group>(null)
  const rings = useRef<THREE.Group>(null)
  const core = useMemo(() => createCore(quality === "high" ? 6 : 3), [quality])
  const particles = useMemo(
    () => createParticles(quality === "high" ? 200 : 64),
    [quality],
  )

  useEffect(() => {
    return () => {
      core.dispose()
      particles.dispose()
    }
  }, [core, particles])

  useFrame((state, delta) => {
    const node = group.current
    if (!node) return
    const targetY = state.pointer.x * 0.5
    const targetX = -state.pointer.y * 0.24
    node.rotation.y = THREE.MathUtils.damp(
      node.rotation.y,
      targetY + state.clock.elapsedTime * 0.05,
      1.15,
      delta,
    )
    node.rotation.x = THREE.MathUtils.damp(node.rotation.x, targetX, 1.15, delta)
    node.position.y = Math.sin(state.clock.elapsedTime * 0.26) * 0.08
    if (rings.current) rings.current.rotation.z += delta * 0.032
    const scrolled = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)
    state.camera.position.z = THREE.MathUtils.damp(
      state.camera.position.z,
      5.15 + scrolled * 1.25,
      1.3,
      delta,
    )
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={group} scale={0.84}>
      <mesh geometry={core}>
        <meshPhysicalMaterial
          color="#d5e2f2"
          metalness={1}
          roughness={0.16}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </mesh>
      <mesh scale={0.68}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.32} />
      </mesh>
      <group ref={rings}>
        <mesh rotation={[Math.PI / 2.35, 0.15, 0.2]}>
          <torusGeometry args={[1.68, 0.011, 12, 96]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={2.2} roughness={0.25} />
        </mesh>
        <mesh rotation={[1.05, 0.85, 0.35]}>
          <torusGeometry args={[2.02, 0.007, 10, 96]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={1.6} roughness={0.35} />
        </mesh>
        <mesh rotation={[0.25, 0.5, -0.2]}>
          <torusGeometry args={[1.38, 0.008, 10, 64, Math.PI * 1.35]} />
          <meshStandardMaterial color="#dbe7ff" emissive="#9eb6ff" emissiveIntensity={0.8} />
        </mesh>
      </group>
      {shards.map((shard) => (
        <RoundedBox
          key={shard.position.join("-")}
          args={shard.size}
          position={shard.position}
          rotation={shard.rotation}
          radius={0.02}
          smoothness={2}
        >
          <meshStandardMaterial color="#141b2e" metalness={0.85} roughness={0.22} />
        </RoundedBox>
      ))}
      <points geometry={particles}>
        <pointsMaterial
          color="#c5d4ff"
          size={quality === "high" ? 0.016 : 0.022}
          sizeAttenuation
          transparent
          opacity={0.72}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function Stage({ quality }: { quality: Quality }) {
  return (
    <>
      <ambientLight intensity={0.18} />
      <directionalLight position={[4.5, 2.2, 3.5]} intensity={2.4} color="#f4f7ff" />
      <directionalLight position={[-4, -1.2, 2]} intensity={1.8} color="#3B82F6" />
      <pointLight position={[0.4, 1.6, -2.2]} intensity={12} distance={8} color="#8B5CF6" />
      <Sculpture quality={quality} />
      <Environment resolution={256} frames={1} background={false}>
        <Lightformer intensity={3.2} color="#ffffff" scale={[3, 2, 1]} position={[0, 2, 4]} />
        <Lightformer intensity={4} color="#3B82F6" scale={[5, 2, 1]} position={[-3, 0, 2]} />
        <Lightformer intensity={2.4} color="#8B5CF6" form="circle" scale={2} position={[3, -1, 2]} />
      </Environment>
    </>
  )
}

export function HeroScene({ quality }: { quality: Quality }) {
  const holder = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const node = holder.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={holder} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={quality === "high" ? [1, 1.5] : [1, 1.1]}
        camera={{ position: [0, 0.05, 5.15], fov: 32 }}
        frameloop={active ? "always" : "never"}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0)
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.12
        }}
      >
        <Stage quality={quality} />
      </Canvas>
    </div>
  )
}
