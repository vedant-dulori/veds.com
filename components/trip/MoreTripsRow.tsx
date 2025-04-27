"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { Trip } from "@/lib/types"

interface MoreTripsRowProps {
  similarTrips: Trip[]
}

export default function MoreTripsRow({ similarTrips }: MoreTripsRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {similarTrips.map((trip, index) => (
        <motion.div
          key={trip.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.5 }}
          className="bg-gray-800/40 rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-1 hover:scale-[1.02] hover:shadow-lg"
        >
          <Link href={`/travel/${trip.id}`}>
            <div className="relative aspect-video">
              <Image
                src={trip.image || "/placeholder.svg?height=200&width=350"}
                alt={trip.title}
                fill
                className="object-cover rounded-t"
              />
              <div className="absolute top-2 right-2 text-xs bg-black/70 px-2 py-1 rounded">
                {trip.duration} days {trip.duration - 1} nights
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{trip.title}</h3>
              <p className="text-sm text-gray-400">{trip.date}</p>
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">{trip.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
