"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { MouseEvent } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLenis } from "lenis/react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { navLinks, navSectionId, profile } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const
const sectionIds = navLinks.map((link) => navSectionId(link.href)).filter((id): id is string => Boolean(id))

function sectionInView() {
  const probe = document.getElementById(sectionIds[0] ?? "")
  const margin = probe ? Number.parseFloat(getComputedStyle(probe).scrollMarginTop) : 88
  const line = (Number.isNaN(margin) ? 88 : margin) + 20
  let active = sectionIds[0] ?? "home"
  for (const id of sectionIds) {
    const node = document.getElementById(id)
    if (!node) continue
    if (node.getBoundingClientRect().top <= line) active = id
  }
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
  if (atBottom) return sectionIds[sectionIds.length - 1] ?? active
  return active
}

function settle(value: number) {
  return 1 - Math.pow(1 - value, 3)
}

function MenuMark({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3 w-4" aria-hidden="true">
      <span
        className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-1000 ease-draw ${
          open ? "translate-y-1.5 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform duration-1000 ease-draw ${
          open ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      />
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState("home")
  const reduce = useReducedMotion()
  const lenis = useLenis()
  const pathname = usePathname()
  const destination = useRef<string | null>(null)
  const lenisRef = useRef(lenis)
  lenisRef.current = lenis

  const syncCurrent = useCallback((id: string) => {
    setCurrent((previous) => (previous === id ? previous : id))
  }, [])

  const focusSection = useCallback(
    (id: string) => {
      if (!sectionIds.includes(id)) return
      destination.current = id
      syncCurrent(id)
      const node = document.getElementById(id)
      const instance = lenisRef.current
      if (!node || !instance) {
        destination.current = null
        return
      }
      instance.scrollTo(node, {
        offset: 0,
        duration: 1.5,
        easing: settle,
        force: true,
        onComplete: () => {
          if (destination.current !== id) return
          destination.current = null
          syncCurrent(sectionInView())
        },
      })
    },
    [syncCurrent],
  )

  useLenis(() => {
    if (pathname !== "/" || destination.current) return
    syncCurrent(sectionInView())
  }, [pathname, syncCurrent])

  useEffect(() => {
    if (pathname !== "/") return undefined
    const id = window.location.hash.slice(1)
    if (!sectionIds.includes(id)) {
      syncCurrent(sectionInView())
      return undefined
    }
    let attempts = 0
    let timer = 0
    const align = () => {
      if (lenisRef.current && document.getElementById(id)) {
        focusSection(id)
        return
      }
      attempts += 1
      if (attempts < 20) timer = window.setTimeout(align, 50)
    }
    timer = window.setTimeout(align, 50)
    return () => window.clearTimeout(timer)
  }, [pathname, focusSection, syncCurrent])

  useEffect(() => {
    const release = () => {
      destination.current = null
    }
    const onPop = () => {
      if (window.location.pathname !== "/") return
      const id = window.location.hash.slice(1)
      if (sectionIds.includes(id)) focusSection(id)
      else syncCurrent(sectionInView())
    }
    window.addEventListener("wheel", release, { passive: true })
    window.addEventListener("touchmove", release, { passive: true })
    window.addEventListener("popstate", onPop)
    return () => {
      window.removeEventListener("wheel", release)
      window.removeEventListener("touchmove", release)
      window.removeEventListener("popstate", onPop)
    }
  }, [focusSection, syncCurrent])

  const onNavigate = (event: MouseEvent<HTMLAnchorElement>, id: string | null) => {
    setOpen(false)
    if (!id || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    if (pathname !== "/") return
    event.preventDefault()
    event.stopPropagation()
    const hash = `#${id}`
    if (window.location.hash !== hash) window.history.pushState(null, "", hash)
    focusSection(id)
  }

  useEffect(() => {
    if (!lenis) return
    if (open) lenis.stop()
    else lenis.start()
  }, [lenis, open])

  useEffect(() => {
    const main = document.getElementById("main")
    const footer = document.querySelector("footer")
    if (open) {
      main?.setAttribute("inert", "")
      footer?.setAttribute("inert", "")
    } else {
      main?.removeAttribute("inert")
      footer?.removeAttribute("inert")
    }
    return () => {
      main?.removeAttribute("inert")
      footer?.removeAttribute("inert")
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-[#272727] bg-[#181818]/80 px-4 py-2 backdrop-blur-md">
          <Link href="/#home" scroll={false} className="text-lg font-semibold leading-7" onClick={(event) => onNavigate(event, "home")}>
            AZ.
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const id = navSectionId(link.href)
              const active = pathname === "/" && current === id
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  aria-current={active ? "page" : undefined}
                  onClick={(event) => onNavigate(event, id)}
                  className={`rounded-full px-3 py-1 text-sm font-medium leading-5 transition-colors duration-300 ${
                    active ? "bg-white/10 text-paper" : "text-mist hover:text-paper"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
          <Link href="/#contact" scroll={false} className="btn-primary hidden lg:inline-flex" onClick={(event) => onNavigate(event, "contact")}>
            Start a project
          </Link>
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <MenuMark open={open} />
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="fixed inset-0 z-40 flex flex-col justify-end bg-[#000000]/95 px-6 pb-10 pt-24 backdrop-blur-xl lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.85, ease }}
          >
            {navLinks.map((link, index) => {
              const id = navSectionId(link.href)
              const active = pathname === "/" && current === id
              return (
              <motion.div
                key={link.href}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: Math.min(index * 0.1, 0.6), ease }}
              >
                <Link
                  href={link.href}
                  scroll={false}
                  aria-current={active ? "page" : undefined}
                  className={`block py-3 text-4xl font-semibold leading-10 ${active ? "text-paper" : "text-mist"}`}
                  onClick={(event) => onNavigate(event, id)}
                >
                  {link.label}
                </Link>
              </motion.div>
              )
            })}
            <Link href="/#contact" scroll={false} className="btn-primary mt-6 w-fit" onClick={(event) => onNavigate(event, "contact")}>
              Start a project
            </Link>
            <p className="mt-6 text-sm font-medium leading-5 text-mist">{profile.location}</p>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  )
}
