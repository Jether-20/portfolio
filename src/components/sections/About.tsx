/**
 * About section (Server Component).
 */
import { Section } from "@/components/ui/Section";

const paragraphs = [
  "I'm a software developer who loves turning real-world problems into working solutions. Solving business problems with a software engineering mindset is what excites me most. Recently, I led QA testing on a multi-role service platform (customer, technician, and admin) across web and Android, documenting every issue so it could be fixed. Challenges don't scare me: if something fails, I try again and again until it's solved.",
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-[var(--text-muted)]">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </Section>
  );
}
