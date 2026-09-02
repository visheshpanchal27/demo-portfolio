# Premium Instagram Influencer Portfolio — Complete Specification
# Project: Alex Rivera | Lifestyle & Travel Influencer
# Stack: Next.js (latest) + TypeScript + Tailwind CSS v4 + Motion for React + Lucide React

---

## 1. PROJECT OVERVIEW

Goal: A personal luxury brand website for an Instagram influencer.
Not a generic template — feels like a premium editorial magazine.

Visual Direction:
- Premium, Editorial, Modern, Confident
- Fashion/lifestyle oriented
- High-end creator identity
- Strong photography focus
- Smooth interaction design
- Minimal but visually impressive
- Mobile-first
- Brand-collaboration focused

Target Audience: Brand managers, agencies, marketing teams
Primary Message: "This creator is professional and worth collaborating with."

---

## 2. TECHNOLOGY STACK

| Layer       | Technology                        | Version     |
|-------------|-----------------------------------|-------------|
| Framework   | Next.js (App Router, SSR, SEO)    | Latest (16.x LTS) |
| Language    | TypeScript                        | Latest      |
| Styling     | Tailwind CSS                      | v4          |
| Animation   | Motion for React                  | Latest      |
| Icons       | Lucide React                      | Latest      |
| Images      | Next.js Image (optimized)         | Built-in    |
| Fonts       | Google Fonts (via next/font)      | Built-in    |

NO additional libraries beyond these five.

---

## 3. DESIGN SYSTEM

### Colors
```
Background:        #080808
Secondary BG:      #0D0D0D
Card:              #111111
Elevated Card:     #151515
Border:            rgba(255,255,255,0.08)
Primary Text:      #FFFFFF
Secondary Text:    #A1A1AA
Muted Text:        #71717A
Accent Purple:     #8b5cf6
Accent Pink:       #ec4899
Gradient:          violet → pink (used selectively, NOT everywhere)
```

### Typography
```
Headings:  Playfair Display (editorial serif — luxury magazine feel)
Body:      Inter (modern sans-serif — clean and readable)
```

### Gradient Usage Rules
Use gradient ONLY on:
- CTA button glow
- Active tab indicator
- Hero highlight text
- Hover states
- Accent lines
- Background glow (subtle)
- Button borders

DO NOT use gradient on every card or section background.

---

## 4. FOLDER STRUCTURE

