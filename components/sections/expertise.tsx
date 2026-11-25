import { Reveal } from "@/components/motion/reveal"

const areas = [
  {
    title: "Mobile",
    copy: "Flutter is the through-line: ExpressKilo, Wave Clinique, booking, chat, delivery, and the earlier internships. React Native and Expo cover Vibelinx, where the session itself is the interface.",
  },
  {
    title: "Web",
    copy: "React and Next.js for products that need a wider surface than a phone — the Vibelinx web platform, the Baqala concept, and this site. TypeScript where the interface is large enough to deserve it.",
  },
  {
    title: "Backend",
    copy: "Node.js services, Express or NestJS depending on the boundary, REST for ExpressKilo, Socket.io where the product is live, and a database chosen per product: Supabase, Firebase, MongoDB, Postgres.",
  },
  {
    title: "AI",
    copy: "OpenAI inside Wave Clinique for wellness triage, n8n when a workflow should run without a new service, and agent-plus-retrieval patterns for Voice to Work. The model stays inside a job.",
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-white/10 bg-panel">
      <Reveal className="shell py-24 lg:py-24">
        <p className="kicker">05 — Expertise</p>
        <h2 className="heading-2 mt-4 max-w-[680px]">
          Four layers. One product.
        </h2>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {areas.map((area, index) => (
            <article key={area.title} className="grid gap-4 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <p className="kicker md:col-span-2">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-2xl font-medium tracking-tight md:col-span-3">{area.title}</h3>
              <p className="text-sm leading-relaxed text-mist md:col-span-7 md:text-base">{area.copy}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
