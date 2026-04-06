import Image from "next/image";
import StackIcon from "tech-stack-icons";

// Icons served from /public — not available in tech-stack-icons
const staticIcons: Record<string, string> = {
  CodeQL: "/codeql.svg",
  "SQL Server": "/microsoft-sql-server.svg",
};

const nameMap: Record<string, string> = {
  Java: "java",
  TypeScript: "typescript",
  JavaScript: "js",
  Python: "python",
  PHP: "php",
  React: "react",
  "React Native": "reactnative",
  Vue: "vuejs",
  "Next.js": "nextjs2",
  "Tailwind CSS": "tailwindcss",
  Bootstrap: "bootstrap5",
  "Node.js": "nodejs",
  "Spring Boot": "spring",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  MySQL: "mysql",
  SQLite: "sqlite",
  pandas: "pandas",
  npm: "npm",
  Git: "git",
  Docker: "docker",
  "GitHub Actions": "github",
};

export function TechIcon({ name }: { name: string }) {
  // Static SVGs from /public
  if (staticIcons[name]) {
    return (
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
        <Image src={staticIcons[name]} alt={name} width={20} height={20} className="h-5 w-5" />
      </span>
    );
  }

  const iconName = nameMap[name];
  if (!iconName) return null;

  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
      <StackIcon name={iconName as Parameters<typeof StackIcon>[0]["name"]} className="h-5 w-5" />
    </span>
  );
}
