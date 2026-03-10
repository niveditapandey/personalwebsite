# Deployment Checklist

## Pre-Deployment (Do This First)

### 1. Content Updates
- [ ] Update `src/pages/about.astro` with your real bio
- [ ] Replace example projects in `src/content/projects/`
- [ ] Replace example articles in `src/content/articles/`
- [ ] Update contact information in `src/pages/contact.astro`
- [ ] Update social media links in contact page

### 2. Site Configuration
- [ ] Update site URL in `astro.config.mjs`
- [ ] Update default meta description in `src/layouts/BaseLayout.astro`
- [ ] Replace favicon if desired (`public/favicon.svg`)

### 3. Content Decisions
- [ ] Decide which example content to keep vs. delete
- [ ] Review "Beyond Work" section - does it match your interests?
- [ ] Check "Problems I'm Working On" - update to current focus
- [ ] Verify newsletter description matches your plans

## Deployment Steps

### Deploy to Vercel (Recommended)

**Option A: GitHub + Vercel (Best for ongoing updates)**

1. Create GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. Deploy on Vercel:
   - Go to vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy" (settings auto-detected)

**Option B: Vercel CLI (Quick one-time deploy)**

```bash
npm i -g vercel
vercel
```

## Post-Deployment

### Immediate (Day 1)
- [ ] Verify site loads correctly
- [ ] Test all navigation links
- [ ] Check mobile responsive layout
- [ ] Test contact page email links
- [ ] Verify RSS feed works (`/rss.xml`)

### Soon (Week 1)
- [ ] Set up custom domain in Vercel
- [ ] Add Google Analytics or Plausible (if desired)
- [ ] Share site URL with close contacts for feedback
- [ ] Create social media Open Graph image

### Ongoing
- [ ] Add new articles as you write them
- [ ] Update projects as you complete work
- [ ] Add notes regularly (aim for 1-2 per month)
- [ ] Update research section with new papers

## Custom Domain Setup (Vercel)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your domain (e.g., niveditapandey.com)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (usually < 1 hour)

### DNS Records to Add

For apex domain (niveditapandey.com):
```
A record: 76.76.21.21
```

For www subdomain:
```
CNAME record: cname.vercel-dns.com
```

## Content Strategy Suggestions

### Writing Cadence
- **Articles**: 1-2 per month (when you have something substantial)
- **Notes**: 2-4 per month (brief thoughts, easier to maintain)
- **Projects**: Update quarterly or as major work completes
- **Research**: Add as papers are published

### Topics to Explore (Based on Your Profile)
- AI governance frameworks
- Digital public infrastructure
- Cross-border ecosystem building
- Institutional adoption challenges
- Career navigation across domains
- Public-private partnerships

### Content Mix
- 60% professional/technical
- 20% career/strategic thinking
- 20% personal/beyond work

## Newsletter Integration (When Ready)

Popular options:
1. **Substack** - Easiest, handles everything
2. **ConvertKit** - More control, good automation
3. **Mailchimp** - Free tier, familiar
4. **Buttondown** - Minimal, markdown-friendly

Add form integration in `src/pages/newsletter.astro`

## Analytics Setup (Optional)

**Privacy-Focused:**
- Plausible (recommended)
- Fathom
- Simple Analytics

**Traditional:**
- Google Analytics 4

Add tracking code to `<head>` in `src/layouts/BaseLayout.astro`

## Maintenance Schedule

### Weekly
- Check for broken links
- Review and respond to any contact form submissions

### Monthly
- Add new content (articles/notes)
- Review analytics (if enabled)
- Update projects if needed

### Quarterly
- Audit and update About page
- Review all content for accuracy
- Update research section
- Refresh screenshots/images

## Troubleshooting

### Build Fails
1. Check `package.json` dependencies
2. Run `npm install` to ensure all packages installed
3. Run `npm run build` locally to test
4. Check Vercel build logs

### Styling Issues
1. Clear browser cache
2. Check CSS in `src/layouts/BaseLayout.astro`
3. Verify CSS custom properties are defined

### Content Not Showing
1. Check markdown frontmatter format
2. Verify `draft: false` (or remove draft field)
3. Check file is in correct collection folder
4. Rebuild and redeploy

## Support Resources

- **Astro Documentation**: https://docs.astro.build
- **Vercel Documentation**: https://vercel.com/docs
- **GitHub Issues**: Create issues in your repo for tracking

---

## Ready to Launch?

Run through this checklist, then deploy. The site is production-ready out of the box. You can refine content gradually after going live.

**Remember**: Perfect is the enemy of shipped. Launch with good content, improve over time.
