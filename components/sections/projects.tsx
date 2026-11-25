import Link from "next/link"
import { topProjects } from "@/data/projects"
import { ProjectVisual } from "@/components/projects/project-visual"
import { Reveal } from "@/components/motion/reveal"

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <div className="shell py-24 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">04 — Top applications</p>
            <h2 className="heading-2 mt-4 max-w-[680px]">The applications I can show.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-mist">
            Each one has a real screen. Work without a picture stays off this list.
          </p>
        </div>

        <div className="mt-16">
          {topProjects.map((project, index) => {
            const reverse = index % 2 === 1
            return (
              <Reveal key={project.slug} delay={Math.min(index * 0.04, 0.2)}>
              <article className="border-t border-white/10">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16"
                >
                  <div className={reverse ? "lg:order-2 lg:col-span-5" : "lg:col-span-5"}>
                    <p className="kicker">
                      {String(index + 1).padStart(2, "0")} — {project.category}
                    </p>
                    <h3 className="heading-3 mt-4 transition-colors duration-300 group-hover:text-mist">
                      {project.name}
                    </h3>
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-mist sm:text-base">{project.summary}</p>
                    <p className="mt-5 font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.14em] text-mist/80">
                      {project.technologies.join("  ·  ")}
                    </p>
                    <dl className="mt-8 grid max-w-md grid-cols-2 gap-6 text-sm">
                      <div>
                        <dt className="kicker">Status</dt>
                        <dd className="mt-2">{project.status}</dd>
                      </div>
                      <div>
                        <dt className="kicker">When</dt>
                        <dd className="mt-2">{project.timeframe}</dd>
                      </div>
                    </dl>
                    <p className="mt-8 text-[0.75rem] uppercase tracking-[0.18em] text-electric">
                      Case study
                      <span className="inline-block transition-transform duration-700"> →</span>
                    </p>
                  </div>
                  <div className={`lift ${reverse ? "lg:order-1 lg:col-span-7" : "lg:col-span-7"}`}>
                    <ProjectVisual slug={project.slug} name={project.name} index={String(index + 1).padStart(2, "0")} />
                  </div>
                </Link>
              </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
