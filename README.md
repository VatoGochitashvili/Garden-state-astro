# Garden State Locksmith — Astro site

Static AstroJS site (~4,000 prerendered pages) with programmatic local SEO for
New Jersey towns × locksmith services. Zero-JS content; React islands only for
the mobile menu, booking form, and service-area map.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # serve the built dist/ locally
```

## Deploy (Cloudflare Pages)

This repo is built for **Cloudflare Pages** (not a Worker — the contact form in
`functions/api/contact.ts` is a Pages Function and only runs on Pages).

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**
   → select this repo.
2. Build command: `npm run build`  ·  Build output directory: `dist`
3. Env var (Settings → Variables & Secrets, type **Secret**):
   `RESEND_API_KEY` — for the contact/booking form email notifications.
   (Without it, the form returns a graceful error; pages still work.)
4. Attach the real domain `gardenstatelocksmithnj.com` as a custom domain.

> If the GitHub repo owner changes, Cloudflare loses its Git connection —
> the new owner must reconnect the repo (re-authorize the Cloudflare GitHub
> App on their account) for auto-deploys to resume.

## Go-live SEO checklist

- [ ] Point `gardenstatelocksmithnj.com` DNS at the Pages project (canonicals
      already target this domain).
- [ ] Verify the site in **Google Search Console**.
- [ ] Submit `sitemap-index.xml` in Search Console.
- [ ] Confirm the contact form submits (needs `RESEND_API_KEY` + Pages project).

## Content

All page content is data-driven — edit the files in `src/data/`:
`locations.ts`, `categories.ts`, `services.ts`, `blogPosts.ts`. Pages regenerate
on the next build.
