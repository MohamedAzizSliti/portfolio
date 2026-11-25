"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isNarrow = window.matchMedia("(max-width: 768px)").matches
    if (prefersReducedMotion || isNarrow) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particleCount = 22
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.4 + 0.15,
    }))

    let running = true
    const onVisibility = () => {
      running = document.visibilityState === "visible"
    }
    document.addEventListener("visibilitychange", onVisibility)

    const animate = () => {
      if (running) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particlesRef.current.forEach((particle, i) => {
          particle.x += particle.speedX
          particle.y += particle.speedY

          if (particle.x < 0) particle.x = canvas.width
          if (particle.x > canvas.width) particle.x = 0
          if (particle.y < 0) particle.y = canvas.height
          if (particle.y > canvas.height) particle.y = 0

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
          ctx.fill()

          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const otherParticle = particlesRef.current[j]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 110) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - distance / 110)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("visibilitychange", onVisibility)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ zIndex: 0 }}
      aria-hidden
    />
  )
}
