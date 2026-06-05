/**
 * Hero section (Server Component). Renders identity + tagline from site config.
 * `id="top"` is the scroll target for the header brand link.
 */
import { site } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ArrowDownIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-5xl flex-col justify-center px-6 py-20"
    >
      <p className="mb-4 text-base font-medium text-indigo-600 dark:text-indigo-400">
        Hi, my name is
      </p>

      <h1
        id="hero-heading"
        className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50"
      >
        {site.name}
      </h1>

      <p className="mt-3 text-2xl font-semibold text-zinc-500 sm:text-3xl dark:text-zinc-400">
        {site.role}
      </p>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
        {site.tagline}
      </p>

      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <a
          href="#projects"
          className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-7 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
        >
          Get in touch
        </a>
        <SocialLinks className="sm:ml-2" />
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="mt-16 inline-flex w-fit items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        <span>Scroll down</span>
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
