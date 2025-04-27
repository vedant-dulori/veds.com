"use client"

import { motion } from "framer-motion"
import { Calendar, Map } from "lucide-react"

interface TripMetaBarProps {
  date: string
  duration: number
  location: string
  tripType?: string
  isNew?: boolean
}

export default function TripMetaBar({ date, duration, location, tripType, isNew = false }: TripMetaBarProps) {
  // Check if trip is less than 12 months old
  const tripDate = new Date(date)
  const now = new Date()
  const isNewTrip = isNew || now.getTime() - tripDate.getTime() < 365 * 24 * 60 * 60 * 1000

  // Extract year from date
  const year = tripDate.getFullYear()

  // Format locations as comma-separated list
  const locations = location.split(",").map((loc) => loc.trim())

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-gray-800"
    >
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        {isNewTrip && <span className="px-2 py-1 bg-[#E50914] text-white text-xs font-bold rounded">NEW</span>}
        <div className="flex items-center text-gray-400">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{year}</span>
        </div>
        {/* Simplified duration pill */}
        <span className="px-2 py-[2px] rounded-full bg-gray-800/80 text-xs text-gray-300">{duration} days</span>
      </div>

      <div className="flex items-center text-gray-400">
        <Map className="h-4 w-4 mr-1" />
        <span>{locations.join(", ")}</span>
        {tripType && (
          <span className="ml-2 text-sm">
            {tripType === "adventure" ? "🏔️" : tripType === "beach" ? "🏖️" : tripType === "city" ? "🏙️" : "✈️"}
          </span>
        )}
      </div>
    </motion.div>
  )
}
