"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContentCard from "@/components/content-card"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface ContentRowProps {
  title: string
  items: any[]
  type: string
  showPlayAll?: boolean
  numbered?: boolean
}

export default function ContentRow({ title, items, type, showPlayAll = false, numbered = false }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75

      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      })
    }
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className="relative px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {showPlayAll && (
          <Button variant="ghost" size="sm" className="text-sm">
            <Play className="w-4 h-4 mr-2" />
            Play All
          </Button>
        )}
      </div>

      <div className="relative group">
        {!isMobile && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        <div
          ref={rowRef}
          className={cn(
            "flex gap-2 md:gap-4 overflow-x-auto pb-4",
            "scrollbar-hide scroll-smooth snap-x snap-mandatory",
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none snap-start"
              style={{
                width: type === "company" ? "150px" : isMobile ? "85%" : numbered ? "300px" : "250px",
              }}
            >
              <ContentCard item={item} type={type} index={numbered ? index + 1 : undefined} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
