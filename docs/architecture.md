# Project Architecture: noman.me

## 🏗 High-Level Structure
This project follows a modular and type-safe architecture using **Next.js 15 (App Router)**. The goal is to keep data separate from the UI for easy maintenance.

## 📂 Folder Breakdown

### 1. `src/app/` (Routing & Layouts)
- **`layout.tsx`**: The main entry point. Contains the `Header` and `Footer` to ensure they persist across all pages.
- **`page.tsx`**: The homepage (Hero section, featured highlights).
- **`about/page.tsx`**: Personal bio, career timeline, and background.
- **`projects/page.tsx`**: A full list of all technical projects.

### 2. `src/components/` (UI Elements)
- **`Header.tsx` / `Footer.tsx`**: Shared navigation and site-wide branding.
- **`ProjectCard.tsx`**: A reusable card component to display project details consistently.
- **`ContactForm.tsx`**: A dedicated component for the contact section logic.

### 3. `src/data/` (The "Source of Truth")
- **`projects.json`**: A JSON database containing project titles, descriptions, tech stacks, and links.
- **`socialLinks.json`**: Centralized links for GitHub, LinkedIn, and other platforms.
- *Note: No hardcoded content in components. Always fetch data from these files.*

### 4. `src/types/` (Data Modeling)
- **`project.ts`**: TypeScript interface for the project object.
- **`socialLink.ts`**: TypeScript interface for social media objects.

### 5. `src/lib/` (Core Logic)
- **`api.ts`**: Helper functions to fetch and parse JSON data from the `data/` folder.
- **`utils.ts`**: Reusable utility functions (e.g., date formatting, Tailwind class merging).

### 6. `public/` (Static Assets)
- **`images/`**: Project screenshots and profile photos.
- **`icons/`**: Raw SVG files for minimalist social icons.

## ⚙️ Development Principles
- **Strict Typing:** Every piece of data must have a corresponding TypeScript interface in `src/types/`.
- **Client vs Server:** Default to **Server Components** for faster loading. Use `'use client'` only for `Header` (interactivity) and `ContactForm`.
- **Minimalist Styling:** Use Tailwind CSS strictly. Avoid custom CSS unless absolutely necessary for unique animations.
- **Data-Driven UI:** Components should be "dumb" (presentational) and receive data via props or local JSON imports.

## 🤖 AI Assistance (Copilot Instructions)
- When generating new features, refer to the established folder structure above.
- Ensure all new components follow the **Black & White** minimalist theme.
- Suggest changes that improve **Lighthouse Performance** scores (Image optimization, semantic HTML).