# SEO Strategy — Legacy Boxing & Combat Sports Academy

**Domain:** www.legacy-boxing.com  
**Data source:** Google Search Console lifetime export (May 2025 – Apr 21, 2026)  
**Last updated:** 2026-04-21

---

## Current Standing (Lifetime Totals)

| Metric | Value |
|---|---|
| Total clicks | ~2,063 |
| Total impressions | ~59,000 |
| Overall CTR | ~3.5% |
| Average position | ~12 |
| Mobile share | **70%** (1,449 clicks) |
| Desktop share | 28% (583 clicks) |

**Traffic trajectory:** Near-zero at launch (May 2025) → ~150 impressions/day by Sep 2025 → ~200 impressions/day by Jan 2026. Growth is real but plateauing — needs strategic acceleration.

---

## The Core Problem: Homepage Dependency

The homepage receives **1,844 of ~2,063 total clicks (89%)**. Every inner page combined accounts for only ~11% of clicks. This is fragile — it means inner pages are showing up in search but failing to earn clicks.

| Page | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| `/` (home) | 1,844 | 31,413 | 5.87% | 12.29 |
| `/pages/courses/private-training/` | 57 | 4,209 | **1.35%** | 7.22 |
| `/pages/courses/boxing/` | 49 | 4,650 | **1.05%** | 9.21 |
| `/pages/courses/mma/` | 47 | 6,662 | **0.71%** | 11.71 |
| `/pages/courses/youth-programs/` | 20 | 1,576 | 1.27% | 7.97 |
| `/pages/membership/` | 9 | 3,119 | **0.29%** | 6.15 |
| `/pages/contact/` | 8 | 3,006 | **0.27%** | 6.43 |
| `/pages/gallery/` | 8 | 2,995 | **0.27%** | 5.67 |
| `/pages/courses/schedule/` | 7 | 1,372 | 0.51% | 9.09 |
| `/pages/events/keystone-games/` | 6 | 633 | 0.95% | 5.55 |
| **`/pages/pricing/` (ghost page)** | 6 | 71 | **8.45%** | 5.70 |

The membership page has 3,119 impressions at position 6.15 with a **0.29% CTR**. The typical floor for a legitimate fitness business at position 6 is 4–6%. Something is broken in the title/description — people are seeing it and choosing not to click.

### Ghost page: `/pages/pricing/`
This URL does not exist in the codebase but is still indexed and receiving clicks (8.45% CTR — the highest of any inner page). People clearly want a pricing page. **Priority action: either create this page or redirect it to `/pages/membership/`.**

---

## Top Keyword Opportunities

### Brand queries (should all be position 1–3)

| Query | Clicks | Impressions | CTR | Position | Issue |
|---|---|---|---|---|---|
| legacy boxing | 339 | 3,175 | 10.68% | **7.81** | Own brand at position 8 — unacceptable |
| legacy boxing gym | 41 | 1,227 | 3.34% | **9.71** | 1,227 impressions at position 10 |
| legacy boxing club | 7 | 408 | 1.72% | **14.21** | Brand confusion with NJ/other gyms |
| legacy mma | 3 | 139 | 2.16% | 23.38 | Completely off radar |

"Legacy boxing" sitting at position 7.81 for the gym's own brand name is the clearest signal that the Google Business Profile (GBP) is not fully optimized, or there's significant brand confusion with other "Legacy Boxing" entities (NJ, Vero Beach, etc. all appear in query data).

### High-volume non-brand (strong performers to protect)

| Query | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| boxing gyms near me | 55 | 449 | 12.25% | 4.68 |
| boxing near me | 36 | 240 | 15.00% | 2.75 |
| boxing state college | 50 | 194 | 25.77% | **1.56** ✅ |
| boxing classes near me | 24 | 236 | 10.17% | 4.78 |
| mma state college | 17 | 415 | 4.10% | 4.44 |

"Boxing state college" at position 1.56 with 25.77% CTR is the strongest non-brand result. Protect this and expand it.

### High-impression, near-zero-click (biggest growth lever)

These queries show the site is indexing for the right things but either the position is too low or the title/description isn't compelling enough:

