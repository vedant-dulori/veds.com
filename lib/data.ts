import type {
  HomeData,
  TravelData,
  Trip,
  WorkData,
  Project,
  YearRecap,
  PicksData,
  Pick,
  AboutData,
  Media,
} from "./types"

// Sample data for the application
// In a real application, this would come from an API or database

// Helper function to generate media items
function generateMediaItems(dayId: string, count = 5): Media[] {
  const mediaItems: Media[] = []

  for (let i = 1; i <= count; i++) {
    const isVideo = Math.random() > 0.7 // 30% chance of being a video
    mediaItems.push({
      id: `${dayId}-media-${i}`,
      url: `/placeholder.svg?height=${400 + Math.floor(Math.random() * 200)}&width=${600 + Math.floor(Math.random() * 400)}`,
      type: isVideo ? "video" : "image",
      caption: `Day ${dayId.split("-").pop()} - ${isVideo ? "Video" : "Photo"} ${i}`,
    })
  }

  return mediaItems
}

export function getHomeData(): HomeData {
  return {
    featured: {
      title: "Trip to Japan 2023",
      description:
        "Exploring the vibrant streets of Tokyo, the serene temples of Kyoto, and the natural beauty of Hakone.",
      image: "/placeholder.svg?height=800&width=1600",
      link: "/travel/japan-2023",
      type: "Featured Trip",
    },
    recentTrips: [
      {
        id: "japan-2023",
        title: "Japan",
        image: "/placeholder.svg?height=450&width=300",
        description: "Tokyo, Kyoto, Osaka",
        date: "October 2023",
        location: "Japan",
        duration: 14,
        days: [],
        cast: ["John Doe", "Jane Smith", "Alex Johnson"],
        favoriteMemory: "Watching the sunrise from the summit of Mt. Fuji after an overnight climb.",
        cities: ["Tokyo", "Kyoto", "Osaka", "Hakone", "Nara"],
        similarTripIds: ["iceland-2023", "italy-2022"],
      },
      {
        id: "iceland-2023",
        title: "Iceland",
        image: "/placeholder.svg?height=450&width=300",
        description: "Ring Road Adventure",
        date: "June 2023",
        location: "Iceland",
        duration: 10,
        days: [],
        cast: ["John Doe", "Sarah Williams", "Mike Brown"],
        favoriteMemory: "Bathing in the Blue Lagoon under the midnight sun.",
        cities: ["Reykjavik", "Vik", "Akureyri", "Hofn"],
        similarTripIds: ["japan-2023", "italy-2022"],
      },
      {
        id: "italy-2022",
        title: "Italy",
        image: "/placeholder.svg?height=450&width=300",
        description: "Rome, Florence, Venice",
        date: "September 2022",
        location: "Italy",
        duration: 12,
        days: [],
        cast: ["John Doe", "Emma Davis", "Chris Wilson"],
        favoriteMemory: "Getting lost in the narrow streets of Venice and discovering a charming local restaurant.",
        cities: ["Rome", "Florence", "Venice", "Milan", "Pisa"],
        similarTripIds: ["japan-2023", "iceland-2023"],
      },
    ],
    yearlyRecaps: [
      {
        id: "2023",
        year: "2023",
        title: "A Year of Growth",
        image: "/placeholder.svg?height=450&width=300",
        description: "Professional milestones and personal adventures",
      },
      {
        id: "2022",
        year: "2022",
        title: "New Beginnings",
        image: "/placeholder.svg?height=450&width=300",
        description: "Career changes and travel experiences",
      },
      {
        id: "2021",
        year: "2021",
        title: "Adaptation",
        image: "/placeholder.svg?height=450&width=300",
        description: "Navigating challenges and finding opportunities",
      },
    ],
    topMoments: [
      {
        id: "moment-1",
        title: "Summit of Mt. Fuji",
        image: "/placeholder.svg?height=450&width=800",
        description: "Reaching the summit of Mt. Fuji at sunrise",
      },
      {
        id: "moment-2",
        title: "Product Launch",
        image: "/placeholder.svg?height=450&width=800",
        description: "Leading the successful launch of our flagship product",
      },
      {
        id: "moment-3",
        title: "Marathon Finish",
        image: "/placeholder.svg?height=450&width=800",
        description: "Completing my first marathon in under 4 hours",
      },
    ],
    companies: [
      {
        id: "company-1",
        title: "Tech Innovations Inc",
        image: "/placeholder.svg?height=200&width=200",
        logo: "/placeholder.svg?height=200&width=200",
        period: "2020-Present",
      },
      {
        id: "company-2",
        title: "Digital Solutions LLC",
        image: "/placeholder.svg?height=200&width=200",
        logo: "/placeholder.svg?height=200&width=200",
        period: "2017-2020",
      },
      {
        id: "company-3",
        title: "Creative Agency Co",
        image: "/placeholder.svg?height=200&width=200",
        logo: "/placeholder.svg?height=200&width=200",
        period: "2015-2017",
      },
    ],
    projects: [
      {
        id: "project-1",
        title: "E-commerce Platform",
        image: "/placeholder.svg?height=450&width=300",
        description: "A full-stack e-commerce solution",
        company: "Tech Innovations Inc",
        role: "Lead Developer",
        duration: "2021-2022",
      },
      {
        id: "project-2",
        title: "Mobile Banking App",
        image: "/placeholder.svg?height=450&width=300",
        description: "Secure and user-friendly banking application",
        company: "Digital Solutions LLC",
        role: "Frontend Developer",
        duration: "2018-2020",
      },
      {
        id: "project-3",
        title: "Brand Identity System",
        image: "/placeholder.svg?height=450&width=300",
        description: "Comprehensive brand identity for a major client",
        company: "Creative Agency Co",
        role: "UI/UX Designer",
        duration: "2016-2017",
      },
    ],
    myPicks: [
      {
        id: "pick-1",
        title: "Inception",
        image: "/placeholder.svg?height=450&width=300",
        description: "A mind-bending sci-fi thriller",
        category: "Movies",
        year: "2010",
        rating: 5,
      },
      {
        id: "pick-2",
        title: "Breaking Bad",
        image: "/placeholder.svg?height=450&width=300",
        description: "One of the greatest TV shows of all time",
        category: "TV Shows",
        year: "2008-2013",
        rating: 5,
      },
      {
        id: "pick-3",
        title: "The Dark Side of the Moon",
        image: "/placeholder.svg?height=450&width=300",
        description: "A timeless musical masterpiece",
        category: "Music",
        year: "1973",
        rating: 5,
      },
    ],
  }
}

