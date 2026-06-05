# Portfolio — Jether C. Bagor

A personal portfolio website built with **Next.js 16 (App Router)**, **React 19**,
**TypeScript (strict)**, and **Tailwind CSS v4**, rendered statically and served on
**Turbopack**.

## Highlights

- **Server Components by default.** Only four interactive leaves are client
  components: `ThemeProvider`, `ThemeToggle`, `MobileNav`, and `ContactForm`.
- **Static-first.** Every section prerenders to HTML at build time — no runtime
  data fetching.
- **Content is data.** Edit `src/content/*.ts`; the UI maps over it. Nothing is
  hardcoded in JSX.
- **Dark / light mode** via `next-themes`, respecting system preference.
- **SEO:** Metadata API (title/description/OG/Twitter), `sitemap.ts`, `robots.ts`,
  and a build-time Open Graph image (`opengraph-image.tsx`).
- **Accessible:** semantic landmarks, skip link, keyboard nav, visible focus,
  labelled icons, AA contrast.
- **No database**, no UI library, no state library — just what the site needs.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
npm run build    # production build (Turbopack)
npm run start    # serve the production build
npm run lint
```

## Editing content

| What | Where |
| --- | --- |
| Name, role, tagline, description, social links, nav | `src/content/site.ts` |
| Projects (title, description, tech, links, image) | `src/content/projects.ts` |
| Skills (grouped) | `src/content/skills.ts` |
| About paragraphs | `src/components/sections/About.tsx` |

Project screenshots are optional: add an image to `/public`, then set
`image: { src: "/your-shot.png", alt: "…" }` on the project. Without one, the card
shows a styled gradient header.

## Contact form (optional — Resend)

The form submits via a Server Action (`src/lib/actions.ts`) that emails through
[Resend](https://resend.com) and stores nothing. It works without configuration —
it just shows an "email me directly" message until you add a key.

1. Copy `.env.example` → `.env.local`
2. Set `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`)

A `mailto:` link is always available as a fallback.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import it at [vercel.com/new](https://vercel.com/new) — framework auto-detects
   as Next.js, no config needed.
3. (Optional) add the Resend env vars in the Vercel project settings.
4. Update `site.url` in `src/content/site.ts` to your final domain so OG and
   canonical/sitemap URLs are absolute.

## Tech

Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4 · next-themes · Resend ·
Turbopack
