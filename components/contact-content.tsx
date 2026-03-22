"use client";

import { useLocale } from "./locale-provider";
import { SectionHeading } from "./section-heading";
import { ContactForm } from "./contact-form";

export function ContactContent() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <SectionHeading
        title={t.sections.contact}
        description={t.sections.contactDesc}
      />
      <ContactForm />
      <div className="mt-12 text-sm text-muted-foreground">
        <p>
          {t.contact.also}{" "}
          <a
            href="mailto:b.serranoercoli@gmail.com"
            className="text-foreground underline"
          >
            b.serranoercoli@gmail.com
          </a>{" "}
          {t.contact.orConnect}{" "}
          <a
            href="https://www.linkedin.com/in/benjamín-serrano-ercoli-a008b63a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
}
