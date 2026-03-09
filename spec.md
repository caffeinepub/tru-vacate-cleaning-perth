# Tru Vacate Cleaning Perth

## Current State
- 4-page React + TanStack Router (hash-based) website: Home, Services, About, Contact
- Home page has trust badges, services overview, testimonials, pricing guide, 12 FAQs, and contact form
- Footer lists 10 Perth service areas as plain text spans (no links)
- Navbar has 4 links: Home, Services, About, Contact
- `useMetaTags` hook dynamically sets title, description, keywords, og tags per page
- No dedicated suburb pages exist

## Requested Changes (Diff)

### Add
- 10 dedicated suburb pages, one per suburb: Perth CBD, Subiaco, Fremantle, Joondalup, Rockingham, Mandurah, Midland, Armadale, Scarborough, Cottesloe
- Each suburb page has:
  - Unique SEO title tag: e.g. "Vacate Cleaning [Suburb] | Tru Vacate Cleaning Perth"
  - Unique meta description (~155 chars, active voice, suburb-specific)
  - Meta keywords targeting suburb + vacate/bond cleaning
  - ~400 words of body content — semantically optimised, skimmable (headings, bullet points), active voice, Australian English, readable by a 10-year-old
  - Hero section with suburb name + WhatsApp CTA
  - Key services list (bullet points)
  - Local trust signals (mention suburb by name throughout)
  - CTA linking to contact form or WhatsApp
  - Branded hero image with alt text for SEO
- A new `/suburbs` index route and 10 `/suburbs/[suburb-slug]` routes in App.tsx
- Internal links FROM the Home page to all 10 suburb pages — a new "Areas We Serve" section with suburb name cards linking to each suburb page
- Internal links FROM the Footer — replace plain suburb text spans with `<Link>` components to the respective suburb pages
- A shared `SuburbPage` component that accepts suburb data props to avoid repetition

### Modify
- `App.tsx` — add 10 suburb routes (using dynamic param or individual routes)
- `Footer.tsx` — replace plain suburb spans with `<Link to="/suburbs/[slug]">` links
- `Home.tsx` — add "Areas We Serve" section with clickable suburb cards linking to suburb pages, placed before the FAQ section

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/pages/suburbs/suburbData.ts` — suburb data (slug, name, 400-word content, meta tags, services list)
2. Create `src/pages/suburbs/SuburbPage.tsx` — shared layout component rendering suburb content from data
3. Create individual suburb page components that pass suburb-specific data OR use a single dynamic route with param lookup
4. Update `App.tsx` to register suburb routes
5. Update `Home.tsx` to add "Areas We Serve" section with internal links to suburb pages
6. Update `Footer.tsx` to make suburb area tags into clickable links
