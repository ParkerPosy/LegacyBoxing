# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (hot reload, sourcemaps enabled)
npm run build     # Type-check with tsc, then build all pages to /dist
npm run preview   # Preview the production build locally
```

There are no tests. `tsc` (run as part of `build`) is the primary correctness check — JSON-LD schemas are validated at compile time, so a build failure often means a schema type error.

## Architecture

This is a **Vite multi-page application (MPA)** — 12 static HTML entry points declared in `vite.config.ts`. There is no React, Vue, or other component framework. Pages are mostly raw HTML with Tailwind utility classes.

### Page structure

Each page lives at `pages/<section>/<name>/` and consists of up to three co-located files:

- `index.html` — entry point; declares `<head>` meta/OG tags, loads shared components via `<load src="...">`, and references the page's content `.html` and `jsonld.ts`
- `<name>.html` — the page's `<main>` body content (injected by `vite-plugin-html-inject`)
- `jsonld.ts` — structured data schemas for that page (injected as static JSON-LD at build time)

### HTML component injection

`vite-plugin-html-inject` processes `<load src="/pages/components/header.html" />` tags in `index.html` files, replacing them with the file's content at build time. Shared components live in `pages/components/`: `header.html`, `footer.html`, `banner.html`, `schedule.html`, `location-section.html`, and `weekly-schedule-section.html`.

### JSON-LD pipeline

`vite-plugin-jsonld.ts` is a custom plugin that converts `<script type="module" src="/.../jsonld.ts">` into static `<script type="application/ld+json">` tags — zero JavaScript ships to the browser.

Each `jsonld.ts` file exports a `schemas` array typed with interfaces from `pages/scripts/jsonld/types.ts`. These types enforce Google Rich Results required fields (e.g., `startDate` + `location` on `SportsEvent`), so missing fields cause `tsc` compile errors before they reach Search Console. Shared constants (business address, coordinates, org fragments) live in `pages/scripts/jsonld/shared.ts`.

When adding a new page with structured data: create a `jsonld.ts` alongside the `index.html`, export a `schemas: JsonLdSchema[]` array, and add the `<script type="module" src="/.../jsonld.ts"></script>` tag to the page's `<head>`.

### CSS / Tailwind

**Tailwind CSS v4** — no `tailwind.config.*` file. All configuration is in `pages/style.css` via `@theme`:
- `--color-boxing-red: #c40110` → use as `text-boxing-red`, `bg-boxing-red`, etc.
- `--color-legacy-red: #6f1712`
- Font: Inter variable font (preloaded, self-hosted in `pages/fonts/`)

### JavaScript

Runtime JS is minimal and intentional. The only shipped script is `pages/scripts/responsive-header.ts`, which handles mobile menu toggle and active-link highlighting. It runs on every page via a `<script type="module">` tag in each `index.html`.

### Adding a new page

1. Create `pages/<section>/<name>/index.html` with full `<head>` (meta, OG, canonical, stylesheet, font preloads)
2. Create `pages/<section>/<name>/<name>.html` for body content
3. Optionally create `pages/<section>/<name>/jsonld.ts` for structured data
4. Register the entry in `vite.config.ts` under `rollupOptions.input`
5. **Add a link in `pages/components/header.html`** — either as a top-level `<li>` or inside the Courses/More dropdown. The last `<li>` in each dropdown must have `md:rounded-b-md` on its `<a>`; remove it from the previous last item when appending.

### Assets

Static assets (images, videos, fonts) live in `/public/`. Images are WebP-optimized at build time by `vite-plugin-imagemin` (quality 30). The OG image is at `/public/og-image.png`. The live domain is `www.legacy-boxing.com` (see `CNAME`).

## SEO patterns

Every `index.html` must have: `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`), and Twitter card tags. See the homepage `index.html` for the full template.

Meta title formula: **[Primary keyword] | [Differentiator] | Legacy Boxing**  
Meta description formula: **Lead with the benefit, include a CTA, mention "first class free"** — ~155 chars.

Each page has a co-located `jsonld.ts` that exports a `schemas` array. For course/service pages the standard set is `Course + FAQPage + BreadcrumbList`. For event pages use `SportsEvent + BreadcrumbList`. All types live in `pages/scripts/jsonld/types.ts` and are validated by `tsc` at build time — a bad schema is a build error.

See `docs/seo.md` for the full SEO strategy, keyword data, and growth priorities.

## Content writing style

**En dash (–, U+2013):** use in meta titles as a qualifier separator (e.g. `Boxing Classes – Beginner to Competitive`) and in page titles. Never use a hyphen or em dash in these positions.

**En dashes in body copy:** avoid them. Mid-sentence dashes read as AI-generated and should be rewritten as plain sentences instead. If you feel the urge to write `X — Y`, restructure the sentence so it does not need a dash at all. The en dash is reserved for titles; it has no place in paragraph text.
