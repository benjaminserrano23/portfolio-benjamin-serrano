"use client";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { TechIcon } from "./tech-icons";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/motion";

const stack = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    color: "primary",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    category: { es: "Frontend", en: "Frontend" },
    color: "secondary",
    items: ["React", "Next.js", "Tailwind CSS", "Vue", "React Native"],
  },
  {
    category: { es: "Backend", en: "Backend" },
    color: "primary",
    items: ["Node.js", "NestJS", "Spring Boot", "PHP"],
  },
  {
    category: { es: "Base de datos", en: "Database" },
    color: "secondary",
    items: ["PostgreSQL", "MongoDB", "SQL Server"],
  },
  {
    category: { es: "Herramientas", en: "Tools" },
    color: "primary",
    items: ["Git", "Docker", "GitHub Actions", "CodeQL"],
  },
];

export function TechStackSection() {
  const t = useTranslations();
  const locale = useLocale() as "es" | "en";

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <SectionHeading
        title={t("sections.techStack")}
        description={t("sections.techStackDesc")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {stack.map((group) => (
          <motion.div
            key={group.category.en}
            variants={fadeInUp}
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
              {group.items.map((name) => (
                <span
                  key={name}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
                >
                  <TechIcon name={name} />
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
