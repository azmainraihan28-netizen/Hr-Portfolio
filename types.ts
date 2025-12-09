export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  field: string;
  university: string;
  location: string;
  year: string;
  cgpa: string;
}

export interface AchievementItem {
  id: number;
  title: string;
  date: string;
  type: 'trophy' | 'badge' | 'certificate' | 'star';
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  github: string;
  technologies: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  heroTagline: string;
  profileImage: string;
  skills: Skill[];
  experience: Experience[];
  education: EducationItem[];
  achievements: AchievementItem[];
  projects: ProjectItem[];
  socials: {
    github: string;
    linkedin?: string;
    email: string;
    phone?: string;
  }
}