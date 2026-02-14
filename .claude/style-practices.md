# Legacy Boxing — Style Practices

> Last updated: 2026-02-14

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 6.3.5 | Build tool (MPA mode, `appType: 'mpa'`) |
| Tailwind CSS | 4.x | Utility-first CSS — uses CSS-native `@theme` config, NOT `tailwind.config.js` |
| TypeScript | 5.8.x | Strict mode, ES2020 target, ESNext modules |
| vite-plugin-html-inject | 1.1.2 | `<load src="..." />` component injection |
| vite-plugin-radar | 0.10.0 | Google Analytics (`G-9LQ8HHZE9B`) |
| vite-plugin-sitemap | 0.8.2 | Auto-generated sitemap |
| vite-plugin-imagemin | 0.6.1 | Image optimization (WebP quality: 30) |

## Domain & Hosting

- Domain: `www.legacy-boxing.com`
- Sitemap hostname: `https://www.legacy-boxing.com`

---

## Design Tokens

Defined in `pages/style.css` via Tailwind v4 `@theme`:

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| `boxing-red` | `--color-boxing-red` | `#c40110` | Primary brand red — CTAs, accent text, headings, hover states, schedule blocks |
| `legacy-red` | `--color-legacy-red` | `#6f1712` | Darker red — schedule table, private training blocks, secondary backgrounds |

## Font

- **Inter** — variable weight (100–900), self-hosted
- Files: `pages/fonts/Inter-VariableFont_opsz,wght.ttf`, `pages/fonts/Inter-Italic-VariableFont_opsz,wght.ttf`
- Fallback: system `sans-serif`

## Color Palette (by usage)

| Context | Classes |
|---------|---------|
| Page background | `bg-slate-950` |
| Header/footer background | `bg-black` |
| Card background | `bg-gray-800/50`, `bg-slate-900`, `bg-slate-800/50` |
| Primary text | `text-white` |
| Secondary text | `text-slate-300`, `text-slate-400` |
| Muted text | `text-slate-500` |
| Accent text | `text-boxing-red` |
| Primary CTA background | `bg-boxing-red` with `hover:bg-red-700` |
| Secondary CTA | `bg-white text-black` |
| Schedule colors | `bg-boxing-red`, `bg-legacy-red`, `bg-blue-700`, `bg-orange-500`, `bg-lime-700`, `bg-purple-800`, `bg-[#1E407C]` |

## Border & Card Styles

| Pattern | Classes |
|---------|---------|
| Standard card | `bg-gray-800/50 border border-slate-700 rounded-lg shadow-xl p-8` |
| Rounded container | `rounded-xl` or `rounded-lg` |
| Section separator | `border-l-4 border-boxing-red` or `border-l-4 border-l-slate-700` |
| Header shadow | `shadow-sm shadow-gray-700` |

---

## Layout Patterns

### Page Skeleton

Every page follows this exact structure:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="[relative-path]/style.css" />
    <link rel="canonical" href="https://www.legacy-boxing.com/pages/[path]/" />
    <!-- OG tags, description, keywords, favicon, title -->
  </head>
  <body class="bg-slate-950 text-white flex flex-col min-h-screen">
    <load src="/pages/components/header.html" />
    <div class="mx-10 py-10">
      <load src="/pages/[section]/[content].html" />
    </div>
    <load src="/pages/components/footer.html" />
    <script type="module" src="[relative-path]/scripts/responsive-header.ts"></script>
  </body>
</html>
```

**Root `index.html` is special** — it also loads `banner.html` and `main.ts` (which imports `style.css`).

### Content Wrapper

- Standard: `mx-10 py-10` (most pages)
- Wide: `mx-5 py-10` (schedule page, for the wide table)

### Section Container

```
max-w-4xl mx-auto  — standard content width
max-w-6xl mx-auto  — wider content (gallery, schedule)
max-w-7xl mx-auto  — full-width sections
max-w-3xl mx-auto  — narrow content (membership cards)
```

### Section Heading (Signature Pattern)

The red vertical bar + heading used consistently on all pages:

```html
<div class="flex items-center gap-4 mb-6">
  <div class="h-10 w-1.5 bg-boxing-red rounded-full"></div>
  <h2 class="text-3xl md:text-4xl font-bold">Section Title</h2>
