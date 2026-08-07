# Lucas Iván Cardozo — Hoja Maestra de Información Personal

> **Fuente única para construir variantes de CV.** Compila todo el contenido del CV actual de este proyecto (rutas `/es`, `/en`, `/print/es`, `/print/en`) en un único archivo. Bilingüe ES/EN. Sin inventos, sin métricas no respaldadas.
>
> Última actualización según `meta.lastUpdated` en los data files: **2026-07-23**.

---

## 1. Identidad

| Campo | Valor |
|---|---|
| Nombre completo | Lucas Iván Cardozo |
| Headline (ES = EN) | Full-Stack TypeScript Developer |
| Título extendido (ES = EN) | Full-Stack TypeScript Developer · React · Next.js |
| Ubicación | Mar del Plata, Buenos Aires, Argentina |
| Foto | `public/foto-carnet.jpg` (2.2 MB JPEG) — solo se usa en la variante web |

---

## 2. Contacto

| Campo | Valor |
|---|---|
| Email | `lucasivancardozo27@gmail.com` |
| Teléfono / WhatsApp | `+54 9 223 531 9564` |
| Ubicación | Mar del Plata, Buenos Aires, Argentina |
| LinkedIn | https://www.linkedin.com/in/lucas-ivan-cardozo/ |
| GitHub | https://github.com/LucasIvanCardozo |

> El número también funciona como WhatsApp: `https://wa.me/5492235319564` (sin espacios ni `+`).

---

## 3. Tagline (eslogan corto del hero web)

| Idioma | Texto |
|---|---|
| ES | Tres productos en producción. Aún terminando la carrera. |
| EN | Three products in production. Still finishing the degree. |

---

## 4. Stats del hero (destacados numéricos)

| Nº | ES | EN |
|---|---|---|
| 5 | proyectos en producción | production projects |
| 3 | con clientes reales | with real clients |
| 1 | SaaS multi-tenant en lanzamiento | multi-tenant SaaS in launch |

---

## 5. Perfil / Summary

**ES:**
> Estudiante de Ingeniería Informática en la UNMdP, autodidacta y orientado a producto. Diseño y construyo aplicaciones web completas con TypeScript, React, Next.js y Node.js, desde el modelado de datos hasta la implementación de UI. He entregado productos para clientes reales y actualmente desarrollo una plataforma SaaS para su lanzamiento.

**EN:**
> Computer Engineering student at UNMdP, self-taught and product-oriented. I design and build complete web applications with TypeScript, React, Next.js and Node.js, from data modeling to UI implementation. I have delivered products to real clients and I am currently developing a SaaS platform for launch.

---

## 6. Skills técnicas (core)

### 6.1 Lenguajes / Languages
- TypeScript
- JavaScript (ES2023)
- SQL
- HTML5
- CSS3

### 6.2 Frontend
- React 19
- Next.js 16 (App Router)
- Vite
- React Hook Form
- Zod
- CSS Modules
- Tailwind CSS
- Konva (canvas)

### 6.3 Backend
- Node.js
- Next.js Server Actions
- NextAuth (Auth.js)
- JWT + bcrypt
- Prisma 7
- PostgreSQL
- Pusher (Soketi)
- Multi-tenant architecture

### 6.4 Datos / Data
- Prisma ORM
- PostgreSQL
- Schema design
- Transactions

### 6.5 Seguridad / Security
- Auth.js / NextAuth
- JWT
- bcrypt
- Tenant-safe routing

### 6.6 Testing
- Vitest
- Playwright
- Lighthouse budgets

### 6.7 Infraestructura / Infrastructure
- Vercel
- Docker
- nginx
- GitHub Pages

---

## 7. Herramientas / Tools

- Git
- GitHub
- Linux
- Vim / Neovim
- VS Code
- Playwright
- Biome
- pnpm

---

## 8. Soft skills

| ES | EN |
|---|---|
| Autodidacta con fuerte criterio de producto | Self-taught with strong product sense |
| Diseño de arquitecturas por capas y testing | Layered architecture design and testing |
| Comunicación clara y escrita | Clear written and verbal communication |
| Trabajo con feedback real de usuarios | Working with real user feedback |

