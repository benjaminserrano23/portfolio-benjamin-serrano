import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://benjaminserrano.dev";
const locales = ["es", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes = ["/", "/projects", "/blog", "/contact"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: locale === "es" ? `${BASE_URL}${route}` : `${BASE_URL}/en${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.8,
    }))
  );

  const blogEntries: MetadataRoute.Sitemap = posts.flatMap((post) =>
    locales.map((locale) => ({
      url:
        locale === "es"
          ? `${BASE_URL}/blog/${post.slug}`
          : `${BASE_URL}/en/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...blogEntries];
}
