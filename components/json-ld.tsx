export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://benjaminserrano.dev/#person",
        name: "Benjamín Serrano Ercoli",
        url: "https://benjaminserrano.dev",
        sameAs: [
          "https://github.com/benjaminserrano23",
          "https://www.linkedin.com/in/benjamín-serrano-ercoli-a008b63a9",
        ],
        jobTitle: "Software Engineer",
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Universidad de La Frontera",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Temuco",
            addressCountry: "CL",
          },
        },
        knowsAbout: [
          "TypeScript",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Docker",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://benjaminserrano.dev/#website",
        url: "https://benjaminserrano.dev",
        name: "Benjamín Serrano Ercoli | Software Engineer",
        author: { "@id": "https://benjaminserrano.dev/#person" },
        inLanguage: ["es", "en"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