```
krunal-portfolio/
│
├── app/
│   ├── layout.tsx          — Root layout, SEO metadata, fonts, custom cursor
│   ├── page.tsx            — Main page assembles all sections in order
│   ├── globals.css         — Global styles, custom scrollbar, CSS variables
│   └── not-found.tsx       — Branded 404 page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          — Sticky navbar, scroll progress, mobile menu
│   │   └── Footer.tsx          — Social links, copyright, back to top
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx            — Section wrapper, background glow, particles
│   │   │   ├── HeroContent.tsx     — Name reveal, tagline, typewriter, CTAs
│   │   │   └── HeroImage.tsx       — Profile photo, glowing ring, floating stat cards
│   │   │
│   │   ├── About/
│   │   │   ├── About.tsx           — Bio, category tags, editorial layout
│   │   │   └── Stats.tsx           — Animated counter cards (5 stats)
│   │   │
│   │   ├── WhyBrands/
│   │   │   └── WhyBrands.tsx       — 4 value proposition cards with icons
│   │   │
│   │   ├── Gallery/
│   │   │   ├── Gallery.tsx         — Section wrapper, filter logic, masonry grid
│   │   │   ├── GalleryCard.tsx     — Single photo card, hover overlay
│   │   │   ├── CategoryFilter.tsx  — Animated filter tabs
│   │   │   └── Lightbox.tsx        — Full-screen image lightbox modal
│   │   │
│   │   ├── Reels/
│   │   │   ├── FeaturedReels.tsx   — Horizontal scroll section
│   │   │   ├── ReelCard.tsx        — Thumbnail card, play button, stats
│   │   │   └── ReelModal.tsx       — Full-screen reel modal
│   │   │
│   │   ├── Campaigns/
│   │   │   └── Campaigns.tsx       — Campaign case studies with results
│   │   │
│   │   ├── Brands/
│   │   │   ├── Brands.tsx          — Section wrapper
│   │   │   └── BrandMarquee.tsx    — Infinite scroll marquee, pause on hover
│   │   │
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.tsx    — Slider wrapper
│   │   │   └── TestimonialCard.tsx — Quote, name, role, stars
│   │   │
│   │   ├── Services/
│   │   │   └── Services.tsx        — 6 service cards with icons
│   │   │
│   │   ├── SocialProof/
│   │   │   └── SocialProof.tsx     — Narrow credibility strip
│   │   │
│   │   ├── InstagramCTA/
│   │   │   └── InstagramCTA.tsx    — Follow section with handle + gradient glow
│   │   │
│   │   ├── CollabCTA/
│   │   │   └── CollabCTA.tsx       — Final full-screen collaboration CTA
│   │   │
│   │   └── Contact/
│   │       ├── Contact.tsx         — Section wrapper, quick contact cards
│   │       └── ContactForm.tsx     — Floating label form with validation
│   │
│   ├── ui/
│   │   ├── Button.tsx              — Reusable button (primary, outline, ghost variants)
│   │   ├── SectionHeading.tsx      — Section title + subtitle + accent line
│   │   ├── AnimatedCounter.tsx     — Count-up animation on scroll enter
│   │   ├── SocialIcon.tsx          — Social icon link with hover glow
│   │   ├── Badge.tsx               — Category/tag badge component
│   │   ├── Modal.tsx               — Reusable modal wrapper with backdrop
│   │   └── CustomCursor.tsx        — Desktop-only custom cursor (View/Play/Open)
│   │
│   └── animations/
│       ├── FadeIn.tsx              — Fade in on scroll wrapper
│       ├── Reveal.tsx              — Masked upward reveal wrapper
│       ├── StaggerContainer.tsx    — Stagger children animations
│       └── Parallax.tsx            — Scroll parallax wrapper
│
├── data/
│   ├── profile.ts          — Name, handle, bio, stats, social links, SEO
│   ├── gallery.ts          — 9 gallery items (category, image, likes, caption)
│   ├── reels.ts            — 6 reel cards (thumbnail, title, views, likes)
│   ├── brands.ts           — 8 brand names for marquee
│   ├── testimonials.ts     — 3 testimonials (name, role, company, quote, stars)
│   ├── services.ts         — 6 services (title, description, icon name)
│   └── campaigns.ts        — 2 campaign case studies with results
│
├── public/
│   ├── images/             — Static images (replace with real photos later)
│   └── videos/             — Static video thumbnails
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 5. PAGE SECTION ORDER (top to bottom)

```
1.  Navbar              — Transparent → blur on scroll, scroll progress bar
2.  Hero                — Full screen, creator identity, photo, floating stats
3.  Stats Strip         — 5 animated counters (inline or below hero)
4.  About               — Bio, category tags, editorial layout
5.  WhyBrands           — 4 value proposition cards
6.  Gallery             — Masonry grid with category filter + lightbox
7.  FeaturedReels       — Horizontal scroll reel cards + modal
8.  Campaigns           — 2 campaign case studies with results
9.  Brands              — "Trusted By" infinite marquee
10. Testimonials        — Sliding testimonial cards
11. Services            — 6 collaboration service cards
12. SocialProof         — Narrow credibility strip
13. InstagramCTA        — Follow section
14. CollabCTA           — Full-screen final CTA
15. Contact             — Form + quick contact cards
16. Footer              — Minimal dark footer
```

---

## 6. DEMO DATA (replace with real data later)

### Profile
```
Name:         Alex Rivera
Handle:       @alexrivera
Tagline:      Lifestyle · Travel · Fashion
Bio:          Lifestyle and travel creator producing visual stories,
              engaging short-form content, and brand-focused campaigns
              for a growing digital audience of 121K.
