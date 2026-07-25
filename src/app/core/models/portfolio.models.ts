export interface SocialLink {
  name: string;
  link: string;
}

export interface ContactInfo {
  city: string;
  mail: string;
  phone?: string;
}

export interface Personal {
  first: string;
  last: string;
  role: string;
  tagline: string;
  resumeUrl: string | null;
  socials: SocialLink[];
  contact: ContactInfo;
}

export interface Skill {
  skill: string;
  details: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface AboutContent {
  myImg: string;
  aboutMe: string;
  aboutMeLine2: string;
  careerGoal: string;
  interests: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: Record<string, string>;
  link: string;
  description: string;
  tags: string[];
  footer: string;
}

export interface ExperienceEntry {
  id: number;
  role: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  location?: string;
  highlights: string[];
}

export interface EducationEntry {
  id: number;
  program: string;
  institution: string;
  startDate: string;
  endDate: string;
  location?: string;
  details?: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface TechCredit {
  name: string;
  note: string;
}

export interface FooterContent {
  listHeading: string;
  technologies: TechCredit[];
}

export interface Section {
  id: string;
  label: string;
}