| Query | Impressions | Clicks | Position | Opportunity |
|---|---|---|---|---|
| mma state college | 415 | 17 | 4.44 | MMA page needs better meta — 4.1% CTR at pos 4 is terrible |
| boxing gyms near me | 449 | 55 | 4.68 | Good CTR (12%) — hold and improve |
| jiu jitsu state college | 124 | 6 | 9.19 | No dedicated page for Jiu Jitsu/Kosen Judo |
| derek roth | 124 | 6 | 8.35 | No dedicated coach/about page |
| muay thai near me | 75 | 1 | 6.45 | No dedicated Muay Thai page |
| kickboxing near me | 32 | 4 | 4.97 | No dedicated kickboxing page |
| penn state boxing | 176 | 0 | 16.86 | Huge Penn State audience untapped |
| psu boxing | 127 | 1 | 14.04 | Same opportunity |
| penn state mma | 86 | 1 | 9.81 | Same opportunity |
| keystone games 2026 | 6 | 0 | 6.67 | Event page exists but needs optimization |
| muay thai state college pa | 35 | 0 | 7.80 | No dedicated page |

---

## Priority Actions

### P0 — Fix immediately

**1. Create or redirect `/pages/pricing/`**
This URL has 8.45% CTR (highest of any inner page) and is currently a 404. Options:
- Create a dedicated pricing/membership page at this URL
- Add a server-side redirect from `/pages/pricing/` → `/pages/membership/`
- At minimum, add it to the Vite MPA input pointing to the membership content

**2. Rewrite inner page meta titles and descriptions**
The membership, contact, gallery, boxing, and MMA pages all have sub-1% CTR at positions where 4–8% is achievable. The titles are not giving people a reason to click.

Current pattern (inferred from position/CTR data) appears generic. New pattern:

```
Title: [Specific benefit] Near Penn State | [Page type] | Legacy Boxing
Description: [Lead with "first class free" or specific hook]. USA Boxing certified coaches. [2–3 sentence value prop]. Sign up today.
```

Examples:
- MMA page: `"MMA Classes Near Penn State, State College PA | Legacy Boxing"` → `"Train MMA with UFC-level coaching near Penn State. Boxing, Muay Thai & Judo under one roof. First class free — join any weeknight class."`
- Membership: `"Boxing Gym Memberships State College PA | Legacy Boxing"` → `"Flexible month-to-month memberships starting at [price]. No contracts, USA Boxing certified gym. First class free. See all plans."`
- Gallery: Skip the gallery — make it convert. Redirect gallery clicks to contact or membership.

**3. Add AggregateRating schema to homepage and course pages**
Reviews/star ratings dramatically increase CTR. Even if pulled from Google reviews, structured AggregateRating schema can trigger rich snippet stars. Add a new type to `pages/scripts/jsonld/types.ts` and wire it into the homepage and boxing/MMA/youth schemas.

---

### P1 — High impact, near-term

**4. Build a Penn State landing page**
"Penn State boxing" (176 impressions), "psu boxing" (127), "penn state mma" (86) all have zero or near-zero clicks. Create `/pages/penn-state/` targeting students specifically. This is a captive audience of ~47,000 potential members within walking/biking distance.

**5. Build dedicated discipline pages**
Currently missing dedicated pages for:
- Muay Thai (`/pages/courses/muay-thai/`)
- Kosen Judo (`/pages/courses/judo/`)
- Kickboxing (could be part of MMA or standalone)

"Muay thai near me" (75 impressions), "jiu jitsu state college" (124 impressions), "kickboxing near me" (32 impressions) are all actively searched but landing on pages that only mention these disciplines tangentially.

**6. Create a coach/about page for Derek Roth**
"derek roth" gets 124 impressions and 6 clicks at position 8.35 with no dedicated page to land on. He's USA Boxing Coach of the Year 2023 — this is a unique trust signal that deserves its own page and Person schema.

**7. Improve the Keystone Games event page**
"Keystone games 2026" shows 6 impressions with 0 clicks at position 6.67. The event runs August 1–2, 2026 — as the date approaches, search volume will spike. The page needs:
- SportsEvent schema already exists (✅) — verify it validates in Google Rich Results Test
- Add registration/registration-link to the schema and page content
- Target additional queries: "amateur boxing pennsylvania 2026", "ncba boxing 2026", "usa boxing state college"

---

### P2 — Compound growth