---

## 9. Experiencia / Proyectos

Hay **5 proyectos**. Tres están marcados como `featured` en el data model (carta-qr, boston, bowling). Todos tienen URL pública en GitHub.

### 9.1 Carta QR (SaaS) — destacado

| Campo | Valor |
|---|---|
| Rol ES | Full-Stack Developer (proyecto propio) |
| Rol EN | Full-Stack Developer (independent product) |
| Cliente | — |
| Periodo | 2025 – presente / 2025 – present |
| URL | https://github.com/LucasIvanCardozo/carta-qr |

**Contexto**

- **ES:** Plataforma SaaS multi-tenant para restaurantes con menú QR, pedidos desde mesa, gestión de caja y analítica. Arquitectura por capas: Repository → Use Case → Server Action con Server Actions de Next.js 16.
- **EN:** Multi-tenant SaaS platform for restaurants with QR menu, in-table ordering, cash-register management and analytics. Layered architecture: Repository → Use Case → Server Action using Next.js 16 Server Actions.

**Highlights**

- ES: Multi-tenant con enrutamiento por subdominio y aislamiento por venue
- EN: Multi-tenant with subdomain routing and per-venue isolation
- ES: Realtime con Soketi/Pusher WebSockets y push notifications para staff
- EN: Realtime with Soketi/Pusher WebSockets and push notifications for staff
- ES: Auth.js + Google OAuth + RBAC + maquetado Zod
- EN: Auth.js + Google OAuth + RBAC + Zod validation
- ES: Suite de testing Vitest + Playwright + axe-core + Testcontainers
- EN: Testing suite: Vitest + Playwright + axe-core + Testcontainers

**Stack:** Next.js 16, React 19, Prisma 7, PostgreSQL, Auth.js, Soketi, Zod, React Hook Form, PWA, Biome, Docker, nginx

---

### 9.2 TuAmigoFI

| Campo | Valor |
|---|---|
| Rol ES | Full-Stack Developer (proyecto propio) |
| Rol EN | Full-Stack Developer (independent product) |
| Cliente | — |
| Periodo | 2024 – 2025 |
| URL | https://github.com/LucasIvanCardozo/tuAmigoFI |

**Contexto**

- **ES:** Plataforma colaborativa para estudiantes de Ingeniería en la UNMdP. Compartir material práctico, parciales, respuestas y comentarios entre carreras y años.
- **EN:** Collaborative platform for UNMdP Engineering students. Share practical material, midterm exams, answers and comments across degrees and years.

**Highlights**

- ES: Modelado complejo: carreras, planes, cursadas, prerrequisitos
- EN: Complex domain modeling: degrees, study plans, terms, prerequisites
- ES: Google OAuth + moderación de usuarios
- EN: Google OAuth + user moderation
- ES: Carga de archivos, búsqueda y filtrado por departamento
- EN: File uploads, search and department filtering
- ES: Relevamiento de feedback real de estudiantes durante el uso
- EN: Real student feedback gathering during usage

**Stack:** Next.js, React, Prisma, PostgreSQL, NextAuth, Cloudinary, React PDF, Highlight.js

---

### 9.3 Boston Automotores — destacado

| Campo | Valor |
|---|---|
| Rol ES | Desarrollador Web Freelance |
| Rol EN | Freelance Web Developer |
| Cliente ES | Concesionario de autos (cliente real) |
| Cliente EN | Car dealership (real client) |
| Periodo | 2024 |
| URL | https://github.com/LucasIvanCardozo/Boston-Automotores |

**Contexto**

- **ES:** Sitio web público + panel administrativo para concesionario. Catálogo de vehículos, gestión de inventario, fichas técnicas, leads y notificaciones por email.
- **EN:** Public web site + admin panel for a car dealership. Vehicle catalog, inventory management, technical sheets, lead capture and email notifications.

**Highlights**

- ES: Proyecto entregado al cliente y en uso real
- EN: Delivered client project in active production use
- ES: Catálogo con filtros por marca, precio y kilometraje
- EN: Catalog with brand, price and mileage filters
- ES: Panel admin con subida de imágenes y notificaciones
- EN: Admin panel with image upload and email notifications

