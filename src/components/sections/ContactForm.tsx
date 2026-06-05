"use client";

/**
 * CLIENT COMPONENT — the contact form uses React 19's useActionState to track
 * pending/return state from the Server Action, plus a ref to reset fields on
 * success. These need client-side state and effects. The Server Action it calls
 * (sendContactEmail) still runs on the server.
 */

import { useActionState, useEffect, useId, useRef } from "react";
import { sendContactEmail } from "@/lib/actions";
import { initialContactState } from "@/lib/validation";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();

  // Clear the form after a successful send.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  const fieldError = (name: "name" | "email" | "message") =>
    state.errors?.[name];

  return (
    <form ref={formRef} action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — hidden from users, catches naive bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-company`}>Company</label>
        <input
          id={`${uid}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor={`${uid}-name`}
          className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
        >
          Name
        </label>
        <input
          id={`${uid}-name`}
          name="name"
          type="text"
          required
          autoComplete="name"
          aria-invalid={fieldError("name") ? true : undefined}
          aria-describedby={fieldError("name") ? `${uid}-name-error` : undefined}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          placeholder="Your name"
        />
        {fieldError("name") ? (
          <p id={`${uid}-name-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {fieldError("name")}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${uid}-email`}
          className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
        >
          Email
        </label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={fieldError("email") ? true : undefined}
          aria-describedby={fieldError("email") ? `${uid}-email-error` : undefined}
          className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          placeholder="you@example.com"
        />
        {fieldError("email") ? (
          <p id={`${uid}-email-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {fieldError("email")}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${uid}-message`}
          className="mb-1.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200"
        >
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          required
          rows={5}
          aria-invalid={fieldError("message") ? true : undefined}
          aria-describedby={
            fieldError("message") ? `${uid}-message-error` : undefined
          }
          className="w-full resize-y rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          placeholder="Tell me about your project or just say hi."
        />
        {fieldError("message") ? (
          <p id={`${uid}-message-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
            {fieldError("message")}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-indigo-600 px-7 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto dark:bg-indigo-500 dark:hover:bg-indigo-400"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>

      {/* Status announcement for screen readers and sighted users. */}
      <p
        role="status"
        aria-live="polite"
        className={
          state.status === "success"
            ? "text-sm font-medium text-green-600 dark:text-green-400"
            : state.status === "error"
              ? "text-sm font-medium text-red-600 dark:text-red-400"
              : "sr-only"
        }
      >
        {state.message}
      </p>
    </form>
  );
}
