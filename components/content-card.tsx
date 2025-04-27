"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  item: any
  type: string
  index?: number
}

export default function ContentCard({ item, type, index }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getLink = () => {
    switch (type) {
      case "trip":
        return `/travel/${item.id}`
      case "trip-day":
        return `/travel/${item.tripId}`
      case "year":
        return `/recaps/${item.year}`
      case "project":
        return `/work/${item.id}`
      case "pick":
        return `/picks/${item.id}`
      case "company":
        return `/work?company=${item.id}`
      case "moment":
        return item.link || "#"
      default:
        return "#"
    }
  }

  const getAspectRatio = () => {
    switch (type) {
      case "company":
        return "aspect-square"
      case "moment":
        return "aspect-video"
      default:
        return "aspect-[2/3]"
    }
  }

  return (
    <Link
      href={getLink()}
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-md transition-transform duration-300",
          isHovered ? "scale-105 shadow-lg" : "",
          getAspectRatio(),
        )}
      >
        {index !== undefined && (
          <div className="absolute top-0 left-0 z-10 w-1/4 h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-white opacity-70">{index}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70" />
          </div>
        )}

        <Image
          src={item.image || "/placeholder.svg?height=450&width=300"}
          alt={item.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />

        <div className="absolute bottom-0 left-0 p-3 w-full">
          {item.category && <div className="text-xs font-medium text-red-600 mb-1">{item.category}</div>}
          <h3 className="text-base font-bold line-clamp-1">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-gray-300 line-clamp-1">{item.subtitle}</p>}
        </div>

        {isHovered && item.description && (
          <div className="absolute inset-0 bg-black/80 p-3 flex flex-col justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm line-clamp-6">{item.description}</p>
          </div>
        )}
      </div>
    </Link>
  )
}
