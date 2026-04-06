<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# currentDate
Today's date is 2026-03-21.

---

# Proyecto: Portfolio de Benjamín Serrano

## Descripción
Portfolio profesional dirigido a reclutadores y empresas de tecnología. Demuestra habilidades técnicas con calidad de producción: arquitectura moderna, documentación, tests y despliegue automatizado.

## Stack tecnológico

### Frontend (activo)
- **Framework**: Next.js 16.2.1 con App Router
- **UI**: React 19 + TypeScript 5
- **Estilos**: Tailwind CSS v4 (sin tailwind.config.js — config inline en `app/globals.css`)
- **Temas**: next-themes con `attribute="class"`, `defaultTheme="system"`
- **i18n**: Context propio en `components/locale-provider.tsx` (ES/EN)
- **Blog**: gray-matter + react-markdown + remark-gfm (archivos MDX en `content/blog/`)

### Backend (fase futura)
- Node.js + Express o NestJS
- PostgreSQL + Prisma ORM
- JWT para autenticación (panel admin)

### Infraestructura (fase futura)
- Docker (contenedores backend + base de datos)
- CI/CD con GitHub Actions (lint + tests en cada push)
- Hosting: Vercel (frontend) + Railway/Render (backend)

---

## Estructura del proyecto

```
portfolio-benjamin-serrano/
├── app/
│   ├── layout.tsx              # Root layout: ThemeProvider + LocaleProvider + Navbar + Footer
│   ├── page.tsx                # Landing: Hero + proyectos destacados + posts recientes
│   ├── globals.css             # Tailwind v4 + CSS custom properties para temas
│   ├── projects/page.tsx       # Grid de proyectos
│   ├── blog/
│   │   ├── page.tsx            # Listado de posts
│   │   └── [slug]/page.tsx     # Post individual (MDX)
│   ├── contact/page.tsx        # Formulario de contacto
│   └── api/contact/route.ts    # POST handler para envío de email
├── components/
│   ├── navbar.tsx              # Sticky nav + menú móvil (client)
│   ├── footer.tsx              # Links sociales + copyright (client)
│   ├── hero.tsx                # Sección hero (client — usa useLocale)
│   ├── theme-provider.tsx      # next-themes wrapper (client)
│   ├── theme-toggle.tsx        # Botón dark/light — usa resolvedTheme (client)
│   ├── locale-provider.tsx     # Context ES/EN (client)
│   ├── locale-toggle.tsx       # Botón ES/EN (client)
│   ├── home-content.tsx        # Wrapper client para landing con i18n
│   ├── projects-content.tsx    # Wrapper client para /projects con i18n
│   ├── blog-content.tsx        # Wrapper client para /blog con i18n
│   ├── contact-content.tsx     # Wrapper client para /contact con i18n
│   ├── contact-form.tsx        # Formulario de contacto (client)
│   ├── project-card.tsx        # Card de proyecto (client — usa useLocale)
│   ├── blog-card.tsx           # Card de blog post
│   ├── section-heading.tsx     # Título de sección reutilizable
│   └── button.tsx              # Botón con variantes primary/outline/ghost
├── lib/
│   ├── projects.ts             # Array estático de proyectos (datos reales de Benjamín)
│   ├── blog.ts                 # Lee archivos MDX con gray-matter (server-only, usa fs)
│   ├── i18n.ts                 # Traducciones ES/EN completas
│   ├── types.ts                # Interfaces TypeScript: Project, BlogPost
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
├── content/blog/               # Posts en .mdx con frontmatter (title, date, description, tags)
├── public/images/              # Imágenes del portfolio, foto de perfil
├── prisma/                     # (futuro) ORM config + migraciones
└── docker/                     # (futuro) Dockerfiles
```

---

## Convenciones importantes

### CSS / Tailwind v4
- Dark mode usa selector de clase (`html.dark`) — NO `prefers-color-scheme`
- Variables CSS definidas en `:root` y sobreescritas en `html.dark` (mayor especificidad)
- `@theme` (sin `inline`) mapea variables a Tailwind: `--color-card: var(--card)`
- El body usa directamente `var(--bg)` y `var(--fg)`

### Next.js 16 — cambios críticos
- `params` y `searchParams` son **Promises**: `const { slug } = await params`
- Consultar `node_modules/next/dist/docs/` antes de implementar cualquier ruta dinámica
- Server Components por defecto — solo agregar `'use client'` cuando sea estrictamente necesario

### i18n
- `LocaleProvider` wrappea toda la app en `app/layout.tsx`
- Acceder a traducciones con `const { t } = useLocale()` en cualquier client component
- Traducciones en `lib/i18n.ts` — tipo `Translations = (typeof translations)[Locale]`
- **REGLA CRÍTICA**: Cada vez que se agregue o modifique un texto en español (`es:`), se debe agregar/modificar también la versión en inglés (`en:`). Nunca dejar una clave en un idioma sin su equivalente en el otro. Si se hardcodea texto en JSX, moverlo a `lib/i18n.ts` en ambos idiomas.

### Patrón Server → Client para páginas con i18n
Las páginas con `export const metadata` son Server Components. Para usar i18n en ellas:
1. La página server component obtiene los datos (getAllPosts, projects, etc.)
2. Pasa los datos a un wrapper client component (ej. `<BlogContent posts={posts} />`)
3. El wrapper client usa `useLocale()` para las traducciones

### Datos del propietario
- **Nombre**: Benjamín Serrano Ercoli
- **Email**: b.serranoercoli@gmail.com
- **GitHub**: https://github.com/benjaminserrano23
- **LinkedIn**: https://www.linkedin.com/in/benjamín-serrano-ercoli-a008b63a9

---

## Requisitos del producto

### Completado ✅
- Landing page con hero, proyectos destacados y posts recientes
- Sección de proyectos con cards (stack, GitHub, demo)
- Blog técnico con Markdown/MDX
- Formulario de contacto con API route
- Dark/light mode toggle (independiente del sistema)
- Soporte ES/EN con botón de idioma
- Navbar responsive con menú hamburguesa móvil
- Footer con links sociales

### Pendiente 🔲
- Foto de perfil real en el hero
- Proyectos reales con capturas e imágenes
- Posts del blog con contenido técnico real
- Descarga de CV (PDF en `public/`)
- Backend: API REST + autenticación JWT + panel admin
- Base de datos: PostgreSQL + Prisma (tablas: users, projects, posts)
- Testing: Jest (unit) + Supertest (integration) + Playwright (E2E)
- CI/CD: GitHub Actions con lint + tests automáticos
- Docker: contenedores para backend y base de datos
- Deployment: Vercel (frontend) + Railway/Render (backend)
- Documentación: README.md completo + Swagger/OpenAPI
- Monitoreo: logs centralizados y alertas básicas

---

## Buenas prácticas del proyecto
- Commits semánticos (Conventional Commits): `feat:`, `fix:`, `chore:`, `docs:`
- Variables de entorno en `.env.local` (nunca commitear)
- ESLint + Prettier configurados
- Código limpio y modular — no over-engineering
- Accesibilidad: HTML semántico, ARIA labels, navegación por teclado
