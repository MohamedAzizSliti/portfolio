"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

interface ShowcaseCardProps {
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  category: string
  delay?: number
}

export function ShowcaseCard({
  title,
  description,
  image,
  imageAlt,
  tags,
  category,
  delay = 0,
}: ShowcaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden border-2 hover:border-blue-500/50 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="relative h-64 w-full overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <ExternalLink className="h-4 w-4 text-blue-600" />
            </div>
          </motion.div>
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <motion.h3
            className="font-bold text-2xl mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + index * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
