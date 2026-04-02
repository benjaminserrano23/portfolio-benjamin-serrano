"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { BlogCard } from "./blog-card";
import { staggerContainer, viewportConfig } from "@/lib/motion";
import type { BlogPost } from "@/lib/types";

export function BlogContent({ posts }: { posts: BlogPost[] }) {
  const t = useTranslations();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title={t("sections.blog")}
        description={t("sections.blogDesc")}
      />

      {posts.length === 0 ? (
        <p className="text-muted-foreground">{t("blog.noPosts")}</p>
      ) : (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 sm:grid-cols-2"
        >
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </motion.div>
      )}
    </section>
  );
}
