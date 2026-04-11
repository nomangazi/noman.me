# Project Plan: noman.me (V2)

## 🎯 Overview
Redesign and rebuild the personal portfolio of **Noman Gazi** (Software Engineer). The goal is to replace the outdated portfolio with a modern, high-performance, and minimalist site that highlights backend expertise.

## 🎨 Design Philosophy
- **Style:** Strict Minimalism.
- **Color Palette:** High Contrast Black & White.
- **Theme:** Dark/Light mode support using `next-themes`.
- **Typography:** Sans-serif (Geist or Inter) with tight tracking for headlines.
- **Visuals:** Subtle animations using Framer Motion, no heavy images or gradients.

## 🛠 Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Components:** Framer Motion (Animations), Lucide React (Icons)
- **Data:** Static JSON/TS files for easy maintenance.
- **Deployment:** Vercel

## 🏗 Information Architecture
### 1. Home Page (`/`)
- **Hero:** Bold intro, professional title, and "Available for Support" status.
- **Stack:** Minimal grid of core technologies (.NET, C#, SQL, Docker).
- **Featured Projects:** Selection of top 3 projects.

### 2. About Page (`/about`)
- **Bio:** Detailed professional journey including former experience at Bikiran.
- **Personal Touch:** Mention of daughter (Maymuna) and personal interests (IPS/Battery technology).
- **Timeline:** Career progression in a vertical minimalist list.

### 3. Projects Page (`/projects`)
- Comprehensive list of all projects (BeyondRxAid, Finance Wallet, etc.).
- Categorization by tags (Backend, Fullstack, Open Source).

### 4. Blog/Writing (`/blog`)
- MDX-based simple technical blog for sharing knowledge.

## 🚀 Development Phases

### Phase 1: Setup & Core Layout
- [ ] Initialize Next.js 15 with `src` directory.
- [ ] Configure Tailwind CSS v4 and Dark Mode.
- [ ] Create `Navbar` and `Footer` components.

### Phase 2: Data & State
- [ ] Set up `src/types/` for TypeScript interfaces.
- [ ] Create `src/data/` for centralizing project and experience data.
- [ ] Implement local storage or cookie-based theme switching.

### Phase 3: Page Implementation
- [ ] Build the Hero section with Framer Motion entry effects.
- [ ] Implement responsive project grid.
- [ ] Create a "Copy Email" interaction for the contact section.

### Phase 4: Optimization & Launch
- [ ] Metadata & SEO optimization for each page.
- [ ] Ensure 100/100 Lighthouse performance score.
- [ ] Deploy to Vercel and map `noman.me` domain.

## 📝 Content Guidelines for AI (Copilot/Claude)
- **Voice:** Professional yet approachable.
- **Backend Focus:** When writing descriptions, emphasize architecture, database design, and scalability.
- **Simplicity:** If a UI element feels "busy," simplify it. whitespace is our friend.