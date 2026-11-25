"use client"

import type { ReactNode } from "react"
import { Footer } from "@/components/layout/footer"
import { Intro } from "@/components/layout/intro"
import { Navbar } from "@/components/layout/navbar"
import { SmoothScroll } from "@/components/layout/smooth-scroll"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <Intro />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      {children}
      <Footer />
    </SmoothScroll>
  )
}
