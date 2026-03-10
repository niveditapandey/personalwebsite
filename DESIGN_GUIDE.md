# Design System & Customization Guide

## Design Philosophy

This site follows an **editorial, intellectual** design language inspired by:
- **nav.al**: Minimalist, text-first approach
- **paulgraham.com**: Essay-focused, no visual distractions
- **elephantsdance.com**: Thoughtful typography and whitespace
- **skillai.academy**: Deep blue color palette

### Core Principles

1. **Text First**: Content is the hero. UI elements support, never compete.
2. **Generous Whitespace**: Breathing room creates calm, focused reading.
3. **Subtle Interactions**: Hover states and transitions are refined, never flashy.
4. **Editorial Feel**: Like a well-designed magazine, not a tech landing page.
5. **Premium Simplicity**: Sophisticated through restraint, not decoration.

## Color System

### Current Palette

```css
--bg: #0F1C2E           /* Deep navy background */
--sidebar-bg: #081628    /* Darker sidebar for depth */
--text-primary: #E6EAF2  /* High-contrast primary text */
--text-secondary: #AAB3C5 /* Body text, slightly muted */
--text-muted: #7F8DA6    /* Labels, metadata, timestamps */
--accent: #7DA6FF        /* Links and interactive elements */
--border: rgba(170, 179, 197, 0.15)  /* Subtle dividers */
```

### Color Usage Guidelines

- **Headings**: `--text-primary` for maximum readability
- **Body Text**: `--text-secondary` to reduce eye strain in long reading
- **Metadata**: `--text-muted` for timestamps, categories, labels
- **Links**: `--accent` for clickable elements
- **Borders**: Minimal, subtle, used only for structural separation

### Alternative Color Schemes

**Light Mode (if you want to add it):**
```css
--bg: #FAFBFC;
--sidebar-bg: #F5F7F9;
--text-primary: #1A1F2E;
--text-secondary: #4A5568;
--text-muted: #718096;
--accent: #4A7BFF;
```

**Warm Dark Mode:**
```css
--bg: #1C1814;
--sidebar-bg: #131110;
--text-primary: #F4F1ED;
--text-secondary: #C8C3BD;
--accent: #E8B87D;
```

## Typography

### Current Fonts

- **Headings**: Inter (Google Fonts)
  - Clean, modern, excellent at all sizes
  - Weights: 400 (regular), 500 (medium), 600 (semibold)

- **Body**: Source Serif 4 (Google Fonts)
  - Editorial serif perfect for long-form reading
  - Slightly larger size (18px base) for comfortable reading
  - Line height: 1.7-1.8 for readability

### Alternative Font Pairings

**Option 1: More Distinctive**
- Headings: `'Playfair Display'` (elegant serif)
- Body: `'Crimson Text'` (classic reading serif)

**Option 2: Modern Editorial**
- Headings: `'DM Sans'` (contemporary sans)
- Body: `'Lora'` (transitional serif)

**Option 3: Classic Academic**
- Headings: `'Libre Franklin'` (clean sans)
- Body: `'Merriweather'` (scholarly serif)

### Typography Scale

```css
Hero Title:       2.25rem (36px)
Page Title:       2.5rem (40px)
Section Title:    1.75rem (28px)
Card Title:       1.5rem (24px)
Body Text:        1.125rem (18px)
Small Text:       0.95rem (15px)
Metadata:         0.85rem (14px)
```

## Layout System

### Desktop Layout

```
┌─────────────────────────────────────────┐
│  Fixed Sidebar (280px)  │  Main Content │
│                         │               │
│  • Logo                 │  Generous     │
│  • Navigation           │  whitespace   │
│  • Always visible       │               │
│                         │  Max-width:   │
│                         │  750-900px    │
│                         │               │
│                         │  Centered in  │
│                         │  remaining    │
│                         │  space        │
└─────────────────────────────────────────┘
```

### Mobile Layout

- Sidebar collapses off-screen
- Hamburger menu in top-right
- Full-width content with padding
- Maintains vertical rhythm

### Content Max Widths

- **Reading Content**: 680px (articles, notes)
- **List Content**: 900px (project listings, article listings)
- **Wide Content**: 1100px (notes grid)

