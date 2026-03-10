# Nivedita Pandey - Personal Website

A thoughtful, editorial personal website built with Astro. Features a clean, text-first design with fixed sidebar navigation and comprehensive content management.

## Features

- **Editorial Design**: Calm, intellectual aesthetic inspired by nav.al, paulgraham.com, and elephantsdance.com
- **Content Collections**: Markdown-based content management for projects, articles, notes, research, and newsletters
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, sitemap, and RSS feed
- **Responsive**: Fixed sidebar on desktop, collapsible menu on mobile
- **Dark Theme**: Custom color system with premium feel
- **Typography**: Inter for headings, Source Serif 4 for body text

## Tech Stack

- **Framework**: Astro 4.3
- **Styling**: Vanilla CSS with CSS custom properties
- **Content**: Markdown with frontmatter
- **Deployment**: Optimized for Vercel

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── content/
│   │   ├── articles/      # Long-form essays
│   │   ├── notes/         # Short thoughts (100-400 words)
│   │   ├── projects/      # Portfolio projects
│   │   ├── research/      # Academic/professional research
│   │   ├── newsletters/   # Newsletter configurations
│   │   └── config.ts      # Content collections schema
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── about.astro
│       ├── contact.astro
│       ├── newsletter.astro
│       ├── research.astro
│       ├── articles/
│       │   ├── index.astro
│       │   └── [slug].astro
│       ├── notes/
│       │   ├── index.astro
│       │   └── [slug].astro
│       ├── projects/
│       │   ├── index.astro
│       │   └── [slug].astro
│       └── media/
│           ├── videos.astro
│           └── images.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   ```
   http://localhost:4321
   ```

### Build for Production

```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Option 2: GitHub Integration

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Astro and configure build settings
5. Deploy!

### Build Settings (Auto-configured)

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Adding Content

### Projects

Create a new file in `src/content/projects/`:

```markdown
---
title: "Project Title"
industry: "Industry Name"
problem: "Problem statement"
approach: "Your approach"
impact: "Impact/results"
year: 2024
order: 1  # Higher numbers appear first
---

Optional extended description goes here.
```

### Articles

Create a new file in `src/content/articles/`:

```markdown
---
title: "Article Title"
description: "Article description for listings"
publishDate: 2024-03-11
tags: ["technology", "AI", "institutions"]
draft: false
---

Article content goes here.
```

### Notes

Create a new file in `src/content/notes/`:

```markdown
---
title: "Note Title"
publishDate: 2024-03-11
tags: ["career"]
---

Brief note content (100-400 words recommended).
```

### Research Papers

Create a new file in `src/content/research/`:

```markdown
---
title: "Paper Title"
year: 2024
type: "Working Paper"  # or "Discussion Paper" or "Report"
preparedFor: "Institution Name"
summary: "Paper summary"
pdfUrl: "/path/to/pdf"  # Optional
---
```

## Color System

```css
--bg: #0F1C2E           /* Background */
--sidebar-bg: #081628    /* Sidebar */
--text-primary: #E6EAF2  /* Primary text */
--text-secondary: #AAB3C5 /* Secondary text */
--text-muted: #7F8DA6    /* Muted text */
--accent: #7DA6FF        /* Links/accents */
--border: rgba(170, 179, 197, 0.15) /* Borders */
```

## Typography

- **Headings**: Inter (Google Fonts)
- **Body**: Source Serif 4 (Google Fonts)

## License

Private - All Rights Reserved

## Contact

For questions about this website, contact: nivedita@dendrons.ai
