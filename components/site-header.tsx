"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { CVDownloadButton } from "@/components/cv-download-button"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#work-process" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm relative">
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="font-bold text-xl group" onClick={() => setOpen(false)}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mohamed
            </span>
            <span className="text-blue-600">.</span>
          </Link>
        </motion.div>
        <nav className="hidden lg:flex gap-6">
          {NAV_LINKS.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-blue-600 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CVDownloadButton />
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t bg-white dark:bg-gray-900"
          >
            <div className="container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/Mohamed-Aziz-Sliti-CV.pdf"
                download
                className="rounded-md px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800"
                onClick={() => setOpen(false)}
              >
                Download CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
