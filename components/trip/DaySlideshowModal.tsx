"use client"

import { useEffect, useState, useCallback } from "react"
import { Dialog } from "@headlessui/react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import type { TripDay } from "@/lib/types"

interface DaySlideshowModalProps {
  open: boolean
  onClose: () => void
  day: TripDay
}

export default function DaySlideshowModal({ open, onClose, day }: DaySlideshowModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const media = day.media || []

  const goToNext = useCallback(() => {
    if (media.length > 0) {
      setIsLoading(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length)
    }
  }, [media])

  const goToPrevious = useCallback(() => {
    if (media.length > 0) {
      setIsLoading(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length)
    }
  }, [media])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return

      switch (e.key) {
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
        case "Escape":
          onClose()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, goToNext, goToPrevious, onClose])

  // Reset index when day changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [day.id])

  const currentMedia = media[currentIndex]

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" aria-hidden="true" />

      {/* Full-screen container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-6xl max-h-[90vh] relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 rounded-full bg-black/50 hover:bg-black/70 focus:ring-2 focus:ring-red-500 text-white"
            onClick={onClose}
            aria-label="Close slideshow"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 focus:ring-2 focus:ring-red-500 text-white"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 hover:bg-black/70 focus:ring-2 focus:ring-red-500 text-white"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Media container */}
          <div className="relative w-full h-[80vh] overflow-hidden">
            {/* Loading skeleton */}
            {isLoading && (
              <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
                <span className="sr-only">Loading...</span>
              </div>
            )}

            {/* Current media */}
            <AnimatePresence mode="wait">
              {currentMedia && (
                <motion.div
                  key={currentMedia.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {currentMedia.type === "image" ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={currentMedia.url || "/placeholder.svg"}
                        alt={`${day.title} - Photo ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        onLoad={() => setIsLoading(false)}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <video
                        src={currentMedia.url}
                        controls
                        className="max-w-full max-h-full"
                        onLoadedData={() => setIsLoading(false)}
                      >
                        <source src={currentMedia.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}

                  {/* Caption */}
                  {currentMedia.caption && (
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-2 rounded">
                      <p className="text-sm text-gray-300">{currentMedia.caption}</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
                onClick={() => {
                  setIsLoading(true)
                  setCurrentIndex(index)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Title and info */}
          <div className="text-center mt-2">
            <h2 className="text-xl font-bold text-white">{day.title}</h2>
            <p className="text-sm text-gray-300">
              {currentIndex + 1} of {media.length}
            </p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
