export interface AboutBio {
  heading: string;
  paragraphs: string[];
}

export interface PersonalSection {
  heading: string;
  body: string;
}

export interface CareerTimelineItem {
  period: string;
  title: string;
  company: string;
  details: string;
}

export interface AboutContent {
  label: string;
  title: string;
  bio: AboutBio;
  personal: PersonalSection;
  timeline: CareerTimelineItem[];
}

