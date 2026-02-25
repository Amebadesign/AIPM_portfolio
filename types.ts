import React from 'react';

export type Language = 'en' | 'zh';

export interface ProjectDetailSection {
  title: string;
  content: string;
  image?: string;
  images?: string[]; // Support for multiple images
}

export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  background: string;
  role: string;
  system: string;
  outcome: string;
  tags: string[];
  coverImage: string;
  details: ProjectDetailSection[];
}

export interface AIGeneratedWork {
  id: string;
  title: string;
  imageUrl: string;
  tool: string;
  description: string;
  category: string;
  tags?: string[];
  sections?: {
    title: string;
    content: string;
  }[];
  gifs?: string[];
}

export interface AICategory {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}

export interface PhilosophyStat {
  value: string;
  label: string;
}

export interface Philosophy {
  stats: PhilosophyStat[];
  intro: string;
  points: {
    title: string;
    content: string;
  }[];
  conclusion: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  university: string;
  degree: string;
  profileImage: string;
}

export interface ProfileStat {
  id: string;
  icon: 'School' | 'Trophy' | 'Rocket';
  label: string;
  title: string;
  summary: string;
  details: string[];
}

export interface AboutSection {
  bio: string | React.ReactNode;
  details: string;
  stats: ProfileStat[];
  education: {
    school: string;
    degree: string;
  };
}

export interface SectionLabels {
  about: string;
  projects: string;
  methods: string;
  contact: string;
  downloadResume: string;
  getInTouch: string;
  copyright: string;
  selectedProjects: string;
  projectsDesc: string;
  sideProjects: string;
  sideProjectsDesc: string;
  comingSoon: string;
  aiWorks: string;
  aiWorksDesc: string;
  aiWorksTags: string[];
  aiTabs: {
    art: string;
    graphic: string;
    fiction: string;
    app: string;
  };
  tools: string;
  background: string;
  contextRole: string;
  systemOutcome: string;
  projectBackground: string;
  projectRole: string;
  projectSystem: string;
  projectOutcome: string;
  methodsTitle: string;
  methodsSubtitle: string;
  expertiseTitle: string;
  backToHome: string;
  viewCase: string;
}