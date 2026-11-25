import { HeroCanvas } from "@/components/3d/hero-canvas"
import { HeroIntro } from "@/components/sections/hero-intro"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] bg-ink">
      <div className="shell relative grid min-h-[100svh] gap-8 lg:grid-cols-[minmax(0,680px)_minmax(280px,1fr)] lg:gap-6">
        <HeroIntro />
        <div className="hero-stage relative h-[70vw] min-h-[260px] max-h-[480px] lg:h-auto lg:max-h-none lg:min-h-full">
          <HeroCanvas />
        </div>
      </div>
    </section>
  )
}
