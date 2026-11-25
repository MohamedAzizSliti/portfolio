"use client"

import Link from "next/link"
import { useLenis } from "lenis/react"
import { navLinks, profile } from "@/lib/site"

export function Footer() {
  const lenis = useLenis()

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 2.4 })
    else window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="shell flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-3xl font-semibold leading-9">
            AZ<span className="text-electric">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
            {profile.name}. {profile.role}. Based in {profile.location}.
          </p>
          <p className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-mist">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {profile.availability}
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm" aria-label="Footer">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-mist transition-colors hover:text-paper">
              {link.label}
            </Link>
          ))}
          <Link href="/#experience" className="text-mist transition-colors hover:text-paper">
            Experience
          </Link>
        </nav>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium leading-5">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-mist hover:text-paper">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-mist hover:text-paper">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="text-mist hover:text-paper">
              Email
            </a>
            <Link href="/privacy" className="text-mist hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms" className="text-mist hover:text-paper">
              Terms
            </Link>
          </div>
          <button type="button" onClick={toTop} className="text-xs font-semibold uppercase tracking-[0.16em] text-mist hover:text-paper">
            Back to top
          </button>
          <p className="text-xs text-mist">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </div>
    </footer>
  )
}
