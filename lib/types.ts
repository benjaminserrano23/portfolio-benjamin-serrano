export interface Project {
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: { es: string; en: string };
  organization: string;
  type: "internship" | "thesis" | "academic";
  period: { es: string; en: string };
  description: { es: string; en: string };
  achievements: { es: string[]; en: string[] };
  stack: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}
