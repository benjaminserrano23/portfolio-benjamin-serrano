"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Hero } from "./hero";
import { AboutSection } from "./about-section";
import { TechStackSection } from "./tech-stack-section";
import { ExperienceSection } from "./experience-section";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { BlogCard } from "./blog-card";
import { EducationSection } from "./education-section";
import { staggerContainer, viewportConfig } from "@/lib/motion";
import type { Project, BlogPost } from "@/lib/types";

export function HomeContent({
  projects,
  posts,
}: {
  projects: Project[];
  posts: BlogPost[];
}) {
  const t = useTranslations();

  return (
    <>
      <Hero />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <SectionHeading
          title={t("sections.featuredProjects")}
          description={t("sections.featuredProjectsDesc")}
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </section>

      {posts.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-16">
          <SectionHeading
            title={t("sections.recentPosts")}
            description={t("sections.recentPostsDesc")}
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid gap-6 sm:grid-cols-2"
          >
            {posts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              {t("blog.readMore")}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </section>
      )}

      <EducationSection />
    </>
  );
}
