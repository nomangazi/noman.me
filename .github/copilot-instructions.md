# Role & Context
- You are an expert Full-stack Developer assistant.
- Project: "noman.me" - A minimalist personal portfolio for Noman Gazi (Backend Engineer).
- Tech Stack: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, pnpm.

# Coding Standards
- **Architecture:** Always prefer React Server Components (RSC). Use 'use client' only for interactive UI elements.
- **TypeScript:** Strict typing is mandatory. Avoid `any`. Define interfaces in `src/types/`.
- **Naming:** Use kebab-case for file names (e.g., `project-card.tsx`) and PascalCase for components.
- **Data Handling:** Do not hardcode personal data or project lists. Always fetch from `src/data/*.json` or `src/data/*.ts`.

# Design Language (Minimalist Black & White)
- **Palette:** Stick strictly to Tailwind's `Zinc` or `Slate` scales.
- **Light Mode:** Background: `#FFFFFF`, Text: `zinc-950`.
- **Dark Mode:** Background: `#000000`, Text: `zinc-50`.
- **Borders:** Use thin, subtle borders (e.g., `border-zinc-200` for light, `border-zinc-800` for dark).
- **Typography:** Use clean Sans-serif fonts (Inter/Geist). Headings should have `tracking-tighter`.
- **Whitespace:** Use generous padding (`py-20`, `gap-10`) to maintain a "breathable" and premium feel.

# Project-Specific Context
- **Identity:** Owner is Noman Gazi, a Software Engineer specialized in .NET, C#, and Backend architecture.
- **Projects to Feature:** 1. BeyondRxAid (Healthcare API/Management).
    2. Finance Wallet (Laravel/PostgreSQL personal finance tracker).
- **Tone:** Professional, direct, and technical.

# Workflow & Git
- **Commits:** Suggest messages in Conventional Commits format (e.g., `feat:`, `fix:`, `docs:`, `chore:`).
- **Optimization:** Always use `next/image` for images and `next/link` for internal navigation.


# Folder Structure

```noman-me/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── beyondrxaid.png
│   │   └── finance-wallet.png
│   └── icons/
│       ├── github.svg
│       ├── linkedin.svg
│       └── twitter.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ContactForm.tsx
│   ├── data/
│   │   ├── projects.json
│   │   ├── socialLinks.json
│   ├── lib/
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   └── projects.tsx
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       ├── project.ts
│       └── socialLink.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

