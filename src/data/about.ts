import type { AboutContent } from "@/types/about";

export const aboutContent: AboutContent = {
  label: "About",
  title: "Backend engineering with a practical product mindset.",
  bio: {
    heading: "Professional bio",
    paragraphs: [
      "I am Noman Gazi, a backend-focused software engineer who designs and maintains production systems with clear architecture and reliable operational behavior.",
      "At Bikiran, I worked as a Software Engineer and contributed to backend services, API integrations, and database-first decisions that improved maintainability and delivery speed.",
      "My current focus is .NET 9 with C# and SQL, where I prioritize testable service boundaries, performance-aware queries, and stable deployment pipelines.",
    ],
  },
  personal: {
    heading: "Personal",
    body: "Outside core delivery work, I enjoy learning about IPS and battery technology. My daughter Maymuna is also a daily source of perspective and motivation.",
  },
  timeline: [
    {
      period: "2025",
      title: "Software Engineer",
      company: "Bikiran",
      details:
        "Delivered backend features, integrated external services, and supported database improvements across product releases.",
    },
    {
      period: "Current",
      title: ".NET Backend Specialist",
      company: "Independent / Portfolio Work",
      details:
        "Building .NET 9-centered backend solutions focused on clean architecture, resilient APIs, and maintainable release workflows.",
    },
  ],
};

