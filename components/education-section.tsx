"use client";

import { useLocale } from "./locale-provider";
import { SectionHeading } from "./section-heading";

const CV_PATH = "/CV_Benjamín_Serrano_Ercoli.pdf";
const GRAD_YEAR = "2026";

export function EducationSection() {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-5xl px-6 pb-16">
      <SectionHeading
        title={t.sections.education}
        description={t.sections.educationDesc}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-border bg-card px-6 py-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg dark:hover:shadow-primary/5">
        {/* Degree info */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-primary/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {t.education.graduated} {GRAD_YEAR}
            </p>
            <h3 className="text-base font-bold text-card-foreground">
              {t.education.degree}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.education.university} · {t.education.location}
            </p>
          </div>
        </div>

        {/* CV button */}
        <a
          href={CV_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-[0_4px_16px_rgba(5,150,105,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          {t.education.viewCV}
        </a>
      </div>
    </section>
  );
}