Location:     New York City — Available Worldwide
Email:        hello@alexrivera.com
Instagram:    https://instagram.com/alexrivera
YouTube:      https://youtube.com/@alexrivera
TikTok:       https://tiktok.com/@alexrivera
```

### Stats
```
121K+   Followers
890     Posts
4.2%    Engagement Rate
8.6M+   Monthly Reach
250+    Brand Deliverables
```

### Gallery Categories
```
All | Lifestyle | Travel | Fashion | Food | Beauty
```

### Gallery Items (9 items — Unsplash URLs)
```
1. Travel    — Mountain landscape
2. Lifestyle — Morning coffee
3. Fashion   — Editorial look
4. Travel    — Tropical beach
5. Food      — Aesthetic food
6. Lifestyle — Friends moment
7. Travel    — City skyline
8. Fashion   — Street style
9. Beauty    — Skincare flat lay
```

### Reels (6 items)
```
1. "Summer Escape"       — Travel    — 2.4M views
2. "Morning Routine"     — Lifestyle — 1.8M views
3. "OOTD Series"         — Fashion   — 3.1M views
4. "Hidden Cafes NYC"    — Food      — 980K views
5. "Skincare Ritual"     — Beauty    — 1.2M views
6. "Golden Hour Shoot"   — Travel    — 2.7M views
```

### Brands (8 demo brands)
```
Nike | Adidas | Samsung | Airbnb | Zara | Myntra | Sephora | Canon
NOTE: Replace with real brand partnerships only
```

### Testimonials (3)
```
1. "Alex brought exceptional creative energy to the campaign..."
   — Sarah Chen, Marketing Director, Brand Co.

2. "The content exceeded our performance benchmarks significantly..."
   — James Park, Head of Influencer Marketing, Agency X

3. "Professional, creative, and delivered on time every single time..."
   — Priya Sharma, Brand Manager, Fashion House
```

### Services (6)
```
1. Sponsored Reels       — Creative short-form product integration
2. Brand Campaigns       — End-to-end social campaign content
3. UGC Content           — Authentic creator-style content for paid media
4. Product Photography   — High-quality visual assets
5. Event Coverage        — Lifestyle and event-based content
6. Travel Campaigns      — Destination and hospitality storytelling
```

### Campaigns (2 case studies)
```
Campaign 1:
  Name:         Summer Escape 2025
  Brand:        [Brand Name]
  Type:         Travel / Lifestyle
  Deliverables: 2 Reels, 4 Stories, 1 Carousel, 10 Photos
  Results:      1.8M Reach | 124K Views | 7.1% Engagement

Campaign 2:
  Name:         Urban Style Drop
  Brand:        [Brand Name]
  Type:         Fashion / UGC
  Deliverables: 3 Reels, 6 Stories, 2 Carousels
  Results:      2.3M Reach | 210K Views | 6.4% Engagement
```

---

## 7. ANIMATIONS SPECIFICATION

### Animation Language (3 speeds)
```
Fast   (0.15–0.25s) — Buttons, icons, small hover effects
Medium (0.3–0.5s)  — Cards, text, images
Slow   (0.6–1.0s)  — Hero photography, large section transitions
```

### Per-Section Animations
```
Navbar:        Transparent → blur backdrop on scroll, height shrinks
               Scroll progress bar (thin gradient line at top)
               Mobile: full-screen overlay menu with stagger links

Hero:          Sequence on load:
               1. Background glow appears
               2. Navbar fades in
               3. Small creator label appears
               4. Name mask-reveals upward (NOT typewriter for name)
               5. Tagline appears
               6. CTA buttons appear
               7. Photo fades + scales from 1.05 → 1
               8. Floating stat cards animate in
               Typewriter: used only for rotating role description
               Parallax: hero image moves slower than scroll

About:         Slide in from left (text), slide from right (image)
               Category tags stagger in

Stats:         Count-up animation when entering viewport
               Spring-style counting (0 → 121K)

Gallery:       Filter: current cards animate out, new cards animate in
               Layout animation (Motion layout prop)
               Hover: image zoom + overlay slide up
               Lightbox: backdrop fade, image scale 0.95 → 1

Reels:         Horizontal drag scroll
               Hover: thumbnail scale, play button expand, stats slide up
               Modal: full-screen enter/exit with presence animation

Campaigns:     Scroll-triggered reveal, progress line grows

