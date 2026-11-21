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
      className={`content-section ${className}`}
    >
      <div className="section-heading">
        {eyebrow ? (
          <p className="eyebrow">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={headingId}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
