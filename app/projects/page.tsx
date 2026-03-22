import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectsContent } from "@/components/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've built and contributed to.",
};

export default function ProjectsPage() {
  return <ProjectsContent projects={projects} />;
}
