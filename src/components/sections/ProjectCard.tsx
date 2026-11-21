import Image from "next/image";
import type { Project } from "@/content/projects";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, liveUrl, repoUrl, image, featured } = project;
  return (
    <article className="project-card">
      {image && (
        <div className="project-image" style={{ position: "relative" }}>
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 92vw, 40vw" />
        </div>
      )}
      <div className="project-body">
        <div className="project-label eyebrow">{featured ? "Featured project" : "Project"}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags" aria-label="Technologies used">{tech.map(t => <li key={t}>{t}</li>)}</ul>
        {(liveUrl || repoUrl) && <div className="project-links">
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLinkIcon className="h-4 w-4" />Live demo<span className="sr-only"> ({title})</span></a>}
          {repoUrl && <a href={repoUrl} target="_blank" rel="noopener noreferrer"><GitHubIcon className="h-4 w-4" />Source<span className="sr-only"> ({title})</span></a>}
        </div>}
      </div>
    </article>
  );
}
