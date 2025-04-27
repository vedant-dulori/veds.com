"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getPickById } from "@/lib/data"
import type { Pick } from "@/lib/types"
import { Star } from "lucide-react"

export default function PickDetail({ params }: { params: { pickId: string } }) {
  const [pick, setPick] = useState<Pick | null>(null)

  useEffect(() => {
    // Fetch pick data
    const pickData = getPickById(params.pickId)
    setPick(pickData)
  }, [params.pickId])

  if (!pick) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[50vh] mb-8 rounded-lg overflow-hidden">
          <Image
            src={pick.image || "/placeholder.svg?height=600&width=1200"}
            alt={pick.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <div className="text-sm font-medium text-red-600 mb-2">{pick.category}</div>
            <h1 className="text-4xl font-bold">{pick.title}</h1>
            <p className="text-xl text-gray-300 mt-2">{pick.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Why It Matters</h2>
              <p className="text-lg">{pick.description}</p>
            </div>

            {pick.embed && (
              <div className="mt-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={pick.embed}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-[#1f1f1f] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Category</p>
                  <p>{pick.category}</p>
                </div>
                <div>
                  <p className="text-gray-400">Year</p>
                  <p>{pick.year}</p>
                </div>
                <div>
                  <p className="text-gray-400">Rating</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < (pick.rating || 0) ? "text-red-600 fill-red-600" : "text-gray-500"}
                      />
                    ))}
                    <span className="ml-2">{pick.rating}/5</span>
                  </div>
                </div>

                {pick.tags && pick.tags.length > 0 && (
                  <div>
                    <p className="text-gray-400">Tags</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {pick.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-[#2a2a2a] rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