export function getTravelData(): TravelData {
  return {
    trips: [
      {
        title: "Japan 2023",
        days: [
          {
            id: "japan-day-1",
            tripId: "japan-2023",
            title: "Tokyo Arrival",
            image: "/placeholder.svg?height=450&width=300",
            description: "Arriving in Tokyo and exploring Shinjuku",
            mediaCount: {
              photos: 12,
              videos: 1,
            },
            media: generateMediaItems("japan-day-1", 5),
          },
          {
            id: "japan-day-2",
            tripId: "japan-2023",
            title: "Asakusa & Ueno",
            image: "/placeholder.svg?height=450&width=300",
            description: "Visiting Senso-ji Temple and Ueno Park",
            mediaCount: {
              photos: 15,
              videos: 0,
            },
            media: generateMediaItems("japan-day-2", 4),
          },
          {
            id: "japan-day-3",
            tripId: "japan-2023",
            title: "Shibuya & Harajuku",
            image: "/placeholder.svg?height=450&width=300",
            description: "Shopping and street food in Tokyo's fashion districts",
            mediaCount: {
              photos: 10,
              videos: 1,
            },
            media: generateMediaItems("japan-day-3", 6),
          },
          {
            id: "japan-day-4",
            tripId: "japan-2023",
            title: "Kyoto Temples",
            image: "/placeholder.svg?height=450&width=300",
            description: "Exploring the ancient temples and shrines of Kyoto",
            mediaCount: {
              photos: 20,
              videos: 1,
            },
            media: generateMediaItems("japan-day-4", 3),
          },
          {
            id: "japan-day-5",
            tripId: "japan-2023",
            title: "Arashiyama Bamboo Grove",
            image: "/placeholder.svg?height=450&width=300",
            description: "Walking through the famous bamboo forest and visiting monkey park",
            mediaCount: {
              photos: 8,
              videos: 0,
            },
            media: generateMediaItems("japan-day-5", 4),
          },
        ],
      },
      {
        title: "Iceland 2023",
        days: [
          {
            id: "iceland-day-1",
            tripId: "iceland-2023",
            title: "Reykjavik",
            image: "/placeholder.svg?height=450&width=300",
            description: "Exploring Iceland's charming capital",
            mediaCount: {
              photos: 8,
              videos: 0,
            },
            media: generateMediaItems("iceland-day-1", 3),
          },
          {
            id: "iceland-day-2",
            tripId: "iceland-2023",
            title: "Golden Circle",
            image: "/placeholder.svg?height=450&width=300",
            description: "Thingvellir, Geysir, and Gullfoss",
            mediaCount: {
              photos: 14,
              videos: 1,
            },
            media: generateMediaItems("iceland-day-2", 5),
          },
          {
            id: "iceland-day-3",
            tripId: "iceland-2023",
            title: "South Coast",
            image: "/placeholder.svg?height=450&width=300",
            description: "Black sand beaches and waterfalls",
            mediaCount: {
              photos: 12,
              videos: 1,
            },
            media: generateMediaItems("iceland-day-3", 4),
          },
        ],
      },
    ],
  }
}

