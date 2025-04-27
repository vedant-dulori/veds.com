"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getProjectById } from "@/lib/data"
import type { Project } from "@/lib/types"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectDetail({ params }: { params: { projectId: string } }) {
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    // Fetch project data
    const projectData = getProjectById(params.projectId)
    setProject(projectData)
  }, [params.projectId])

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[50vh] mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg?height=600&width=1200"}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-xl text-gray-300 mt-2">{project.company}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg">{project.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Key Accomplishments</h3>
              <ul className="space-y-4">
                {project.accomplishments?.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.media && project.media.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Project Media</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.media.map((item, index) => (
                    <div key={index} className="relative h-60 rounded-lg overflow-hidden">
                      <Image
                        src={item || "/placeholder.svg?height=400&width=600"}
                        alt={`Project media ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-[#1f1f1f] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Role</p>
                  <p>{project.role}</p>
                </div>
                <div>
                  <p className="text-gray-400">Duration</p>
                  <p>{project.duration}</p>
                </div>
                <div>
                  <p className="text-gray-400">Tech Stack</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack?.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-[#2a2a2a] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && project.links.length > 0 && (
                  <div>
                    <p className="text-gray-400 mb-2">External Links</p>
                    {project.links.map((link, index) => (
                      <Button key={index} variant="outline" className="w-full mb-2 justify-between" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.title}
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
