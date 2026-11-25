import { certifications, education, experience } from "@/data/experience"
import { Reveal } from "@/components/motion/reveal"

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/10 bg-panel">
      <Reveal className="shell py-24 lg:py-24">
        <p className="kicker">07 — Experience</p>
        <h2 className="heading-2 mt-4 max-w-[680px]">
          Roles, studies, and the work between them.
        </h2>

        <ol className="mt-14 border-t border-white/10">
          {experience.map((entry) => (
            <li key={`${entry.org}-${entry.timeframe}`} className="grid gap-3 border-b border-white/10 py-7 md:grid-cols-12 md:gap-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-mist md:col-span-3">
                {entry.timeframe}
                {entry.current ? <span className="mt-2 block text-electric">Current</span> : null}
              </p>
              <div className="md:col-span-9">
                <h3 className="text-xl font-medium tracking-tight">
                  {entry.role}
                  <span className="text-mist"> — {entry.org}</span>
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist sm:text-base">{entry.summary}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker">Education</p>
            <div className="mt-6 space-y-8">
              {education.map((item) => (
                <article key={item.title}>
                  <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-electric">{item.school}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-mist">{item.timeframe}</p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="kicker">Certifications</p>
            <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {certifications.map((item) => (
                <li key={item.title} className="flex items-baseline justify-between gap-6 py-4">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-mist">{item.by}</p>
                  </div>
                  <p className="font-mono text-xs text-mist">{item.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
