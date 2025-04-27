"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CVDownloadButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button variant="outline" size="sm" className="hidden md:flex" asChild>
        <a href="/Mohamed-Aziz-Sliti-CV.pdf" download>
          Download CV
          <Download className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </motion.div>
  )
}
