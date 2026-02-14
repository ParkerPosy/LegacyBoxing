# Legacy Boxing — SEO Best Practices

> Last updated: 2026-02-14

## Current SEO Status

### What's Already Working
- ✅ Unique `<title>` tags per page — keyword-rich
- ✅ Unique `<meta name="description">` per page
- ✅ Canonical URLs on every page via `<link rel="canonical">`
- ✅ Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`)
- ✅ Auto-generated sitemap via `vite-plugin-sitemap`
- ✅ Google Analytics tracking (`G-9LQ8HHZE9B`)
- ✅ Semantic HTML: `<header>`, `<footer>`, `<nav>`, `<h1>`–`<h3>` hierarchy
- ✅ Descriptive alt text on all images
- ✅ `loading="eager"` + `fetchpriority="high"` on above-fold images
- ✅ `loading="lazy"` on iframes
- ✅ FAQ section on MMA page using `<details>/<summary>` (eligible for FAQ rich results)
- ✅ Proper `lang="en"` on `<html>`

### What's Missing (see gaps.md for full details)
- ❌ No JSON-LD structured data rendering on any page
- ❌ No `og:type` meta tag
- ❌ No Twitter/X card meta tags
- ❌ No `robots.txt`
- ❌ No `<main>` landmark element
- ❌ Inconsistent/duplicate keywords meta tags
- ❌ No 404 page

---

## SEO Standards for All Pages

### Required `<head>` Tags

Every page MUST include these tags (in this order):

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[Page Title] | Legacy Boxing & Combat Sports Academy</title>
<meta name="description" content="[Unique 150-160 char description with primary keywords]" />
<meta name="keywords" content="[Page-specific keywords, comma-separated]" />
<link rel="canonical" href="https://www.legacy-boxing.com/[path]/" />
<link rel="icon" href="/favicon.ico" type="image/x-icon" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Legacy Boxing & Combat Sports Academy" />
<meta property="og:title" content="[Same as <title>]" />
<meta property="og:description" content="[Same as meta description]" />
<meta property="og:url" content="https://www.legacy-boxing.com/[path]/" />
<meta property="og:image" content="https://www.legacy-boxing.com/legacy-boxing-logo.webp" />
<meta property="og:locale" content="en_US" />

<!-- Twitter/X Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Same as <title>]" />
<meta name="twitter:description" content="[Same as meta description]" />
<meta name="twitter:image" content="https://www.legacy-boxing.com/legacy-boxing-logo.webp" />

<!-- Stylesheet -->
<link rel="stylesheet" href="[relative-path]/style.css" />
```

### Title Tag Formula

```
[Primary Keyword] — [Secondary Info] | Legacy Boxing & Combat Sports Academy
```

Examples:
- `Boxing Classes — Adult & Youth Training | Legacy Boxing & Combat Sports Academy`
- `MMA Training — Mixed Martial Arts Classes | Legacy Boxing & Combat Sports Academy`
- `Contact Us | Legacy Boxing & Combat Sports Academy`

### Meta Description Guidelines

- 150–160 characters maximum
- Include primary keyword naturally in the first 50 characters
- Include a call to action when possible ("Join today", "Sign up for a free class")
- Include location: "State College, PA"
- Must be unique per page — never copy from another page

### Keywords Strategy

Each page should have **unique, page-specific keywords**. Template:

```
[page topic], [page topic variation], legacy boxing, state college pa, [class type], combat sports, fitness, [target audience]
```

---

## Structured Data (JSON-LD)

### Priority Schema Types

1. **`LocalBusiness` / `SportsActivityLocation`** (homepage)
   - Business name, address, phone, hours, geo coordinates
   - `sameAs` links (Instagram, Google Maps)
   - Price range, payment methods

2. **`Course`** (each course page)
   - Course name, description, provider
   - Schedule, price

3. **`FAQPage`** (MMA page, any page with FAQ section)
   - Question/answer pairs from `<details>/<summary>` elements

4. **`Event`** (seasonal events like Summer Camp)
   - Event name, date, location, price

5. **`Person`** (coach profiles)
   - Name, job title, affiliated organization

### Implementation Pattern

JSON-LD should be injected as a `<script type="application/ld+json">` in each page's `<head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Legacy Boxing & Combat Sports Academy",
  "url": "https://www.legacy-boxing.com",
  "telephone": "[PHONE]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[ADDRESS]",
    "addressLocality": "State College",
    "addressRegion": "PA",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  }
}
</script>
```

---

## Semantic HTML Requirements

### Page Structure

```html
<body>
  <header><!-- site header --></header>
  <main id="main-content">
    <!-- page content -->
  </main>
  <footer><!-- site footer --></footer>
</body>
```

### Heading Hierarchy

- `<h1>` — one per page, the page title (not the site name)
- `<h2>` — major sections (use with the red-bar pattern)
- `<h3>` — subsections, card titles
- Never skip levels (no `<h1>` → `<h3>`)

### Landmark Elements

| Element | Usage |
|---------|-------|
| `<header>` | Site header (already used) |
| `<nav>` | Navigation (already used) |
| `<main>` | Primary content area (**not yet implemented**) |
| `<footer>` | Site footer (already used) |
| `<section>` | Thematic groups with headings |
| `<article>` | Self-contained content (coach bios, blog posts) |
| `<aside>` | Sidebar content (benefit cards) |

---

## Image SEO

### Current Best Practices (Continue)
- Descriptive `alt` text with relevant keywords
- `loading="eager"` + `fetchpriority="high"` for hero/above-fold images
- `loading="lazy"` for below-fold content
- `object-cover` for consistent aspect ratios

### Improvements Needed
- Convert remaining JPG/PNG images to WebP format
- Add `width` and `height` attributes to prevent CLS (Cumulative Layout Shift)
- Use `<picture>` with `<source>` for responsive image sizes (optional optimization)
- Standardize file naming: `kebab-case.webp`

---

## Performance SEO Signals

### Current Strengths
- Vite build with esbuild minification
- Manual chunk splitting (vendor bundle)
- Image optimization via vite-plugin-imagemin

### To Investigate
- Core Web Vitals scores (run Lighthouse audit)
- First Contentful Paint (font loading bug may affect FCP)
- Largest Contentful Paint (hero images)
- Cumulative Layout Shift (missing `width`/`height` on images)

---

## Local SEO Checklist

Legacy Boxing is a local business. Local SEO is critical.

- [ ] Google Business Profile claimed and optimized
- [ ] NAP (Name, Address, Phone) consistent across all pages and directories
- [ ] LocalBusiness JSON-LD on homepage
- [ ] Google Maps embed on contact page (✅ already present)
- [ ] Location keywords in titles & descriptions ("State College, PA")
- [ ] Encourage and link to Google Reviews
- [ ] Local directory listings (Yelp, Yellow Pages, etc.)

---

## Content SEO Opportunities

### FAQ Sections
The MMA page has a great FAQ section with `<details>/<summary>`. Replicate this pattern on:
- Boxing page — common beginner questions
- Youth Programs — parent concerns
- Membership — pricing/policy questions
- Private Training — booking/availability questions

FAQ sections with proper `FAQPage` JSON-LD are eligible for Google's FAQ rich results.

### Blog / News Section (Future)
Adding a `/pages/blog/` section would significantly boost organic traffic:
- Training tips and technique articles
- Event recaps and competition results
- Student spotlights and success stories
- Boxing/MMA news commentary

### Internal Linking
- Each course page should link to related courses
- All pages should link to the membership page
- Schedule page should link to each course's detail page
- Footer could include a sitemap-style link list
