/**
 * Generates docs/Personal-Website-Architecture.docx - high-level and
 * low-level architecture reference for niveditapandey.com.
 *
 * Grounded directly in the current codebase (package.json, astro.config.mjs,
 * vercel.json, src/content/config.ts, src/pages/**, src/layouts/BaseLayout.astro)
 * as of the date generated - re-run this after structural changes (new content
 * collections, new top-level routes, a deployment target change) to keep it
 * current, the same way the site itself is source of truth for behaviour.
 *
 * Usage: node scripts/gen-architecture-docx.js
 */

const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, TableOfContents, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak,
} = require('docx');

const BLUE = '2563EB';
const DARK = '0F172A';
const SLATE = '475569';
const AMBER = 'B45309';
const GREY = 'F1F5F9';
const BORDER = 'CCD5E0';
const CONTENT_W = 9360;

const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function h1(text) { return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] }); }
function h2(text) { return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] }); }
function p(text, opts = {}) {
  return new Paragraph({ spacing: { after: 120, line: 268 }, children: [new TextRun({ text, size: 21, color: DARK, ...opts })] });
}
function note(text) {
  return new Paragraph({ spacing: { after: 140, line: 264 }, children: [new TextRun({ text, size: 19, italics: true, color: SLATE })] });
}
function spacer(after = 100) { return new Paragraph({ spacing: { after }, children: [new TextRun('')] }); }

function bullet(text, level = 0) {
  return new Paragraph({
    numbering: { reference: 'bullets', level },
    spacing: { after: 60, line: 264 },
    children: [new TextRun({ text, size: 20, color: DARK })],
  });
}

function cell(content, width, { fill, headerCell = false } = {}) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA }, margins: cellMargins,
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    children: [new Paragraph({
      spacing: { line: 260 },
      children: [new TextRun({ text: content, bold: headerCell, size: 19, color: headerCell ? 'FFFFFF' : DARK })],
    })],
  });
}
function table(cols, rows) {
  const widths = cols.map((c) => c.w);
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: widths,
    rows: [
      new TableRow({ tableHeader: true, children: cols.map((c) => cell(c.label, c.w, { fill: BLUE, headerCell: true })) }),
      ...rows.map((r, i) => new TableRow({ children: r.map((v, ci) => cell(v, widths[ci], { fill: i % 2 ? GREY : undefined })) })),
    ],
  });
}

const children = [];

// ============================================================
// TITLE PAGE
// ============================================================
children.push(
  new Paragraph({ spacing: { before: 2200 }, alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'Personal Website', bold: true, size: 56, color: DARK })] }),
  new Paragraph({ spacing: { before: 120 }, alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'Architecture Reference - niveditapandey.com', size: 26, color: BLUE })] }),
  spacer(400),
  new Paragraph({ alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'High-level and low-level architecture, grounded directly in the current codebase.', size: 20, color: SLATE })] }),
  spacer(500),
  new Paragraph({ alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: 'Generated 22 August 2026 - re-run scripts/gen-architecture-docx.js after structural changes.', italics: true, size: 19, color: SLATE })] }),
  new Paragraph({ children: [new PageBreak()] }),
);

children.push(
  new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: 'Contents', bold: true, size: 32, color: DARK })] }),
  new TableOfContents('Contents', { hyperlink: true, headingStyleRange: '1-2' }),
  new Paragraph({ children: [new PageBreak()] }),
);

// ============================================================
// PART A: HIGH-LEVEL ARCHITECTURE
// ============================================================
children.push(h1('Part A - High-Level Architecture'));

children.push(h2('A.1 What This Is'));
children.push(p("A personal website and publishing platform for Nivedita Pandey: bio and positioning, a portfolio of past project work, long-form articles and short notes, research papers, a media gallery, and links out to three external newsletters. There is no application behind it - no user accounts, no database, no server-side logic beyond what Astro resolves at build time."));

