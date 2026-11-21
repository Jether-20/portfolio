/**
 * Skills section (Server Component). Maps over grouped skills data.
 */
import { Section } from "@/components/ui/Section";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="font-mono rounded-sm border border-[var(--border)] bg-[var(--bg-elevated)] px-3.5 py-2 text-sm font-medium text-[var(--text)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