export function getTripById(id: string): Trip | null {
  const trips = getHomeData().recentTrips
  const trip = trips.find((t) => t.id === id)

  if (!trip) return null

  // Add more detailed data for the trip detail page
  return {
    ...trip,
    heroImage: "/placeholder.svg?height=600&width=1200",
    highlights: [
      "Experiencing the cherry blossoms in Kyoto",
      "Hiking to the summit of Mt. Fuji",
      "Exploring the food markets of Osaka",
      "Relaxing in the hot springs of Hakone",
    ],
    days: getTravelData().trips.find((t) => t.title.includes(trip.title))?.days || [],
  }
}

export function getSimilarTrips(id: string): Trip[] {
  const trip = getTripById(id)
  if (!trip || !trip.similarTripIds) return []

  return getHomeData()
    .recentTrips.filter((t) => trip.similarTripIds?.includes(t.id))
    .map((t) => ({
      ...t,
      heroImage: "/placeholder.svg?height=600&width=1200",
    }))
}

export function getWorkData(): WorkData {
  const companies = getHomeData().companies

  return {
    companies,
    projectsByCompany: [
      {
        name: "Tech Innovations Inc",
        projects: [
          {
            id: "project-1",
            title: "E-commerce Platform",
            image: "/placeholder.svg?height=450&width=300",
            description: "A full-stack e-commerce solution with advanced features",
            company: "Tech Innovations Inc",
            role: "Lead Developer",
            duration: "2021-2022",
          },
          {
            id: "project-4",
            title: "Analytics Dashboard",
            image: "/placeholder.svg?height=450&width=300",
            description: "Real-time data visualization platform",
            company: "Tech Innovations Inc",
            role: "Full Stack Developer",
            duration: "2020-2021",
          },
        ],
      },
      {
        name: "Digital Solutions LLC",
        projects: [
          {
            id: "project-2",
            title: "Mobile Banking App",
            image: "/placeholder.svg?height=450&width=300",
            description: "Secure and user-friendly banking application",
            company: "Digital Solutions LLC",
            role: "Frontend Developer",
            duration: "2018-2020",
          },
          {
            id: "project-5",
            title: "Healthcare Portal",
            image: "/placeholder.svg?height=450&width=300",
            description: "Patient management system for healthcare providers",
            company: "Digital Solutions LLC",
            role: "UI Developer",
            duration: "2017-2018",
          },
        ],
      },
    ],
  }
}