children.push(h2('A.2 Technology Stack'));
children.push(table(
  [{ w: 2400, label: 'Layer' }, { w: 6960, label: 'Choice and why' }],
  [
    ['Framework', 'Astro 4.x, in fully static mode (no server adapter configured) - the site is pure HTML/CSS at build time, no runtime JavaScript framework required for content pages.'],
    ['Content', '@astrojs/mdx - lets long-form content mix Markdown with embedded components where needed, though current content is plain Markdown.'],
    ['SEO/Discovery', '@astrojs/sitemap (auto-generated sitemap.xml) and a hand-written RSS feed (src/pages/rss.xml.js) for articles.'],
    ['Styling', 'Plain CSS, scoped per-.astro-file via Astro\'s built-in style scoping - no CSS framework, no component library, no shared design-token file.'],
    ['Hosting', 'Vercel (vercel.json present; build via astro build, static output/). No server runtime is deployed - Vercel serves the prebuilt dist/ output.'],
    ['Analytics', 'Vercel Web Analytics - a single client-side script tag in BaseLayout.astro, no custom event tracking.'],
    ['Fonts', 'Google Fonts (Inter, Source Serif 4), loaded via preconnect + stylesheet link in the shared layout.'],
  ]
));

children.push(h2('A.3 Content Model'));
children.push(p('All editorial content lives as Markdown files under src/content/, validated against a Zod schema per collection at build time - a typo in frontmatter (a missing required field, a wrong type) fails the build rather than shipping silently broken data.'));
children.push(table(
  [{ w: 1800, label: 'Collection' }, { w: 1400, label: 'Entries (current)' }, { w: 6160, label: 'Purpose' }],
  [
    ['projects', '11 (+1 draft)', 'Portfolio case studies - industry, problem, approach, impact, year. One entry (_cmpdil-ai-spectrum.md) is underscore-prefixed, which Astro excludes from getCollection() by convention - a second, file-naming-based draft mechanism alongside the schema\'s explicit draft: true field used by articles/notes/research.'],
    ['articles', '3', 'Long-form essays - title, description, publish date, tags; published under the /insights/ route (see A.5).'],
    ['notes', '4', 'Short-form thoughts, 100-400 words.'],
    ['research', '5', 'Research papers - typed as Working Paper / Discussion Paper / Report / Policy Paper, with an optional PDF link or request-by-email field.'],
    ['newsletters', '1', 'Metadata only, describing the three external Substack publications linked from /newsletter.'],
  ]
));
children.push(note('Entry counts reflect the repository at generation time - re-run this script after adding content to keep the count current.'));

children.push(h2('A.4 Deployment and Domains'));
children.push(bullet('Primary: niveditapandey.com, deployed on Vercel from this repository\'s main branch.'));
children.push(bullet('Subdomain redirect: verne.niveditapandey.com is redirected (host-based rule in vercel.json, HTTP 302) to niveditapandey.com/verne, a small static page under public/verne/ - this is configuration, not a separate deployed app.'));
children.push(bullet('No environment variables, no secrets, no external API calls at runtime - the entire site is static output; the only two write-adjacent user actions (contact, work-with-me) are mailto: links, and newsletter signup is three outbound links to Substack.'));

