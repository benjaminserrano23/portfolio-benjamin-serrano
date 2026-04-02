import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getAllPosts } from "@/lib/blog";
import { BlogContent } from "@/components/blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles about software engineering, architecture decisions, and lessons learned.",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = getAllPosts();

  return <BlogContent posts={posts} />;
}
