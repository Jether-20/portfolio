/**
 * Reusable section wrapper (Server Component).
 * Provides consistent vertical rhythm, a centered max-width container, a
 * semantic <section> with an id for anchor nav, and an accessible heading
 * linked to the section via aria-labelledby.
 */
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  /** Optional short line under the heading. */
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`mx-auto w-full max-w-5xl px-6 py-20 sm:py-24 ${className}`}
    >
      <div className="mb-10 sm:mb-12">
        {eyebrow ? (
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
