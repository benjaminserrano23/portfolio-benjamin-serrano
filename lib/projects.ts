import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 16, Tailwind CSS v4, and TypeScript. Features dark mode, i18n, and responsive design.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/benjaminserrano23/portfolio-benjamin-serrano",
    featured: true,
  },
  {
    title: "Code Quality CLI",
    description:
      "CLI tool that analyzes code quality metrics for TypeScript/JavaScript projects. AST-based cyclomatic complexity, god file detection, circular dependency detection, and coupling analysis.",
    stack: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/benjaminserrano23/code-quality-cli",
    featured: true,
  },
];
