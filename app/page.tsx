import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Expertise } from "@/components/sections/expertise"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Philosophy } from "@/components/sections/philosophy"
import { Projects } from "@/components/sections/projects"
import { Reviews } from "@/components/sections/reviews"
import { UseCases } from "@/components/sections/use-cases"
import { Services } from "@/components/sections/services"
import { Tagline } from "@/components/sections/tagline"
import { Technologies } from "@/components/sections/technologies"

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Technologies />
      <Tagline />
      <About />
      <Projects />
      <UseCases />
      <HowItWorks />
      <Expertise />
      <Services />
      <Experience />
      <Reviews />
      <Faq />
      <Philosophy />
      <Contact />
    </main>
  )
}
