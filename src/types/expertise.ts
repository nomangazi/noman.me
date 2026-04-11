export interface ExpertiseCategory {
  name: string;
  items: string[];
}

export interface ExpertiseContent {
  label: string;
  title: string;
  categories: ExpertiseCategory[];
}

