"use client";

import { useLocale } from "./locale-provider";
import { Hero } from "./hero";
import { AboutSection } from "./about-section";
import { TechStackSection } from "./tech-stack-section";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { EducationSection } from "./education-section";
import type { Project } from "@/lib/types";

export function HomeContent({ projects }: { projects: Project[] }) {
  const { t } = useLocale();

  return (
    <>
      <Hero />
      <AboutSection />
      <TechStackSection />

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <SectionHeading
          title={t.sections.featuredProjects}
          description={t.sections.featuredProjectsDesc}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <EducationSection />
    </>
  );
}
