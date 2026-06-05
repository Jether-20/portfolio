/**
 * Skills grouped by category, rendered by the Skills section.
 * Edit the groups/skills here; the UI maps over them.
 */

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "API Routes", "Prisma", "PostgreSQL"],
  },
];
