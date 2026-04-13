import type { AboutContent } from "@/types/about";

export const aboutContent: AboutContent = {
  label: "About",
  title: "About Me",
  bio: {
    heading: "Professional Bio",
    paragraphs: [
      "I am Noman Gazi, a backend-focused software engineer specializing in .NET and C# for production-grade platforms.",
      "My work centers on API architecture, service reliability, and SQL-first data modeling that supports clean, maintainable business logic.",
      "I focus on pragmatic backend engineering with clear boundaries, performance-aware queries, and deployment workflows that stay dependable under real usage.",
    ],
  },
  personal: {
    heading: "Life & Interests",
    body: "Outside engineering work, I spend meaningful time with my daughter Maymuna and continue learning about IPS and battery technology, especially practical power efficiency and backup system design.",
  },
  timeline: [
    {
      period: "2022 - Oct 2025",
      title: "Software Engineer",
      company: "Bikiran",
      details:
        "Shipped backend services, API integrations, and database improvements that supported predictable delivery across product releases.",
    },
    {
      period: "Oct 2025 - Present",
      title: "Freelance Backend Engineer",
      company: "Independent",
      details:
        "Building .NET backend solutions for portfolio and client work with a focus on clean architecture, resilient APIs, and maintainable release workflows.",
    },
  ],
};

