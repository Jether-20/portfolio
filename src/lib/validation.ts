/**
 * Contact form validation + shared types.
 * Plain module (no "use server") so it can be imported by both the Server
 * Action and the client form without bundling server code into the client.
 */

export type ContactFieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: ContactFieldErrors;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(
  formData: FormData,
): { data: ContactData; errors: null } | { data: null; errors: ContactFieldErrors } {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactFieldErrors = {};

  if (name.length < 2) errors.name = "Please enter your name.";
  if (name.length > 100) errors.name = "Name is too long.";

  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  if (message.length < 10)
    errors.message = "Message should be at least 10 characters.";
  if (message.length > 5000) errors.message = "Message is too long.";

  if (Object.keys(errors).length > 0) {
    return { data: null, errors };
  }

  return { data: { name, email, message }, errors: null };
}