**8. Content/article strategy targeting informational queries**
Many high-volume queries come from people who aren't ready to sign up yet — they're researching. Capturing these with articles builds topical authority:

- "Is boxing good for fitness?" → Lead into class schedule CTA
- "How to start boxing as an adult beginner" → Lead into free first class
- "What to expect at your first MMA class" → Reduces barrier to trial
- "Boxing vs MMA: which is right for you?" → Links to both course pages

Articles already have an infrastructure (`/pages/articles/`). Use it.

**9. Women's boxing and kickboxing content**
Multiple zero-click queries: "female boxing classes near me" (2 impressions, 50% CTR!), "women's boxing classes near me", "kickboxing for women near me", "women kickboxing". The gym clearly serves women but the homepage and course pages don't foreground it. A dedicated section or landing page would convert this demand.

**10. Improve internal linking from homepage to inner pages**
The homepage gets 31,413 impressions and 1,844 clicks — it's the gateway. But inner pages have independent poor performance. Adding strong navigational prompts on the homepage that point to specific course pages (with keyword-rich anchor text) can pass PageRank and improve inner page rankings.

---

## Competitive Landscape

| Competitor | URL | Position | Threat Level |
|---|---|---|---|
| Central PA MMA (CPAMMA) | cpamma.com | Strong local presence, Penn State partner | **High** |
| Lombard MMA | lombardmma.com | 20+ year presence, Yelp/directory dominance | Medium |
| American Top Team–Happy Valley | — | Bo Nickal affiliation, recent launch | **High (rising)** |
| State College MMA | statecollegemma.com | Exists but weaker digital presence | Low |

**Key threat: American Top Team (Bo Nickal's gym)** — NCAA champion, high-profile, brand new. Will rapidly accumulate reviews and media coverage. Legacy Boxing must establish clear differentiation: USA Boxing certification, Derek Roth's credentials, youth programs, competition track record (Keystone Games hosting).

**Key advantage to press:** Legacy Boxing appears 4x in top results for "boxing gym state college pa" and ranks #1 for "boxing state college" (pos 1.56). CPAMMA is stronger on Muay Thai/BJJ branding. Legacy should own the boxing-specific queries while acknowledging the broader MMA offering.

---

## Technical SEO Checklist

- [x] Sitemap auto-generated (`vite-plugin-sitemap`)
- [x] Canonical URLs on all pages
- [x] Open Graph tags on all pages
- [x] Twitter card tags on all pages
- [x] JSON-LD structured data on all pages (validated at `tsc` time)
- [x] Mobile-first responsive design
- [x] Inter variable font preloaded
- [x] WebP image optimization at build
- [x] `robots.txt` present
- [ ] AggregateRating schema (missing — high CTR impact)
- [ ] `/pages/pricing/` 404 (indexed, receiving traffic, no destination)
- [ ] Inner page meta titles/descriptions need rewrite
- [ ] VideoObject schema for training videos in `/public/`
- [ ] Penn State–targeted landing page
- [ ] Dedicated Muay Thai / Judo pages
- [ ] Derek Roth coach/about page with Person schema

---

## Schema types in use

Defined in `pages/scripts/jsonld/types.ts`, validated at build time by `tsc`:

| Type | Pages using it |
|---|---|
| `WebSite` | Home |
| `SportsActivityLocation` + `ExerciseGym` + `MartialArtsSchool` | Home (business) |
| `Course` + `FAQPage` | Boxing, MMA, Youth Programs, Private Training |
| `Service` | Private Training |
| `SportsEvent` | Keystone Games |
| `Article` / `BlogPosting` | Article pages |
| `BreadcrumbList` | All pages |

**To add `AggregateRating`:** Add the interface to `types.ts`, extend the business schema in `pages/scripts/jsonld/business.ts`, and pull review count/rating from a maintained constant in `shared.ts`.

---

## Tracking & Measurement

- **GA4 property:** G-9LQ8HHZE9B (via `vite-plugin-radar`)
- **GSC property:** legacy-boxing.com
- **Baseline CTR targets for inner pages:** 4% within 60 days of meta rewrite
- **Priority pages to monitor weekly:** MMA, Membership, Boxing course
- **Key metric:** Inner pages' share of total clicks (currently 11% — target 25%+)
