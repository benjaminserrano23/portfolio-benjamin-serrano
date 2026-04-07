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
  {
    title: "Git Insights",
    description:
      "CLI + HTML report that analyzes git repository history. Contributions by author, file hotspots, commit activity heatmap, and codebase growth timeline with Chart.js graphs.",
    stack: ["Python", "pandas", "Jinja2"],
    githubUrl: "https://github.com/benjaminserrano23/git-insights",
    featured: true,
  },
  {
    title: "Rate Limiter Service",
    description:
      "HTTP microservice exposing rate limiting as a REST API. Token Bucket and Sliding Window algorithms with pluggable storage (in-memory or Redis via Lua scripts). Dockerized and integrated with GoProxy.",
    stack: ["Go", "Redis", "Docker"],
    githubUrl: "https://github.com/benjaminserrano23/ratelimiter-go",
    featured: true,
  },
  {
    title: "GoProxy",
    description:
      "Reverse proxy with YAML-configurable middleware pipeline. Delegates rate limiting to an external service (fail-open pattern). Docker Compose stack with Redis-backed ratelimiter.",
    stack: ["Go", "Docker", "Redis"],
    githubUrl: "https://github.com/benjaminserrano23/goproxy",
    featured: true,
  },
];
