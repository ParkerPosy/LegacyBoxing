# Legacy Boxing — Development Guide

> Last updated: 2026-02-14

## Quick Start

```bash
npm install
npm run dev      # Start Vite dev server
npm run build    # TypeScript check + production build
npm run preview  # Preview production build
```

Build output: `./dist`

---

## Project Architecture

```
LegacyBoxing/
├── index.html                    # Homepage entry point
├── CNAME                         # GitHub Pages custom domain
├── package.json
├── tsconfig.json
├── vite.config.ts                # Build config with all entry points
├── vite-env.d.ts
├── declarations.d.ts             # *.html?raw type declarations
│
├── .claude/                      # Project documentation (you are here)
│   ├── style-practices.md
│   ├── gaps.md
│   ├── seo-best-practices.md
│   ├── marketing-strategy.md
│   └── development-guide.md
│
├── pages/
│   ├── main.html                 # Homepage content fragment
│   ├── main.ts                   # CSS import entry for homepage
│   ├── style.css                 # Global styles + Tailwind v4 theme
│   │
│   ├── components/               # Reusable HTML fragments
│   │   ├── header.html           # Sticky nav + mobile menu + courses dropdown
│   │   ├── footer.html           # Contact info + Instagram CTA
│   │   ├── banner.html           # Dismissable announcement
│   │   ├── location-section.html # Address + Google Maps embed
│   │   ├── schedule.html         # Full weekly schedule table (725 lines)
│   │   └── weekly-schedule-section.html  # Wrapper for schedule table
│   │
│   ├── scripts/
│   │   ├── responsive-header.ts  # Mobile menu toggle + active nav highlighting
│   │   └── json-ld.ts            # Structured data (WIP, non-functional)
│   │
│   ├── fonts/                    # Self-hosted Inter variable font
│   │
│   ├── courses/
│   │   ├── boxing/               # index.html + boxing.html
│   │   ├── mma/                  # index.html + mma.html
│   │   ├── youth-programs/       # index.html + youth-programs.html
│   │   ├── private-training/     # index.html + private-training.html
│   │   └── schedule/             # index.html + schedule.html
│   │
│   ├── membership/               # index.html + membership.html
│   ├── gallery/                  # index.html + gallery.html
│   └── contact/                  # index.html + contact.html
│
└── public/                       # Static assets (copied as-is to dist)
    ├── favicon.ico
    ├── legacy-boxing-logo.svg    # Vector logo (on-page display)
    ├── legacy-boxing-logo.webp   # Raster logo (OG image, JSON-LD schema)
    ├── *.jpg / *.png / *.webp    # Photos and logos
    └── *.mp4                     # Videos
```

---

## How Pages Work

### Two-File Pattern

Each page is split into TWO files:

1. **`index.html`** — The full HTML document scaffold (entry point registered in `vite.config.ts`)
2. **`[name].html`** — The page content fragment (injected via `<load>` tag)

The reason: `vite-plugin-html-inject` processes `<load src="..." />` tags at build time, replacing them with the content of the referenced HTML file. This allows component reuse (header, footer) while keeping content separate.

### Adding a New Page

**Step-by-step checklist:**

1. **Create directory:** `pages/[section]/`
2. **Create content fragment:** `pages/[section]/[name].html`
   - Write only the page content (no `<!doctype>`, `<html>`, `<head>`, or `<body>`)
   - Follow the section heading pattern, CTA patterns, etc. from `style-practices.md`
3. **Create entry file:** `pages/[section]/index.html`
   - Copy scaffold from an existing page (e.g., `pages/membership/index.html`)
   - Update: `<title>`, `<meta description>`, `<meta keywords>`, `<link rel="canonical">`, all OG tags
   - Update `<load>` src to point to the new content fragment
   - Ensure `<link rel="stylesheet">` path is correct relative to the new location
   - Ensure `<script src>` path to `responsive-header.ts` is correct
4. **Register in Vite config:** Add the new entry point to `rollupOptions.input` in `vite.config.ts`
5. **Add to navigation:** Add a link in `pages/components/header.html` (and dropdown if under Courses)
6. **Add to sitemap:** The `vite-plugin-sitemap` should auto-detect from entry points
7. **Test:** Run `npm run dev` and verify the page renders correctly

### Relative Path Depths

When creating `index.html` for a new page, get the relative paths right:

| Page Location | Stylesheet Path | Script Path |
|---------------|----------------|-------------|
| `pages/[section]/index.html` | `../style.css` | `../scripts/responsive-header.ts` |
| `pages/courses/[course]/index.html` | `../../style.css` | `../../scripts/responsive-header.ts` |

### Vite Entry Points

All page entry points are registered in `vite.config.ts` under `build.rollupOptions.input`:

