import { Reveal } from "@/components/motion/reveal"
import { picturedUseCases } from "@/data/use-cases"
import { UseCaseStudio } from "@/components/use-cases/use-case-studio"

export function UseCases() {
  const ticker = picturedUseCases.flatMap((item) => item.steps.map((step) => `${item.name}  ·  ${step.screen}`))

  return (
    <section id="use-cases" className="border-t border-white/10 bg-panel">
      <div className="overflow-hidden border-b border-white/10 py-3">
        <div className="marquee flex w-max gap-10">
          {[...ticker, ...ticker].map((item, index) => (
            <span key={`${item}-${index}`} className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-mist">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="shell py-24 lg:py-24">
        <Reveal>
          <p className="kicker">Use cases</p>
          <h2 className="heading-2 mt-4 max-w-[680px]">
            The interface, walked the way the app is built.
          </h2>
          <p className="prose-quiet mt-6 max-w-2xl">
            These are the screens from the applications above. Play moves through the steps. Hover pauses it.
          </p>
        </Reveal>
        <div className="mt-14">
          <UseCaseStudio />
        </div>
      </div>
    </section>
  )
}
