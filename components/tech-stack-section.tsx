"use client";

import { useLocale } from "./locale-provider";
import { SectionHeading } from "./section-heading";
import { TechIcon } from "./tech-icons";

const stack = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    color: "primary",
    items: ["Java", "TypeScript", "JavaScript", "Python"],
  },
  {
    category: { es: "Frontend", en: "Frontend" },
    color: "secondary",
    items: ["React", "React Native", "Vue", "Next.js", "Tailwind CSS"],
  },
  {
    category: { es: "Backend", en: "Backend" },
    color: "primary",
    items: ["Node.js", "Spring Boot", "NestJS"],
  },
  {
    category: { es: "Base de datos", en: "Database" },
    color: "secondary",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    color: "primary",
    items: ["Git", "Docker", "GitHub Actions"],
  },
];

export function TechStackSection() {
  const { t, locale } = useLocale();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <SectionHeading
        title={t.sections.techStack}
        description={t.sections.techStackDesc}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div
            key={group.category.en}
            className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md dark:hover:shadow-primary/5"
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{
                backgroundImage:
                  group.color === "primary"
                    ? "linear-gradient(135deg, var(--primary), var(--secondary))"
                    : "linear-gradient(135deg, var(--secondary), var(--primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {locale === "es" ? group.category.es : group.category.en}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary cursor-default"
                >
                  <TechIcon name={item} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
