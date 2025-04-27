"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Camera, Video } from "lucide-react"

interface DayCardProps {
  day: {
    id: string
    tripId: string
    title: string
    image: string
    description: string
    mediaCount?: {
      photos: number
      videos: number
    }
    media?: any[]
  }
  index: number
  isFeatured?: boolean
  onClick?: () => void
}

export default function DayCard({ day, index, isFeatured = false, onClick }: DayCardProps) {
  const { id, tripId, title, image, description, mediaCount = { photos: 0, videos: 0 } } = day

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <div
        onClick={onClick}
        className={`flex items-center gap-4 py-4 px-2 rounded-md transition cursor-pointer ${
          isFeatured ? "bg-gray-700/60" : "hover:bg-gray-800/40"
        }`}
        aria-label={`Open Day ${index + 1}: ${title}`}
      >
        {/* Neutral pill badge */}
        <span className="min-w-10 px-2 py-1 rounded-full bg-gray-800/80 text-gray-100 text-sm font-semibold flex justify-center">
          {index + 1}
        </span>

        <div className="relative w-[128px] h-[72px] flex-shrink-0 rounded-sm overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <Image
            src={image || "/placeholder.svg?height=72&width=128"}
            alt={`${title} - Day ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-grow">
          <h3 className="font-medium text-gray-100">{title}</h3>
          <p className="text-sm text-gray-300 truncate">{description}</p>
        </div>

        {(mediaCount.photos > 0 || mediaCount.videos > 0) && (
          <div className="flex-shrink-0 text-xs text-gray-400 flex items-center">
            {mediaCount.photos > 0 && (
              <span className="flex items-center mr-2">
                <Camera className="h-3 w-3 mr-1" />
                {mediaCount.photos}
              </span>
            )}
            {mediaCount.videos > 0 && (
              <span className="flex items-center">
                <Video className="h-3 w-3 mr-1" />
                {mediaCount.videos}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}
