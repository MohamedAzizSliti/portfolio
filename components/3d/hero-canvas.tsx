"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { SceneFallback } from "@/components/3d/scene-fallback"

const HeroScene = dynamic(
  () => import("@/components/3d/hero-scene").then((module) => module.HeroScene),
  { ssr: false, loading: () => <SceneFallback /> },
)

type Quality = "static" | "low" | "high"

function readQuality(): Quality {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const narrow = window.matchMedia("(max-width: 767px)").matches
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
  if (reduce || narrow || connection?.saveData) return "static"
  const tablet = window.matchMedia("(max-width: 1100px)").matches
  const cores = navigator.hardwareConcurrency ?? 8
  if (tablet || cores <= 4) return "low"
  return "high"
}

export function HeroCanvas() {
  const [quality, setQuality] = useState<Quality>("static")

  useEffect(() => {
    const apply = () => setQuality(readQuality())
    apply()
    const query = window.matchMedia("(max-width: 1100px)")
    query.addEventListener("change", apply)
    return () => query.removeEventListener("change", apply)
  }, [])

  if (quality === "static") return <SceneFallback />
  return <HeroScene quality={quality} />
}