</div>
```

### Two-Column Course Layout

Course pages use a 16-column grid for content + sidebar:

```html
<div class="grid grid-cols-1 md:grid-cols-16 gap-12 mt-10">
  <div class="md:col-span-9"><!-- Main content --></div>
  <div class="md:col-span-7"><!-- Sidebar card --></div>
</div>
```

### Sidebar Benefit Card

```html
<div class="bg-gray-800/50 border border-slate-700 rounded-lg shadow-xl p-8 h-fit sticky top-24">
  <h3 class="text-2xl font-bold mb-6">Card Title</h3>
  <ul class="space-y-5">
    <li class="flex items-center gap-4">
      <svg><!-- green checkmark --></svg>
      <span class="text-slate-300 text-lg">Benefit text</span>
    </li>
  </ul>
</div>
```

---

## Component Patterns

### CTA Buttons

**Primary (Red pill):**
```html
<a href="..." class="inline-flex items-center gap-2 bg-boxing-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform hover:scale-105 shadow-lg shadow-red-900/50">
  Call to Action
  <svg><!-- right arrow icon --></svg>
</a>
```

**Secondary (White pill):**
```html
<a href="..." class="inline-flex items-center gap-2 bg-white text-black font-bold py-4 px-10 rounded-full text-lg transition-transform hover:scale-105 shadow-lg">
  Secondary Action
  <svg><!-- right arrow icon --></svg>
</a>
```

### Card Grid (e.g., "Why Train" sections)

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
  <div class="bg-gray-800/50 border border-slate-700 rounded-lg p-6 shadow-lg">
    <div class="flex items-center gap-3 mb-3">
      <svg><!-- icon --></svg>
      <h3 class="text-xl font-bold">Card Title</h3>
    </div>
    <p class="text-slate-300 leading-relaxed">Description</p>
  </div>
</div>
```

### Schedule Cards

```html
<div class="bg-gray-800/50 rounded-xl border border-slate-700 p-6 shadow-xl">
  <h3 class="text-2xl font-bold mb-4">Schedule Title</h3>
  <div class="space-y-4">
    <div class="flex justify-between items-center border-b border-slate-700 pb-3">
      <span class="font-semibold text-lg">Day</span>
      <span class="text-boxing-red font-bold">Time</span>
    </div>
  </div>
</div>
```

### Nav Links

```html
<a href="/pages/..." class="block px-2 py-1 hover:underline hover:text-boxing-red transition">
  Link Text
</a>
```

---

## Responsive Breakpoints

| Prefix | Screen | Typical Usage |
|--------|--------|---------------|
| (none) | Mobile-first | Single column, stacked layout |
| `sm:` | ≥640px | 2-column grids |
| `md:` | ≥768px | Desktop nav, 2-column course layout, horizontal flex |
| `lg:` | ≥1024px | 3-4 column grids |

## Image Handling

- All images in `public/` directory
- `loading="eager"` + `fetchpriority="high"` for above-the-fold hero/logo images
- `loading="lazy"` for below-fold iframes (Google Maps)
- `object-cover` for responsive image fills
- Common sizes: `h-64`, `h-80`, `h-96` with `w-full`
- Alt text: descriptive, keyword-rich

## TypeScript Conventions

- Strict mode, no unused locals/parameters
- DOM queries use typed generics: `querySelectorAll<HTMLAnchorElement>`
- Non-null assertions (`!`) for known DOM elements
- `DOMContentLoaded` event listener pattern
- Scripts loaded as `type="module"`

## File & Folder Conventions

- Pages live in `pages/` with subdirectories per section
- Each subpage has `index.html` (scaffold) + `[name].html` (content fragment)
- Components in `pages/components/` as plain HTML fragments
- Scripts in `pages/scripts/` as TypeScript modules
- Static assets in `public/` at root level
- No nested asset folders (all flat in `public/`)
