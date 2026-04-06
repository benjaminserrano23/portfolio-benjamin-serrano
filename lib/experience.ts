import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "sane-thesis",
    role: {
      es: "Investigador & Desarrollador — Trabajo de Tesis",
      en: "Researcher & Developer — Thesis Project",
    },
    organization: "Universidad de La Frontera",
    type: "thesis",
    period: {
      es: "2025 — 2026",
      en: "2025 — 2026",
    },
    description: {
      es: "Desarrollo de SANe (Software Artifact Network for Security), una herramienta de análisis estático de seguridad para extensiones del ecosistema JavaScript/TypeScript, aplicando la metodología de Minería de Repositorios de Software (MSR). Extrae repositorios del VSCode Marketplace y GitHub Actions, analiza el código fuente con CodeQL, audita dependencias con npm audit, y construye grafos de red con NetworkX para visualizar la propagación de vulnerabilidades.",
      en: "Development of SANe (Software Artifact Network for Security), a security-focused static analysis tool for JavaScript/TypeScript ecosystem extensions, applying the Mining Software Repositories (MSR) methodology. It extracts repositories from VSCode Marketplace and GitHub Actions, analyzes source code with CodeQL, audits dependencies with npm audit, and builds network graphs with NetworkX to visualize vulnerability propagation.",
    },
    achievements: {
      es: [
        "Diseñé e implementé un pipeline completo de extracción y análisis sobre el VSCode Marketplace y GitHub Actions",
        "Integré CodeQL para análisis estático del código fuente y npm audit para auditoría de dependencias",
        "Construí grafos de red con NetworkX y Matplotlib para rastrear vulnerabilidades transitivas",
        "Procesé y estructuré grandes volúmenes de metadata con pandas y librerías de extracción personalizadas",
      ],
      en: [
        "Designed and implemented a full extraction and analysis pipeline over VSCode Marketplace and GitHub Actions",
        "Integrated CodeQL for source code static analysis and npm audit for dependency auditing",
        "Built network graphs with NetworkX and Matplotlib to track transitive vulnerability propagation",
        "Processed and structured large volumes of metadata using pandas and custom extraction libraries",
      ],
    },
    stack: ["Python", "CodeQL", "npm audit", "NetworkX", "Matplotlib", "pandas"],
  },
  {
    id: "data-engineering-internship",
    role: {
      es: "Practicante — Ingeniería de Datos",
      en: "Intern — Data Engineering",
    },
    organization: "Universidad de La Frontera",
    type: "internship",
    period: {
      es: "2024",
      en: "2024",
    },
    description: {
      es: "Práctica profesional colaborando con el área de Ingeniería de Datos en el desarrollo de una herramienta de extracción de repositorios del VSCode Marketplace y GitHub Actions. Este trabajo fue el punto de partida de la investigación que luego evolucionó en la tesis SANe.",
      en: "Professional internship collaborating with the Data Engineering area on developing a repository extraction tool for VSCode Marketplace and GitHub Actions. This work was the starting point of the research that later evolved into the SANe thesis.",
    },
    achievements: {
      es: [
        "Desarrollé conectores para las APIs del VSCode Marketplace y GitHub Actions en Python",
        "Diseñé el esquema de estructuración de metadata de extensiones y workflows",
        "Implementé scripts de extracción, limpieza y persistencia de datos con pandas y JSON",
      ],
      en: [
        "Developed connectors for the VSCode Marketplace and GitHub Actions APIs in Python",
        "Designed the metadata structuring schema for extensions and workflows",
        "Implemented data extraction, cleaning, and persistence scripts using pandas and JSON",
      ],
    },
    stack: ["Python", "GitHub API", "VSCode Marketplace API", "pandas", "JSON"],
  },
  {
    id: "orocash-internship",
    role: {
      es: "Practicante — Soporte TI y Desarrollo Web",
      en: "Intern — IT Support & Web Development",
    },
    organization: "Grupo Soluciones S.A. (Orocash)",
    type: "internship",
    period: {
      es: "2023",
      en: "2023",
    },
    description: {
      es: "Práctica profesional en Grupo Soluciones S.A., empresa de Santiago de Chile operadora de Orocash. Realicé soporte TI al equipo y desarrollé un módulo experimental de seguimiento de ventas web para análisis de métricas internas.",
      en: "Professional internship at Grupo Soluciones S.A., a Santiago-based company operating Orocash. I provided IT support to the team and experimentally developed a web sales tracking module for internal metrics analysis.",
    },
    achievements: {
      es: [
        "Brindé soporte TI al equipo: hardware, software y resolución de incidencias técnicas",
        "Desarrollé un módulo experimental de seguimiento de ventas web con PHP y SQL Server",
        "Diseñé vistas de reportes con Bootstrap, tablas dinámicas y filtros por período",
      ],
      en: [
        "Provided IT support to the team: hardware, software, and technical incident resolution",
        "Developed an experimental web sales tracking module using PHP and SQL Server",
        "Designed report views with Bootstrap, dynamic tables, and period-based filters",
      ],
    },
    stack: ["PHP", "HTML", "Bootstrap", "SQL Server"],
  },
];
