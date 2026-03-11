"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CVDownloadButton() {
  const handleDownload = () => {
    // Try to download the CV file
    const link = document.createElement("a")
    link.href = "/Mohamed-Aziz-Sliti-CV.pdf"
    link.download = "Mohamed-Aziz-Sliti-CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button variant="outline" size="sm" className="hidden md:flex" onClick={handleDownload}>
        Download CV
        <Download className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  )
}
