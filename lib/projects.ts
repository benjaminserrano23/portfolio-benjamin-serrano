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
    title: "Task Manager API",
    description:
      "RESTful API for task management with JWT authentication, built with Node.js, Express, and PostgreSQL.",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/benjaminserrano23/task-manager-api",
    featured: true,
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Admin dashboard for an e-commerce platform with real-time analytics, inventory management, and order tracking.",
    stack: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/benjaminserrano23/ecommerce-dashboard",
    demoUrl: "https://ecommerce-dashboard-demo.vercel.app",
    featured: true,
  },
];
