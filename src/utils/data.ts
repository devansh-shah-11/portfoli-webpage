import data from "../../data.json"

// Type definitions for better TypeScript support
export interface PersonalInfo {
  name: string
  title: string
  role: string
  description: string
  image: string
  imageAlt: string
  aboutImage: string
  email: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Experience {
  date: string
  title: string
  company: string
  link?: string
  description: string
}

export interface Education {
  date: string
  degree: string
  institution: string
  description: string
}

export interface Technology {
  name: string
  class: string
  icon: string
}

export interface Project {
  title: string
  description: string
  github?: string
  link?: string
  image?: string
  video?: string
  tags: string[]
}

export interface PortfolioData {
  personal: PersonalInfo
  socialLinks: SocialLink[]
  about: string[]
  experiences: Experience[]
  education: Education[]
  technologies: Record<string, Technology>
  projects: Project[]
}

// Export the data with proper typing
export const portfolioData: PortfolioData = data as PortfolioData

// Helper functions for easier data access
export const getPersonalInfo = () => portfolioData.personal
export const getSocialLinks = () => portfolioData.socialLinks
export const getAboutText = () => portfolioData.about
export const getExperiences = () => portfolioData.experiences
export const getEducation = () => portfolioData.education
export const getTechnologies = () => portfolioData.technologies
export const getProjects = () => portfolioData.projects

// Utility function to get technology by key
export const getTechnology = (key: string) => portfolioData.technologies[key]

// Utility function to format markdown-style bold text
export const formatText = (text: string) => {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

export default portfolioData
