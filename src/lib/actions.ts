"use server";

/**
 * Server Action for the contact form. Sends an email via Resend and stores
 * nothing. The Resend client is created lazily inside the handler so the app
 * builds and runs even when RESEND_API_KEY is absent (placeholder env).
 */

import { Resend } from "resend";
import { site } from "@/content/site";
import {
  validateContact,
  type ContactState,
} from "@/lib/validation";

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field. Silently accept bots.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const { data, errors } = validateContact(formData);
  if (errors) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No key configured yet — fail gracefully and point to the email fallback.
    return {
      status: "error",
      message: `Email isn't configured yet. Please reach me directly at ${site.email}.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL ?? site.email;
    // Resend requires a verified domain for `from`. Until you verify one,
    // their shared sandbox sender works for testing.
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New portfolio message from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    });

    if (error) {
      return {
        status: "error",
        message: `Couldn't send your message. Please email me directly at ${site.email}.`,
      };
    }

    return { status: "success", message: "Thanks! Your message has been sent." };
  } catch {
    return {
      status: "error",
      message: `Couldn't send your message. Please email me directly at ${site.email}.`,
    };
  }
}
