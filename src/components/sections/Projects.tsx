/**
 * Projects section (Server Component). Maps over the typed projects data.
 */
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
    >
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.title} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
