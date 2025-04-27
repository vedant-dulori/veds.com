"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { getTripById, getSimilarTrips } from "@/lib/data"
import type { Trip, TripDay } from "@/lib/types"
import TripHero from "@/components/trip/TripHero"
import TripMetaBar from "@/components/trip/TripMetaBar"
import TripInfoGrid from "@/components/trip/TripInfoGrid"
import DayCard from "@/components/trip/DayCard"
import MoreTripsRow from "@/components/trip/MoreTripsRow"
import DaySlideshowModal from "@/components/trip/DaySlideshowModal"

export default function TripDetail({ params }: { params: { tripId: string } }) {
  const [trip, setTrip] = useState<Trip | null>(null)
  const [similarTrips, setSimilarTrips] = useState<Trip[]>([])
  const [selectedDay, setSelectedDay] = useState<TripDay | null>(null)

  useEffect(() => {
    // Fetch trip data
    const tripData = getTripById(params.tripId)
    setTrip(tripData)

    // Fetch similar trips
    const similar = getSimilarTrips(params.tripId)
    setSimilarTrips(similar)
  }, [params.tripId])

  if (!trip) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen">
      {/* Hero Banner - Full Width */}
      <TripHero title={trip.title} image={trip.heroImage || trip.image} id={trip.id} />

      {/* Content Container - Max Width */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Metadata Bar */}
        <TripMetaBar
          date={trip.date}
          duration={trip.duration}
          location={trip.location}
          tripType="adventure"
          isNew={new Date(trip.date) > new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)}
        />

        {/* Two-column grid with description and info panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* Left column - Description */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <p className="text-base text-gray-100 max-w-[60ch]">{trip.description}</p>
          </motion.div>

          {/* Right column - Info Grid */}
          {trip.cast && trip.favoriteMemory && trip.cities && (
            <TripInfoGrid cast={trip.cast} favoriteMemory={trip.favoriteMemory} cities={trip.cities} />
          )}
        </div>

        {/* Day by Day Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16"
          id="day-by-day"
        >
          <h2 className="text-2xl font-bold mb-4">Day by Day Compilation</h2>
          <div className="relative -mx-6 md:-mx-0 h-px w-screen md:w-full bg-gray-800 mb-6"></div>

          <div className="space-y-2 scroll-mt-24">
            {trip.days.map((day, index) => (
              <DayCard
                key={day.id}
                day={day}
                index={index}
                isFeatured={index === 0}
                onClick={() => setSelectedDay(day)}
              />
            ))}
          </div>
        </motion.div>

        {/* More Trips Like This Section */}
        {similarTrips.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="font-netflix-sans text-2xl mb-4">More Trips Like This</h2>
            <MoreTripsRow similarTrips={similarTrips} />
          </motion.div>
        )}
      </div>

      {/* Slideshow Modal */}
      {selectedDay && <DaySlideshowModal open={!!selectedDay} day={selectedDay} onClose={() => setSelectedDay(null)} />}
    </main>
  )
}
