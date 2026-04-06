import { setRequestLocale } from "next-intl/server";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import { HomeContent } from "@/components/home-content";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentPosts = getAllPosts().slice(0, 2);

  return <HomeContent projects={featuredProjects} posts={recentPosts} />;
}
