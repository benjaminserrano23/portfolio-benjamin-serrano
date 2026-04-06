"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { fadeInUp } from "@/lib/motion";
import type { BlogPost } from "@/lib/types";

export function BlogCard({ post }: { post: BlogPost }) {
  const t = useTranslations("blog");

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <motion.article variants={fadeInUp}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg dark:hover:shadow-primary/5"
      >
        {/* Top accent bar */}
        <div className="mb-4 h-1 w-full rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-20 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary dark:border-primary/30 dark:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-lg font-semibold leading-snug text-card-foreground group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          {formattedDate && (
            <time className="text-xs text-muted-foreground">{formattedDate}</time>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-primary">
            {t("readMore")}
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
