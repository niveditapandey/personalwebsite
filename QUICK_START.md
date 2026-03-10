# Quick Start Guide

## Initial Setup (5 minutes)

### 1. Install Dependencies
```bash
cd nivedita-pandey-site
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

## Deploy to Vercel (5 minutes)

### Option A: Via GitHub (Recommended)

1. **Create GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel auto-detects Astro settings
   - Click "Deploy"
   - Done! Your site is live.

### Option B: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Your site deploys in under 2 minutes.

## Customize Content (Start Here)

### Replace Example Content

1. **Update About Page**
   - Edit `src/pages/about.astro`
   - Replace bio, work description, and beyond work sections

2. **Add Your Projects**
   - Create files in `src/content/projects/`
   - Use existing files as templates
   - Delete example projects

3. **Add Your Articles**
   - Create files in `src/content/articles/`
   - Set `publishDate` and `tags`
   - Delete example articles

4. **Add Your Notes**
   - Create files in `src/content/notes/`
   - Keep them brief (100-400 words)

5. **Update Contact Info**
   - Edit `src/pages/contact.astro`
   - Replace email addresses and social links

### Update Site Metadata

Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com', // Your actual domain
  // ...
});
```

Edit `src/layouts/BaseLayout.astro`:
- Update default description
- Add social media image URLs when ready

## Content Management Tips

### Creating a New Article
```bash
# Create file: src/content/articles/your-article-slug.md
---
title: "Your Article Title"
description: "Brief description for listings"
publishDate: 2024-03-11
tags: ["technology", "AI"]
---

Your article content here...
```

### Creating a New Project
```bash
# Create file: src/content/projects/your-project-slug.md
---
title: "Project Name"
industry: "Industry"
problem: "Problem statement"
approach: "Your approach"
impact: "Results/impact"
year: 2024
order: 1  # Higher = appears first
---

Optional extended description...
```

### Creating a New Note
```bash
# Create file: src/content/notes/your-note-slug.md
---
title: "Note Title"
publishDate: 2024-03-11
tags: ["career"]
---

Brief thought (100-400 words)...
```

## Build Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Validation
npm run astro check  # Type checking
```

## Folder Organization

```
Content goes in:     src/content/[type]/filename.md
Pages go in:         src/pages/
Layouts go in:       src/layouts/
Static files go in:  public/
```

## Common Customizations

### Change Colors
Edit CSS variables in `src/layouts/BaseLayout.astro`:
```css
:root {
  --bg: #0F1C2E;           /* Background color */
  --accent: #7DA6FF;       /* Link/accent color */
  /* ... */
}
```

### Change Fonts
Replace Google Fonts link in `src/layouts/BaseLayout.astro`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font" rel="stylesheet">
```

Update CSS variables:
```css
--font-heading: 'Your Heading Font', sans-serif;
--font-body: 'Your Body Font', serif;
```

### Add Analytics
Add your analytics script in `<head>` of `src/layouts/BaseLayout.astro`.

## Need Help?

- **Astro Docs**: https://docs.astro.build
- **Vercel Docs**: https://vercel.com/docs
- **Project Issues**: Check README.md for troubleshooting

## What's Next?

1. ✅ Deploy to Vercel
2. ✅ Replace example content
3. ✅ Update contact information
4. ✅ Configure custom domain (in Vercel dashboard)
5. ⏳ Add your real projects and writing
6. ⏳ Add images to media section
7. ⏳ Connect newsletter to email service
8. ⏳ Share your site!

---

**You're ready to launch.** The site is production-ready. Start by deploying, then gradually replace content as you write.
