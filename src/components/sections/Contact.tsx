/**
 * Contact section (Server Component). Pairs a direct-contact column with the
 * client ContactForm leaf. The mailto link always works as a fallback even if
 * the Resend form isn't configured.
 */
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/content/site";
import { MailIcon } from "@/components/ui/Icons";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-lg leading-relaxed text-[var(--text-muted)]">
            Have an opportunity, a project, or a question? Send a message and
            I&apos;ll get back to you.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-flex items-center gap-2 text-base font-medium text-[var(--accent-hover)] transition-colors hover:text-[var(--accent-hover)]"
          >
            <MailIcon className="h-5 w-5" />
            {site.email}
          </a>

          <div className="mt-8">
            <p className="mb-2 text-sm font-medium text-[var(--text-muted)]">
              Find me online
            </p>
            <SocialLinks />
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
