import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Info, Plus } from "lucide-react"

interface HeroBannerProps {
  title: string
  description: string
  image: string
  link: string
  type: string
}

export default function HeroBanner({ title, description, image, link, type }: HeroBannerProps) {
  return (
    <div className="relative w-full h-[55vh] overflow-hidden">
      <Image
        src={image || "/placeholder.svg?height=800&width=1600"}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[rgba(20,20,20,0.7)] to-transparent" />

      <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full md:w-2/3 lg:w-1/2">
        <div className="text-sm font-medium text-red-600 mb-2">{type}</div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-base md:text-lg text-gray-300 mb-6 line-clamp-3">{description}</p>

        <div className="flex gap-3">
          <Button asChild className="bg-white text-black hover:bg-gray-200">
            <Link href={link}>
              <Info className="mr-2 h-4 w-4" />
              View Details
            </Link>
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add to My Picks
          </Button>
        </div>
      </div>
    </div>
  )
}
