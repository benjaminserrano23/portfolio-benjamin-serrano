"use client";

import { useState } from "react";
import { useLocale } from "./locale-provider";
import { Button } from "./button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useLocale();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none ring-0 transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.contact.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t.contact.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            {t.contact.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t.contact.emailPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t.contact.messagePlaceholder}
          className={inputClass + " resize-none"}
        />
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === "loading"} size="lg">
          {status === "loading" ? (
            <>
              <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
              {t.contact.sending}
            </>
          ) : (
            t.contact.send
          )}
        </Button>

        {status === "success" && (
          <p className="flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            {t.contact.success}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-1.5 text-sm font-medium text-red-600 dark:text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
            {t.contact.error}
          </p>
        )}
      </div>
    </form>
  );
}
