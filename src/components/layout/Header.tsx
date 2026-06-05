/**
 * Site header (Server Component). Sticky, translucent, with desktop nav plus
 * two client leaves: ThemeToggle and MobileNav. Content comes from site config.
 */
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="rounded-md text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {site.name}
        </a>

        <div className="flex items-center gap-1">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
          <MobileNav items={site.nav} />
        </div>
      </div>
    </header>
  );
}
