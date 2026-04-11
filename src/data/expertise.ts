import type { ExpertiseContent } from "@/types/expertise";

export const expertiseContent: ExpertiseContent = {
  label: "Expertise",
  title: "Core technologies",
  categories: [
    {
      name: "Backend",
      items: [".NET", "C#", "SQL Server"],
    },
    {
      name: "Infrastructure",
      items: ["Docker", "Kubernetes"],
    },
    {
      name: "Tools",
      items: ["Redis", "Auth0"],
    },
  ],
};