children.push(h2('A.5 Site Map'));
children.push(table(
  [{ w: 2200, label: 'Route' }, { w: 2260, label: 'Source' }, { w: 4900, label: 'Notes' }],
  [
    ['/', 'src/pages/index.astro', 'Hero, bio, selected highlights from the collections below.'],
    ['/about', 'src/pages/about.astro', 'Static.'],
    ['/building', 'src/pages/building.astro', 'Current work - Dendrons.ai products and problems being pursued.'],
    ['/problems', 'src/pages/problems.astro', '301 redirect to /building - a kept legacy URL, not live content.'],
    ['/beyond', 'src/pages/beyond.astro', 'Personal interests outside work.'],
    ['/speaking', 'src/pages/speaking.astro', 'Speaking topics and engagement rating.'],
    ['/work-with-me', 'src/pages/work-with-me.astro', 'Engagement types; CTA is a mailto: link, not a form.'],
    ['/contact', 'src/pages/contact.astro', 'A mailto: link - no contact form or backend.'],
    ['/newsletter', 'src/pages/newsletter.astro', 'Three external Substack subscribe links.'],
    ['/research', 'src/pages/research.astro', 'Static listing of the research collection.'],
    ['/projects, /projects/[slug]', 'src/pages/projects/', 'Listing + one static page per projects entry (getStaticPaths).'],
    ['/articles, /insights/[slug]', 'src/pages/articles/index.astro, src/pages/insights/[slug].astro', 'See the naming note in B.3 - the collection is "articles" but the live article URL is /insights/{slug}.'],
    ['/notes, /notes/[slug]', 'src/pages/notes/', 'Listing + one static page per notes entry.'],
    ['/media, /media/videos, /media/images', 'src/pages/media/', '/media/index.astro is a large, hand-authored gallery page (~890 lines) - not driven by a content collection.'],
    ['/rss.xml', 'src/pages/rss.xml.js', 'Generated RSS feed for the articles collection.'],
    ['/verne', 'public/verne/index.html', 'Static page; also the target of the subdomain redirect in A.4.'],
  ]
));

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================
// PART B: LOW-LEVEL ARCHITECTURE
// ============================================================
children.push(h1('Part B - Low-Level Architecture'));

children.push(h2('B.1 Shared Layout (BaseLayout.astro)'));
children.push(p('Every page wraps its content in one shared layout component, which owns everything that must be consistent site-wide:'));
children.push(bullet('SEO/social meta as component props: title, description, ogType, ogImage, ogTitle - each page passes only what differs from the defaults.'));
children.push(bullet('Canonical URL and Open Graph URL are both derived from Astro.url.pathname at render time, not hardcoded per page - avoids the class of bug where a page\'s canonical tag silently drifts from its actual URL.'));
children.push(bullet('A named <slot name="head" /> lets individual pages inject page-specific <head> content (JSON-LD structured data, extra meta tags) without the layout needing to know about every page\'s specific needs.'));
children.push(bullet('Sidebar navigation highlights the active section by comparing Astro.url.pathname against each link\'s target at render time (currentPath.startsWith(...) for section roots like /projects).'));
children.push(bullet('Vercel Web Analytics is a single <script defer src="/_vercel/insights/script.js"> in the shared <head> - there is no analytics logic duplicated per page.'));

children.push(h2('B.2 Content Collections & Static Path Generation'));
children.push(p('src/content/config.ts defines one Zod schema per collection (projects, articles, notes, research, newsletters); Astro validates every Markdown file\'s frontmatter against its collection\'s schema at build time.'));
children.push(p('Each dynamic [slug].astro page follows the same shape: an exported getStaticPaths() calls getCollection(name, filter), maps each entry to a { params: { slug }, props: { entry } } pair, and Astro pre-renders one static HTML file per entry - there is no runtime routing or server-side lookup involved.'));
children.push(bullet('Draft filtering: getCollection(\'articles\', ({ data }) => !data.draft) - a draft: true entry exists in the repo and is validated by the schema, but getStaticPaths() simply never generates a page for it, so it is unpublished by omission rather than by a visibility flag checked at render time.'));

children.push(h2('B.3 A routing naming quirk worth documenting'));
children.push(p([]));
children.push(new Paragraph({
  spacing: { after: 140, line: 268 },
  children: [new TextRun({ text: 'The content collection is named ', size: 21, color: DARK }), new TextRun({ text: 'articles', bold: true, size: 21, color: AMBER }), new TextRun({ text: ', its listing page lives at ', size: 21, color: DARK }), new TextRun({ text: '/articles', bold: true, size: 21, color: AMBER }), new TextRun({ text: ' (src/pages/articles/index.astro), but the individual article pages are generated at ', size: 21, color: DARK }), new TextRun({ text: '/insights/{slug}', bold: true, size: 21, color: AMBER }), new TextRun({ text: ' (src/pages/insights/[slug].astro) - not /articles/{slug}. This is a real, working, intentional-looking split (the RSS feed and JSON-LD both correctly point to /insights/ URLs), but it is the one place in the codebase where the folder name, the collection name, and the live URL do not all match, which is worth knowing before adding a new article-adjacent feature so a new route is not accidentally added under the wrong parent path.', size: 21, color: DARK })],
}));

