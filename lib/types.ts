// Common types
export interface BaseItem {
  id: string
  title: string
  image: string
  description?: string
}

// Home page types
export interface HomeData {
  featured: {
    title: string
    description: string
    image: string
    link: string
    type: string
  }
  recentTrips: Trip[]
  yearlyRecaps: YearRecap[]
  topMoments: Moment[]
  companies: Company[]
  projects: Project[]
  myPicks: Pick[]
}

// Travel types
export interface TravelData {
  trips: TripRow[]
}

export interface TripRow {
  title: string
  days: TripDay[]
}

export interface Trip extends BaseItem {
  date: string
  location: string
  duration: number
  heroImage?: string
  highlights?: string[]
  days: TripDay[]
  // New fields
  cast?: string[]
  favoriteMemory?: string
  cities?: string[]
  similarTripIds?: string[]
}

export interface TripDay extends BaseItem {
  tripId: string
  mediaCount?: {
    photos: number
    videos: number
  }
  // New field for media items
  media?: Media[]
}

export interface Media {
  id: string
  url: string
  type: "image" | "video"
  caption?: string
}

// Work types
export interface WorkData {
  companies: Company[]
  projectsByCompany: CompanyProjects[]
}

export interface Company extends BaseItem {
  logo: string
  period: string
}

export interface CompanyProjects {
  name: string
  projects: Project[]
}

export interface Project extends BaseItem {
  company: string
  role: string
  duration: string
  stack?: string[]
  accomplishments?: string[]
  media?: string[]
  links?: { title: string; url: string }[]
}

// Recap types
export interface YearRecap extends BaseItem {
  year: string
  title: string
  coverImage?: string
  heroImage?: string
  narrativeBlocks?: NarrativeBlock[]
  photoCollage?: PhotoItem[]
  topMoments?: Moment[]
}

export interface NarrativeBlock {
  title: string
  content: string
  image: string
}

export interface PhotoItem {
  image: string
  caption?: string
}

// New MomentTarget type
export type MomentTarget =
  | { kind: "trip"; tripId: string; anchor?: string } // /travel/[tripId]#[anchor]
  | { kind: "project"; projectId: string } // /work/[projectId]
  | { kind: "yearRecap"; year: number; anchor?: string } // /recaps/[year]#[anchor]
  | { kind: "moment"; year: number; slug: string } // /moments/[year]/[slug]

// Updated Moment interface
export interface Moment extends BaseItem {
  rank: number // 1-10
  target: MomentTarget // NEW
}

// Picks types
export interface PicksData {
  categories: PickCategory[]
}

export interface PickCategory {
  id: string
  name: string
  items: Pick[]
}

export interface Pick extends BaseItem {
  category: string
  subtitle?: string
  year: string
  rating?: number
  tags?: string[]
  embed?: string
}

// About types
export interface AboutData {
  name: string
  title: string
  heroImage: string
  email: string
  bio: string[]
  timeline: TimelineEvent[]
  skills: SkillCategory[]
  social?: {
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface SkillCategory {
  category: string
  items: string[]
}
