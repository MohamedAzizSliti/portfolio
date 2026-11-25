"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"

export function HeroAtmosphere() {
  const reduce = useReducedMotion()
  const glow = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduce) return undefined
    const node = glow.current
    if (!node) return undefined
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100
      node.style.transform = `translate(${(x - 50) * 0.35}px, ${(y - 40) * 0.35}px)`
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [reduce])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div ref={glow} className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="hero-grid absolute inset-0" />
    </div>
  )
}
