"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { experiences } from "@/lib/experience";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/motion";

const typeColors = {
  thesis: "from-secondary to-primary",
  internship: "from-primary to-secondary",
  academic: "from-secondary to-primary",
};

const typeIcons = {
  thesis: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  internship: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  academic: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
};

export function ExperienceSection() {
  const t = useTranslations();
  const locale = useLocale() as "es" | "en";

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <SectionHeading
        title={t("sections.experience")}
        description={t("sections.experienceDesc")}
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent sm:left-8 lg:left-1/2 lg:-translate-x-px" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              className={`relative flex gap-6 sm:gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-5 top-5 z-10 sm:left-8 lg:left-1/2 lg:-translate-x-1/2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br text-white shadow-md"
                  style={{
                    background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                  }}
                >
                  <span className="text-primary-foreground">
                    {typeIcons[exp.type]}
                  </span>
                </div>
              </div>

              {/* Spacer for desktop alternating layout */}
              <div className="hidden lg:block lg:w-1/2" />

              {/* Card */}
              <div className="ml-14 flex-1 sm:ml-16 lg:ml-0 lg:w-1/2 lg:px-8">
                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5">
                  {/* Header */}
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span
                        className={`mb-1.5 inline-block text-xs font-semibold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r ${typeColors[exp.type]}`}
                      >
                        {t(`experience.${exp.type}`)}
                      </span>
                      <h3 className="text-base font-bold text-card-foreground leading-snug">
                        {exp.role[locale]}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-primary">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                      {exp.period[locale]}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description[locale]}
                  </p>

                  {/* Achievements */}
                  <ul className="mb-4 space-y-1.5">
                    {exp.achievements[locale].map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary dark:border-primary/30 dark:bg-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