```ts
input: {
  main: resolve(__dirname, 'index.html'),
  boxing: resolve(__dirname, 'pages/courses/boxing/index.html'),
  mma: resolve(__dirname, 'pages/courses/mma/index.html'),
  // ... add new pages here
}
```

---

## Component Reference

### Using Components

```html
<load src="/pages/components/header.html" />
<load src="/pages/components/footer.html" />
<load src="/pages/components/banner.html" />
<load src="/pages/components/location-section.html" />
<load src="/pages/components/weekly-schedule-section.html" />
```

The `src` path is absolute from the project root (starts with `/`).

### Creating New Components

1. Create an HTML fragment in `pages/components/`
2. Use `<load src="/pages/components/[name].html" />` in any page
3. Component should be a self-contained fragment — no `<html>`, `<body>`, etc.

---

## Styling Quick Reference

### Design Tokens
- Primary red: `text-boxing-red` / `bg-boxing-red` → `#c40110`
- Dark red: `text-legacy-red` / `bg-legacy-red` → `#6f1712`
- Page bg: `bg-slate-950`
- Card bg: `bg-gray-800/50 border border-slate-700`

### Common Patterns (copy-paste ready)

**Section heading:**
```html
<div class="flex items-center gap-4 mb-6">
  <div class="h-10 w-1.5 bg-boxing-red rounded-full"></div>
  <h2 class="text-3xl md:text-4xl font-bold">Title</h2>
</div>
```

**Primary CTA:**
```html
<a href="/pages/contact/" class="inline-flex items-center gap-2 bg-boxing-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform hover:scale-105 shadow-lg shadow-red-900/50">
  Start Your Free Class
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 -960 960 960" fill="currentColor">
    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
  </svg>
</a>
```

**Info card:**
```html
<div class="bg-gray-800/50 border border-slate-700 rounded-lg p-6 shadow-lg">
  <h3 class="text-xl font-bold mb-3">Title</h3>
  <p class="text-slate-300 leading-relaxed">Content</p>
</div>
```

**Two-column course layout:**
```html
<div class="grid grid-cols-1 md:grid-cols-16 gap-12 mt-10">
  <div class="md:col-span-9"><!-- Content --></div>
  <div class="md:col-span-7"><!-- Sidebar --></div>
</div>
```

See `.claude/style-practices.md` for the full reference.

---

## Scripts

### `responsive-header.ts`
- Handles mobile menu toggle (hamburger button)
- Highlights current page in navigation
- Auto-highlights "Courses" label if on a course subpage
- Loaded on EVERY page via `<script type="module">`

### `json-ld.ts`
- **NOT FUNCTIONAL** — contains TODOs, never imported, missing dependency
- Needs to be completed and integrated (see `.claude/gaps.md`)

### Adding New Scripts
- Place in `pages/scripts/`
- Import via `<script type="module" src="...">` in the page's `index.html`
- TypeScript strict mode is enforced

---

## Build & Deploy

### Build Pipeline
```
TypeScript check (tsc) → Vite build (esbuild minify) → dist/
```

### Plugins Active in Build
1. `@tailwindcss/vite` — processes Tailwind CSS
2. `vite-plugin-html-inject` — resolves `<load>` tags
3. `vite-plugin-imagemin` — optimizes images (WebP quality: 30)
4. `vite-plugin-sitemap` — generates sitemap.xml
5. `vite-plugin-radar` — injects Google Analytics

### Deployment
- Custom domain via `CNAME` file: `www.legacy-boxing.com`
- Likely deployed to GitHub Pages (CNAME file is the indicator)
- Build output in `./dist`

---

## Code Quality Checklist

Before committing a new page or component:

- [ ] HTML validates (no stray tags, proper nesting)
- [ ] Heading hierarchy is correct (`<h1>` → `<h2>` → `<h3>`, no skips)
- [ ] All images have descriptive `alt` text
- [ ] Above-fold images have `loading="eager"` + `fetchpriority="high"`
- [ ] Meta tags follow the template in `seo-best-practices.md`
- [ ] Tailwind classes only (no inline `style` attributes)
- [ ] Responsive: tested at mobile, tablet, desktop widths
- [ ] Content wrapper uses `<main>` with proper classes
- [ ] CTA buttons follow the established patterns
- [ ] Nav link added for new pages
- [ ] Vite entry point registered in `vite.config.ts`
- [ ] `npm run build` completes without errors

---

## Known Technical Debt

See `.claude/gaps.md` for the full list. Top priorities:

1. Fix font loading bug in `style.css` (`.tff` → `.ttf`)
2. Implement JSON-LD structured data
3. Add `<main>` element to all pages
4. Add `og:type` and Twitter card meta tags
5. Create `robots.txt`
6. Standardize asset naming in `public/`
7. Consider a templating solution for the `<head>` boilerplate
