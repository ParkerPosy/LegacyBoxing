# SEO Gap Analysis — Search Console Data Review

> **Data sources:**
> - Lifetime export: May 1, 2025 – Feb 15, 2026 (1,688 clicks | 29,996 impressions)
> - 3-month export: Nov 20, 2025 – Feb 19, 2026 (673 clicks | 14,157 impressions)
> Created: 2026-02-14 | Updated: 2026-02-21

---

## Executive Summary

**Total Performance (lifetime ~9.5 months):** 1,688 clicks | 29,996 impressions | 5.63% avg CTR | avg position ~12
**Recent 3-month slice:** 673 clicks | 14,157 impressions | 4.75% avg CTR

> **⚠️ Brand Name Collision Warning:** "Legacy Boxing" is not a unique gym name. Multiple gyms across the US (NJ, FL, OH, WA, Germany) share the name. Google conflates these businesses, inflating our impressions with queries intended for other gyms. This pollutes average CTR downward and average position upward. All metrics below should be read with this context. See [Section 6: Brand Collision Analysis](#6-brand-collision-analysis) for detailed breakdown.

**Key findings:**
1. **Homepage dominates core local queries** — ranks **#1-2** for "boxing state college" (pos 1.57→1.64), "legacy boxing state college" (pos 1.56→1.95), "boxing near me" (pos 2.69→2.81), "boxing gym near me" (pos 3.38→3.77). The reported avg homepage position of 12.69 is **artificially inflated** by brand collision queries for other gyms where we rank 15-50+.
2. Gallery, Contact, and Membership have strong positions (5-6) but **abysmal CTR** (0.08-0.25%) — meta descriptions were rewritten but haven't been recrawled by Google yet. **Membership CTR dropped from 0.27% to 0.08% in the 3-month window** — the thin-content problem on this page is critical.
3. MMA page has the most impressions (5,673 lifetime / 2,451 recent) of any subpage but the lowest CTR (0.76%→0.45%) — **CTR is getting worse, not better.** This confirms the MMA page content overhaul was necessary, but Google needs to recrawl it.
4. Significant content gaps remain: no pages for Women's Boxing, Judo, Kickboxing/Muay Thai, Self-Defense, Penn State connection, Coach Bios, or Beginners
5. Mobile accounts for **72%** of traffic — mobile-first optimization is essential
6. **January 2026 was the best month ever:** 264 clicks, 5,435 impressions (~8.5 clicks/day, 175 imp/day). Impressions nearly tripled from June 2025 (~62/day) to January 2026 (~175/day), indicating strong domain authority growth.
7. **~7-9% of total impressions are noise** from brand collision (other Legacy gyms, other PA cities, irrelevant queries). Our real CTR on relevant queries is likely **6-8%**.
8. **NEW: Search Appearance is empty in both exports** — no rich results showing despite having JSON-LD on all pages. Google hasn't generated rich results yet; need to verify recrawl status and monitor.
9. **NEW: Keystone Games pages are indexed** — both the event page (pos 6.36, 45 imp) and the article (pos 5.11, 44 imp) appeared in the 3-month data, absent from lifetime data. Early indexing signal is positive.
10. **NEW: Post-update daily CTR spike (Feb 15-19):** avg 9.0 clicks/day at 6.72% CTR vs. pre-update Feb 1-14 avg of 7.07 clicks/day at 4.13% CTR. Too small a window (5 days) to be conclusive, but directionally positive — impressions dropped 22% while clicks rose 27%, suggesting Google is surfacing us for fewer but more relevant queries.

---

## 0. February 21, 2026 — Post-Update Performance Review

This section compares data from the Feb 15 lifetime export and Feb 21 three-month export against the original gap analysis (created Feb 14). Our SEO changes (title/meta rewrites, JSON-LD overhaul, content enrichment, internal linking) were deployed around Feb 14-15.

### 0A. Monthly Growth Trend

| Month | Clicks | Impressions | Clicks/Day | Imp/Day | Avg CTR |
|-------|--------|-------------|------------|---------|--------|
| May 2025 (partial) | ~24 | ~192 | 3.0 | 24.0 | 12.5% |
| Jun 2025 | ~133 | ~1,871 | 4.4 | 62.4 | 7.1% |
| Jul 2025 | ~163 | ~2,819 | 5.3 | 90.9 | 5.8% |
| Aug 2025 | ~152 | ~3,106 | 4.9 | 100.2 | 4.9% |
| Sep 2025 | ~196 | ~3,077 | 6.5 | 102.6 | 6.4% |
| Oct 2025 | ~201 | ~2,936 | 6.5 | 94.7 | 6.8% |
| Nov 2025 | ~129 | ~2,939 | 4.3 | 98.0 | 4.4% |
| Dec 2025 | ~186 | ~4,029 | 6.0 | 130.0 | 4.6% |
| **Jan 2026** | **~264** | **~5,435** | **8.5** | **175.3** | **4.9%** |
| Feb 1-14, 2026 | ~105 | ~2,651 | 7.0 | 176.7 | 4.0% |
| **Feb 15-19 (post-update)** | **~45** | **~670** | **9.0** | **134.0** | **6.7%** |

**Key observations:**
- Impressions nearly tripled from June to January (62→175/day), confirming strong domain authority growth
- November 2025 was a dip (seasonal + Thanksgiving), but December-January surged
- January 2026 was the all-time best month by both clicks AND impressions
- The post-update window (Feb 15-19) shows a **27% click increase** and **63% CTR increase** vs Feb 1-14, but impressions dropped 22%. This pattern (fewer impressions + higher CTR) is a classic positive signal — it means Google is being more selective about when to show us, and users click more when they see us. **But 5 days is not statistically significant — monitor through March.**

### 0B. Page-Level Changes (Lifetime vs. 3-Month)

| Page | Lifetime Clicks | 3mo Clicks | Lifetime CTR | 3mo CTR | Lifetime Pos | 3mo Pos | Trend |
|------|----------------|-----------|-------------|---------|-------------|---------|-------|
| Homepage | 1,530 | 617 | 6.15% | 5.67% | 12.69 | 10.89 | ⚠️ CTR down, position improved |
| Private Training | 47 | 19 | 1.41% | 1.03% | 7.54 | 8.28 | ⚠️ CTR down, position worse |
| MMA | 43 | 11 | 0.76% | 0.45% | 11.71 | 11.74 | 🔴 CTR halved, big problem |
| Boxing | 37 | 17 | 1.02% | 0.96% | 9.47 | 8.64 | ➡️ Stable |
| Youth Programs | 17 | 10 | 1.37% | 1.65% | 7.41 | 8.32 | 🟢 CTR improved |
| Contact | 8 | 2 | 0.32% | 0.18% | 6.45 | 6.51 | 🔴 CTR dropped |
| Gallery | 7 | 3 | 0.24% | 0.25% | 5.68 | 6.13 | ➡️ Stable (still terrible) |
| Membership | 7 | 1 | 0.27% | 0.08% | 6.29 | 6.07 | 🔴 CTR collapsed — critical |
| Schedule | 7 | 1 | 0.59% | 0.17% | 9.49 | 11.45 | 🔴 CTR and position worse |
| **Keystone Games** | — | **1** | — | **2.22%** | — | **6.36** | 🆕 Newly indexed |
| **KG Article** | — | **1** | — | **2.27%** | — | **5.11** | 🆕 Newly indexed |

**Critical takeaways:**
1. **Membership page is an emergency** — 1,281 impressions but 0.08% CTR. Users see this page in search results and actively choose NOT to click. The page has only 2 sentences of body copy. Title/meta rewrites alone won't fix this — the page itself needs substantial content.
2. **MMA page CTR is actively declining** (0.76%→0.45%) despite having 2,451 recent impressions. Our content rewrite addressed this but Google hasn't recrawled yet. This is the highest-impact page to monitor after recrawl.
3. **Contact page** is underperforming despite good position (6.51). Thin content (4 sentences) likely contributes.
4. **Youth Programs** is the only subpage showing CTR improvement — may indicate the content was already better targeted.
5. **Keystone Games pages indexing at position 5-6 within their first few months** is a very strong signal. These pages have quality JSON-LD, targeted content, and good internal linking.

### 0C. Query CTR Changes (Lifetime vs. 3-Month)

**Improving (our title/meta rewrites may be starting to take effect):**

| Query | Lifetime CTR | 3mo CTR | Lifetime Pos | 3mo Pos | Signal |
|-------|-------------|---------|-------------|---------|--------|
| legacy boxing | 9.89% | **11.97%** | 7.88 | 7.67 | 🟢 +2% CTR, position stable |
| legacy boxing state college | 53.17% | **56.63%** | 1.56 | 1.95 | 🟢 +3.5% CTR |
| boxing state college | 25.16% | **40.43%** | 1.57 | 1.64 | 🟢 +15% CTR! |
| boxing near me | 14.43% | **20.93%** | 2.69 | 2.81 | 🟢 +6.5% CTR |
| boxing classes near me | 11.11% | **17.86%** | 5.08 | 3.82 | 🟢 +6.8% CTR + position improved |
| boxing gym near me | 14.77% | 14.58% | 3.38 | 3.77 | ➡️ Stable |
| kickboxing near me | 8% | **30%** | 5.44 | 4.50 | 🟢 Huge improvement |
| jiu jitsu near me | 2.08% | **5.41%** | 7.77 | 5.81 | 🟢 Position + CTR both improved |
| kickboxing | 0% (pos 2.0) | 0% (pos **1.38**) | — | — | 🟢 #1 position! (needs clicks) |

**Declining or stagnant (need attention):**

| Query | Lifetime CTR | 3mo CTR | Lifetime Pos | 3mo Pos | Signal |
|-------|-------------|---------|-------------|---------|--------|
| mma state college | 4.49% | **1.56%** | 4.42 | 4.50 | 🔴 CTR halved at same position |
| mma gyms near me | 3.93% | 5.88% | 5.90 | 5.46 | ⚠️ Slight improvement but still low |
| legacy boxing club | 0.83% | 1.13% | 14.40 | 13.54 | ➡️ Noise (other gyms' queries) |
| combat sports academy near me | 0% | 0% | 57.98 | 45.91 | ⚠️ Improving but still invisible |
| penn state boxing | 0% | 0% | 16.07 | 15.00 | 🔴 No improvement, no content |
| derek roth | 3.33% | 3.80% | 8.62 | 8.68 | ➡️ Stable — needs About page |

### 0D. Search Appearance — No Rich Results

**Both exports show an empty Search Appearance table.** Despite having JSON-LD on all 12 pages (SportsActivityLocation, Course, FAQPage, Article, SportsEvent, WebSite, Service, BreadcrumbList), Google has not generated any rich result appearances.

**Possible causes:**
1. Google hasn't recrawled the site since our JSON-LD deployment (most likely)
2. The structured data may pass validation but Google may not choose to display rich results for our type of content (local gyms rarely get Course or FAQ rich results in map-pack-heavy SERPs)
3. Event rich results require the event to be in the future — Keystone Games 2026 qualifies

**Action items:**
- [ ] Submit all 12 URLs for recrawl via Google Search Console URL Inspection
- [ ] Validate all JSON-LD via Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] Monitor Search Appearance column weekly through March 2026
- [ ] If still empty after 4 weeks post-recrawl, investigate whether Google is suppressing rich results for local gym SERPs

### 0E. New Pages — Keystone Games Indexing

Both the event page (`/pages/events/keystone-games/`) and the article page (`/pages/articles/legacy-boxing-hosts-keystone-games-2026/`) appeared in the 3-month export but were absent from the lifetime export. This confirms they were indexed recently.

- **Event page:** 1 click, 45 impressions, position 6.36, CTR 2.22%
- **Article page:** 1 click, 44 impressions, position 5.11, CTR 2.27%
- **Articles index:** 0 clicks, 5 impressions, position 17.80

Position 5-6 on initial indexing is excellent. These pages have complete JSON-LD (SportsEvent + FAQPage on event, Article on article), keyword-optimized titles/descriptions, and good internal linking. As Google processes the structured data and the pages accumulate authority, positions should improve.

### 0F. Device Split

| Device | Lifetime Clicks | Lifetime % | 3mo Clicks | 3mo % |
|--------|----------------|-----------|-----------|------|
| Mobile | 1,203 | 71.3% | 488 | 72.5% |
| Desktop | 479 | 28.4% | 184 | 27.3% |
| Tablet | 6 | 0.4% | 1 | 0.1% |

Mobile dominance is consistent and slightly increasing. All optimization should remain mobile-first.

---

## 1. Page-Level Performance Analysis

### 1A. CTR Crisis — Pages With Good Rank But Terrible CTR

These pages rank well but users aren't clicking. Title tags and meta descriptions have been rewritten but Google hasn't recrawled all pages yet.

| Page | Position | Lifetime Imp | Lifetime CTR | 3mo Imp | 3mo CTR | Trend |
|------|----------|-------------|-------------|---------|---------|-------|
| Gallery | 5.68 | 2,864 | **0.24%** | 1,206 | **0.25%** | ➡️ No change yet |
| Contact | 6.45 | 2,505 | **0.32%** | 1,138 | **0.18%** | 🔴 Worse |
| Membership | 6.29 | 2,587 | **0.27%** | 1,281 | **0.08%** | 🔴 Critical — needs content |
| MMA | 11.71 | 5,673 | **0.76%** | 2,451 | **0.45%** | 🔴 CTR halved |

**Action Plan:**
- [x] Rewrite `<title>` and `<meta name="description">` for Gallery, Contact, Membership, and MMA pages — *Done: all 8 pages now have custom, CTR-optimized titles and descriptions*
- [x] Use action-oriented, CTR-optimized copy with unique value propositions
- [x] Include pricing signals ("from $60/mo"), urgency ("First Class Free"), and location ("State College") — *Pricing in Youth/Membership/Private Training titles; "First Class Free" in homepage + contact titles + 6/9 descriptions (missing: Private Training, Schedule, Gallery); "State College" in 8/9 titles (missing: Gallery)*
- [ ] A/B test descriptions by monitoring CTR changes in GSC after deployment

**Proposed Title/Description Rewrites:**

**Gallery** (current CTR: 0.17%) ✅ DEPLOYED
```
Title: Photos & Videos | Legacy Boxing & Combat Sports Academy
Description: See our fighters in action – training sessions, competition wins & youth boxing highlights at Legacy Boxing in State College, PA.
```

**Contact** (current CTR: 0.15%) ✅ DEPLOYED
```
Title: Contact Us – First Class Free | Legacy Boxing State College
Description: Visit Legacy Boxing at 2820 E College Ave, State College PA. Call (814) 599-1682 or drop in. Mon–Sat classes available. Your first class is free.
```

**Membership** (current CTR: 0.10%) ✅ DEPLOYED
```
Title: Membership Plans from $60/mo | Legacy Boxing State College
Description: Boxing $80/mo, MMA $80/mo, Youth $60/mo, or combo $125/mo. No contracts required. Try your first class free at Legacy Boxing in State College, PA.
```

**MMA** (current CTR: 0.45%, 4,639 impressions) ✅ DEPLOYED
```
Title: MMA Classes in State College, PA | Mixed Martial Arts Near Penn State – Legacy Boxing
Description: Mixed martial arts classes from $80/mo in State College. Boxing, Judo & Muay Thai in one complete MMA system. USA Judo certified coach. First class free.
```

### 1B. Homepage — Already #1 For Core Queries, Avg Position Misleading

The homepage captures **91% of clicks** (1,530 lifetime / 617 in 3mo). The reported avg position of 12.69 (lifetime) / 10.89 (3mo) is **misleading** — it's a blended average across all queries, including hundreds of brand-collision queries for other "Legacy Boxing" gyms where we rank 15-50+.

**Actual homepage positions for queries that matter (lifetime → 3mo comparison):**

| Query | Lifetime Pos | 3mo Pos | Lifetime CTR | 3mo CTR | Status |
|-------|-------------|---------|-------------|---------|--------|
| legacy boxing state college | **1.56** | **1.95** | 53.2% | **56.6%** | ✅ Dominant, CTR up |
| boxing state college | **1.57** | **1.64** | 25.2% | **40.4%** | ✅ Dominant, CTR up 15%! |
| boxing near me | **2.69** | **2.81** | 14.4% | **20.9%** | ✅ Strong, CTR up 6% |
| boxing gym near me | **3.38** | **3.77** | 14.8% | 14.6% | ✅ Strong, stable |
| legacy gym | **2.29** | **1.00** | 35.3% | **75%** | ✅ Dominant |
| boxing classes near me | **5.08** | **3.82** | 11.1% | **17.9%** | 🟢 Position + CTR both improved |
| boxing gym state college | **3.89** | **5.82** | 26.2% | 24.2% | ⚠️ Position slipped |
| boxing gyms near me | **4.79** | **4.87** | 11.8% | 13.0% | Good — steady improvement |
| mma state college | **4.42** | **4.50** | 4.5% | **1.6%** | 🔴 CTR collapsed — MMA snippet weak |
| mma gyms near me | **5.90** | **5.46** | 3.9% | 5.9% | ⚠️ Slight improvement |
| legacy boxing | **7.88** | **7.67** | 9.9% | **12.0%** | 🟢 CTR improving |
| legacy boxing gym | **9.72** | **9.78** | 2.8% | 2.3% | ➡️ Still brand-collided |

The homepage is **already on page 1** for virtually all high-intent local queries. The opportunity is not "getting to page 1" — it's:
1. ~~Pushing positions 4-5 → top 3 (boxing gyms near me, boxing classes near me)~~ → **DONE for boxing classes near me (5.08→3.82)**; boxing gyms near me still at 4.87
2. Improving CTR on MMA/martial arts queries (rank is good, snippet is weak) — **WORSENED: mma state college CTR dropped from 4.5% to 1.6%**
3. Disambiguating from other "Legacy" gyms on generic brand queries

**Action Plan:**
- [x] Audit homepage `<title>` and `<meta description>` — *Title: "Boxing & MMA Gym in State College, PA — First Class Free | Legacy Boxing & Combat Sports Academy"*
- [x] Add more visible, crawlable text content to homepage — *Added "The Legacy Experience" programs overview section*
- [x] Ensure homepage content addresses the top 10 search queries naturally — *Content now includes boxing, MMA, Judo, youth, State College, Centre County, Penn State references*
- [ ] Add FAQ section with schema markup targeting long-tail queries — *Not yet implemented on homepage*
- [x] Strengthen internal linking from subpages back to homepage
- [x] Add "State College, PA" or "Centre County" to title tag — *Both present in title and body content*

### 1C. High-Potential Subpages (Position 7-9 — Almost Page 1)

| Page | Lifetime Pos | 3mo Pos | Lifetime Clicks | 3mo Clicks | Opportunity |
|------|-------------|---------|----------------|-----------|-------------|
| Private Training | 7.54 | 8.28 | 47 | 19 | Best-performing subpage by clicks, but CTR declining (1.41%→1.03%) — position slipped |
| Boxing | 9.47 | 8.64 | 37 | 17 | Position improved — content enrichment is working |
| Youth Programs | 7.41 | 8.32 | 17 | 10 | Only subpage with improving CTR (1.37%→1.65%) |
| Schedule | 9.49 | 11.45 | 7 | 1 | **Regressed** — position and clicks both worse |
| Keystone Games | — | 6.36 | — | 1 | 🆕 Promising initial position with 45 impressions |
| KG Article | — | 5.11 | — | 1 | 🆕 Strong initial position with 44 impressions |

---

## 2. Query Gap Analysis — Missing Content Opportunities

### 2A. High-Impression Zero-Click Queries (Immediate Wins)

These queries generate significant impressions but zero clicks. **Critical distinction:** some are real opportunities, others are noise from brand collision or geographic irrelevance.

**Real Opportunities (act on these — updated with 3-month data):**

| Query | Lifetime Imp | 3mo Imp | Position (3mo) | Gap |
|-------|-------------|---------|----------------|-----|
| "combat sports academy near me" | 464 | 99 | **45.91** | Position improving (57.98→45.91) but still invisible — it's our literal name |
| "penn state boxing" | 137 | 104 | **15.00** | No Penn State content. 104 imp in 3mo = high demand. |
| "psu boxing" | 98 | 57 | **13.33** | Same — no Penn State content |
| "gym in state college pa" | 133 | * | **75↓40** | Still very poor ranking despite being a core local query |
| "penn state mma" | 66 | 51 | **10.25** | No content connecting to Penn State |
| "boxing pa" | 72 | 39 | **5.21** | **Improved from 6.89 → 5.21** — almost page 1 |
| "muay thai" | 22 | 10 | **5.90** | No dedicated Muay Thai content |
| "judo" | 39 | 9 | **4.11** | **Improved from 6.05 → 4.11** — ranking well with zero content! |
| "judo near me" | 22 | 5 | **7.60** | Ranking on page 1 but no landing page |
| "kickboxing" | 29 | 16 | **1.38** | **Now #1!** Was 2.0. Zero clicks = needs a dedicated page to convert |
| "kickboxing near me" | 25 | 10 | **4.50** | Improved from 5.44. Strong with no content. |
| "self defense classes near me" | 25 | 16 | **7.81** | Slightly worse position (7.32→7.81), no content |

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
- [x] Youth page → Schedule, Membership, Gallery — *"Continue Exploring" section added with links to Boxing, MMA, Private Training, Membership, Schedule, and Gallery*
- [x] All course pages → Membership (pricing CTA) — *All four course pages now link to Membership*
- [x] All course pages → Schedule (class times CTA) — *All four course pages now link to Schedule*
- [x] Homepage → All subpages with descriptive anchor text (not "Learn More") — *"The Legacy Experience" section links to all programs*

### 3D. Schema Markup Expansion

Current: `SportsActivityLocation` JSON-LD (good foundation)

Add:
- [x] `FAQPage` schema on relevant pages — *Added to MMA page (7 Q&As), Boxing page (7 Q&As), Keystone Games event page (5 Q&As), Membership page (5 Q&As), and Contact page (5 Q&As)*
- [x] `Course` schema for each program (boxing, MMA, youth, etc.) — *Added to boxing, MMA, and youth-programs index.html*
- [ ] `Review` / `AggregateRating` schema if reviews are available
- [x] `Event` schema for competitions, open houses, or special events — *SportsEvent schema on Keystone Games page with nested superEvent for State Games of America 2026, offers, dates, and location*
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

### 4B. MMA Page — Highest Impression Count, Lowest CTR — Competitive Analysis

The MMA page gets 5,673 lifetime impressions (2,451 in 3 months) — most of any subpage — but only **0.45% CTR** (declining from 0.76%). This is our biggest single-page problem and the data now shows why.

#### Competitor Landscape for "mma state college"

| Rank | Competitor | Domain Authority Signal |
|------|-----------|----------------------|
| **#1** | **Central PA MMA (cpamma.com)** | 10+ years, 500+ Google reviews, sponsors PSU MMA/BJJ/Muay Thai clubs, 10,000 sq ft with ring AND octagon, 60+ training hours/week, 15+ certified instructors |
| **#2** | **Lombard MMA (lombardmma.com)** | 20+ years in State College, downtown location, trains NFL athletes, regulation cage, 5+ programs |
| **#3-5** | **Legacy Boxing (legacy-boxing.com)** | Newer entrant, smaller facility, 2 MMA sessions/week, 1 testimonial, strong JSON-LD |
| below | Directory listings (Yelp, boxinggyms.net, maps) | Aggregators |

#### Why Competitors Outrank Us — Specific Gaps

**1. Social Proof Gap (CRITICAL — likely #1 factor)**
- **CPAMMA:** 500+ five-star Google reviews displayed prominently across 4+ pages with full review text. Ed Ruth (3X NCAA Wrestling Champion, Bellator Fighter) testimonial.
- **LombardMMA:** 3 testimonials on homepage, trains NFL athletes
- **Legacy MMA page:** 1 testimonial. One.
- **Impact:** Google's local algorithm heavily weights review count. This single factor likely explains most of our position gap. Our MMA page looks empty next to CPAMMA's social proof wall.

**2. Title Tag Keyword Mismatch**
- **CPAMMA title:** "Central PA MMA - State College, PA / Penn State - Mixed Martial Arts" — hits MMA + State College + Penn State + Mixed Martial Arts in one title
- **Legacy title:** "MMA Classes – Kosen Judo, Muay Thai & Wrestling | Legacy Boxing State College" — "Kosen Judo" is a niche term that zero searchers use. It takes up valuable title real estate where "Penn State" or "Mixed Martial Arts" would perform better.
- **Impact:** When a user searches "mma state college" and sees our snippet, "Kosen Judo" is unfamiliar and may cause them to skip us. CPAMMA's title mirrors their exact search query.

**3. Content Breadth — Separate Pages Per Discipline**
- **CPAMMA has 6 separate program pages:** BJJ, Muay Thai, Reality Based MMA, Mixed Martial Arts, Women's Kickboxing, Youth — each targets different query clusters
- **LombardMMA:** 5 programs with separate class descriptions
- **Legacy:** 1 combined MMA page. All grappling, striking, and MMA content competes for crawl budget on a single URL.
- **Impact:** CPAMMA captures "bjj state college", "muay thai state college", "kickboxing state college" with dedicated pages. We can't rank for these individual queries with one combined page.

**4. Penn State Integration Gap**
- **CPAMMA:** Dedicated `/psu-students/` page with PSU pricing ($99/mo), "400+ PSU students", sponsors PSU MMA Club + BJJ Club + Muay Thai Club, CATA bus stop mentioned, 20+ FAQ items about PSU student experience
- **Legacy:** Mentions Penn State in body copy and Coach Derek leads PSU Boxing Club — but no dedicated PSU page or section
- **Impact:** "penn state mma" (51 imp, pos 10.25) and "penn state mma club" (13 imp, pos 11.31) go to CPAMMA because they have a dedicated page. We have zero clicks on 312 Penn State impressions in 3 months.

**5. Class Frequency Signal**
- **CPAMMA:** "60+ hours of training per week, 7 days, morning through late night"
- **LombardMMA:** Multiple classes daily
- **Legacy MMA:** 2 sessions/week (Tues/Thurs 5:00–6:15 PM)
- **Impact:** A searcher looking for "MMA State College" sees our schedule and finds 2 sessions per week. CPAMMA offers 60+ hours. This isn't just an SEO problem — it's a product signal that affects both click-through AND conversion.

**6. Pricing Visibility**
- **CPAMMA:** Full pricing on `/rates/` — PSU $99/mo, Standard $109/mo, All Access $159/mo
- **Legacy:** $80/mo (actually cheaper!) but buried in membership page, not prominent in SERP snippet
- **Impact:** Our price advantage is invisible. CPAMMA's higher prices make their program look premium; our lower price could be a competitive hook if surfaced.

#### What We Do Better Than Competitors

1. **JSON-LD structured data** — neither CPAMMA nor LombardMMA has Course, FAQPage, or BreadcrumbList schema. We have rich snippet eligibility they don't.
2. **FAQ section with schema markup** — CPAMMA has FAQs but likely not in structured data
3. **Clean, fast, modern website** — CPAMMA runs heavy WordPress; LombardMMA uses bloated Elementor
4. **Kosen Judo differentiation** — unique positioning for organic content, just shouldn't dominate the SERP-facing title
5. **Lower price point** — $80/mo vs $99-109/mo is a real advantage

#### Revised Action Plan for MMA

**Immediate (do now — title/meta rewrite):**
- [x] **Rewrite MMA title tag:** Remove "Kosen Judo" from title. — *Done: `MMA Classes in State College, PA | Mixed Martial Arts Near Penn State – Legacy Boxing`*
  - Hits: "MMA classes", "State College PA", "Mixed Martial Arts", "Near Penn State", brand name
  - "Kosen Judo" stays in body content (8 mentions) for differentiation without hurting CTR
- [x] **Rewrite MMA meta description:** Lead with social proof + price + query match. — *Done: `Mixed martial arts classes from $80/mo in State College. Boxing, Judo & Muay Thai in one complete MMA system. USA Judo certified coach. First class free.`*
  - Hits: price (cheaper than competitors), class types, certification, CTA
- [x] **Add 3-5 more testimonials** to MMA page from current students — *Done: 3 named testimonials now on page (MMA Student & Penn State Graduate, Working Professional & MMA Member, Penn State Student & Current Member). Was 1, now 3 — meets the "even 3 named quotes" minimum.*

**Short-term (create new pages):**
- [ ] **Create Penn State / Students page** (`/pages/penn-state/`) — target 312 impressions of "penn state mma/boxing/bjj" queries with zero clicks
- [ ] **Create Kickboxing/Muay Thai page** (`/pages/courses/kickboxing/`) — split striking content from MMA, target "kickboxing" queries where we already rank #1
- [ ] **Create Kosen Judo / Grappling page** (`/pages/courses/judo/`) — split grappling content from MMA, target "judo near me" (pos 4.11) and "jiu jitsu state college" (51 imp) queries

**Medium-term (content + social proof):**
- [ ] **Implement Google Review collection strategy** — QR code at gym, post-class text messages, review request email sequence. Even reaching 50+ reviews would dramatically close the gap.
- [ ] **Surface $80/mo pricing prominently** in MMA page hero or CTA section — competitive advantage vs CPAMMA's $99-109
- [ ] **Add competition results / fighter showcase** — any wins, tournaments, Belt promotions to match CPAMMA's success stories
- [ ] **Consider increasing MMA class frequency** if operationally possible — 2 sessions/week is a hard constraint that limits both product appeal and SEO competitiveness

**Previously completed:**
- [x] **Lead with the system:** "Boxing Striking + Kosen Judo Grappling + Muay Thai = Complete MMA." — *MMA page now structured around the three-pillar system*
- [x] **Coach credentials block** — *Coach Derek Roth credentials in body*
- [x] **"Who Should Train MMA at Legacy?" section** + "Beginner-Friendly" card + 7 FAQ answers
- [x] **Cross-links** to Boxing, Private Training, Membership, Schedule
- [ ] **Program breakdown table** — *Not implemented as a structured table*

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

"Near me" queries represent a massive opportunity cluster (lifetime → 3-month comparison):

| Query | Lifetime Imp | 3mo Imp | Lifetime Pos | 3mo Pos | Target |
|-------|-------------|---------|-------------|---------|--------|
| boxing gyms near me | 372 | 100 | 4.79 | 4.87 | Top 3 |
| boxing near me | 201 | 43 | 2.69 | 2.81 | Maintain |
| boxing gym near me | 149 | 48 | 3.38 | 3.77 | Maintain |
| boxing classes near me | 189 | 56 | 5.08 | **3.82** 🟢 | ~~Top 3~~ **Achieved!** |
| mma gyms near me | 229 | 85 | 5.90 | 5.46 | Top 3 |
| mma near me | 158 | 39 | 5.92 | 5.18 | Top 3 |
| jiu jitsu near me | 96 | 37 | 7.77 | **5.81** 🟢 | Top 5 |
| martial arts near me | 37 | 18 | 8.41 | 7.56 | Top 5 |
| muay thai near me | 57 | 18 | 6.32 | 6.06 | Top 3 |
| kickboxing near me | 25 | 10 | 5.44 | **4.50** 🟢 | Top 3 |

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

| Metric | Lifetime (raw) | 3-month (raw) | Estimated Real (noise-adjusted) |
|--------|---------------|---------------|----------------------------------|
| Total Impressions | 29,996 | 14,157 | ~13,000 relevant (3mo) |
| Overall CTR | 5.63% | 4.75% | **~6-8%** (removing noise denominator) |
| Homepage avg position | 12.69 | 10.89 | **~4-6** for target queries |
| Homepage CTR | 6.15% | 5.67% | **~8-10%** for target queries |

#### Disambiguation Strategy

We cannot prevent Google from showing our site for other Legacy gyms' queries. We CAN make it immediately clear we're in State College:

- [x] JSON-LD with full address and geo coordinates (already done)
- [x] Add "State College, PA" to ALL page `<title>` tags (most impactful) — *8/9 original page titles include "State College"; Gallery title ("Photos & Videos | Legacy Boxing & Combat Sports Academy") is the exception. Event/article titles omit it but include State College in descriptions.*
- [x] Add "State College" to `<meta description>` on all pages — *All 9 original page descriptions include "State College" or "State College, PA"*
- [ ] Consider adding "State College" to the site's visual header/hero
- [ ] Ensure Google Business Profile category and attributes are fully optimized
- [ ] The brand collision is **not fixable** — it's a shared name problem. Focus energy on owning location-qualified queries instead.

### 6B. Queries We Should Own But Don't

| Query | Impressions | Position | Issue |
|-------|-------------|----------|-------|
| "combat sports academy near me" | 464 (99 in 3mo) | **45.91** (was 57.98) | Improving but still far from page 1 — it's our literal name |
| "gym in state college pa" | 133 | **75↓40** | Still terrible but trending right direction |
| "gyms in state college pa" | 69 | **37→39** | Basic local query, invisible |
| "beginner boxing classes near me" | 19 (10 in 3mo) | **55** (was 35) | 🔴 Position got WORSE — despite adding beginner content |
| "gyms state college" | 15 (8 in 3mo) | **31.38** | Generic gym query, poor rank |
| "state college martial arts" | 13 (2 in 3mo) | **15.50** (was 13.31) | ⚠️ Slightly worse |
| "combat sports academy" | 35 (25 in 3mo) | **28.68** (was 27.64) | Our name — still not ranking |
| "combat sports academy schedule" | 17 (4 in 3mo) | **52.25** (was 70) | Improving but still invisible |
| "mma state college" | 356 (128 in 3mo) | **4.50** | Good rank but **1.56% CTR is abysmal** — snippet is failing |

> **Removed from this table:** Queries like "boxing legacy", "legacy boxing & fitness", etc. were previously listed as missed opportunities but are actually brand collision noise — searchers looking for other gyms.


### Duplicate Testimonial

- [x] **Boxing and MMA pages share the identical testimonial** — *Fixed: MMA page now uses a unique testimonial about Judo/grappling. Boxing page retains the original quote.*
  - Files: `pages/courses/boxing/boxing.html`, `pages/courses/mma/mma.html`

### Thin Content Pages (Readability & SEO Impact)

These pages have significantly less prose than the course pages (~800-1,500 words each), which creates an inconsistent experience and underperforms for indexed pages:

- [x] **Membership page — content enriched.** Added "Why Train at Legacy Boxing?" value-reinforcement section (4 proof points), "First Class is Free" banner, FAQ accordion (5 Q&As matching FAQ schema), and "Explore Our Programs" cross-links.
  - File: `pages/membership/membership.html`

- [x] **Contact page — content enriched.** Already had "What to Expect on Your First Visit" section. Added "Common Questions" FAQ accordion (5 Q&As with internal links to program pages, matching FAQ schema), "Explore Our Programs" cross-links.
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
4. ✅ **Add internal links** between all pages — Boxing, MMA, homepage, schedule, membership all cross-linked. Youth page now links to Boxing, MMA, Private Training, Membership, Schedule, and Gallery. Private Training page now links to Boxing, MMA, Youth, Membership, and Schedule.
5. ⚠️ **Add FAQ schema** — FAQPage schema on MMA page (7 Q&As), Boxing page (7 Q&As), Keystone Games event page (5 Q&As), Membership page (5 Q&As), and Contact page (5 Q&As). *Gap: No FAQ schema on homepage, youth, private training, gallery, or schedule pages*
6. ✅ **Fix tone/content quick wins** — Brand name standardized to "&", footer capitalization fixed, duplicate testimonial replaced, dash usage standardized. *Gap: "State College, PA" not yet consistent in all H1 tags*

### Phase 1.5 — POST-UPDATE URGENT ITEMS (New from Feb 21 data) 🔴
Impact: Directly address declining metrics and unlock rich results

7. 🔴 **Submit all 12 URLs for recrawl** in Google Search Console — Title/meta rewrites and JSON-LD won't take effect until Google recrawls. This is the single most impactful action right now.
8. 🔴 **Validate JSON-LD via Google Rich Results Test** — Search Appearance is empty in both exports. Verify structured data parses correctly before assuming Google will generate rich results.
9. � **Fix Membership page content** — Added "Why Train at Legacy Boxing?" value section, "First Class is Free" banner, 5-question FAQ accordion with FAQPage schema, and "Explore Our Programs" cross-links.
10. 🟢 **Fix Contact page content** — Added "Common Questions" FAQ accordion (5 Q&As with internal links) with FAQPage schema, and "Explore Our Programs" cross-links. "What to Expect" section was already present.
11. 🔴 **Fix Gallery page content** — CTR at 0.25% with 1,206 impressions. Add introductory narrative and descriptive captions with keywords.
12. ⚠️ **Monitor MMA page post-recrawl** — CTR declined from 0.76% → 0.45% but we rewrote the page content. Need Google to recrawl before evaluating whether the rewrite improved things.

### Phase 2 — Content Gaps (Partially Addressed)

13. ❌ **Create About / Coach Bios page** — Not yet created *(Person schema added as `founder` in main JSON-LD as interim)*. "derek roth" query at 3.80% CTR / 79 impressions (3mo) confirms demand.
14. ❌ **Create Penn State page or section** — Not yet created. "penn state boxing" (104 imp), "psu boxing" (57), "penn state mma" (51) = **212 impressions in 3 months, 0 clicks.** This is the single biggest content gap by impression volume.
15. ❌ **Create Kickboxing / Muay Thai page** — Not yet created. Now **ranking #1 for "kickboxing"** (pos 1.38) with zero dedicated content. A page will likely dominate the entire kickboxing/muay thai query cluster.
16. ✅ **Add beginner-focused content** to Boxing and MMA pages — Boxing: "All Levels Welcome", "No Sparring Required", "What to Expect" section. MMA: "Who Should Train MMA?", "Beginner-Friendly" card, FAQ answers.
17. ✅ **Enrich homepage content** — "The Legacy Experience" programs overview, Centre County/Penn State references, USA Boxing LBC badge, coach credentials
18. ⚠️ **Enrich thin pages** — Dash usage standardized sitewide. Membership and Contact pages enriched with FAQ sections and cross-links. *Remaining: Gallery (#11). MMA FAQ verbosity not yet tightened.*

### Phase 3 — Expansion Pages (Not Started)

19. ❌ **Create Women's Boxing page**
20. ❌ **Create Self-Defense page** — "self defense classes near me" has 16 impressions in 3 months at position 7.81
21. ❌ **Consider Blog / News section**

### Phase 4 — Technical & Schema ✅ MOSTLY COMPLETE

22. ✅ **Add Course schema** to boxing, MMA, and youth-programs pages
23. ⚠️ **Add FAQPage schema** — Done on MMA page, boxing page, keystone games event page, membership page, and contact page. *Consider adding to homepage and youth.*
24. ✅ **Add BreadcrumbList schema** — All subpages
25. ✅ **Add Person schema** for coaches — Coach Derek Roth as `founder` in main JSON-LD with credentials, certifications, awards
26. ❌ **Optimize schedule page** for featured snippet — Schedule page position regressed (9.49 → 11.45), CTR dropped to 0.17%
27. ❌ **Image SEO audit** — alt text, dimensions, structured data
28. ✅ **JSON-LD on all pages** — Build-time static injection via custom Vite plugin; SportsActivityLocation, Course, FAQPage, Article, SportsEvent, WebSite, Service, BreadcrumbList
29. 🔴 **Trigger Google recrawl** — Needed to activate all JSON-LD and meta tag changes (see Phase 1.5)

---

## 8. KPIs to Track

| Metric | Original Baseline (Feb 14) | Updated Baseline (Feb 21) | Post-Update Signal (Feb 15-19) | 3-Month Target | 6-Month Target |
|--------|-----------------------------|--------------------------|-------------------------------|----------------|----------------|
| Total Clicks/day | ~7 | 7.4 (3mo avg) | **9.0** (+27%) | 15 | 25 |
| Avg CTR (all) | ~5.1% | 4.75% (3mo) | **6.7%** (+63%) | 7% | 10% |
| Homepage position | 12.4 | 10.89 (3mo) | — | 8 | 6 |
| Gallery CTR | 0.17% | 0.25% | — | 3% | 5% |
| Membership CTR | 0.10% | **0.08%** (🔴 worse) | — | 3% | 5% |
| Contact CTR | 0.15% | **0.18%** | — | 3% | 5% |
| MMA CTR | 0.45% | **0.45%** (no change) | — | 3% | 5% |
| "boxing state college" CTR | 28.0% | **40.4%** (🟢) | — | 45% | 50% |
| "mma state college" CTR | 2.4% | **1.56%** (🔴) | — | 8% | 15% |
| Rich results | 0 | **0** (unchanged) | — | 2+ | 5+ |
| Indexed pages | 9 | **12** (Keystone Games + article + articles index) | — | 16 | 19+ |
| Pages ranking top 5 | ~5-6 | ~5-6 | — | 8 | 11+ |
| Keystone Games position | N/A | **6.36** | — | 3 | 1-2 |

---

## 9. Appendix — Query Cluster Mapping

### Cluster: Boxing (core)
`boxing gyms near me` (372/100) + `boxing near me` (201/43) + `boxing gym near me` (149/48) + `boxing classes near me` (189/56) + `boxing gym` (76/12) + `boxing classes` (34/10) + `boxing lessons near me` (53/20) + `boxing` (187/117)
*(Format: lifetime impressions / 3-month impressions)*
**Lifetime total: ~1,261 impressions | 3mo total: ~406** → Landing: Boxing page + Homepage

> Boxing queries are showing clear CTR improvements across the board. "boxing classes near me" moved from position 5.08 to 3.82 with CTR nearly doubling. The rewritten title/meta tags appear to be working for boxing-specific queries.

### Cluster: MMA
`mma gyms near me` (229/85) + `mma state college` (356/128) + `mma near me` (158/39) + `mma classes near me` (40/14) + `mma gym near me` (23/6) + `mma` (12/5) + `penn state mma` (66/51) + `state college mma` (104/24)
*(Format: lifetime impressions / 3-month impressions)*
**Lifetime total: ~988 impressions | 3mo total: ~352** → Landing: MMA page (rewrite around Kosen Judo system)

> 🔴 **MMA cluster is the biggest problem.** "mma state college" CTR dropped from 4.49% to 1.56% despite stable position. The MMA page content rewrite hasn't been recrawled yet. This cluster has the highest impression volume of any non-boxing cluster but the worst conversion.
>
> **Competitive context (Feb 2026 analysis):** Central PA MMA (cpamma.com) dominates position #1 with 500+ Google reviews, dedicated PSU Students page, 6 separate program pages, and title tag that matches search queries exactly. Lombard MMA (lombardmma.com) holds #2 with 20+ years brand history. Legacy at #3-5 has the best structured data but weakest social proof (1 testimonial), a title tag with niche terminology ("Kosen Judo") searchers don't use, and only 2 MMA sessions/week vs CPAMMA's 60+ hours. Price advantage ($80 vs $99-109) is invisible in snippets.

**Strategy:** ~~Remove "Kosen Judo" from title tag (keep in body). Add "Penn State" and "Mixed Martial Arts" to title. Surface $80/mo pricing. Add 3-5 testimonials.~~ → **All done.** Title rewritten, $80/mo in meta description, 3 testimonials added. Create separate Judo and Kickboxing pages to compete with CPAMMA's per-discipline page strategy. Build Google Reviews to close the 500-to-0 social proof gap. **Priority: trigger recrawl immediately to activate the new content.**

### Cluster: Youth/Kids
`boxing classes for kids near me` (15) + `kids boxing classes near me` (19) + `boxing for kids near me` (13) + `kids boxing near me` (9) + `kids boxing` (5) + `youth boxing near me` (8) + `teen boxing classes` (2) + `mma for kids near me` (4) + `kids mma classes near me` (1)
**Total: ~76 impressions** → Landing: Youth Programs page

### Cluster: BJJ/Jiu-Jitsu/Judo/Kosen Judo (THE Kosen Judo Capture Zone)
`bjj near me` (28/8) + `jiu jitsu near me` (96/37) + `jiu jitsu state college` (107/51) + `brazilian jiu jitsu near me` (11/1) + `bjj gyms near me` (9/5) + `jiujitsu near me` (2/2) + `judo` (39/9) + `judo near me` (22/5) + `gracie jiu jitsu` (2/2) + `judo gyms near me` (3/3) + `judo training` (2/1) + `jiu jitsu classes near me` (4/1) + `jiu jitsu gyms near me` (3/3) + `jiu jitsu schools near me` (2/2)
*(Format: lifetime impressions / 3-month impressions)*
**Lifetime total: ~330 impressions | 3mo total: ~130** → Landing: Kosen Judo page (NEW, Priority 1) + MMA page (enriched)

> 🟢 **Judo positions are improving organically.** "judo" moved from 6.05 to 4.11, "jiu jitsu near me" from 7.77 to 5.81. This means our MMA page content (which mentions Judo) is strengthening relevance for these queries even before a dedicated Judo page exists. A dedicated page will likely push these to top 3.

**Strategy:** Kosen Judo content captures BOTH judo AND BJJ/grappling searchers because:
1. Judo seekers find a ground-focused judo style (what many actually want vs. Olympic rules)
2. BJJ seekers discover the historical root of their art (Mitsuyo Maeda = Kosen Judo practitioner)
3. "Grappling near me" / "ground fighting" queries get a unique answer
4. "Jiu jitsu state college" (86 imp!) specifically needs a local landing page

No other gym in the area can compete for these queries with authentic Kosen Judo credentials.

### Cluster: Muay Thai / Kickboxing
`kickboxing near me` (25/10) + `muay thai near me` (57/18) + `kickboxing` (29/16) + `muay thai` (22/10) + `kickboxing state college` (7/*) + `muay thai state college pa` (35/*) + `kickboxing classes near me` (13/2) + `cardio kickboxing` (8/*) + `muay thai gyms near me` (15/2) + `kick boxing classes near me` (11/4)
*(Format: lifetime impressions / 3-month impressions. * = not in top 3mo queries)*
**Lifetime total: ~222 impressions** → Landing: None! (Critical gap)

> 🟢 **Kickboxing position improved to #1** (1.38) with zero dedicated content. This is the strongest "low-hanging fruit" content gap: we're already ranking #1 for a keyword cluster with no page. Creating a page is virtually guaranteed to capture clicks.

### Cluster: Penn State / College

**Real opportunity (Penn State-specific) — updated with 3mo data:**
`penn state boxing` (137/104) + `psu boxing` (98/57) + `penn state mma` (66/51) + `penn state boxing club` (45/35) + `penn state mma club` (29/13) + `psu boxing club` (35/21) + `penn state bjj club` (**/12) + `penn state jiu jitsu` (10/8) + `penn state club boxing` (7/7) + `does penn state have boxing` (2/2) + `mma psu` (**/2)
*(Format: lifetime impressions / 3-month impressions)*
**Lifetime total: ~450+ impressions | 3mo total: ~312** → Landing: None! (Genuine massive gap)

> 🔴 **Penn State queries represent the largest uncaptured audience.** 312 impressions in 3 months with ZERO clicks. The 3-month to lifetime ratio (312/450 = ~69%) shows this demand is concentrated in the recent period (Penn State spring semester). This gap is **actively growing** and should be addressed before fall semester 2026 brings even more volume.

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