export function getProjectById(id: string): Project | null {
  const allProjects: Project[] = []

  getWorkData().projectsByCompany.forEach((company) => {
    allProjects.push(...company.projects)
  })

  const project = allProjects.find((p) => p.id === id)

  if (!project) return null

  // Add more detailed data for the project detail page
  return {
    ...project,
    stack: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    accomplishments: [
      "Led a team of 5 developers to deliver the project on time and under budget",
      "Implemented a microservices architecture that improved scalability by 200%",
      "Reduced page load times by 60% through performance optimizations",
      "Integrated payment processing with multiple international gateways",
      "Achieved 99.9% uptime since launch",
    ],
    media: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    links: [
      { title: "Live Demo", url: "https://example.com" },
      { title: "GitHub Repository", url: "https://github.com/example" },
    ],
  }
}

export function getRecapsData(): YearRecap[] {
  return [
    {
      id: "2023",
      year: "2023",
      title: "A Year of Growth",
      image: "/placeholder.svg?height=450&width=300",
      description: "Professional milestones and personal adventures",
      coverImage: "/placeholder.svg?height=600&width=450",
    },
    {
      id: "2022",
      year: "2022",
      title: "New Beginnings",
      image: "/placeholder.svg?height=450&width=300",
      description: "Career changes and travel experiences",
      coverImage: "/placeholder.svg?height=600&width=450",
    },
    {
      id: "2021",
      year: "2021",
      title: "Adaptation",
      image: "/placeholder.svg?height=450&width=300",
      description: "Navigating challenges and finding opportunities",
      coverImage: "/placeholder.svg?height=600&width=450",
    },
    {
      id: "2020",
      year: "2020",
      title: "Resilience",
      image: "/placeholder.svg?height=450&width=300",
      description: "Finding strength in uncertain times",
      coverImage: "/placeholder.svg?height=600&width=450",
    },
  ]
}

export function getRecapByYear(year: string): YearRecap | null {
  const recaps = getRecapsData()
  const recap = recaps.find((r) => r.year === year)

  if (!recap) return null

  // Add more detailed data for the year detail page
  return {
    ...recap,
    heroImage: "/placeholder.svg?height=600&width=1200",
    narrativeBlocks: [
      {
        title: "Career Highlights",
        content:
          "This year marked significant professional growth with the successful launch of our flagship product and promotion to a leadership role. I led a team of talented developers and designers to create innovative solutions that received industry recognition.",
        image: "/placeholder.svg?height=500&width=800",
      },
      {
        title: "Travel Adventures",
        content:
          "Explored new destinations including Japan, where I immersed myself in the culture, cuisine, and natural beauty. From the bustling streets of Tokyo to the serene temples of Kyoto, each experience broadened my perspective and inspired creativity.",
        image: "/placeholder.svg?height=500&width=800",
      },
      {
        title: "Personal Development",
        content:
          "Committed to continuous learning by completing advanced certifications in web development and design. Also established a consistent fitness routine, completing my first marathon and adopting healthier lifestyle habits.",
        image: "/placeholder.svg?height=500&width=800",
      },
    ],
    photoCollage: [
      { image: "/placeholder.svg?height=400&width=400", caption: "Tokyo Skyline" },
      { image: "/placeholder.svg?height=400&width=400", caption: "Product Launch Event" },
      { image: "/placeholder.svg?height=400&width=400", caption: "Marathon Finish Line" },
      { image: "/placeholder.svg?height=400&width=400", caption: "Team Celebration" },
      { image: "/placeholder.svg?height=400&width=400", caption: "Kyoto Temple Visit" },
      { image: "/placeholder.svg?height=400&width=400", caption: "Coding Workshop" },
      { image: "/placeholder.svg?height=400&width=400", caption: "Mountain Hike" },
      { image: "/placeholder.svg?height=400&width=400", caption: "Conference Presentation" },
    ],
    topMoments: [
      {
        id: "moment-1",
        title: "Summit of Mt. Fuji",
        image: "/placeholder.svg?height=450&width=800",
        description: "Reaching the summit of Mt. Fuji at sunrise after an overnight climb",
      },
      {
        id: "moment-2",
        title: "Product Launch",
        image: "/placeholder.svg?height=450&width=800",
        description: "Leading the successful launch of our flagship product to industry acclaim",
      },
      {
        id: "moment-3",
        title: "Marathon Finish",
        image: "/placeholder.svg?height=450&width=800",
        description: "Completing my first marathon in under 4 hours after months of training",
      },
      {
        id: "moment-4",
        title: "Team Award",
        image: "/placeholder.svg?height=450&width=800",
        description: "Our team receiving recognition for innovation at the annual industry awards",
      },
      {
        id: "moment-5",
        title: "Kyoto Cherry Blossoms",
        image: "/placeholder.svg?height=450&width=800",
        description: "Experiencing the magical cherry blossom season in Kyoto",
      },
      {
        id: "moment-6",
        title: "Promotion",
        image: "/placeholder.svg?height=450&width=800",
        description: "Being promoted to Lead Developer after two years of dedicated work",
      },
      {
        id: "moment-7",
        title: "Public Speaking",
        image: "/placeholder.svg?height=450&width=800",
        description: "Delivering my first conference talk to an audience of industry peers",
      },
      {
        id: "moment-8",
        title: "Learning to Surf",
        image: "/placeholder.svg?height=450&width=800",
        description: "Finally standing up on a surfboard after multiple attempts",
      },
      {
        id: "moment-9",
        title: "Open Source Contribution",
        image: "/placeholder.svg?height=450&width=800",
        description: "Having my first major pull request merged into a popular open source project",
      },
      {
        id: "moment-10",
        title: "Family Reunion",
        image: "/placeholder.svg?height=450&width=800",
        description: "Gathering with extended family for the first time in several years",
      },
    ],
  }
}

