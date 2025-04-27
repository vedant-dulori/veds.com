"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getRecapByYear } from "@/lib/data"
import type { YearRecap } from "@/lib/types"
import ContentRow from "@/components/content-row"

export default function YearDetail({ params }: { params: { year: string } }) {
  const [recap, setRecap] = useState<YearRecap | null>(null)

  useEffect(() => {
    // Fetch recap data
    const recapData = getRecapByYear(params.year)
    setRecap(recapData)
  }, [params.year])

  if (!recap) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[50vh] mb-8 rounded-lg overflow-hidden">
          <Image
            src={recap.heroImage || "/placeholder.svg?height=600&width=1200"}
            alt={`${recap.year} Recap`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold">{recap.year}</h1>
            <p className="text-xl text-gray-300 mt-2">{recap.title}</p>
          </div>
        </div>

        <div className="space-y-12">
          {recap.narrativeBlocks?.map((block, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={`prose prose-invert max-w-none ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <h2 className="text-2xl font-bold mb-4">{block.title}</h2>
                <p className="text-lg">{block.content}</p>
              </div>
              <div className={`relative h-80 rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <Image
                  src={block.image || "/placeholder.svg?height=500&width=800"}
                  alt={block.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Photo Collage</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recap.photoCollage?.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src={photo.image || "/placeholder.svg?height=400&width=400"}
                    alt={photo.caption || `Photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <ContentRow title="Top 10 Moments" items={recap.topMoments || []} type="moment" numbered />
        </div>
      </div>
    </main>
  )
}
