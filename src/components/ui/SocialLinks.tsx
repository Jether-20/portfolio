/**
 * Social / contact links (Server Component).
 * Driven by site.social; each link has an accessible label and opens external
 * targets safely. Email uses a mailto: link.
 */
import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";

type SocialLinksProps = {
  className?: string;
  /** Tailwind size classes for the icon, e.g. "h-5 w-5". */
  iconClassName?: string;
};

const links = [
  {
    label: "GitHub",
    href: site.social.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.social.email}`,
    Icon: MailIcon,
    external: false,
  },
];

export function SocialLinks({
  className = "",
  iconClassName = "h-5 w-5",
}: SocialLinksProps) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <Icon className={iconClassName} />
          </a>
        </li>
      ))}
    </ul>
  );
}