export function getPicksData(): PicksData {
  return {
    categories: [
      {
        id: "movies",
        name: "Movies",
        items: [
          {
            id: "pick-1",
            title: "Inception",
            image: "/placeholder.svg?height=450&width=300",
            description:
              "A mind-bending sci-fi thriller that explores the concept of dreams within dreams. The film's intricate plot, stunning visuals, and thought-provoking themes make it a standout in the genre.",
            category: "Movies",
            subtitle: "Dir. Christopher Nolan",
            year: "2010",
            rating: 5,
            tags: ["Sci-Fi", "Thriller", "Mind-Bending"],
          },
          {
            id: "pick-4",
            title: "The Shawshank Redemption",
            image: "/placeholder.svg?height=450&width=300",
            description: "A powerful story of hope, friendship, and redemption set in a prison.",
            category: "Movies",
            subtitle: "Dir. Frank Darabont",
            year: "1994",
            rating: 5,
            tags: ["Drama", "Prison", "Friendship"],
          },
          {
            id: "pick-5",
            title: "Parasite",
            image: "/placeholder.svg?height=450&width=300",
            description: "A darkly comedic thriller about class disparity in modern society.",
            category: "Movies",
            subtitle: "Dir. Bong Joon-ho",
            year: "2019",
            rating: 5,
            tags: ["Thriller", "Social Commentary", "Foreign"],
          },
        ],
      },
      {
        id: "tv",
        name: "TV Shows",
        items: [
          {
            id: "pick-2",
            title: "Breaking Bad",
            image: "/placeholder.svg?height=450&width=300",
            description:
              "One of the greatest TV shows of all time, following the transformation of a high school chemistry teacher into a ruthless player in the drug trade. The character development and storytelling are unparalleled.",
            category: "TV Shows",
            subtitle: "Creator: Vince Gilligan",
            year: "2008-2013",
            rating: 5,
            tags: ["Drama", "Crime", "Character Study"],
          },
          {
            id: "pick-6",
            title: "The Wire",
            image: "/placeholder.svg?height=450&width=300",
            description: "A realistic portrayal of urban life and the institutions that shape it.",
            category: "TV Shows",
            subtitle: "Creator: David Simon",
            year: "2002-2008",
            rating: 5,
            tags: ["Crime", "Drama", "Social Commentary"],
          },
          {
            id: "pick-7",
            title: "Succession",
            image: "/placeholder.svg?height=450&width=300",
            description: "A darkly comedic drama about a dysfunctional media family.",
            category: "TV Shows",
            subtitle: "Creator: Jesse Armstrong",
            year: "2018-2023",
            rating: 5,
            tags: ["Drama", "Family", "Business"],
          },
        ],
      },
      {
        id: "music",
        name: "Music",
        items: [
          {
            id: "pick-3",
            title: "The Dark Side of the Moon",
            image: "/placeholder.svg?height=450&width=300",
            description:
              "A timeless musical masterpiece by Pink Floyd that explores themes of conflict, greed, and mental illness. The album's innovative production techniques and conceptual unity make it a landmark in rock history.",
            category: "Music",
            subtitle: "Pink Floyd",
            year: "1973",
            rating: 5,
            tags: ["Rock", "Progressive", "Concept Album"],
            embed: "https://www.youtube.com/embed/HW-lXjOyUWo",
          },
          {
            id: "pick-8",
            title: "To Pimp a Butterfly",
            image: "/placeholder.svg?height=450&width=300",
            description: "A groundbreaking hip-hop album exploring race, identity, and society.",
            category: "Music",
            subtitle: "Kendrick Lamar",
            year: "2015",
            rating: 5,
            tags: ["Hip-Hop", "Jazz", "Social Commentary"],
            embed: "https://www.youtube.com/embed/Z-48u_uWMHY",
          },
          {
            id: "pick-9",
            title: "Abbey Road",
            image: "/placeholder.svg?height=450&width=300",
            description: "The Beatles' final recorded album, showcasing their musical maturity.",
            category: "Music",
            subtitle: "The Beatles",
            year: "1969",
            rating: 5,
            tags: ["Rock", "Pop", "Classic"],
            embed: "https://www.youtube.com/embed/oolpPmuK2I8",
          },
        ],
      },
    ],
  }
}

