"use client"

import { ReactLenis } from "lenis/react"
import type { ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.045,
        wheelMultiplier: 0.7,
        smoothWheel: true,
        anchors: true,
        autoRaf: true,
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
