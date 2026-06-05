/**
 * About section (Server Component). Copy lives in site/about content, not JSX.
 */
import { Section } from "@/components/ui/Section";

const paragraphs = [
  "I am a Computer Science graduate passionate about software development and continuous learning.",
  "I enjoy building practical systems that solve real-world problems while continuously improving my technical and communication skills.",
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </Section>
  );
}
