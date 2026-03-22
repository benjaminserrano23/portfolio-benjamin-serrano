"use client";

import { useLocale } from "./locale-provider";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import type { Project } from "@/lib/types";

export function ProjectsContent({ projects }: { projects: Project[] }) {
  const { t } = useLocale();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title={t.sections.projects}
        description={t.sections.projectsDesc}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