export function getPickById(id: string): Pick | null {
  const allPicks: Pick[] = []

  getPicksData().categories.forEach((category) => {
    allPicks.push(...category.items)
  })

  return allPicks.find((p) => p.id === id) || null
}

export function getAboutData(): AboutData {
  return {
    name: "John Doe",
    title: "Full Stack Developer & Designer",
    heroImage: "/placeholder.svg?height=600&width=600",
    email: "john.doe@example.com",
    bio: [
      "I'm a passionate full-stack developer and designer with over 8 years of experience creating digital products that combine technical excellence with beautiful, intuitive user experiences.",
      "My journey in technology began with a curiosity about how things work, which led me to disassemble (and sometimes successfully reassemble) computers as a teenager. This curiosity evolved into a formal education in Computer Science and a career spanning startups, agencies, and enterprise organizations.",
      "When I'm not coding or designing, you'll find me hiking mountain trails, experimenting with photography, or exploring new destinations around the world. I believe that diverse experiences fuel creativity and bring fresh perspectives to problem-solving.",
    ],
    timeline: [
      {
        year: "2020",
        title: "Lead Developer at Tech Innovations Inc",
        description:
          "Leading a team of developers to create cutting-edge web applications and mentoring junior team members.",
      },
      {
        year: "2017",
        title: "Senior Frontend Developer at Digital Solutions LLC",
        description:
          "Specialized in creating responsive, accessible user interfaces for financial and healthcare clients.",
      },
      {
        year: "2015",
        title: "UI/UX Designer at Creative Agency Co",
        description: "Designed user experiences and interfaces for various clients across multiple industries.",
      },
      {
        year: "2014",
        title: "Graduated with Master's in Computer Science",
        description: "Specialized in Human-Computer Interaction and Web Technologies.",
      },
      {
        year: "2012",
        title: "Junior Developer at StartUp Inc",
        description: "First professional role, working on frontend development for an e-commerce platform.",
      },
    ],
    skills: [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Next.js", "CSS/SASS", "Tailwind CSS", "Responsive Design"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
      },
      {
        category: "Design",
        items: ["UI/UX Design", "Figma", "Adobe XD", "Wireframing", "Prototyping", "Design Systems"],
      },
      {
        category: "DevOps",
        items: ["Git", "CI/CD", "Docker", "AWS", "Vercel", "Performance Optimization"],
      },
      {
        category: "Soft Skills",
        items: ["Team Leadership", "Project Management", "Client Communication", "Mentoring", "Public Speaking"],
      },
    ],
    social: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  }
}
