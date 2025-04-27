"use client"

import { useEffect, useState } from "react"
import ContentRow from "@/components/content-row"
import { getTravelData } from "@/lib/data"
import type { TravelData } from "@/lib/types"

export default function Travel() {
  const [data, setData] = useState<TravelData | null>(null)

  useEffect(() => {
    // Fetch data
    const travelData = getTravelData()
    setData(travelData)
  }, [])

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Travel</h1>

        <div className="space-y-12">
          {data.trips.map((trip, index) => (
            <ContentRow key={index} title={trip.title} items={trip.days} type="trip-day" />
          ))}
        </div>
      </div>
    </main>
  )
}
