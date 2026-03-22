"use client";

import Image from "next/image";
import { Button } from "./button";
import { useLocale } from "./locale-provider";

const GITHUB_URL = "https://github.com/benjaminserrano23";
const LINKEDIN_URL = "https://www.linkedin.com/in/benjamín-serrano-ercoli-a008b63a9";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b7280 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />


      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-24 sm:py-32 lg:flex-row lg:items-center lg:text-left">

        {/* Photo */}
        <div className="shrink-0">
          <div className="relative h-48 w-48 sm:h-56 sm:w-56">
            {/* Outer glow that pulses with the border */}
            <div
              className="absolute -inset-2 rounded-full opacity-60"
              style={{
                background: "conic-gradient(from var(--border-angle, 0deg), var(--primary), var(--secondary), transparent 50%, var(--primary))",
                animation: "border-rotate 5s linear infinite",
                filter: "blur(10px)",
                willChange: "transform",
              }}
            />
            {/* Spinning gradient border — thick */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from var(--border-angle, 0deg), var(--primary), var(--secondary), #a78bfa, transparent 55%, var(--primary))",
                animation: "border-rotate 5s linear infinite",
                willChange: "transform",
              }}
            />
            {/* Image */}
            <div className="absolute inset-[5px] overflow-hidden rounded-full shadow-2xl">
              <Image
                src="/Yo.jpg"
                alt="Benjamín Serrano"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col items-center lg:items-start">
          {/* Availability badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {t.hero.available ?? "Disponible para trabajar"}
          </div>

          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {t.hero.greeting}
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(-45deg, var(--fg), var(--primary), var(--secondary), var(--primary), var(--fg))",
                backgroundSize: "300% 300%",
                animation: "gradient-flow 8s ease infinite",
              }}
            >
              {t.hero.name}
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button href="/projects" size="lg">
              {t.hero.viewProjects}
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              {t.hero.contactMe}
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-sm"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:shadow-sm"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
