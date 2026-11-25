import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/motion/reveal"
import { profile } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-panel">
      <Reveal className="shell py-24 lg:py-24">
        <p className="kicker">09 — Contact</p>
        <h2 className="heading-2 mt-4 max-w-[680px]">
          Start a project
          <span className="block text-mist">Tell me what you need built.</span>
        </h2>
        <p className="prose-quiet mt-6 max-w-xl">
          Whether you&apos;re building a startup, launching a product, or looking for a developer to bring your next idea to life, I&apos;d love to hear about it.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block text-2xl font-semibold leading-8 text-paper underline-offset-4 hover:underline"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm uppercase tracking-[0.14em] text-mist">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-paper">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-paper">
            GitHub
          </a>
          <a href={profile.phoneHref} className="hover:text-paper">
            {profile.phone}
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-paper">
            WhatsApp
          </a>
          <a href={profile.resume} download className="hover:text-paper">
            Resume
          </a>
          <span>{profile.location}</span>
        </div>

        <div className="mt-14 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-xl font-medium">Write directly</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              The form sends through the existing mail route. If it cannot reach the server, use the email address above.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
