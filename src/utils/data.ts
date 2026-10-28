import data from "../../data.json"

export interface Stat { value: string; label: string }
export interface ProjectLink { label: string; url: string }

export interface Project {
  slug: string
  title: string
  kind: "Production" | "Research" | "Open source" | string
  featured?: boolean
  summary: string
  stat: Stat
  role: string
  problem?: string
  built?: string[]
  approach?: string
  evaluation?: string
  result?: string
  tech: string[]
  links?: ProjectLink[]
}

export interface Experience {
  date: string
  title: string
  company: string
  link?: string
  bullets: string[]
}

export interface PortfolioData {
  settings: { showProjectLinks: boolean }
  personal: {
    name: string
    affiliation: string
    headline: string
    subheadline: string
    focus: string[]
    image: string
    imageAlt: string
    aboutImage: string
    aboutImageAlt: string
    email: string
    resume?: string
  }
  socialLinks: { name: string; url: string; icon: string }[]
  stats: Stat[]
  projects: Project[]
  experiences: Experience[]
  skills: { group: string; items: string[] }[]
  about: string[]
  education: { date: string; degree: string; institution: string }[]
}

export const portfolioData = data as PortfolioData
export default portfolioData

/** Turns **bold** markers in data.json strings into <em> for emphasis. */
export const formatText = (text: string) =>
  text.replace(/\*\*(.*?)\*\*/g, '<em class="not-italic text-accent">$1</em>')

/** Links shown on a project; empty when links are switched off globally. */
export const projectLinks = (p: Project): ProjectLink[] =>
  portfolioData.settings.showProjectLinks ? (p.links ?? []) : []