Brands:        Continuous horizontal marquee
               Pause on hover, fade edges, seamless loop

Testimonials:  Horizontal slide, dot indicators, auto-advance

Services:      Stagger card reveal on scroll

Contact:       Floating label inputs (label moves up on focus)
               Focus: gradient border + subtle glow
               Success: check icon + success message animation
```

### Scroll Animation Types Used
```
FadeUp      — Element fades in while moving upward (most common)
FadeIn      — Simple opacity reveal
SlideLeft   — Editorial text sections
SlideRight  — Imagery sections
ScaleReveal — Featured photos
MaskReveal  — Large headings (clip-path animation)
Stagger     — Cards appear one after another
Parallax    — Hero photography
```

### Reduced Motion
```
All animations must respect prefers-reduced-motion.
Motion for React provides built-in support — use it.
```

---

## 8. CUSTOM CURSOR (Desktop Only)

```
Default:          Small circular dot
Hover image:      Shows "View" text
Hover reel:       Shows "Play" text
Hover link:       Shows "Open" text
Hover CTA:        Shows "Let's Talk" text
Touch devices:    Cursor completely disabled
```

---

## 9. NAVBAR SPECIFICATION

### Desktop
```
Left:    Creator name / logo
Center:  Home | About | Work | Reels | Collaborations | Contact
Right:   "Work With Me" CTA button
```

### Mobile
```
Left:    Logo
Right:   Hamburger menu icon
Open:    Full-screen animated overlay
         Links stagger in one by one
```

### Scroll Behavior
```
At top:       Transparent, no border
After scroll: Dark blur backdrop, subtle border, compact height
Transition:   Smooth (Motion animate)
Progress bar: Thin gradient line at very top of viewport
```

---

## 10. HERO SECTION SPECIFICATION

### Layout
```
Left side:  Creator content (name, tagline, bio, CTAs)
Right side: Large creator photo with glow ring
Background: Large blurred radial gradient glow
            Very subtle noise texture
            Slow-moving light gradient
            Extremely subtle floating shapes (NOT busy)
