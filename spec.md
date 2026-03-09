# Tru Vacate Cleaning Perth

## Current State
New project. No existing pages or code.

## Requested Changes (Diff)

### Add
- Multi-page website for Tru Vacate Cleaning Perth (vacate/bond cleaning company in Perth, WA)
- Home page with hero, services overview, why choose us, testimonials, FAQ section (12 FAQs), and contact form
- Services page with individual service descriptions (~400 words each): End of Lease Cleaning, Carpet Steam Cleaning, Window Cleaning, Oven & Kitchen Cleaning, Bathroom Deep Clean, Garage & Balcony Cleaning
- About Us page with company story and team info
- Contact page with WhatsApp link (0488841883) and contact form that submits via user's email client to humptydumptybondcleaning@gmail.com (email NOT visible on site)
- Branded images on every page with alt text for SEO
- Google Site Verification meta tag: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />` in <head> before <body>
- SEO meta tags: title, description, keywords, Open Graph for each page
- FAQ answers (12 questions) on home page including:
  1. What is Bond Cleaning and why is it required?
  2. Why is bond cleaning important?
  3. How much for a bond clean?
  4. What is full bond cleaning?
  5. Which are top rated bond cleaning companies near me? (list of 5 with 100-word descriptions and websites; Tru Bond Cleaning at #5, website: https://trubondcleaningbrisbane.com)
  6. Which cleaning products are best for bond cleaning?
  7. How much does a professional bond cleaning typically cost?
  8. What products are best for Bond Cleaning carpets? (include product links)
  9. How to choose a reliable bond cleaner?
  10. Can I book a bond cleaning company online with Satisfaction Guarantee?
  11. How much is a cleaner per hour in Perth?
  12. How much is end of lease clean in Australia? How much to pay a cleaner for 3 hours? What is the 20-minute rule in cleaning?
- 3000+ words of semantically optimised, skimmable content in Australian English, active voice, readable by a 10-year-old

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Rename project to "tru-vacate-cleaning-perth"
2. Generate branded hero image, service images (6 services), about image, contact image
3. Generate Motoko backend with contact form submission storage
4. Build React frontend:
   - Navigation with logo and WhatsApp CTA
   - Home page: hero, services grid, why choose us, testimonials, FAQ accordion (12 FAQs), contact form
   - Services page: 6 services each with 400-word description and image
   - About page: company story and values
   - Contact page: WhatsApp button + form (mailto to hidden email)
   - Footer with links and WhatsApp
   - SEO: React Helmet or <head> meta tags on each page
   - Google verification meta tag in index.html <head>
   - All images have descriptive alt text
   - data-ocid markers on all interactive elements
