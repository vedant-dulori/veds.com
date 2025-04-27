"use client"

import { useEffect, useState } from "react"
import ContentRow from "@/components/content-row"
import { getWorkData } from "@/lib/data"
import type { WorkData } from "@/lib/types"

export default function Work() {
  const [data, setData] = useState<WorkData | null>(null)

  useEffect(() => {
    // Fetch data
    const workData = getWorkData()
    setData(workData)
  }, [])

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Work & Projects</h1>

        <div className="space-y-12">
          <ContentRow title="Companies Worked For" items={data.companies} type="company" />

          {data.projectsByCompany.map((company, index) => (
            <ContentRow key={index} title={`Projects at ${company.name}`} items={company.projects} type="project" />
          ))}
        </div>
      </div>
    </main>
  )
}
