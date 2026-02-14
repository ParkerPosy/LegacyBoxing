# Legacy Boxing — Current Gaps & Issues

> Last updated: 2026-02-14

## Critical Bugs — RESOLVED

### ~~1. Font Loading Broken~~ — FIXED
The `@font-face` declarations in `pages/style.css` had `.tff` typos and wrong format strings.
**Fixed:** Changed to `.ttf` extensions, `format("truetype")`, proper variable font `font-weight: 100 900` range, and added `font-display: swap`.

### ~~2. JSON-LD Structured Data Non-Functional~~ — FIXED
- Created `pages/components/json-ld.html` as an inline `<script type="application/ld+json">` component
- Contains complete `SportsActivityLocation` schema with real business data (address, phone, geo, hours, pricing, offerings, founder info)
- Injected via `<load>` tag into all 9 pages
- Removed dependency on `schema-dts` package — pure JSON approach
- Old `pages/scripts/json-ld.ts` is now superseded (can be deleted)

---

## SEO Gaps — PARTIALLY RESOLVED

### ~~3. Missing `og:type` Meta Tag~~ — FIXED
Added `<meta property="og:type" content="website" />` and `<meta property="og:locale" content="en_US" />` to all pages.

### ~~4. No Twitter/X Card Meta Tags~~ — FIXED
Added `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image` tags to all 9 pages.

### ~~5. Inconsistent `<meta name="keywords">`~~ — FIXED
- Schedule page now has page-specific keywords
- Membership, Gallery, and Contact pages updated from generic to page-specific keywords
- Boxing, MMA, Youth, and Private Training already had unique keywords

### ~~6. No `robots.txt`~~ — FIXED
Created `public/robots.txt` with `Allow: /` and sitemap reference.

### ~~7. No `<main>` Landmark Element~~ — FIXED
All pages now use `<main class="mx-10 py-10">` (or `mx-5` for schedule) instead of `<div>`.

---

## Accessibility Gaps — PARTIALLY RESOLVED

### ~~8. Missing `<main>` Landmark~~ — FIXED
All 9 pages now use `<main>` instead of `<div>` for the content wrapper between header and footer.

### ~~9. No Skip Navigation Link~~ — FIXED
Added "Skip to main content" link before `<header>` in `header.html`. Uses `sr-only` with `focus:not-sr-only` for keyboard users. All `<main>` elements have `id="main-content"`.

### ~~10. Limited `aria` Usage~~ — PARTIALLY FIXED
- Added `aria-label="Main navigation"` to `<nav>` element
- `aria-labelledby` used on youth-programs testimonial `<section>`
- `role="alert"` correctly used on banner
- Remaining: could add more `aria-label` to other interactive elements as content grows

---

## Content & Data Issues

### 12. Commented-Out Content
- **Steven Kellogg** (administrative consultant) section commented out on homepage
- **Summer Camp** sections commented out on youth-programs and membership pages (2025 dates)
- These should be moved to a content backlog

### ~~13. Image Alt Text Typos~~ — FIXED
- Fixed `"coachh"` → `"coach"` and `"women"` → `"woman"` in gallery
- Fixed `"Intese"` → `"Intense"` in gallery

### 14. Duplicate Gallery Image
`legacy-boxing-combat-sports-academy_kids-boxing-class-photo.jpg` appears **twice** in the gallery grid.

---

## Code Quality Issues

### ~~15. Gallery Videos Use Inline `style` Instead of `class`~~ — FIXED
Changed `style=` to `class=` on all 5 `<video>` elements in gallery.html so Tailwind classes apply correctly.

### ~~16. Stray HTML Tags~~ — FIXED
Removed orphaned `</h2>` closing tag in `private-training.html`.

### 17. Inconsistent Content Wrapper Width
- Most pages: `mx-10 py-10`
- Schedule page: `mx-5 py-10`
- This should be documented as intentional

### 18. Gulp Dependencies Without Gulpfile
`package.json` includes `gulp`, `gulp-clone`, and `gulp-webp` as devDependencies, but there's no visible `gulpfile.js` in the project. These may be orphaned deps from a removed image pipeline.

### 19. Unused Assets in `public/`
Several images appear unused in any HTML file:
- `fall-brawl.jpg`
- `legacy-boxing-combat-sports-academy_adult-boxing-class-photo.jpg`
- `coach-with-team.jpg`
- `judo-logo.webp`
- `USA-Judo.png`

### 20. Inconsistent Asset Naming
`public/` files mix naming conventions:
- Hyphenated: `coach-training.jpg`
- Underscored with prefix: `legacy-boxing-combat-sports-academy_gym-training-photo-penn-state-bo-nickal.jpg`
- Mixed extensions: `.jpg`, `.jpeg`, `.png`, `.webp`

Should standardize to a single convention (e.g., `kebab-case` with `.webp` for images).

---

## Architecture Concerns

### 21. No Reusable Page Template System
Each `index.html` repeats the full page scaffold (meta tags, OG tags, body wrapper, component loads, script tags). Adding a new page requires copy-pasting and modifying 20+ lines of boilerplate. High risk of inconsistency.

**Recommendation:** Consider a lightweight templating approach or a shared snippet file for the `<head>` block.

### 22. Flat Asset Directory
All 39 static assets sit in `public/` with no subdirectories. As content grows, this will become unmanageable.

**Recommendation:** Organize into `public/images/`, `public/videos/`, `public/logos/`, etc.

### 23. No Error / 404 Page
No custom 404 page exists. Users hitting a broken link see a generic browser or hosting error.

---

## Priority Matrix

| Priority | Issue | Impact |
|----------|-------|--------|
| ~~🔴 High~~ | ~~Font loading bug (#1)~~ | ✅ FIXED |
| ~~🔴 High~~ | ~~JSON-LD non-functional (#2)~~ | ✅ FIXED |
| ~~🔴 High~~ | ~~No `<main>` element (#7, #8)~~ | ✅ FIXED |
| ~~🟡 Medium~~ | ~~Missing OG/Twitter tags (#3, #4)~~ | ✅ FIXED |
| 🟡 Medium | Outdated banner (#11) | User confusion |
| ~~🟡 Medium~~ | ~~No robots.txt (#6)~~ | ✅ FIXED |
| ~~🟡 Medium~~ | ~~Gallery video bug (#15)~~ | ✅ FIXED |
| 🟡 Medium | No page template system (#21) | Developer velocity for new pages |
| 🟢 Low | Asset naming (#20) | Maintainability |
| 🟢 Low | Unused assets (#19) | Bundle/deploy size |
| ~~🟢 Low~~ | ~~Alt text typos (#13)~~ | ✅ FIXED |
| 🟢 Low | Commented-out content (#12) | Code cleanliness |
