"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/motion";

export function SectionHeading({
  title,
  description,
  badge,
}: {
  title: string;
  description?: string;
  badge?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="mb-10"
    >
      {badge && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
          {badge}
        </span>
      )}
      <div className="flex items-center gap-3">
        <div className="h-7 w-1 rounded-full bg-gradient-to-b from-primary to-secondary" />
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {description && (
        <p className="mt-3 ml-4 text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
