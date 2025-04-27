"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { getRecapsData } from "@/lib/data"
import type { YearRecap } from "@/lib/types"

export default function Recaps() {
  const [recaps, setRecaps] = useState<YearRecap[]>([])

  useEffect(() => {
    // Fetch data
    const recapsData = getRecapsData()
    setRecaps(recapsData)
  }, [])

  if (recaps.length === 0) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Yearly Recaps</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recaps.map((recap, index) => (
            <Link key={index} href={`/recaps/${recap.year}`} className="group">
              <div className="relative aspect-[3/4] rounded-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={recap.coverImage || "/placeholder.svg?height=600&width=450"}
                  alt={`${recap.year} Recap`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-3xl font-bold">{recap.year}</h2>
                  <p className="text-gray-300 mt-1">{recap.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
