"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getAboutData } from "@/lib/data"
import type { AboutData } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function About() {
  const [data, setData] = useState<AboutData | null>(null)

  useEffect(() => {
    // Fetch data
    const aboutData = getAboutData()
    setData(aboutData)
  }, [])

  if (!data) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:sticky md:top-24">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
              <Image
                src={data.heroImage || "/placeholder.svg?height=600&width=600"}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="text-xl text-gray-300 mt-1">{data.title}</p>

            <div className="flex gap-3 mt-6">
              <Button variant="outline" size="icon" asChild>
                <a href={`mailto:${data.email}`} aria-label="Email">
                  <Mail size={20} />
                </a>
              </Button>
              {data.social?.github && (
                <Button variant="outline" size="icon" asChild>
                  <a href={data.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                </Button>
              )}
              {data.social?.linkedin && (
                <Button variant="outline" size="icon" asChild>
                  <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </Button>
              )}
              {data.social?.twitter && (
                <Button variant="outline" size="icon" asChild>
                  <a href={data.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              {data.bio.map((paragraph, index) => (
                <p key={index} className="text-lg mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Life Timeline</h2>
              <div className="space-y-8">
                {data.timeline.map((event, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gray-700">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-red-600"></div>
                    <div className="text-sm text-gray-400">{event.year}</div>
                    <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                    <p className="mt-2">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.skills.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold mb-3">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center">
                          <span className="text-red-600 mr-2">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
