"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface TripHeroProps {
  title: string
  image: string
  id: string
}

export default function TripHero({ title, image, id }: TripHeroProps) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[60vh] overflow-hidden"
      data-theme="blend"
    >
      <Image
        src={image || "/placeholder.svg?height=800&width=1600"}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Add the ::after pseudo-element for the bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#141414]" />

      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 hover:bg-black/70 focus:ring-2 focus:ring-red-500"
          aria-label="Close"
          onClick={() => router.back()}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-6">{title}</h1>
          <Button className="bg-[#E50914] hover:bg-[#B81D24] hover:brightness-110 text-white rounded-lg px-8 py-2 focus:ring-2 focus:ring-red-500">
            See Trip
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
