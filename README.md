# Karthikeya Mishra — Minimal Developer Portfolio

A clean, responsive Next.js portfolio inspired by the spacious, editorial layout of the provided reference site. It is a new design, not a copy.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push to GitHub, import the repository in Vercel, and deploy using the Next.js preset. No environment variables or API keys are required.

## Customize

- Edit the hero, experience, and pinned projects in `app/page.tsx`.
- Edit navigation in `components/navigation.tsx`.
- Edit colors, spacing, and typography in `app/globals.css`.
- Edit SEO metadata in `app/layout.tsx`.
- GitHub avatar is loaded from `https://github.com/12kaddy.png`.
- Project cards link directly to public GitHub repositories.

### About pinned repositories

The six project links were checked against the public GitHub profile on October 19, 2026. GitHub's public REST API does not expose a reliable unauthenticated pinned-repository list; the site uses this verified snapshot instead of misleadingly claiming live synchronization. Update the `pinned` array in `app/page.tsx` if you change your GitHub pins.

No unverified GitHub contribution statistics or activity counts are displayed. Keep project claims accurate and avoid publishing confidential employer information.


## Expanded sections

Experience includes detailed engineering contributions; skills include seven categories; achievements include hackathon results; certifications link directly to NPTEL, Coursera, and a locally bundled AWS Technical Essentials completion certificate (`public/certificates/aws-technical-essentials.pdf`).

The AWS credential is a **course completion certificate**, not an AWS certification exam credential. Keep the wording precise.
