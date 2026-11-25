export const profile = {
  name: "Mohamed Aziz Sliti",
  brand: "AZ",
  role: "Full stack and mobile developer",
  discipline: "AI Solutions Engineer",
  statement:
    "I engineer digital experiences that turn ambitious ideas into powerful products.",
  support:
    "Building modern web applications, mobile products, scalable backends, and intelligent AI-powered solutions.",
  availability: "Available for selected projects",
  location: "Tunis, Tunisia",
  email: "zzsliti1999@gmail.com",
  phone: "+216 54740030",
  phoneHref: "tel:+21654740030",
  whatsapp: "https://wa.me/21654740030",
  github: "https://github.com/MohamedAzizSliti",
  linkedin: "https://www.linkedin.com/in/mohamed-aziz-sliti-a511b31ba/",
  resume: "/Mohamed-Aziz-Sliti-CV.pdf",
} as const

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
] as const

export function navSectionId(href: string) {
  const id = href.split("#")[1]
  return id || null
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, "")
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (production) return `https://${production}`
  const vercel = process.env.VERCEL_URL
  if (vercel) return `https://${vercel}`
  return "http://localhost:3000"
}

export function getCanonicalUrl(path = "/") {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL
  if (!explicit) return undefined
  const origin = explicit.startsWith("http") ? explicit.replace(/\/$/, "") : `https://${explicit}`
  return new URL(path, origin).toString()
}
