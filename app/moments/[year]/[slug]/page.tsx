import { notFound } from "next/navigation"
import { getMoment } from "@/lib/data"
import Image from "next/image"
import { MomentHeroCaption, MomentArticle } from "@/components/moment-hero"

export default async function MomentPage({ params }: { params: Promise<{ year: string; slug: string }> }) {
  const { year, slug } = await params
  const moment = getMoment(year, slug)

  if (!moment) {
    notFound()
  }

  return (
    <main className="min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={moment.image || "/placeholder.svg?height=800&width=1600"}
          alt={moment.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#141414]" />

        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded">MOMENT #{moment.rank}</span>
        </div>

        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full z-10">
          <MomentHeroCaption moment={moment} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <MomentArticle>
          <p className="text-lg">
            This is a standalone moment page for {moment.title}. In a real application, this would contain a detailed
            story about this specific moment, including additional images, videos, and narrative content.
          </p>
          <p>
            The moment occurred in {year} and was ranked #{moment.rank} in the top moments of the year. This page
            provides a dedicated space to explore this memory in depth.
          </p>
        </MomentArticle>
      </div>
    </main>
  )
}
