import { notFound } from "next/navigation"
import { getTripById, getSimilarTrips } from "@/lib/data"
import TripDetailClient from "@/components/trip/TripDetailClient"

export default async function TripDetail({ params }: { params: Promise<{ tripId: string }> }) {
  const { tripId } = await params
  const trip = getTripById(tripId)

  if (!trip) {
    notFound()
  }

  const similarTrips = getSimilarTrips(tripId)

  return <TripDetailClient trip={trip} similarTrips={similarTrips} />
}