```

### Floating Stat Cards (around image)
```
Card 1: 121K+ / Instagram Community
Card 2: 4.2%  / Engagement Rate
Card 3: 89M+  / Content Reach
Animation: Slow vertical float, subtle rotation, parallax
Style: Glassmorphism (translucent dark, subtle border)
```

### CTAs
```
Primary:   "Work With Me"  — gradient background
Secondary: "View Instagram" — outline style
```

---

## 11. GALLERY SPECIFICATION

### Grid Layout
```
Desktop: Masonry/editorial grid (mix portrait, landscape, square)
Tablet:  2-column masonry
Mobile:  2-column optimized
```

### Hover State
```
Image gently zooms
Overlay darkens
Category badge appears
Instagram icon appears
"View Post" text appears
Arrow moves slightly
```

### Lightbox
```
Backdrop: fades in
Image:    scales from 0.95 → 1
Content:  slides upward
Controls: Previous | Next | Close
Info:     Category, Caption, Instagram button
```

---

## 12. CONTACT FORM SPECIFICATION

### Fields
```
Name          — text input
Company       — text input
Email         — email input
Campaign Type — select dropdown
Budget        — select dropdown
Message       — textarea
```

### Campaign Type Options
```
Sponsored Content | Reels | UGC | Product Photography | Travel Campaign | Event | Other
```

### Budget Options
```
Under $500 | $500–$1,000 | $1,000–$5,000 | $5,000–$10,000 | $10,000+ | Let's Discuss
```

### Input States
```
Normal:  Dark field, thin border rgba(255,255,255,0.08)
Focus:   Gradient border, subtle glow, label moves upward
Error:   Inline error message, gentle shake animation
Success: Animated check icon + success message
```

### Quick Contact Cards (beside form)
```
Instagram:  @alexrivera
Email:      hello@alexrivera.com
WhatsApp:   Available for collaborations
Media Kit:  Download button
```

---

## 13. SEO SPECIFICATION

### Metadata (in layout.tsx)
```typescript
title:       "Alex Rivera | Lifestyle & Travel Creator"
description: "NYC-based lifestyle and travel content creator with 121K Instagram followers. Available for brand campaigns, sponsored reels, UGC, and travel collaborations."
keywords:    "lifestyle influencer, travel creator, NYC influencer, brand collaboration, instagram influencer, UGC creator"
```

### Open Graph
```
og:title       — same as title
og:description — same as description
og:image       — professional creator photo (1200x630)
og:type        — website
og:url         — canonical URL
```

### Twitter Card
```
twitter:card        — summary_large_image
twitter:site        — @alexrivera
twitter:image       — same as og:image
```

### Structured Data (JSON-LD)
```json
{
  "@type": "Person",
  "name": "Alex Rivera",
  "jobTitle": "Content Creator",
  "url": "https://alexrivera.com",
  "sameAs": [instagram, youtube, tiktok, twitter]
}
```

### Semantic HTML
```
<nav>     — navigation
<main>    — main content
<section> — each section with id
<h1>      — creator name (once, in hero)
<h2>      — section headings
<h3>      — card headings
<footer>  — footer
Alt text on ALL images
Aria labels on icon-only buttons
```

---

## 14. PERFORMANCE RULES

```
- Use next/image for ALL images (automatic optimization, WebP, lazy load)
- Videos: thumbnail first, load video only on interaction
- No autoplay videos on page load
- Lazy load below-fold sections
- Minimize client-side JS (use server components where possible)
- No unnecessary re-renders
- Motion animations: use will-change sparingly
- Fonts: use next/font (no layout shift)
- Images: always specify width and height
```

---

## 15. ACCESSIBILITY RULES

```
- All buttons have accessible labels
- All images have alt text
- Form inputs have associated labels
- Focus states are visible (not removed)
- Heading hierarchy: h1 → h2 → h3 (never skip)
- Color contrast: minimum 4.5:1 for body text
- No information conveyed by color alone
- Keyboard navigation works throughout
- Reduced motion: all animations respect prefers-reduced-motion
- Modal: focus trap when open, restore focus on close
```

---

## 16. RESPONSIVE BREAKPOINTS

```
Mobile:   < 640px   — Single column, hamburger nav, swipe reels
Tablet:   640–1024px — 2-column grid, side-by-side content
Laptop:   1024–1280px — 3-column grid, full nav
Desktop:  > 1280px  — Full editorial layout, max-width container
Large:    > 1536px  — Larger whitespace, controlled max-width
```

### Mobile-Specific Rules
```
- Remove custom cursor
- Remove magnetic button effect
- Reduce parallax intensity
- Replace hover interactions with tap
- Horizontal swipe for reels
- Large touch targets (min 44x44px)
- Easy-to-use form inputs
```

---

## 17. COMPONENT SIZE RULES

```
Preferred:   100–300 lines
Acceptable:  300–500 lines
Avoid:       500+ lines
Never:       1000+ lines

If a component grows too large → split into smaller components
app/page.tsx → imports and arranges sections ONLY
Data → always in /data files, never hardcoded in components
```

---

## 18. MICROINTERACTIONS

```
Buttons:
  - Hover: background moves, arrow shifts, slight scale, glow
  - Active: slight press down

Links:
  - Underline grows left → right on hover

Cards:
  - Tiny vertical translation on hover (translateY -4px)

Images:
  - Subtle zoom on hover (scale 1.05)

Stats:
  - Number count-up animation

Icons:
  - Tiny movement or rotation on hover

Navigation:
  - Active section indicator (gradient underline)

Filters:
  - Animated active indicator (not abrupt background change)
```

---

## 19. MAGNETIC BUTTONS (Desktop Only)

```
Behavior:
  - Button moves slightly toward cursor when nearby
  - Icon follows cursor movement
  - Returns smoothly when cursor leaves
  - Movement is subtle (max 8–12px)
  - Only on primary CTA buttons
  - Disabled on touch devices
```

---

## 20. LOADING SEQUENCE

```
1. Dark screen appears
2. Creator monogram "AR" or logo animates in
3. Thin loading line progresses
4. Logo fades out
5. Hero section reveals
6. Page becomes interactive

