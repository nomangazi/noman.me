export type ProjectCategory = 'backend' | 'fullstack' | 'open-source';

export interface ProjectLinks {
  live?: string;
  repository?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  tags: string[];
  image: string;
  links: ProjectLinks;
  featured: boolean;
}

