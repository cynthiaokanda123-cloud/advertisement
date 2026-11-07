export type ProjectCategory = 'All' | 'Web' | 'Design' | 'Systems';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Web' | 'Design' | 'Systems';
  description: string;
  fullDescription: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  features: string[];
  deliverables?: string[];
  clientOrContext: string;
  year: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  proficiency: string;
  tags?: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud & Systems' | 'Design & Tooling';
  icon: string; // Lucide icon or SVG identifier
  level: string;
  highlight: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  startingPrice: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'work' | 'education';
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  projectContext: string;
  rating: number;
}

export interface PromotionSlide {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaAction: string;
  badge: string;
  gradient: string;
}