**Stack:** Next.js, React, Prisma, PostgreSQL, Cloudinary, JWT, Resend

---

### 9.4 Bowling de Paso — destacado

| Campo | Valor |
|---|---|
| Rol ES | Desarrollador Web Freelance |
| Rol EN | Freelance Web Developer |
| Cliente ES | Bowling de Paso (cliente real) |
| Cliente EN | Bowling de Paso (real client) |
| Periodo | 2024 |
| URL | https://github.com/LucasIvanCardozo/bowling-de-paso |

**Contexto**

- **ES:** Sitio web público para local de bowling. Diseño responsivo, integración con servicios externos (canal de WhatsApp), tarjetas de LocalBusiness y OpenGraph optimizado.
- **EN:** Public website for a bowling venue. Responsive design, integration with external services (WhatsApp channel), LocalBusiness cards and optimised OpenGraph.

**Highlights**

- ES: Proyecto entregado al cliente y en uso real
- EN: Delivered client project in active production use
- ES: SEO técnico: JSON-LD, sitemap, metadata, OpenGraph
- EN: Technical SEO: JSON-LD, sitemap, metadata, OpenGraph
- ES: Optimización de imágenes y rendimiento
- EN: Image optimisation and performance tuning

**Stack:** React, Vite, CSS Modules, GitHub Pages, Figma

---

### 9.5 Pathfinder

| Campo | Valor |
|---|---|
| Rol ES | Desarrollador Full-Stack (proyecto propio) |
| Rol EN | Full-Stack Developer (independent product) |
| Cliente | — |
| Periodo | 2025 |
| URL | https://github.com/LucasIvanCardozo/pathfinder |

**Contexto**

- **ES:** Aplicación web para gestión de batallas de rol (Pathfinder / D&D 5e). Mapas con canvas Konva, seguimiento de iniciativa, condiciones, hechizos y persistencia de escenarios.
- **EN:** Web application for tabletop RPG battle management (Pathfinder / D&D 5e). Canvas-based maps with Konva, initiative tracking, conditions, spells and scenario persistence.

**Highlights**

- ES: Sistema de capas, persistencia en PostgreSQL, multi-usuario
- EN: Layer system, PostgreSQL persistence, multi-user
- ES: Canvas de alto rendimiento con Konva.js
- EN: High-performance canvas rendering with Konva.js
- ES: Arquitectura por capas y testing con Vitest
- EN: Layered architecture and Vitest testing

**Stack:** Next.js, React, TypeScript, Konva, Prisma, PostgreSQL, Zod, Vitest

---

## 10. Educación

### 10.1 Ingeniería Informática

| Campo | Valor |
|---|---|
| Institución | Universidad Nacional de Mar del Plata (UNMdP) |
| Periodo | 2019 – presente / 2019 – present |
| Estado | En curso (cuarto año) / In progress (fourth year) |
| Progreso | ~60% |
| Notas ES | Pausas por trabajo, retomando con foco en IA, sistemas distribuidos y arquitectura. |
| Notas EN | Paused for work, resuming with focus on AI, distributed systems and architecture. |

### 10.2 Técnico en Alimentos

| Campo | Valor |
|---|---|
| Institución | Educación Secundaria Técnica |
| Periodo | Secundario / High school |
| Estado | Completo / Completed |
| Progreso | — |
| Notas | — |

---

## 11. Idiomas

| Idioma | Nivel ES | Nivel EN |
|---|---|---|
| Español | Nativo | Native |
| English | B1 | B1 |

> ⚠️ **Regla editorial obligatoria** (de `docs/content/copy-rules.md`): nunca escribir "autodidacta" ni "lectura" junto al nivel. Solo el nivel: `B1`, `Native`, `Professional working proficiency`, etc.

---

## 12. Restricciones editoriales que aplican a cualquier CV armado con esta info

Estas vienen de `docs/content/copy-rules.md` y `AGENTS.md`. Son no negociables.

