import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { projects } from "@/lib/projects";
import { ProjectsContent } from "@/components/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects I've built and contributed to.",
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsContent projects={projects} />;
}
