import { Reveal } from "@/components/motion/reveal"

const values = [
  ["Architecture", "Boundaries you can explain to the next person who opens the repo."],
  ["Performance", "A phone on a slow network is the real device, not the simulator."],
  ["Experience", "If the primary action is hard to find, the feature does not exist."],
  ["Maintenance", "Code that only the author understands is a temporary product."],
  ["Scale", "Start smaller than the fantasy, and don't paint yourself into a rewrite."],
  ["Value", "The point is a business or a person who can do something they couldn't."],
]

export function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-white/10">
      <Reveal className="shell py-24 lg:py-24">
        <p className="kicker">08 — Philosophy</p>
        <h2 className="heading-2 mt-6 max-w-[680px]">
          Good software is not just functional.
          <span className="mt-2 block text-electric">It should feel effortless.</span>
        </h2>
        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([title, copy], index) => (
            <article key={title} className="border-t border-white/10 pt-5">
              <p className="kicker">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
