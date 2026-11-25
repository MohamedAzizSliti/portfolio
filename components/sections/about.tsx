import { languages } from "@/data/experience"
import { Reveal } from "@/components/motion/reveal"

const principles = [
  ["01", "Product thinking", "Start from the job a person is trying to finish, then choose the stack."],
  ["02", "Problem solving", "The interesting part is the constraint: roles, payments, live updates, sensitive data."],
  ["03", "Full-stack engineering", "A Flutter screen and the API behind it are one system, not two handoffs."],
  ["04", "Mobile development", "Flutter first, React Native when the product already lives there."],
  ["05", "AI integrations", "A model earns its place when it performs a bounded task, as in Wave Clinique's triage."],
  ["06", "Continuous learning", "Licence at ISET Zaghouan, a professional master's at ISET Radès, and the work since."],
]

export function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <Reveal className="shell py-24 lg:py-24">
        <p className="kicker">03 — About</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="heading-2 max-w-[680px]">
              More than writing code.
              <span className="block text-mist">Building solutions.</span>
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-mist">
              <p>I&apos;m a developer passionate about turning complex ideas into practical digital products.</p>
              <p>My work spans mobile applications, web platforms, backend architecture, and AI-powered automation.</p>
              <p>I enjoy solving real-world problems, designing reliable systems, and delivering products that create value.</p>
            </div>
            <p className="mt-8 text-sm text-mist">
              {languages.map((language) => `${language.name} · ${language.level}`).join("   ")}
            </p>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <div className="border border-white/10 bg-panel p-8">
              <p className="font-mono text-6xl font-medium tracking-[-0.08em] text-paper">
                AZ<span className="text-electric">.</span>
              </p>
              <p className="mt-6 text-sm leading-relaxed text-mist">
                Based in Tunis. Full-stack and mobile, with AI used where it shortens a real workflow. No stock portrait — the work is the introduction.
              </p>
              <dl className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
                <div className="flex justify-between gap-6">
                  <dt className="text-mist">Focus</dt>
                  <dd className="text-right">Mobile, web, APIs, automation</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-mist">Practice</dt>
                  <dd className="text-right">Freelance and product roles since 2023</dd>
                </div>
                <div className="flex justify-between gap-6">
                  <dt className="text-mist">Now</dt>
                  <dd className="text-right">Leading ExpressKilo</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <ol className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(([index, title, copy]) => (
            <li key={index} className="reveal bg-ink p-6 sm:p-8">
              <p className="kicker">{index}</p>
              <h3 className="mt-4 text-xl font-medium tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{copy}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
