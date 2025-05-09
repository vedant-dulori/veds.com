"use client"

import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { getMoment } from "@/lib/data"
import Image from "next/image"
import { motion } from "framer-motion"

export default function MomentPage({ params }: { params: { year: string; slug: string } }) {
  const [moment, setMoment] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const momentData = getMoment(params.year, params.slug)
    if (momentData) {
      setMoment(momentData)
    }
    setLoading(false)
  }, [params.year, params.slug])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!moment) {
    notFound()
  }

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={moment.image || "/placeholder.svg?height=800&width=1600"}
          alt={moment.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#141414]" />

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">MOMENT #{moment.rank}</span>
        </div>

        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{moment.title}</h1>
            <p className="text-xl text-gray-300">{moment.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="prose prose-invert mx-auto"
        >
          <p className="text-lg">
            This is a standalone moment page for {moment.title}. In a real application, this would contain a detailed
            story about this specific moment, including additional images, videos, and narrative content.
          </p>
          <p>
            The moment occurred in {params.year} and was ranked #{moment.rank} in the top moments of the year. This page
            provides a dedicated space to explore this memory in depth.
          </p>
        </motion.article>
      </div>
    </main>
  )
}
