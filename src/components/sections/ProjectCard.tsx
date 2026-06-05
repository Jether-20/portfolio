/**
 * Single project card (Server Component).
 * Renders an optional screenshot via next/image, or a styled gradient header
 * when no image is provided. Tech tags and links are data-driven.
 */
import Image from "next/image";
import type { Project } from "@/content/projects";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, liveUrl, repoUrl, image, featured } =
    project;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      {image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden
          className="flex aspect-[16/9] items-center justify-center border-b border-zinc-200 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 dark:border-zinc-800"
        >
          <span className="text-3xl font-bold text-white/90">
            {title.charAt(0)}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {title}
          </h3>
          {featured ? (
            <span className="shrink-0 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              Featured
            </span>
          ) : null}
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {t}
            </li>
          ))}
        </ul>

        {(liveUrl || repoUrl) && (
          <div className="mt-5 flex items-center gap-4">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Live demo
                <span className="sr-only"> ({title})</span>
              </a>
            ) : null}
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                <GitHubIcon className="h-4 w-4" />
                Source
                <span className="sr-only"> ({title})</span>
              </a>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
