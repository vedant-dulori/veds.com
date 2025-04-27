"use client"

import { useEffect, useState } from "react"
import ContentRow from "@/components/content-row"
import { getPicksData } from "@/lib/data"
import type { PicksData } from "@/lib/types"
import { Button } from "@/components/ui/button"

export default function Picks() {
  const [data, setData] = useState<PicksData | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")

  useEffect(() => {
    // Fetch data
    const picksData = getPicksData()
    setData(picksData)
  }, [])

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  const filters = ["all", ...data.categories.map((c) => c.id)]

  const filteredCategories =
    activeFilter === "all" ? data.categories : data.categories.filter((c) => c.id === activeFilter)

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">My Picks</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-red-600 hover:bg-red-700" : ""}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </Button>
          ))}
        </div>

        <div className="space-y-12">
          {filteredCategories.map((category, index) => (
            <ContentRow key={index} title={category.name} items={category.items} type="pick" showPlayAll />
          ))}
        </div>
      </div>
    </main>
  )
}
