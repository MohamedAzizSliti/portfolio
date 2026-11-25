import Link from "next/link"
import { services } from "@/data/services"
import { Reveal } from "@/components/motion/reveal"

export function Services() {
  return (
    <section id="services" className="border-t border-white/10">
      <Reveal className="shell py-24 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">06 — Services</p>
            <h2 className="heading-2 mt-4 max-w-[680px]">What I take on.</h2>
            <p className="prose-quiet mt-6">
              Engagements for founders, companies, and teams who need a product built, not a slide about one.
            </p>
          </div>
          <div className="lg:col-span-8">
            {services.map((service) => (
              <article key={service.index} className="border-t border-white/10 py-8 first:border-t-0 first:pt-0">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-medium tracking-tight">{service.title}</h3>
                  <span className="kicker">{service.index}</span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist sm:text-base">{service.problem}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/90 sm:text-base">{service.value}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.capabilities.map((item) => (
                    <li key={item} className="text-sm text-mist">
                      <span className="mr-2 text-electric">/</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className="mt-6 inline-flex text-[0.72rem] uppercase tracking-[0.18em] text-electric">
                  {service.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
