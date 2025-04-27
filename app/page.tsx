"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useState } from "react"

export default function ProfileSelector() {
  const router = useRouter()
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null)

  const profiles = [
    { id: "family", name: "Family", image: "/placeholder.svg?height=200&width=200" },
    { id: "friends", name: "Friends", image: "/placeholder.svg?height=200&width=200" },
    { id: "recruiters", name: "Recruiters", image: "/placeholder.svg?height=200&width=200" },
  ]

  const selectProfile = (profileType: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("profileType", profileType)
      router.push("/home")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h1 className="text-4xl font-bold mb-16">Who&apos;s browsing?</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col items-center cursor-pointer group"
            onMouseEnter={() => setHoveredProfile(profile.id)}
            onMouseLeave={() => setHoveredProfile(null)}
            onClick={() => selectProfile(profile.id)}
          >
            <div
              className={`relative w-32 h-32 md:w-40 md:h-40 mb-4 overflow-hidden rounded-md transition-all duration-300 ${
                hoveredProfile === profile.id ? "ring-4 ring-white scale-105" : ""
              }`}
            >
              <Image src={profile.image || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
            </div>
            <span className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300">
              {profile.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
