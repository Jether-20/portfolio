/**
 * Site footer (Server Component). Name, social links, and a build-time year.
 * The year is computed once at build (static site), not per request.
 */
import { site } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {year} {site.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
