export interface Profile {
  name: string;
  role: string;
  blurb: string;
  avatarInitials: string;
  facts: string[];
  socials: {
    github: string;
    linkedin: string;
    x: string;
    facebook: string;
  };
  email: string;
  cvUrl: string;
  heroHeadline: string;
  heroBody: string;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  description: string;
  bullets: string[];
  icon: "settings" | "box" | null;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  description: string | null;
  dateRange: string;
  placeholder: boolean;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  issuedDate: string;
  url: string | null;
  placeholder: boolean;
}

export interface Skills {
  keySkills: string[];
  fullSkills: string[];
  tools: { code: string; label: string }[];
}

export interface ArchitectureNode {
  title: string;
  sub: string;
}

export interface Contribution {
  title: string;
  points: string[];
}

export interface BeforeAfterRow {
  aspect: string;
  before: string;
  after: string;
}

export interface CaseStudy {
  subtitle: string;
  role: string;
  timeline: string;
  stack: string;
  category: string;
  architecture: ArchitectureNode[];
  architectureCaption: string;
  overview: string;
  contributions: Contribution[];
  beforeAfter: BeforeAfterRow[];
  prevProjectLabel: string;
  nextProjectLabel: string;
}

export interface Project {
  slug: string;
  name: string;
  dateRange: string;
  description: string;
  tags: string[];
  hasCaseStudy: boolean;
  caseStudy: CaseStudy | null;
}

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite: string }
  | { type: "code"; lang: string; code: string };

export interface ArticleComment {
  name: string;
  isAuthor: boolean;
  timeLabel: string;
  comment: string;
  reply: boolean;
}

export interface ArticleDetail {
  readTime: string;
  content: ArticleBlock[];
  likeCount: number;
  dislikeCount: number;
  comments: ArticleComment[];
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  hasFullPost: boolean;
  detail: ArticleDetail | null;
}

export interface Language {
  name: string;
  proficiency: string;
  placeholder: boolean;
}

export interface Recommendation {
  recommenderName: string;
  role: string;
  quote: string;
  placeholder: boolean;
}
