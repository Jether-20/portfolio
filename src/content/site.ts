/**
 * Central site configuration and personal data.
 * Single source of truth for identity, SEO copy, social links, and nav.
 * Edit values here — no content should be hardcoded in components.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SocialPlatform = "github" | "linkedin" | "email";

export const site = {
  name: "Jether C. Bagor",
  role: "Programmer",

  // One-line value statement. [TAGLINE] — edit to taste.
  tagline:
    "I build practical software that turns real-world problems into reliable, well-crafted systems.",

  // Used for <meta name="description"> and Open Graph.
  description:
    "Jether C. Bagor — Computer Science graduate and programmer building practical, reliable software that solves real-world problems.",

  // Deployment URL — used as metadataBase for absolute OG/canonical URLs.
  // Update to your real domain after deploying to Vercel.
  url: "https://jether-bagor.vercel.app",

  email: "jethercabilinbagor20@gmail.com",

  social: {
    github: "https://github.com/Jether-20/sccemp",
    linkedin: "https://www.linkedin.com/in/jether-bagor-88707440b/",
    email: "jethercabilinbagor20@gmail.com",
  } satisfies Record<SocialPlatform, string>,

  // In-page anchor navigation (single-page portfolio).
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
} as const;

export type Site = typeof site;
