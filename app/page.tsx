import { projects } from "@/lib/projects";
import { HomeContent } from "@/components/home-content";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return <HomeContent projects={featuredProjects} />;
}
