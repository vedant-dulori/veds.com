"use client"

import { motion } from "framer-motion"
import type { Moment } from "@/lib/types"

export function MomentHeroCaption({ moment }: { moment: Moment }) {
  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
      <h1 className="text-3xl md:text-5xl font-bold mb-2">{moment.title}</h1>
      <p className="text-xl text-gray-300">{moment.description}</p>
    </motion.div>
  )
}

export function MomentArticle({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="prose prose-invert mx-auto"
    >
      {children}
    </motion.article>
  )
}
