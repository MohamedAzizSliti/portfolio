import Link from "next/link"
import type { Project } from "@/data/projects"
import { ProjectVisual } from "@/components/projects/project-visual"
import { UseCaseStudio } from "@/components/use-cases/use-case-studio"
import { getUseCase } from "@/data/use-cases"

export function CaseStudy({ project, next }: { project: Project; next?: Project }) {
  return (
    <article className="pb-24 pt-28">
      <div className="shell">
        <Link href="/#projects" className="kicker hover:text-paper">
          ← All projects
        </Link>
        <p className="kicker mt-8">
          {project.category} — {project.status}
        </p>
        <h1 className="heading-1 mt-4 max-w-[680px]">{project.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{project.summary}</p>

        <div className="mt-12">
          <ProjectVisual slug={project.slug} name={project.name} index={project.timeframe} />
        </div>

        {getUseCase(project.slug) ? (
          <div className="mt-16 border border-white/10 bg-panel p-5 sm:p-8">
            <p className="kicker">Use case</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">
              Walk the screens that exist in the local {getUseCase(project.slug)?.source} project.
            </p>
            <div className="mt-8">
              <UseCaseStudio slug={project.slug} />
            </div>
          </div>
        ) : null}

        <dl className="mt-10 grid gap-6 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="kicker">Timeframe</dt>
            <dd className="mt-2 text-sm">{project.timeframe}</dd>
          </div>
          <div>
            <dt className="kicker">Status</dt>
            <dd className="mt-2 text-sm">{project.status}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="kicker">Contribution</dt>
            <dd className="mt-2 text-sm leading-relaxed text-mist">{project.contribution}</dd>
          </div>
        </dl>

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-mist">Overview</h2>
              <p className="mt-4 text-lg leading-relaxed">{project.description}</p>
            </section>
            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-mist">Problem</h2>
              <p className="mt-4 leading-relaxed text-mist">{project.problem}</p>
            </section>
            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-mist">My role</h2>
              <p className="mt-4 leading-relaxed text-mist">{project.role}</p>
            </section>
            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-mist">Challenge and solution</h2>
              <p className="mt-4 leading-relaxed text-mist">{project.challenge}</p>
              <p className="mt-4 leading-relaxed">{project.solution}</p>
            </section>
          </div>
          <aside className="space-y-10 lg:col-span-5">
            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-mist">Technologies</h2>
              <ul className="mt-4 space-y-2">
                {project.technologies.map((item) => (
                  <li key={item} className="border-b border-white/10 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-mist">Architecture</h2>
              <ul className="mt-4 space-y-3">
                {project.architecture.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-mist">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-sm uppercase tracking-[0.18em] text-mist">Main features</h2>
              <ul className="mt-4 space-y-2">
                {project.features.map((item) => (
                  <li key={item} className="text-sm">
                    <span className="mr-2 text-electric">/</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <p className="mt-16 max-w-3xl border border-white/10 bg-panel px-6 py-5 text-sm leading-relaxed text-mist">
          {project.statusDetail}
        </p>

        {next ? (
          <Link href={`/projects/${next.slug}`} className="group mt-16 grid gap-3 border-t border-white/10 pt-8">
            <span className="kicker">Next project</span>
            <span className="heading-3 group-hover:text-mist">{next.name}</span>
            <span className="text-sm text-mist">{next.category}</span>
          </Link>
        ) : null}
      </div>
    </article>
  )
}
