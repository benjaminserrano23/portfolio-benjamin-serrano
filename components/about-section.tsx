"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/motion";

const traits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    ),
    key: "trait1" as const,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
    key: "trait2" as const,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    key: "trait3" as const,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
    key: "trait4" as const,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    key: "trait5" as const,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
    key: "trait6" as const,
  },
];

export function AboutSection() {
  const t = useTranslations();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <SectionHeading
        title={t("sections.about")}
        description={t("sections.aboutDesc")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid gap-8 lg:grid-cols-[1fr_auto]"
      >
        {/* Text */}
        <motion.div
          variants={fadeInUp}
          className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:hover:shadow-primary/5"
        >
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("about.intro")}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {traits.map((trait) => (
              <div
                key={trait.key}
                className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-2.5 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="text-primary transition-transform duration-200 group-hover:scale-110">
                  {trait.icon}
                </span>
                <span className="text-xs font-medium text-foreground">
                  {t(`about.${trait.key}`)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats column */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-row gap-4 lg:flex-col lg:justify-center"
        >
          {[
            { value: "2026", label: t("about.statGraduated") },
            { value: "3+", label: t("about.statProjects") },
            { value: "∞", label: t("about.statCoffee") },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md lg:w-32"
            >
              <span
                className="text-3xl font-extrabold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)" }}
              >
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
