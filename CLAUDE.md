# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (hot reload, sourcemaps enabled)
npm run build     # Type-check with tsc, then build all pages to /dist
npm run preview   # Preview the production build locally
npm run check     # Run tsc type-check + meta/link validation script
npm run lhci      # Build + Lighthouse CI audit (perf, a11y, SEO scores)
```

**Always run `npm run check` after making changes.** `scripts/check.ts` (at the repo root) validates: all `index.html` files have required meta tags, internal links resolve, and TypeScript compiles cleanly. JSON-LD schemas are type-checked by `tsc` at the same time, so a bad schema is a check failure.

Run `npm run lhci` when touching layout, images, or anything that could affect Core Web Vitals. Reports are saved to `.lighthouseci/` (gitignored). Thresholds: performance ≥ 0.9 (warn), accessibility ≥ 0.9 (error), SEO ≥ 0.9 (error). **Known accepted warnings:** homepage (Google Fonts 3G latency) and gallery (autoplay videos) both score ~0.79–0.81 on performance — these are accepted tradeoffs. Do not switch to self-hosted TTF fonts: it tanks LCP in Lighthouse's mobile simulation.

## Architecture

This is a **Vite multi-page application (MPA)** — 14 static HTML entry points declared in `vite.config.ts`. There is no React, Vue, or other component framework. Pages are raw HTML with Tailwind utility classes.

### Page structure

Each page lives at `pages/<section>/<name>/` and consists of up to three co-located files:

- `index.html` — entry point; declares `<head>` meta/OG tags, loads shared components via `<load src="...">`, and references the page's content `.html` and `jsonld.ts`
- `<name>.html` — the page's `<main>` body content (injected by `vite-plugin-html-inject`)
- `jsonld.ts` — structured data schemas for that page (injected as static JSON-LD at build time)

### HTML component injection

`vite-plugin-html-inject` processes `<load src="/pages/components/header.html" />` tags in `index.html` files at build time. The `src` attribute is **always an absolute path from the project root** (starts with `/`). Shared components live in `pages/components/`: `header.html`, `footer.html`, `banner.html`, `schedule.html`, `location-section.html`, and `weekly-schedule-section.html`.

### JSON-LD pipeline

`vite-plugin-jsonld.ts` is a custom plugin that converts `<script type="module" src="/.../jsonld.ts">` into static `<script type="application/ld+json">` tags — zero JavaScript ships to the browser.

Each `jsonld.ts` file exports a `schemas` array typed with interfaces from `pages/scripts/jsonld/types.ts`. These types enforce Google Rich Results required fields, so missing fields cause `tsc` compile errors. Shared fragments live in:
- `pages/scripts/jsonld/shared.ts` — business address, coordinates, org, place fragments
- `pages/scripts/jsonld/business.ts` — full `LocalBusiness` schema (reused across pages)
- `pages/scripts/jsonld/breadcrumb.ts` — `makeBreadcrumb({name, url}[])` helper

When adding a new page with structured data: create a `jsonld.ts` alongside the `index.html`, export a `schemas: JsonLdSchema[]` array, and add the `<script type="module" src="/.../jsonld.ts"></script>` tag to the page's `<head>`. Standard schema sets: course/service pages → `Course + FAQPage + BreadcrumbList`; event pages → `SportsEvent + BreadcrumbList`.

### CSS / Tailwind

**Tailwind CSS v4** — no `tailwind.config.*` file. All configuration is in `pages/style.css` via `@theme`. The Google Fonts `@import` **must come before** `@import "tailwindcss"` (PostCSS rule):

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:...');
@import "tailwindcss";
@theme {
  --color-boxing-red: #c40110;  /* text-boxing-red, bg-boxing-red */
  --color-legacy-red: #6f1712;  /* text-legacy-red, bg-legacy-red */
}
```

Page background: `bg-slate-950`. Card background: `bg-gray-800/50 border border-slate-700`.

### JavaScript

Runtime JS is minimal. The only shipped script is `pages/scripts/responsive-header.ts` (mobile menu toggle + active-link highlighting). It runs on every page via `<script type="module">` in each `index.html`.

### Adding a new page

