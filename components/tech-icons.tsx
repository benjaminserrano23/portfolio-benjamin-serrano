import StackIcon from "tech-stack-icons";

const nameMap: Record<string, string> = {
  Java: "java",
  TypeScript: "typescript",
  JavaScript: "js",
  Python: "python",
  React: "react",
  "React Native": "reactnative",
  Vue: "vuejs",
  "Next.js": "nextjs2",
  "Tailwind CSS": "tailwindcss",
  "Node.js": "nodejs",
  "Spring Boot": "spring",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Git: "git",
  Docker: "docker",
  "GitHub Actions": "github",
};

export function TechIcon({ name }: { name: string }) {
  const iconName = nameMap[name];
  if (!iconName) return null;

  return (
    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
      <StackIcon name={iconName as Parameters<typeof StackIcon>[0]["name"]} className="h-5 w-5" />
    </span>
  );
}