1. **No inventar proyectos.** Solo incluir proyectos que estén en `/home/lucas/Documentos/Workspace/Astro/...`, `/home/lucas/Documentos/Workspace/NextJs/...`, o `/home/lucas/Documentos/Workspace/ReactJs/...`.
2. **No escribir "autodidacta" ni "lectura"** junto al nivel de idioma.
3. **No inventar CI/CD con GitHub Actions, Docker en producción ni otra infra** sin evidencia en los proyectos.
4. **No nombrar clientes reales por su nombre comercial.** Usar los placeholders aprobados: `Concesionario de autos (cliente real)` / `Car dealership (real client)`. Excepción: Bowling de Paso, donde el nombre del cliente ya está aprobado.
5. **No inventar métricas** (X% más rápido, X usuarios). Si no hay número real, omitir.
6. **No presentar autoevaluación de idioma como certificación.** No escribir "Certificado B1" a menos que exista certificado.
7. **Voz:** primera persona en espíritu, redactado en **tercera persona**. Sin "yo", "mi". Tiempo presente para roles actuales, pasado para completados.
8. **Tono:** profesional, conciso, sin lenguaje marketinero, sin superlativos sin evidencia.
9. **Si falta info confirmada**, omitir — **no inventar**. Preguntar antes de agregar.

---

## 13. Convenciones de formato

- **ES:** separador `·` (middle dot, sin espacios) — p. ej. `desarrollo · construyo · implemento`.
- **EN:** separador ` · ` (espacio-middle dot-espacio) — p. ej. `designed · built · implemented`.
- **Verbos ES preferidos:** `desarrollo`, `construí`, `implementé`, `diseñé`, `entregué`, `modelé`.
- **Verbos EN preferidos:** `designed`, `built`, `implemented`, `delivered`, `modeled`.
- **Tecnologías:** no se localizan. Mismo nombre en ES y EN (TypeScript, React, Next.js, etc.).

---

## 14. Qué **NO** está incluido en este archivo

El CV actual no contiene esta información. Si la necesitás para el otro CV, hay que pedirla explícitamente o decidir omitirla.

- Expectativa salarial / rango pretendido.
- Dirección postal completa (solo ciudad + provincia + país).
- Fecha de nacimiento / edad.
- Nacionalidad / documentos / disponibilidad para relocation.
- Número de documento, CUIT/CUIL.
- Referencias laborales con nombre y contacto.
- Certificaciones formales (idiomas, tecnologías).
- Premios, publicaciones, charlas, open source contributions fuera de los 5 proyectos listados.
- Experiencia laboral formal previa (empleos en relación de dependencia, no freelance) — el CV actual **solo** lista proyectos propios y freelance.
- Voluntariado, docencia, mentorías.
- Vehículo propio, licencia de conducir.

---

## 15. Mapa del proyecto (referencia para editar)

| Archivo | Rol |
|---|---|
| `src/data/cv.es.ts` | Contenido en español |
| `src/data/cv.en.ts` | Contenido en inglés |
| `src/data/cv.ts` | Índice y helper `getCV(locale)` — no agregar contenido acá |
| `src/types/cv.ts` | Modelo de tipos |
| `docs/content/data-model.md` | Especificación del modelo de datos |
| `docs/content/copy-rules.md` | Reglas de redacción (lo que se puede y no se puede decir) |
| `public/foto-carnet.jpg` | Foto (solo variante web) |

---

## 16. Checklist para armar un nuevo CV con esta base

Cuando vayas a armar el otro CV, este orden evita olvidos:

- [ ] Decidir idioma principal y si necesitás variante bilingüe.
- [ ] Decidir variante (web interactiva, PDF ATS-safe, markdown plano, LaTeX, Word, etc.).
- [ ] Confirmar si el CV va con foto o sin foto (la actual está en `public/`).
- [ ] Confirmar si lleva teléfono (algunos ATS imprimibles lo omiten).
- [ ] Elegir qué proyectos destacar (3 featured ya están marcados: carta-qr, boston, bowling).
- [ ] Adaptar el summary al puesto objetivo (re-enfocar `autodidacta y orientado a producto` si aplica).
- [ ] Confirmar si hace falta agregar info que NO está en este archivo (ver §14).
- [ ] Releer contra `copy-rules.md` antes de publicar.