1. Create `pages/<section>/<name>/index.html` with full `<head>` (canonical, meta, OG tags, stylesheet link, Google Fonts preconnect — see below)
2. Create `pages/<section>/<name>/<name>.html` for body content
3. Optionally create `pages/<section>/<name>/jsonld.ts` for structured data
4. Register the entry in `vite.config.ts` under `rollupOptions.input`
5. **Add a link in `pages/components/header.html`** — Courses or More dropdown. The last `<li>` in each dropdown must have `md:rounded-b-md` on its `<a>`; remove it from the previous last item when appending.

**Relative path depths** (get these right in `index.html`):

| Page location | `href` for stylesheet | `src` for responsive-header |
|---|---|---|
| `pages/<section>/index.html` | `../style.css` | `../scripts/responsive-header.ts` |
| `pages/courses/<name>/index.html` | `../../style.css` | `../../scripts/responsive-header.ts` |

**Google Fonts preconnect** — required in every `index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Assets and images

Static assets (images, videos) live in `/public/`. **`vite-plugin-imagemin` only processes images imported through JavaScript — it does NOT touch `/public/`.** Images in `/public/` must be manually converted to WebP.

Image best practices:
- Wrap every `<img>` in a `<picture>` tag with a WebP source:
  ```html
  <picture>
    <source srcset="/image.webp" type="image/webp">
    <img src="/image.jpg" alt="..." class="...">
  </picture>
  ```
- Above-fold / LCP image: add `fetchpriority="high"` on the `<img>` and a matching `<link rel="preload" as="image" href="/image.webp" type="image/webp">` in `<head>`
- All other images: `loading="lazy"` and `decoding="async"`
- Videos: always add `preload="none"` — `loading="lazy"` is invalid on `<video>` and is silently ignored

### Common UI patterns

**Section heading** (used consistently across all pages):
```html
<div class="flex items-center gap-4 mb-6">
  <div class="h-10 w-1.5 bg-boxing-red rounded-full"></div>
  <h2 class="text-3xl md:text-4xl font-bold">Title</h2>
</div>
```

**Primary CTA (red pill):**
```html
<a href="/pages/contact/" class="inline-flex items-center gap-2 bg-boxing-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform hover:scale-105 shadow-lg shadow-red-900/50">
  Start Your Free Class
  <svg viewBox="0 -960 960 960" class="w-5 h-5" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
</a>
```

**Secondary CTA (white pill):** same classes but `bg-white text-black` instead.

**Two-column course layout:**
```html
<div class="grid grid-cols-1 md:grid-cols-16 gap-12">
  <div class="md:col-span-9"><!-- main content --></div>
  <div class="md:col-span-7"><!-- sidebar card --></div>
</div>
```

## SEO patterns

Every `index.html` must have: `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`, `og:locale`, `og:site_name`), and Twitter card tags. See any existing `index.html` for the full template.

Meta title formula: **[Primary keyword] – [Differentiator] | Legacy Boxing**  
Meta description formula: **Lead with the benefit, include a CTA, mention "first class free"** — ~155 chars.

See `docs/seo.md` for full SEO strategy, keyword data, and growth priorities.

## Content writing style

See `.claude/writing-style.md` for the full voice guide. The critical rules:

**Voice:** gym speaks as "we/our"; address reader as "you/your"; coaches are "Coach Roth", "Coach Marisa" (title + last name or first name — never first+last in running text). Brand name: "Legacy Boxing & Combat Sports Academy" on first reference, "Legacy" after. Use "&" not "and" in the brand name.

**Tone anchors:** "real", "structured", "authentic", "certified", "fundamentals", "technique", "discipline", "progression". Avoid: "ultimate", "extreme", "hardcore", "elite", "world-class", "transform your body", urgency/scarcity language.

**"Whether" bridge** — use on every course page at least once:
> "Whether you're [beginner scenario] or [advanced scenario], [shared benefit]."

**Barrier-lowerer** — always follow any mention of intensity with a beginner welcome. "Sparring is never required" is the main one.

**"First class is free"** — mention on every page.

**En dash (–, U+2013):** use in meta titles and page headings as a qualifier separator. Never a hyphen or em dash in these positions.

**En dashes in body copy:** avoid entirely. Mid-sentence dashes read as AI-generated. Restructure the sentence instead.

**Apostrophes:** always straight (`'`), never curly/smart (`'`).

**Numbers:** spell out one through nine; numerals for 10+. Prices, ages, and years are always numeric ($80, ages 8–16, 30+ years).

**Dashes in time ranges:** en dash with no spaces — "6:15–7:45 PM".
