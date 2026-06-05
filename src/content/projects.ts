/**
 * Portfolio projects — data-driven list rendered by the Projects section.
 * Add, remove, or reorder entries here; the UI adapts automatically.
 *
 * `image` is optional: when omitted, the card renders a styled gradient header
 * instead, so every project looks intentional even without a screenshot.
 */
import type { StaticImageData } from "next/image";
import sccempImage from "@/image/sccemp.png";

export type Project = {
  title: string;
  description: string;
  /** Technology tags shown as pills. */
  tech: string[];
  /** Live/demo URL — omit if not deployed. */
  liveUrl?: string;
  /** Source repository URL — omit if private. */
  repoUrl?: string;
  /**
   * Optional screenshot, rendered with next/image. Either a statically imported
   * image (e.g. `import img from "@/image/foo.png"`, dimensions auto-detected)
   * or a string path to a file in /public (e.g. "/foo.png").
   */
  image?: {
    src: string | StaticImageData;
    alt: string;
  };
  /** Featured projects can be visually emphasized. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SCCEMP — Smart College-Centered Equipment Management Platform",
    description:
      "A web platform for managing college equipment: tracking inventory, handling borrow/return requests, and giving staff a clear view of what is available, in use, or overdue. Built to replace manual, paper-based equipment logging with a fast, searchable system.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    liveUrl: "https://sccemp.com",
    image: {
      src: sccempImage,
      alt: "SCCEMP sign-in page — the Smart College-Centered Equipment Management Platform",
    },
    featured: true,
  },
  {
    title: "Project Two — Placeholder",
    description:
      "Replace this with a real project. Describe the problem it solves, your role, and the outcome in two or three sentences.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    // repoUrl: "https://github.com/Jether-20/your-repo",
    // liveUrl: "https://your-project.vercel.app",
  },
  {
    title: "Project Three — Placeholder",
    description:
      "Replace this with a real project. Keep descriptions concrete: what it does and why it matters.",
    tech: ["Node.js", "API Routes", "PostgreSQL"],
    // repoUrl: "https://github.com/Jether-20/your-repo",
    // liveUrl: "https://your-project.vercel.app",
  },
];