Total duration: under 1.5 seconds
Do NOT make users wait unnecessarily
```

---

## 21. 404 PAGE

```
Heading:    "Lost in the feed?"
Subtext:    "This page doesn't exist, but great content does."
CTA:        "Back Home" button
Visual:     Small animated visual (subtle, branded)
Style:      Same dark theme, same fonts
```

---

## 22. FOOTER SPECIFICATION

```
Left:    Creator name + tagline
Center:  Navigation links
Right:   Social icons (Instagram, YouTube, TikTok, Twitter)

Bottom:
  Left:  © 2026 Alex Rivera. All rights reserved.
  Right: Available for selected collaborations.

Back to top: Animated scroll-to-top button
```

---

## 23. EDITORIAL TYPOGRAPHY SECTIONS

Between major sections, use oversized display text:

```
Section between Gallery and Reels:
  "CREATE. CONNECT. INSPIRE."

Section before Contact:
  "Stories that
   people remember."

Full-screen statement section:
  "Content that feels human."
  + small supporting paragraph
  + slow background light movement
  + text mask reveal animation
```

---

## 24. STICKY CTA (Desktop)

```
Position: Fixed, bottom-right corner
Content:  "Work With Me" with arrow icon
Behavior: Appears after scrolling past hero
          Smooth fade in
          Dismissible
Mobile:   Bottom sticky bar with "Instagram | Collaborate"
```

---

## 25. CUSTOM SCROLLBAR

```
Width:      6px
Track:      #111111
Thumb:      gradient (purple → pink)
Hover:      slightly brighter
Border:     rounded
```

---

## 26. WHAT TO REPLACE WITH REAL DATA

When the real influencer provides their information, update ONLY these files:

```
data/profile.ts     — Name, handle, bio, location, email, social links, stats
data/gallery.ts     — Real photo URLs, captions, categories
data/reels.ts       — Real reel thumbnails, titles, view counts
data/brands.ts      — Real brand partnerships only
data/testimonials.ts — Real testimonials from real brand contacts
data/services.ts    — Adjust services offered
data/campaigns.ts   — Real campaign results

public/images/      — Replace Unsplash URLs with real photos
```

NO component redesign needed. Only data file updates required.

---

## 27. ICONS USED (Lucide React)

```
Instagram       — social profile
ArrowUpRight    — external/social link
Play            — reel
Heart           — likes
MessageCircle   — comments
Share2          — shares
Mail            — email
Phone           — contact
MapPin          — location
Download        — media kit
ExternalLink    — external link
ChevronLeft     — carousel previous
ChevronRight    — carousel next
Menu            — navigation open
X               — close / navigation close
Sparkles        — creative indicator
Camera          — photography service
Video           — reels/content service
Globe           — worldwide availability
Star            — testimonial rating
ArrowUp         — back to top
Briefcase       — brand campaigns
Users           — audience/community
TrendingUp      — engagement/results
```

NO emojis anywhere in the UI.

---

## 28. FINAL QUALITY CHECKLIST

Before considering the build complete, verify:

[ ] Premium dark visual system implemented
[ ] Editorial serif + sans-serif typography working
[ ] All demo photos loading (Unsplash URLs)
[ ] Motion animations smooth and not excessive
[ ] Fully responsive (mobile, tablet, laptop, desktop)
[ ] Custom cursor working on desktop, disabled on mobile
[ ] Scroll progress bar working
[ ] Navbar transparent → blur transition working
[ ] Hero load sequence working
[ ] Floating stat cards animating
[ ] Gallery filter + lightbox working
[ ] Reels horizontal scroll + modal working
[ ] Brand marquee infinite scroll working
[ ] Testimonial slider working
[ ] Contact form validation working
[ ] SEO metadata complete
[ ] Structured data (JSON-LD) added
[ ] Reduced motion respected
[ ] All images have alt text
[ ] All buttons have accessible labels
[ ] No single file exceeds 500 lines
[ ] All content in /data files (not hardcoded)
[ ] 404 page created
[ ] Custom scrollbar styled
[ ] Loading sequence working
[ ] Performance: images optimized via next/image
[ ] No emojis in UI
[ ] No unnecessary libraries

---

END OF SPECIFICATION
