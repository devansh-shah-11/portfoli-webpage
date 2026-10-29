import data from "../../data.json"

export interface Stat { value: string; label: string }
export interface Project {
  slug: string
  title: string
  kind: "Production" | "Research" | "Open source" | string
  featured?: boolean
  summary: string
  stat: Stat
  built?: string[]
  approach?: string
  evaluation?: string
  result?: string
  tech: string[]
  flow?: string[]
}

export interface Experience {
  date: string
  title: string
  company: string
  bullets: string[]
  summary?: string
  tech?: string[]
}

export interface PortfolioData {
  personal: {
    name: string
    affiliation: string
    image: string
    imageAlt: string
    aboutImage: string
    aboutImageAlt: string
    email: string
    /** Path under public/ (e.g. "/resume.pdf"). Leave empty until the PDF exists. */
    resume?: string
  }
  socialLinks: { name: string; url: string; icon: string }[]
  projects: Project[]
  experiences: Experience[]
  skills: { group: string; items: string[] }[]
  about: string[]
  education: { date: string; degree: string; institution: string; coursework?: string[] }[]
}

export const portfolioData = data as PortfolioData
export default portfolioData

/** Turns **bold** markers in data.json strings into <em> for emphasis. */
export const formatText = (text: string) =>
  text.replace(/\*\*(.*?)\*\*/g, '<em class="not-italic text-accent">$1</em>')