## Component Design Patterns

### Project Cards

**Current Style**: Editorial panel
- Subtle border, no background fill
- Hover state: border color change only
- Typography hierarchy creates visual structure
- No shadows or heavy UI elements

**Alternative**: Add subtle background on hover
```css
.project-card:hover {
  background: rgba(125, 166, 255, 0.03);
  border-color: var(--accent);
}
```

### Article Listings

**Current Style**: Clean, chronological
- Date first (establishes temporal context)
- Title as primary visual element
- Description in secondary text color
- Tags as subtle accent

**Keep**: Minimal decoration, let content speak

### Notes Grid

**Current Style**: Card grid
- Fixed minimum width (280px)
- Auto-fill responsive grid
- Border-only cards (no background)
- Title takes vertical space, date anchors bottom

**Alternative**: Masonry-style if you add more visual content

## Spacing System

### Vertical Rhythm

```css
Section Gaps:     5rem (80px)   /* Between major sections */
Card Gaps:        3rem (48px)   /* Between cards/items */
Element Gaps:     1.5rem (24px) /* Between related elements */
Tight Spacing:    0.75rem (12px) /* Within components */
```

### Padding/Margins

```css
Page Padding:     4rem (64px) desktop, 2rem (32px) mobile
Card Padding:     2rem (32px) or 1.5rem (24px) for smaller cards
Sidebar Padding:  3rem vertical, 2rem horizontal
```

## Responsive Breakpoints

```css
@media (max-width: 768px) {
  /* Tablet and mobile */
  - Sidebar collapses
  - Single column layouts
  - Reduced font sizes
  - Increased touch targets
}
```

## Customization Recipes

### Make It Brighter

1. Lighten background:
   ```css
   --bg: #1A2332;
   --sidebar-bg: #14191F;
   ```

2. Increase text contrast:
   ```css
   --text-primary: #FFFFFF;
   ```

### Make It More Colorful

1. Add accent colors for different sections:
   ```css
   --accent-projects: #7DA6FF;
   --accent-articles: #FF9E7A;
   --accent-research: #7AE7C7;
   ```

2. Use in respective section pages

### Add Visual Interest

**Option 1**: Subtle gradient background
```css
body {
  background: linear-gradient(135deg, #0F1C2E 0%, #1A2838 100%);
}
```

**Option 2**: Texture overlay
```css
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml,...'); /* noise pattern */
  opacity: 0.03;
  pointer-events: none;
}
```

**Option 3**: Animated gradient on hover (links)
```css
a {
  background: linear-gradient(to right, var(--accent), #B4D0FF);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.3s;
}

a:hover {
  background-position: right center;
}
```

## Content Style Guidelines

### Project Descriptions

- **Length**: 1-2 sentences for problem statement
- **Tone**: Direct, outcome-focused
- **Avoid**: Jargon, excessive detail
- **Include**: Measurable impact when possible

### Article Descriptions

- **Length**: 1-2 sentences
- **Purpose**: Entice reading, not summarize
- **Tone**: Matches article voice

### Notes

- **Length**: 100-400 words
- **Format**: Single thought, well-developed
- **Tone**: Conversational but substantive

## Accessibility Considerations

✅ **Currently Implemented:**
- High contrast text (WCAG AA compliant)
- Semantic HTML structure
- Focus states on interactive elements
- Responsive font sizing
- Descriptive link text

🔄 **To Add If Needed:**
- Skip to main content link
- ARIA labels for sidebar toggle
- Keyboard navigation enhancement
- Focus trap in mobile menu

## Performance Optimizations

✅ **Built In:**
- Minimal JavaScript (navigation only)
- Web fonts with `display=swap`
- Static site generation (fast load)
- Optimized for Vercel CDN

🔄 **Future Enhancements:**
- Image optimization (when adding images)
- Lazy loading for media content
- Critical CSS inlining

## Browser Support

Designed for modern browsers:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

Uses CSS features:
- CSS Grid
- CSS Custom Properties
- Flexbox
- CSS Transitions

No IE11 support needed (modern Astro requirement).

---

**Remember**: The design's strength is its restraint. Every addition should enhance clarity, not decoration. When in doubt, remove rather than add.
