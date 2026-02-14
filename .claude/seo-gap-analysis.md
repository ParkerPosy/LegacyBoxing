# SEO Gap Analysis — Search Console Data Review

> Based on 6 months of Google Search Console data (Aug 13, 2025 – Feb 12, 2026)
> Created: 2026-02-14

---

## Executive Summary

**Total Performance (6 months):** 1,258 clicks | ~37,300 impressions | ~5.1% avg CTR | avg position ~12

> **⚠️ Brand Name Collision Warning:** "Legacy Boxing" is not a unique gym name. Multiple gyms across the US (NJ, FL, OH, WA, Germany) share the name. Google conflates these businesses, inflating our impressions with queries intended for other gyms. This pollutes average CTR downward and average position upward. All metrics below should be read with this context. See [Section 6: Brand Collision Analysis](#6-brand-collision-analysis) for detailed breakdown.

**Key findings:**
1. **Homepage dominates core local queries** — ranks **#1-2** for "boxing state college" (pos 1.54), "legacy boxing state college" (pos 1.47), "boxing near me" (pos 2.2), "boxing gym near me" (pos 2.95). The reported avg position of 12.38 is **artificially inflated** by brand collision queries for other gyms where we rank 15-50+.
2. Gallery, Contact, and Membership have strong positions (5-6) but low CTR (0.1-0.17%) — meta descriptions need improvement, though some CTR depression is caused by impression noise from non-local brand queries
3. MMA page has the most impressions (4,639) of any subpage but lowest CTR (0.45%) — title/description mismatch vs. searcher intent
4. Significant content gaps: no pages for Women's Boxing, Judo, Kickboxing/Muay Thai, Self-Defense, Penn State connection, Coach Bios, or Beginners
5. Mobile accounts for 75% of traffic — mobile-first optimization is essential
6. Impressions nearly doubled (75/day → 180/day) over 6 months while avg position improved from ~20 → ~10, indicating growing domain authority
7. **~2,500–3,500 of ~37,300 total impressions (7-9%) are noise** from queries for other "Legacy" branded gyms, generic "legacy" searches, other PA city gyms, and irrelevant informational queries. Our real CTR on relevant queries is likely **6-8%**, not 5.1%.

---

## 1. Page-Level Performance Analysis

### 1A. CTR Crisis — Pages With Good Rank But Terrible CTR

These pages rank well but users aren't clicking. The title tags and meta descriptions are the problem.

| Page | Position | Impressions | CTR | Problem |
|------|----------|-------------|-----|---------|
| Gallery | 5.54 | 2,290 | **0.17%** | Generic title/description, no reason to click |
| Contact | 6.01 | 1,949 | **0.15%** | No value proposition in SERP snippet |
| Membership | 6.27 | 2,056 | **0.10%** | Bland description, no pricing hook or urgency |
| MMA | 10.93 | 4,639 | **0.45%** | High impressions but title may not match queries |

**Action Plan:**
- [x] Rewrite `<title>` and `<meta name="description">` for Gallery, Contact, Membership, and MMA pages — *Done: all 8 pages now have custom, CTR-optimized titles and descriptions*
- [x] Use action-oriented, CTR-optimized copy with unique value propositions
- [x] Include pricing signals ("from $60/mo"), urgency ("First Class Free"), and location ("State College") — *Pricing in Youth/Membership/Private Training titles; "First Class Free" in homepage + contact titles + 7/8 descriptions; "State College" in all titles*
- [ ] A/B test descriptions by monitoring CTR changes in GSC after deployment

**Proposed Title/Description Rewrites:**

**Gallery** (current CTR: 0.17%)
```
Title: Photos & Videos | Legacy Boxing & Combat Sports Academy
Description: See our fighters in action — training sessions, competition wins, and youth boxing highlights at Legacy Boxing in State College, PA.
```

**Contact** (current CTR: 0.15%)
```
Title: Contact Us — First Class Free | Legacy Boxing State College
Description: Visit Legacy Boxing at 2820 E College Ave, State College PA. Call (814) 599-1682 or drop in. Mon–Sat classes available. Your first class is free.
```

**Membership** (current CTR: 0.10%)
```
Title: Membership Plans from $60/mo | Legacy Boxing State College
Description: Boxing $80/mo, MMA $80/mo, Youth $60/mo, or combo $125/mo. No contracts required. Try your first class free at Legacy Boxing in State College, PA.
```

**MMA** (current CTR: 0.45%, 4,639 impressions)
```
Title: MMA Classes — Kosen Judo, Muay Thai & Boxing | Legacy Boxing State College
Description: Train MMA built on Kosen Judo grappling, Muay Thai striking & boxing at Legacy Boxing in State College, PA. USA Judo certified coach. First class free.
```

### 1B. Homepage — Already #1 For Core Queries, Avg Position Misleading

The homepage captures 93% of clicks (1,165). The reported avg position of 12.38 is **misleading** — it's a blended average across all queries, including hundreds of brand-collision queries for other "Legacy Boxing" gyms where we rank 15-50+.

**Actual homepage positions for queries that matter:**

| Query | Position | CTR | Status |
|-------|----------|-----|--------|
| legacy boxing state college | **1.47** | 50.5% | ✅ Dominant |
| boxing state college | **1.54** | 28.0% | ✅ Dominant |
| boxing near me | **2.2** | 14.5% | ✅ Strong |
| boxing gym near me | **2.95** | 14.8% | ✅ Strong |
| legacy gym | **2.38** | 31.3% | ✅ Strong |
| boxing classes | **2.63** | 11.1% | ✅ Strong |
| boxing clubs near me | **2.58** | 15.8% | ✅ Strong |
| boxing gym state college | **3.89** | 26.2% | ✅ Strong |
| boxing gyms near me | **4.28** | 12.2% | Good — push to top 3 |
| boxing classes near me | **4.97** | 11.0% | Good — push to top 3 |
| mma state college | **4.39** | 2.4% | ⚠️ Good rank, low CTR |
| mma gyms near me | **5.38** | 3.9% | ⚠️ Good rank, low CTR |
| legacy boxing | **7.53** | 12.1% | Mixed — brand collision depresses rank |
| legacy boxing gym | **9.76** | 3.2% | Mixed — brand collision depresses rank |

The homepage is **already on page 1** for virtually all high-intent local queries. The opportunity is not "getting to page 1" — it's:
1. Pushing positions 4-5 → top 3 (boxing gyms near me, boxing classes near me)
2. Improving CTR on MMA/martial arts queries (rank is good, snippet is weak)
3. Disambiguating from other "Legacy" gyms on generic brand queries

**Action Plan:**
- [x] Audit homepage `<title>` and `<meta description>` — *Title: "Boxing & MMA Gym in State College, PA — First Class Free | Legacy Boxing & Combat Sports Academy"*
- [x] Add more visible, crawlable text content to homepage — *Added "The Legacy Experience" programs overview section*
- [x] Ensure homepage content addresses the top 10 search queries naturally — *Content now includes boxing, MMA, Judo, youth, State College, Centre County, Penn State references*
- [ ] Add FAQ section with schema markup targeting long-tail queries — *Not yet implemented on homepage*
- [x] Strengthen internal linking from subpages back to homepage
- [x] Add "State College, PA" or "Centre County" to title tag — *Both present in title and body content*

### 1C. High-Potential Subpages (Position 7-9 — Almost Page 1)

| Page | Position | Clicks | Opportunity |
|------|----------|--------|-------------|
| Private Training | 7.43 | 35 | Already best-performing subpage, optimize to lock in top 5 |
| Boxing | 8.77 | 29 | Content enrichment to push past competitors |
| Schedule | 8.52 | 2 | Needs visible schedule content for featured snippets |

---

## 2. Query Gap Analysis — Missing Content Opportunities

### 2A. High-Impression Zero-Click Queries (Immediate Wins)

These queries generate significant impressions but zero clicks. **Critical distinction:** some are real opportunities, others are noise from brand collision or geographic irrelevance.

**Real Opportunities (act on these):**

| Query | Impressions | Position | Gap |
|-------|-------------|----------|-----|
| "combat sports academy near me" | 223 | 57.23 | Very poor ranking despite being our literal name |
| "penn state boxing" | 115 | 14.17 | No Penn State connection content |
| "psu boxing" | 77 | 12.65 | Same — no Penn State content |
| "gym in state college pa" | 70 | 82.31 | Effectively invisible |
| "penn state mma" | 61 | 10.11 | No content connecting to Penn State |
| "boxing pa" | 50 | 5.96 | Close to page 1 — PA-focused content |
| "muay thai" | 18 | 6.44 | No dedicated Muay Thai content |
| "judo" | 32 | 6.28 | No Judo page despite ranking |
| "judo near me" | 16 | 5.19 | Ranking well but no landing page |
| "kickboxing" | 26 | 1.88 | Ranking #2 with no content! |
| "kickboxing near me" | 15 | 4.87 | No kickboxing page |
| "self defense classes near me" | 23 | 7.48 | No self-defense content |

**Brand Collision Noise (IGNORE — these are for other gyms):**

| Query | Impressions | Position | Why It's Noise |
|-------|-------------|----------|----------------|
| "legacy boxing latest" | 110 | 14.58 | Google Maps "Latest" tab — could be any Legacy Boxing |
| "legacy boxing & fitness" | 47 | 19.15 | Different business entity (not our LLC name) |
| "boxing legacy" | 65 | 13.45 | Ambiguous — low position suggests brand dilution |
| "legacy boxing gym latest" | 37 | 11.03 | Maps "Latest" tab for any Legacy gym |
| "legacy mixed martial arts" | 37 | 26.70 | Different gym, position confirms mismatch |
| "legacy muay thai" | 28 | 49.86 | Position 50 = clearly not seeking us |
| "the legacy boxing gym" | 80 | 16.25 | Likely other gyms; 0 clicks confirms mismatch |
| "the legacy boxing club" | 25 | 21.52 | Other clubs |
| "legacy boxing club coach bios" | 25 | 36.24 | Other Legacy Boxing Clubs |
| "legacy kickboxing" | 20 | 25.00 | Other gyms (Bartlesville, etc.) |

### 2B. New Pages to Create (Priority Order)

**Priority 1 — Kosen Judo Page** `/pages/courses/judo/`
- Queries: "judo" (32 imp, 1 click, pos 6.28), "judo near me" (16 imp, 0 clicks, pos 5.19), "judo gyms near me" (3 imp, pos 5.33), "judo training" (2 imp, pos 2.5)
- **Already ranking page 1 with ZERO content** — a dedicated page will likely dominate top 3
- Also captures BJJ/grappling queries: "bjj near me" (26 imp, pos 8.88), "jiu jitsu near me" (84 imp, pos 7.57), "jiu jitsu state college" (86 imp, pos 9.1), "brazilian jiu jitsu near me" (11 imp, pos 8.45), "gracie jiu jitsu" (2 imp)
- **Kosen Judo is almost nonexistent in US gyms** — this page can rank nationally for "kosen judo" because there's virtually no English-language competition. National rankings build domain authority that lifts all local pages.
- Coach Roth's USA Judo brown belt + USA Judo certified instructor credentials provide authentic E-E-A-T authority
- **Content should explain:** What Kosen Judo is (ground-focused judo from Japanese university rules), how it differs from Olympic Judo (encourages newaza vs. penalizing it), its relationship to BJJ (Mitsuyo Maeda was a Kosen Judo practitioner who taught the Gracies), and why it's the ideal grappling base for MMA
- Cross-link heavily with MMA page (Kosen Judo as the grappling foundation) and kickboxing/Muay Thai page (Kosen Judo for ground, Muay Thai for striking = complete MMA)
- **This is the #1 priority because:** (a) already ranking on page 1 with no content, (b) bridges judo AND BJJ clusters (~266 combined impressions), (c) core differentiator for the entire MMA program, (d) can rank nationally (unique niche), (e) strengthens the highest-impression subpage (MMA)

**Priority 2 — About / Coach Bios Page** `/pages/about/`
- Queries: "derek roth" (88 imp, 3 clicks), "legacy boxing club coach bios" (25 imp, 0 clicks)
- Trust signal for all visitor types
- Coach credentials boost E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- Google rewards pages with clear author/coach expertise
- **Must prominently feature:** USA Boxing certification, 2023 PA Coach of the Year, USA Judo brown belt, USA Judo certified instructor, Penn State alum
- Person schema for Coach Derek Roth

**Priority 3 — Penn State / College Boxing Page** (or dedicated section on homepage)
- Queries: "penn state boxing" (115 imp), "psu boxing" (77 imp), "penn state mma" (61 imp), "penn state boxing club" (37 imp), "penn state bjj club" (11 imp), "penn state jiu jitsu" (8 imp)
- Combined: **374 impressions, 0 clicks** — massive untapped audience
- Penn State students are a core demographic
- Could be a dedicated page or a prominent section on relevant pages
- Target: "boxing near Penn State" and "Penn State combat sports"
- Leverage Bo Nickal training photo from gallery

**Priority 4 — Kickboxing / Muay Thai Page** `/pages/courses/kickboxing/`
- Queries: "kickboxing" (26 imp, pos 1.88!), "kickboxing near me" (15 imp), "muay thai near me" (44 imp), "muay thai state college pa" (6 imp), "kickboxing state college" (7 imp), "kickboxing classes near me" (8 imp), "cardio kickboxing" (8 imp), "muay thai gyms near me" (13 imp)
- Combined: **127+ impressions** across kickboxing/muay thai queries
- Already ranking #2 for "kickboxing" with zero dedicated content
- Muay Thai is the striking complement within our MMA system — cross-link with MMA page and Kosen Judo page (striking + grappling = complete MMA)

**Priority 5 — Women's Boxing Page** `/pages/courses/womens-boxing/`
- Queries: "women boxing classes near me" (4 imp), "female boxing classes near me" (2 imp), "boxing for women near me" (2 imp), "boxing gyms near me for ladies" (1 imp), "womens kickboxing" (1 imp), "womens kickboxing classes near me" (1 imp)
- Already have Women's Boxing as a separate offering ($80/mo) in JSON-LD
- Low impressions now but high-intent, low-competition local queries
- Women's fitness is a fast-growing category — early content wins

**Priority 6 — Self-Defense Page** `/pages/courses/self-defense/`
- Queries: "self defense classes near me" (23 imp), "self defense martial arts" (2 imp), "fighting classes near me" (5 imp)
- Broad appeal audience beyond combat sports enthusiasts
- Entry point for people who wouldn't search "boxing" or "MMA"

**Priority 7 — Blog / News Section** `/pages/blog/` or `/pages/news/`
- Queries: ~~"legacy boxing latest" (110 imp), "legacyboxing latest" (9 imp), "legacy boxing gym latest" (37 imp), "legacy boxing club latest" (8 imp)~~
- **⚠️ Re-assessed:** These "latest" queries are Google Business Profile navigation (Maps "Latest" tab), likely for multiple Legacy gyms nationwide. They do NOT represent demand for a blog on our website.
- A blog would still be valuable for **fresh content signals**, competition results, and long-tail keyword capture (e.g., "boxing training tips", "Penn State boxing updates")
- But this is **lower priority** than content pages targeting proven query clusters
- Don't invest in a blog solely to capture "latest" queries — that's Maps behavior, not website search

**Priority 8 — FAQ Page** (or FAQ sections on existing pages)
- Can target long-tail queries like: "boxing classes near me for beginners", "boxing for kids near me for beginners", "toddler boxing classes near me", "boxing gyms near me with sparring"
- FAQ schema markup → potential featured snippets
- Addresses common objections/questions before first visit

### 2C. Query-to-Page Mapping Gaps

Queries that get impressions but land on the wrong page or have no good landing page:

| Query Cluster | Current Landing | Better Landing |
|---------------|----------------|----------------|
| "mma state college", "mma near me" | Homepage (diluted) | MMA page — needs enrichment |
| "jiu jitsu near me", "bjj near me" | Homepage/MMA | Dedicated BJJ section or page |
| "muay thai near me" | Homepage | Kickboxing/Muay Thai page (new) |
| "wrestling classes near me" | None | Add wrestling content to MMA page |
| "boxing classes for kids/teens near me" | Maybe youth page | Youth page — verify it targets these queries |
| "private boxing lessons near me" | Private Training | Verify title matches "private boxing lessons" |
| "beginner boxing classes near me" | None | Boxing page — add beginner-focused section |
| "gym(s) in state college pa" | Homepage (pos 39-82!) | Homepage — needs stronger local content |

> **Not in this table:** Queries like "college boxing", "boxing colleges", "colleges with boxing teams" etc. These are **informational queries** about NCAA/collegiate boxing programs, not people looking for a local gym. We appear due to proximity to Penn State, but these searchers want to know if boxing exists as a college sport. They represent ~170 impressions of noise across 20+ query variants. A Penn State page could incidentally capture some, but these aren't direct opportunities.

---

## 3. Technical SEO Optimizations

### 3A. Title Tag Formula (Apply to All Pages)

Current titles are basic. Recommended formula for local service businesses:

```
[Primary Keyword] — [Differentiator] | [Brand] [Location]
```

Examples:
- "Boxing Classes for All Levels — First Class Free | Legacy Boxing State College"
- "Youth Boxing & MMA Programs Ages 5-17 | Legacy Boxing State College PA"

### 3B. Meta Description Formula

Every description should contain:
1. Primary keyword (near the start)
2. Unique value proposition or pricing signal
3. Location signal
4. Call to action

Max 155 characters. Current descriptions are too generic.

### 3C. Internal Linking Strategy

Current site has minimal cross-linking between pages. Each page should link to:
- At least 2-3 other relevant pages
- Homepage (anchor text: "Legacy Boxing State College" or similar)
- Membership page (conversion path)
- Schedule page (decision enabler)

Specific links to add:
- [x] Boxing page → ~~Women's Boxing (new),~~ Youth Programs, Private Training — *Links to MMA, Youth, Private Training, Membership, Schedule added*
- [x] MMA page → Schedule, Membership, Private Training — *"Continue Exploring" section added*
- [ ] Youth page → Schedule, Membership, Gallery — *Only links to Contact currently*
- [x] All course pages → Membership (pricing CTA) — *Boxing and MMA have links; youth and private-training still missing*
- [x] All course pages → Schedule (class times CTA) — *Boxing and MMA have links; youth and private-training still missing*
- [x] Homepage → All subpages with descriptive anchor text (not "Learn More") — *"The Legacy Experience" section links to all programs*

### 3D. Schema Markup Expansion

Current: `SportsActivityLocation` JSON-LD (good foundation)

Add:
- [x] `FAQPage` schema on relevant pages — *Added to MMA page (7 Q&As); not yet on other pages*
- [x] `Course` schema for each program (boxing, MMA, youth, etc.) — *Added to boxing, MMA, and youth-programs index.html*
- [ ] `Review` / `AggregateRating` schema if reviews are available
- [ ] `Event` schema for competitions, open houses, or special events
- [x] `Person` schema for Coach Derek Roth on the about page — *Embedded as `founder` in main JSON-LD with credentials, certifications, awards*
- [x] `BreadcrumbList` schema for navigation hierarchy — *Added to all 8 subpage index.html files*

### 3E. Image SEO

Three images appear in Google Image search results:
- `legacy-boxing-combat-sports-academy_youth-training-session-women-coach.jpg` (4 imp)
- `legacy-boxing-combat-sports-academy_gym-training-photo-penn-state-bo-nickal.jpg` (4 imp)
- `action-shot.jpg` (3 imp)

Action:
- [ ] Ensure all images have descriptive, keyword-rich alt text
- [ ] Add `width` and `height` attributes for CLS prevention
- [ ] Consider adding structured data for key images
- [ ] Bo Nickal connection is generating impressions — leverage on Penn State page

---

## 4. Content Enrichment — Existing Pages

### 4A. Homepage Content Gaps

The homepage needs to naturally incorporate these high-value keywords that it currently ranks poorly for:
- "combat sports academy" (pos 27.64) — this is literally the business name
- "gym in state college pa" (pos 82.31) — should be top 5
- "boxing gym" (pos 4.81) — close, push to top 3

**Recommended additions:**
- [x] An "About Us" paragraph section with natural keyword usage — *"The Legacy Experience" section added*
- [x] A "Programs Overview" section with links to each course page — *Covers Boxing, Women's Boxing, MMA, Youth with pricing and links*
- [ ] Testimonial/social proof section — *Has USA Boxing LBC badge and coach credentials; no customer testimonials yet*
- [ ] FAQ accordion with schema markup — *Not yet on homepage*
- [x] "Serving State College, Penn State & Centre County" content block — *"Train with USA Boxing certified coaches… in Centre County" and "boxing gym in State College" present*

### 4B. MMA Page — Highest Impression Count, Lowest CTR — THE Kosen Judo Opportunity

The MMA page gets 4,639 impressions (most of any subpage) but only 0.45% CTR. This is our biggest single-page improvement opportunity.

Ranking queries for this page likely include: "mma gyms near me" (181 imp), "mma state college" (252 imp), "mma near me" (84 imp), "jiu jitsu near me" (84 imp), "muay thai near me" (44 imp), "mma classes near me" (34 imp)

**The Problem:** The MMA page is generic. It doesn't tell searchers why Legacy's MMA program is different from any other MMA gym. The answer is Kosen Judo — but the page doesn't feature it.

**Content Strategy — Rewrite Around Kosen Judo:**
- [x] **Lead with the system:** "Boxing Striking + Kosen Judo Grappling + Muay Thai = Complete MMA." — *MMA page now structured around the three-pillar system; "Kosen Judo" appears in title and meta description but body content uses "Judo" only*
- [x] **Explain Kosen Judo prominently:** — *FAQ section covers Judo/grappling approach; body mentions Judo foundations. Full "Kosen Judo" branding in meta tags*
- [x] **Position Kosen Judo as the grappling advantage** — *MMA page positions Judo as the grappling component*
- [x] **Coach credentials block** — *"Coach Derek Roth, nationally recognized… 30 years… Penn State Boxing Club… 2023 NCBA Coach of the Year" in body*
- [x] **"What to Expect in Your First MMA Class" section** — *"Who Should Train MMA at Legacy?" section + "Beginner-Friendly" card + 7 FAQ answers*
- [ ] **Program breakdown table** — *Not implemented as a structured table*
- [x] **Cross-links:**
  - → ~~Kosen Judo page~~ (not created yet)
  - → ~~Kickboxing/Muay Thai page~~ (not created yet)
  - → Membership (pricing + free trial CTA) ✔
  - → Schedule (class times) ✔
  - → Boxing Classes ✔
  - → Private Training ✔

### 4C. Boxing Page — Needs Beginner Content

Queries like "beginner boxing classes near me" (17 imp, pos 39!) show the boxing page doesn't address beginners.

- [x] Add "No Experience Required" / "Beginner Friendly" section — *"All Levels Welcome" and "No Sparring Required" feature cards added*
- [x] Address common first-timer concerns — *"What to Expect in Our Boxing Classes" section added*
- [x] Include age ranges and fitness level expectations — *"all ages 16 and up", "No experience needed" in H1 subtext*

### 4D. Youth Programs — Already Performing Well

Position 6.91 with decent CTR (1.18%). This is the best-performing subpage by CTR ratio.

- [ ] Add content targeting "boxing for kids near me" (13 imp), "kids boxing near me" (9 imp), "toddler boxing classes" (1 imp) — *Page has keyword-enriched content; exact query-match phrases could be stronger*
- [x] Mention specific age ranges prominently — *"ages 8–16" in title meta and body content*
- [ ] Add parent-focused FAQs (safety, supervision, etc.)
- [ ] Consider "teens" terminology — "teen boxing classes" (2 imp), "boxing for teens near me" (2 imp)

### 4E. Schedule Page — Featured Snippet Opportunity

Schedule-type content is prime for featured snippets (tables, lists).

- [ ] Ensure schedule is in a proper HTML `<table>` with headers
- [ ] Add class names, times, and instructor info in structured format
- [ ] Use `<caption>` or heading to contextualize the table
- [ ] Target "boxing class schedule State College" and "MMA schedule"

---

## 5. Local SEO Enhancements

### 5A. "Near Me" Query Dominance

"Near me" queries represent a massive opportunity cluster:

| Query | Impressions | Current Position | Target |
|-------|-------------|-----------------|--------|
| boxing gyms near me | 262 | 4.28 | Top 3 |
| boxing near me | 117 | 2.2 | Maintain |
| boxing gym near me | 108 | 2.95 | Maintain |
| boxing classes near me | 136 | 4.97 | Top 3 |
| mma gyms near me | 181 | 5.38 | Top 3 |
| mma near me | 84 | 5.31 | Top 3 |
| jiu jitsu near me | 84 | 7.57 | Top 5 |
| martial arts near me | 30 | 8.33 | Top 5 |
| muay thai near me | 44 | 5.8 | Top 3 |
| kickboxing near me | 15 | 4.87 | Top 3 |

**Actions:**
- [x] Ensure NAP (Name, Address, Phone) is consistent across all pages — *JSON-LD has full NAP; consistent across site*
- [x] Add `LocalBusiness` breadcrumbs — *BreadcrumbList schema added to all subpages*
- [ ] Create Google Maps embed on contact page (if not already present)
- [ ] Add "Areas We Serve" content: State College, Centre County, Penn State campus, Bellefonte, Boalsburg, etc. — *"Centre County" mentioned on homepage; full service area section not yet created*
- [x] Ensure Google Business Profile matches website data exactly (already done for JSON-LD)

### 5B. Geographic Expansion Content

Zero-click queries showing geographic expansion potential:
- "martial arts state college" (74 imp, pos 7.82) — real opportunity
- "gym in state college pa" (70 imp, pos 82) — need to rank here
- "gyms in state college pa" (39 imp, pos 42) — need to rank here
- "state college martial arts" (10 imp, pos 14) — close to page 1
- "gyms state college" (11 imp, pos 30) — generic gym query

> **Note:** Many other geographic queries in the data (Erie, Allentown, Lancaster, York, Hatfield, Muncy, etc.) are for gyms in OTHER Pennsylvania cities. These are noise — we should not try to rank for "boxing gym erie pa". Focus exclusively on State College / Centre County / Penn State geography.

**Action:** Add a "Serving Centre County" or service area section to homepage and contact page.

---

## 6. Brand Collision Analysis & Competitive Intelligence

### 6A. Brand Name Collision — The "Legacy Boxing" Problem

Our gym name is not unique. Multiple unrelated businesses share the "Legacy Boxing" or "Legacy [Combat Sport]" name across the US and internationally. Google conflates these businesses in search results, which:
- **Inflates our impression count** with queries intended for other gyms (we appear but searchers skip us)
- **Deflates our CTR** (denominator is artificially large)
- **Inflates our avg position number** (we rank 30-50+ for other gyms' queries, pulling the average up)
- **Cannot be "fixed"** via SEO — this is an inherent brand name collision. The solution is **disambiguation** through strong local signals.

#### Tier 1: Explicitly Other Gyms (100% noise — ~350 impressions)

Queries that name a specific city, entity, or brand that is NOT us:

| Query | Impressions | Position | Other Gym |
|-------|-------------|----------|----------|
| "legacy boxing nj" | 13 | 55.77 | NJ gym |
| "legacy boxing belleville nj" | 9 | 38.67 | Belleville, NJ |
| "legacy boxing club nj" | 10 | 46.40 | NJ |
| "legacy boxing wayne" | 6 | 38.00 | Wayne, NJ |
| "legacy boxing club kaiserslautern" | 7 | 31.86 | Germany |
| "legacy boxing club vero beach" | 6 | 29.00 | Vero Beach, FL |
| "legacy boxing spokane" | 3 | 46.33 | Spokane, WA |
| "legacy boxing lieusaint" | 1 | 3.00 | France |
| "legacy boxing and fitness llc" | 15 | 48.93 | Different LLC |
| "legacy boxing and fitness llc photos" | 13 | 29.46 | Different LLC |
| "legacy boxing & fitness" | 47 | 19.15 | Different entity name |
| "legacy boxing and fitness" | 48 | 19.06 | Different entity |
| "legacy fitness and boxing" | 14 | 40.57 | Different entity |
| "legacy muay thai and fitness" | 12 | 67.17 | Different entity |
| "legacy combat mma & fitness" | 7 | 24.43 | Different entity |
| "legacy fitness butler pa" | 8 | 41.38 | Butler, PA |
| "legacy fitness kenosha" | 2 | 96.50 | Kenosha, WI |
| "legacy mma braselton" | 3 | 47.00 | Braselton, GA |
| "legacy burbank schedule" | 3 | 82.33 | Burbank, CA |
| "one legacy training center" | 8 | 44.38 | Different entity |
| "one legacy boxing latest" | 2 | 13.00 | Different entity |
| "legacy kickboxing, boxing studio, bartlesville" | 8 | 14.38 | Bartlesville, OK |
| "legacy combat sports, martial arts school, joplin" | 5 | 21.80 | Joplin, MO |
| "legacy youth boxing club lorain" (×2 variants) | 4 | 16-19 | Lorain, OH |
| "legacy striking academy" | 6 | 14.00 | Different entity |
| "legacy fighting academy" | 6 | 11.83 | Different entity |
| "legacy dojo jiu jitsu - muay thai" | 3 | 10.67 | Different entity |
| "legacy thai boxing" | 4 | 67.75 | Different entity |

#### Tier 2: Ambiguous Brand Queries (~1,500-2,000 noise impressions within these)

These include searchers looking for us AND searchers looking for other Legacy gyms. Click data reveals the split:

| Query | Impressions | Clicks | CTR | Position | Analysis |
|-------|-------------|--------|-----|----------|----------|
| "legacy boxing" | 2,094 | 253 | 12.1% | 7.53 | **Mostly us** — high click volume from local bias. But ~30-40% of impressions are likely from users in other markets searching for their local Legacy gym. Real CTR among our audience probably 18-20%. |
| "legacy boxing gym" | 850 | 27 | 3.2% | 9.76 | **Heavily polluted** — 3% CTR at position 10 is too low. Many impressions from other markets. Real local CTR likely 8-12%. |
| "legacy boxing club" | 307 | 3 | 1.0% | 13.8 | **Mostly NOT us** — "boxing club" matches other Legacy Boxing Clubs (NJ, Vero Beach, Kaiserslautern, Lorain). Our branding is "Academy" not "Club". |
| "legacy mma" | 94 | 3 | 3.2% | 20.5 | **Mostly noise** — position 20 and low CTR confirms mismatch |
| "legacy combat sports" | 95 | 1 | 1.1% | 5.14 | **Mixed** — good position but low CTR, some may be other gyms |
| "the legacy boxing gym" | 80 | 0 | 0% | 16.3 | **Noise** — 0 clicks = not seeking us |
| "legacy mma gym" | 54 | 0 | 0% | 12.4 | **Noise** — 0 clicks |
| "legacy mixed martial arts" | 37 | 0 | 0% | 26.7 | **Noise** — position 27 |
| "legacy muay thai" | 28 | 0 | 0% | 49.9 | **Noise** — position 50 |
| "legacy" | 433 | 0 | 0% | 1.96 | **100% noise** — generic word, not about any gym |
| "legacy address" / "legacy hours" | 15 | 0 | 0% | 1 | **Noise** — generic "legacy" business queries |
| "legacy sports" | 9 | 0 | 0% | 7.44 | **Noise** — generic |

#### Tier 3: "Latest" Tab Queries (~166 noise impressions)

These are Google Business Profile "Latest" tab queries — they trigger for ANY Legacy Boxing gym's profile:

| Query | Impressions | Position |
|-------|-------------|---------|
| "legacy boxing latest" | 110 | 14.58 |
| "legacy boxing gym latest" | 37 | 11.03 |
| "legacyboxing latest" | 9 | 13.44 |
| "legacy boxing club latest" | 8 | 13.00 |

These are NOT a content gap we should solve with a blog. They're Google Maps navigation queries for other gyms' profiles.

#### Tier 4: Other PA Cities (geographic noise — ~350+ impressions)

Queries for gyms in other Pennsylvania cities where we appear due to state-level relevance:

| Category | Example Queries | Total Impressions |
|----------|----------------|------------------|
| Hatfield, PA | "training for pro mma fighters hatfield pa" (132), "youth boxing program hatfield pa" (20) | ~157 |
| Muncy, PA | "bjj gym in muncy pennsylvania" (32) | ~32 |
| Erie, PA | "boxing gym erie pa" (9), "boxing erie pa" (5) | ~16 |
| Allentown, PA | "boxing gym allentown pa" (6), "boxing gyms allentown pa" (5) | ~14 |
| Lancaster, PA | Various | ~12 |
| York, PA | Various | ~10 |
| Reading, PA | Various | ~10 |
| Scranton, PA | Various | ~5 |

#### Tier 5: Other Branded Gyms & Irrelevant Queries (~200+ impressions)

| Category | Examples | Impressions |
|----------|----------|-------------|
| Title Boxing (chain) | "title boxing" (15), "title boxing gym" (6) | ~30 |
| Other named gyms | "first state boxing" (16), "swing state boxing" (7), "state of fitness boxing club" (7) | ~45 |
| Wrong sport | "gymnastics near me" (12), "crossfit gym in state college pa" (26) | ~50 |
| Informational only | "boxing weight classes" (24), "boxing on tv tonight" (1) | ~30 |
| Products/retail | "mma gloves near me" (1), "boxing store near me" (2) | ~10 |
| "College boxing" (NCAA) | 20+ queries about boxing in college athletics | ~170 |
| Generic gyms | "strength and conditioning gym in state college pennsylvania" (55) | ~55 |

#### Impact on Metrics

| Metric | Raw (reported) | Estimated Real (noise-adjusted) |
|--------|---------------|----------------------------------|
| Total Impressions | ~37,300 | ~34,000–35,000 relevant |
| Overall CTR | 5.1% | **~6-8%** (removing noise denominator) |
| Homepage avg position | 12.38 | **~4-6** for target queries |
| Homepage CTR | 6.15% | **~8-10%** for target queries |

#### Disambiguation Strategy

We cannot prevent Google from showing our site for other Legacy gyms' queries. We CAN make it immediately clear we're in State College:

- [x] JSON-LD with full address and geo coordinates (already done)
- [x] Add "State College, PA" to ALL page `<title>` tags (most impactful) — *All 8 page titles now include "State College"*
- [x] Add "State College" to `<meta description>` on all pages — *All 8 descriptions include "State College" or "State College, PA"*
- [ ] Consider adding "State College" to the site's visual header/hero
- [ ] Ensure Google Business Profile category and attributes are fully optimized
- [ ] The brand collision is **not fixable** — it's a shared name problem. Focus energy on owning location-qualified queries instead.

### 6B. Queries We Should Own But Don't

| Query | Impressions | Position | Issue |
|-------|-------------|----------|-------|
| "combat sports academy near me" | 223 | **57.23** | Should rank top 3 — it's our literal name! |
| "gym in state college pa" | 70 | **82.31** | Core local query, nearly invisible |
| "gyms in state college pa" | 39 | **42.10** | Basic local query, invisible |
| "beginner boxing classes near me" | 17 | **39.00** | No beginner content |
| "gyms state college" | 11 | **30.27** | Generic gym query, poor rank |
| "state college martial arts" | 10 | **14.00** | Close to page 1, should own |
| "combat sports academy" | 33 | **27.64** | Our name — should be #1 |
| "combat sports academy schedule" | 7 | **54.71** | Our name + schedule — invisible |
| "mma state college" | 252 | **4.39** | Good rank but only 2.4% CTR — snippet is weak |

> **Removed from this table:** Queries like "boxing legacy", "legacy boxing & fitness", etc. were previously listed as missed opportunities but are actually brand collision noise — searchers looking for other gyms.


### Duplicate Testimonial

- [x] **Boxing and MMA pages share the identical testimonial** — *Fixed: MMA page now uses a unique testimonial about Judo/grappling. Boxing page retains the original quote.*
  - Files: `pages/courses/boxing/boxing.html`, `pages/courses/mma/mma.html`

### Thin Content Pages (Readability & SEO Impact)

These pages have significantly less prose than the course pages (~800-1,500 words each), which creates an inconsistent experience and underperforms for indexed pages:

- [ ] **Membership page — 2 sentences of body copy.** "Explore our full list of memberships, programs, and training options. Whether you're new or experienced, there's something here for everyone." — This is the most generic copy on the entire site. A page asking people to spend money should build perceived value first. Add a short value reinforcement section above the pricing cards (what you get, what makes Legacy different, the "first class free" hook).
  - File: `pages/membership/membership.html`

- [ ] **Contact page — 4 sentences total.** No FAQ, no "what to expect on your first visit" content, no embedded schedule summary. This page is a high-intent destination (people ready to reach out) but offers almost nothing for Google to index. Add a brief "What to Expect" section and a mini-FAQ.
  - File: `pages/contact/contact.html`

- [ ] **Gallery page — 1 closing sentence.** No introduction or narrative context. Even 2-3 sentences establishing what the gallery represents ("See real training, real athletes, and the community that makes Legacy different") would add value and keywords.
  - File: `pages/gallery/gallery.html`

### MMA FAQ Verbosity Mismatch

- [ ] **MMA page FAQs are 2-3× longer than comparable content elsewhere.** Individual FAQ answers run 80-120 words each, with a conversational, chatty tone that doesn't match the confident-and-concise style of other pages. Consider tightening to 40-60 word answers with the same information density. The FAQ content itself is excellent — it just needs compression to match the site's voice.
  - File: `pages/courses/mma/mma.html`

### Private Training Tone Drift

- [ ] **Private Training page uses "elite" and staccato marketing phrases** not found elsewhere. "Focused. Personalized. Proven." as a headline and "Train without distractions. Build skills that last." are punchy copywriting patterns that feel like a different brand voice. The word "elite" appears only on this page. Acceptable for a premium service page, but should be noted as a deliberate modulation, not the default tone.
  - File: `pages/courses/private-training/private-training.html`

### Formatting Inconsistencies

- [x] **Brand name alternates between "&" and "and"** — *Standardized to "&" throughout. The only "and" instance is in JSON-LD `alternateName` field (intentional, captures "and" searches).*
  - Files: `pages/components/footer.html`, various

- [ ] **"State College, PA" vs "State College" in H1 tags** — Homepage and MMA include ", PA"; Boxing, Youth, and Private Training omit it. Standardize H1 tags to all include ", PA" for consistent geo-signals and disambiguation.
  - Files: All `index.html` entry points

- [x] **Inconsistent dash usage** — *Standardized: en-dashes (–) for all parenthetical asides and ranges, hyphens for compounds. No em-dashes. Straight apostrophes (') only, no curly.*
  - Files: Sitewide

- [x] **Footer capitalization error** — *Fixed: "beginner boxing" is now correctly lowercase.*
  - File: `pages/components/footer.html`

### Coach Bio Length Imbalance

- [ ] **Coach Marc Hessel's bio (~180 words, 4 paragraphs)** is significantly more narrative/storytelling than the other assistant coaches (~130 words, 3 paragraphs each). The anecdote about collecting boxing cards is charming but stylistically different from the credential-focused bios of Coach Marisa, Coach Donovan, and Coach Jamie. Consider either expanding the shorter bios or tightening Marc's to match.
  - File: `pages/main.html`

---

## 7. Implementation Roadmap

### Phase 1 — Quick Wins + Kosen Judo Foundation ✅ MOSTLY COMPLETE
Impact: Highest CTR improvement + plant the strategic differentiator

1. ✅ **Rewrite title tags and meta descriptions** for all 9 existing pages — "State College" in all titles, "First Class Free" in homepage + contact titles + 7/8 descriptions, Kosen Judo in MMA page title/meta
2. ✅ **Rewrite MMA page content** — Restructured around three-pillar system (Boxing + Judo + Muay Thai), beginner section, credentials block, FAQ accordion with 7 Q&As. *Note: Body content uses "Judo" rather than "Kosen Judo"*
3. ❌ **Create Kosen Judo page** — Not yet created
4. ✅ **Add internal links** between all pages — Boxing, MMA, homepage, schedule, membership all cross-linked. *Gap: Youth and Private Training pages still only link to Contact*
5. ⚠️ **Add FAQ schema** — FAQPage schema on MMA page (7 Q&As). *Gap: No FAQ schema on homepage or other pages*
6. ✅ **Fix tone/content quick wins** — Brand name standardized to "&", footer capitalization fixed, duplicate testimonial replaced, dash usage standardized. *Gap: "State College, PA" not yet consistent in all H1 tags*

### Phase 2 — Content Gaps (Partially Addressed)

7. ❌ **Create About / Coach Bios page** — Not yet created *(Person schema added as `founder` in main JSON-LD as interim)*
8. ❌ **Create Penn State page or section** — Not yet created
9. ❌ **Create Kickboxing / Muay Thai page** — Not yet created
10. ✅ **Add beginner-focused content** to Boxing and MMA pages — Boxing: "All Levels Welcome", "No Sparring Required", "What to Expect" section. MMA: "Who Should Train MMA?", "Beginner-Friendly" card, FAQ answers.
11. ✅ **Enrich homepage content** — "The Legacy Experience" programs overview, Centre County/Penn State references, USA Boxing LBC badge, coach credentials
12. ⚠️ **Enrich thin pages** — Dash usage standardized sitewide. *Remaining: Membership, Contact, and Gallery pages still have thin content; MMA FAQ verbosity not yet tightened*

### Phase 3 — Expansion Pages (Not Started)

13. ❌ **Create Women's Boxing page**
14. ❌ **Create Self-Defense page**
15. ❌ **Consider Blog / News section**

### Phase 4 — Technical & Schema ✅ MOSTLY COMPLETE

16. ✅ **Add Course schema** to boxing, MMA, and youth-programs pages
17. ⚠️ **Add FAQPage schema** — Done on MMA page only
18. ✅ **Add BreadcrumbList schema** — All 8 subpages
19. ✅ **Add Person schema** for coaches — Coach Derek Roth as `founder` in main JSON-LD with credentials, certifications, awards
20. ❌ **Optimize schedule page** for featured snippet
21. ❌ **Image SEO audit** — alt text, dimensions, structured data

---

## 8. KPIs to Track

| Metric | Current Baseline | Adjusted Baseline (noise-corrected) | 3-Month Target | 6-Month Target |
|--------|-----------------|--------------------------------------|----------------|----------------|
| Total Clicks/day | ~8 | ~8 (clicks already real) | 15 | 25 |
| Avg Position (all) | 12.4 | ~6 (for target queries) | 5 | 3-4 |
| Homepage CTR | 6.15% | ~8-10% (target queries) | 12% | 18% |
| Gallery CTR | 0.17% | ~0.3-0.5% (still low) | 3% | 5% |
| Membership CTR | 0.10% | ~0.2-0.3% (still low) | 3% | 5% |
| Contact CTR | 0.15% | ~0.3-0.5% (still low) | 3% | 5% |
| MMA CTR | 0.45% | ~0.8-1% (still low) | 3% | 5% |
| Pages ranking top 5 | 3 | 5-6 (more than we thought) | 7 | 9+ |
| Indexed pages | 9 | 9 | 14 | 17+ |

---

## 9. Appendix — Query Cluster Mapping

### Cluster: Boxing (core)
`boxing gyms near me` (262) + `boxing near me` (117) + `boxing gym near me` (108) + `boxing classes near me` (136) + `boxing gym` (42) + `boxing classes` (27) + `boxing lessons near me` (39) + `boxing` (160)
**Total: ~891 impressions** → Landing: Boxing page + Homepage

### Cluster: MMA
`mma gyms near me` (181) + `mma state college` (252) + `mma near me` (84) + `mma classes near me` (34) + `mma gym near me` (18) + `mma` (9) + `penn state mma` (61) + `state college mma` (61)
**Total: ~700 impressions** → Landing: MMA page (rewrite around Kosen Judo system)

**Strategy:** Rewrite MMA page to lead with "Boxing Striking + Kosen Judo Grappling + Muay Thai = Complete MMA." Cross-link to Kosen Judo page (grappling deep dive) and Kickboxing page (striking). The Kosen Judo angle is what makes this page different from every other MMA gym's page — lean into it hard.

### Cluster: Youth/Kids
`boxing classes for kids near me` (15) + `kids boxing classes near me` (19) + `boxing for kids near me` (13) + `kids boxing near me` (9) + `kids boxing` (5) + `youth boxing near me` (8) + `teen boxing classes` (2) + `mma for kids near me` (4) + `kids mma classes near me` (1)
**Total: ~76 impressions** → Landing: Youth Programs page

### Cluster: BJJ/Jiu-Jitsu/Judo/Kosen Judo (THE Kosen Judo Capture Zone)
`bjj near me` (26) + `jiu jitsu near me` (84) + `jiu jitsu state college` (86) + `brazilian jiu jitsu near me` (11) + `bjj gyms near me` (7) + `jiujitsu near me` (2) + `judo` (32) + `judo near me` (16) + `gracie jiu jitsu` (2) + `judo gyms near me` (3) + `judo training` (2) + `jiu jitsu classes near me` (2) + `jiu jitsu gyms near me` (3) + `jiu jitsu schools near me` (2)
**Total: ~278 impressions** → Landing: Kosen Judo page (NEW, Priority 1) + MMA page (enriched)

**Strategy:** Kosen Judo content captures BOTH judo AND BJJ/grappling searchers because:
1. Judo seekers find a ground-focused judo style (what many actually want vs. Olympic rules)
2. BJJ seekers discover the historical root of their art (Mitsuyo Maeda = Kosen Judo practitioner)
3. "Grappling near me" / "ground fighting" queries get a unique answer
4. "Jiu jitsu state college" (86 imp!) specifically needs a local landing page

No other gym in the area can compete for these queries with authentic Kosen Judo credentials.

### Cluster: Muay Thai / Kickboxing
`kickboxing near me` (15) + `muay thai near me` (44) + `kickboxing` (26) + `muay thai` (18) + `kickboxing state college` (7) + `muay thai state college pa` (6) + `kickboxing classes near me` (8) + `cardio kickboxing` (8) + `muay thai gyms near me` (13) + `kick boxing classes near me` (7)
**Total: ~152 impressions** → Landing: None! (Critical gap)

### Cluster: Penn State / College

**Real opportunity (Penn State-specific):**
`penn state boxing` (115) + `psu boxing` (77) + `penn state mma` (61) + `penn state boxing club` (37) + `penn state mma club` (29) + `psu boxing club` (26) + `penn state bjj club` (11) + `penn state jiu jitsu` (8) + `penn state club boxing` (6) + `does penn state have boxing` (2) + `mma psu` (2)
**Total: ~374 impressions** → Landing: None! (Genuine massive gap)

**Informational noise (NCAA/general college boxing — low value):**
`college boxing` (29) + `colleges with boxing` (22) + `boxing colleges` (21) + `colleges for boxing` (14) + `boxing collage` (12) + `what colleges have boxing` (12) + `colleges with boxing teams` (11) + `colleges with boxing programs` (10) + `college boxing teams` (7) + `boxing in college` (6) + `is there college boxing` (6) + `collegiate boxing` (5) + `boxing college` (5) + various others
**Total: ~170+ impressions** → Informational queries about whether boxing is a college sport. Low direct conversion value. A Penn State page may capture some incidentally.

### Cluster: Women's Boxing/Fitness
`women boxing classes near me` (4) + `female boxing classes near me` (2) + `boxing for women near me` (2) + `boxing gyms near me for ladies` (1) + `womens kickboxing` (1) + `womens kickboxing classes near me` (1)
**Total: ~11 impressions** → Landing: None (but high-intent, low-competition)

### Cluster: Self-Defense
`self defense classes near me` (23) + `self defense martial arts` (2) + `fighting classes near me` (5)
**Total: ~30 impressions** → Landing: None

### Cluster: Brand + Location

**Definitively our queries (location-qualified):**
`legacy boxing state college` (307) + `legacy boxing and combat sports academy` (16) + `legacyboxing` (28) + `legacy gym` (16) + `legacy boxing` (2094, ~60% ours) + `legacy combat sports` (95, ~50% ours)
**Estimated real impressions: ~1,670** → Landing: Homepage

**Brand collision noise (other Legacy gyms):**
`legacy boxing gym` (850, ~50% noise) + `legacy boxing club` (307, ~90% noise) + `legacy mma` (94, ~80% noise) + `the legacy boxing gym` (80) + `boxing legacy` (65) + `legacy mma gym` (54) + all NJ/FL/Germany/OH/etc. variants (~350) + "latest" queries (~166) + `legacy` (433, 100% noise)
**Estimated noise: ~1,700+ impressions** that inflate the brand cluster and depress CTR

> The brand cluster is our strongest performer on queries we actually own. "Legacy boxing state college" at 50.5% CTR and position 1.47 proves the site is dominant when the location qualifier eliminates brand collision.

### Cluster: Private Training
`private boxing lessons near me` (10) + `private mma training` (9) + `private mma lessons` (7) + `boxing personal trainer near me` (1) + `boxing coaches near me` (6)
**Total: ~33 impressions** → Landing: Private Training page (already performing best)
