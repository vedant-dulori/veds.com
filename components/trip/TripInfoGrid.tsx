"use client"

import { motion } from "framer-motion"

interface TripInfoGridProps {
  cast: string[]
  favoriteMemory: string
  cities: string[]
}

export default function TripInfoGrid({ cast, favoriteMemory, cities }: TripInfoGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="space-y-4"
    >
      <div>
        <h3 className="text-gray-400 font-semibold text-xs uppercase tracking-wide mb-1">Cast</h3>
        <p className="text-gray-100 text-sm leading-snug">{cast.join(", ")}</p>
      </div>

      <div>
        <h3 className="text-gray-400 font-semibold text-xs uppercase tracking-wide mb-1">Favorite Memory</h3>
        <p className="text-gray-100 text-sm leading-snug">{favoriteMemory}</p>
      </div>

      <div>
        <h3 className="text-gray-400 font-semibold text-xs uppercase tracking-wide mb-1">Cities Covered</h3>
        <ul className="text-gray-100 text-sm leading-snug">
          {cities.map((city, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>{city}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