children.push(h2('B.4 The Media Page'));
children.push(p('Unlike every other content area, /media/index.astro is not driven by a content collection - it is a single large hand-authored file (~890 lines) containing inline photo ribbons and collages (e.g. the Coal India Group / CMPDI HQ / IICM training photo sets), edited directly rather than added as data entries. This has been the actual pattern used for recent updates (per git history: caption edits, reordering ribbon photos, adding new training-session photos) - a deliberate simplicity trade-off for a page that is updated more like a scrapbook than a structured list.'));

children.push(h2('B.5 No Shared Component Library'));
children.push(p('There is no src/components/ directory. Every page is a single self-contained .astro file with its own inline <style> block; BaseLayout.astro is the only shared UI piece. This keeps each page fully independent to edit, at the cost of any visual pattern used on more than one page (card styles, buttons) being duplicated rather than centralised - worth knowing if a visual change needs to be made consistently across pages, since there is currently no single component to edit for that.'));

children.push(h2('B.6 Deployment Configuration'));
children.push(p('vercel.json specifies the build command, output directory (dist), and install command explicitly (rather than relying on Vercel\'s framework auto-detection alone), plus the two host-based redirect rules that implement the verne.niveditapandey.com subdomain redirect described in A.4. There is no netlify.toml or other deployment config in the repo - Vercel is the only configured deployment target.'));

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================
// APPENDIX: REPOSITORY HYGIENE NOTES
// ============================================================
children.push(h1('Appendix: Repository Hygiene Notes'));
children.push(p('Found while building this doc - none of these affect the live site, but they are worth cleaning up, and are recorded here rather than silently fixed so the decision to remove them is yours.'));
children.push(bullet('A literal directory named src/{pages,layouts,components,content/{projects,articles,notes,research,newsletters}} exists in the repo - almost certainly the result of an mkdir -p command run in a shell that does not expand brace patterns (e.g. plain sh), creating one oddly-named directory instead of the intended nested folders. Safe to delete; nothing references it.'));
children.push(bullet('Stray .claude/worktrees/ subdirectories exist nested inside both src/layouts/ and src/pages/ - leftover artifacts from a prior Claude Code session, not part of the site.'));
children.push(bullet('A .netlify/ folder exists at the repo root, but no netlify.toml is present and the actual deployment target is Vercel - this folder appears to be an unused leftover from an earlier or exploratory setup.'));
children.push(bullet('PROJECT_STRUCTURE.md (repo root) is stale: it lists placeholder example content counts and page names (e.g. articles/[slug].astro) that no longer match the current site (which has grown to 23 content entries and pages like /building, /beyond, /speaking, /work-with-me, and the /insights/ route). This document supersedes it - consider deleting PROJECT_STRUCTURE.md or replacing its content with a pointer to this doc.'));

const doc = new Document({
  creator: 'Nivedita Pandey',
  title: 'Personal Website - Architecture Reference',
  styles: {
    default: { document: { run: { font: 'Arial', size: 21, color: DARK } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 30, bold: true, color: BLUE, font: 'Arial' },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BLUE, space: 4 } } } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 25, bold: true, color: DARK, font: 'Arial' },
        paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [{
      reference: 'bullets',
      levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 240 } } } }],
    }],
  },
  sections: [{
    properties: { page: {
      size: { width: 12240, height: 15840 },
      margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
    } },
    headers: { default: new Header({ children: [new Paragraph({
      alignment: AlignmentType.RIGHT,
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER, space: 4 } },
      children: [new TextRun({ text: 'niveditapandey.com - Architecture Reference', size: 16, color: SLATE })],
    })] }) },
    footers: { default: new Footer({ children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: BORDER, space: 4 } },
      children: [new TextRun({ text: 'Page ', size: 16, color: SLATE }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: SLATE })],
    })] }) },
    children,
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('docs/Personal-Website-Architecture.docx', buffer);
  console.log('written docs/Personal-Website-Architecture.docx');
});
