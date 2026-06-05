"use client";

/**
 * CLIENT COMPONENT — required because next-themes uses React Context and reads
 * `localStorage` / the OS color-scheme media query, none of which exist on the
 * server. Kept as a thin leaf wrapper so the rest of the tree stays RSC.
 */

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
