"use client"

import { useEffect, useState } from "react"
import HeroBanner from "@/components/hero-banner"
import ContentRow from "@/components/content-row"
import { getHomeData } from "@/lib/data"
import type { HomeData } from "@/lib/types"

export default function Home() {
  const [profileType, setProfileType] = useState<string>("recruiters")
  const [data, setData] = useState<HomeData | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedProfile = localStorage.getItem("profileType") || "recruiters"
      setProfileType(storedProfile)
    }

    // Fetch data
    const homeData = getHomeData()
    setData(homeData)
  }, [])

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pb-16">
      <HeroBanner
        title={data.featured.title}
        description={data.featured.description}
        image={data.featured.image}
        link={data.featured.link}
        type={data.featured.type}
      />

      <div className="space-y-12 mt-8">
        <ContentRow title="Recent Trips" items={data.recentTrips} type="trip" />

        <ContentRow title="Yearly Recap" items={data.yearlyRecaps} type="year" />

        <ContentRow title="Top 10 Moments 2024" items={data.topMoments} type="moment" numbered />

        <ContentRow title="Companies Worked For" items={data.companies} type="company" />

        <ContentRow title="Projects" items={data.projects} type="project" />

        <ContentRow title="My Picks" items={data.myPicks} type="pick" showPlayAll />
      </div>
    </main>
  )
}
