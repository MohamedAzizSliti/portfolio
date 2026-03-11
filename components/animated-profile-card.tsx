"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export function AnimatedProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl" />
      <Card className="relative overflow-hidden border-2 border-blue-200/50 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-2xl">
        <div className="relative h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-32 h-32 bg-white/20 rounded-full blur-xl" />
          </motion.div>
          <div className="relative flex items-center gap-6">
            <motion.div
              className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/about-image.png"
                alt="Mohamed Aziz Sliti"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            <div className="flex-1">
              <motion.h3
                className="text-2xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Mohamed Aziz Sliti
              </motion.h3>
              <motion.p
                className="text-white/90 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Full Stack Developer
              </motion.p>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Available for Hire
              </Badge>
            </div>
          </div>
        </div>
        <CardContent className="p-6 space-y-4">
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="bg-blue-500 p-2 rounded-lg">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">Tunis, Tunisia</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="bg-purple-500 p-2 rounded-lg">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">zzsliti1999@gmail.com</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="bg-pink-500 p-2 rounded-lg">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">+216 54740030</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="bg-green-500 p-2 rounded-lg">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">2+ Years</p>
              </div>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
