"use client";

/**
 * CLIENT COMPONENT — toggles the theme via next-themes, which requires browser
 * APIs (localStorage, matchMedia) and React context. Isolated as a small leaf
 * so parents stay Server Components.
 *
 * Which icon shows is driven purely by the `.dark` class that next-themes sets
 * on <html> before hydration (see CSS `dark:` variants below). That avoids a
 * `mounted` flag / setState-in-effect and any hydration mismatch.
 */

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@/components/ui/Icons";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  // Read the live theme from the DOM at click time so we never depend on a
  // not-yet-resolved state value.
  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
    >
      {/* Moon in light mode, Sun in dark mode — toggled by CSS, not JS state. */}
      <MoonIcon className="h-5 w-5 dark:hidden" />
      <SunIcon className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
