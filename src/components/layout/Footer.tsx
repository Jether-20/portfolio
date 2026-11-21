/**
 * Site footer (Server Component). Name, social links, and a build-time year.
 * The year is computed once at build (static site), not per request.
 */
import { site } from "@/content/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-[1536px] flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-[var(--text-muted)]">
          &copy; {year} {site.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
