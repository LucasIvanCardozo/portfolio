# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are **recruiters / hiring managers** and **potential clients** evaluating Lucas Iván Cardozo as a candidate (full-time hire) or as a freelancer/contractor. Both audiences scan for evidence of shipped production work, technical depth across the stack, and direct contact channels (email, phone/WhatsApp, LinkedIn, GitHub).

Secondary audience: developer peers with potential interest in collaboration. Not a primary target.

## Product Purpose

The portfolio is Lucas Iván Cardozo's public-facing professional presence — a single page that lets a visitor evaluate his work, his stack, and reach his contact channels without friction.

Success means a visitor can scan hero → skills → education → projects → contact in under a minute and reach a clear decision to contact or move on. The site is also a quiet demonstration of Lucas's own craftsmanship: a self-taught developer who ships production software cannot afford a portfolio that feels less rigorous than his client work.

## Positioning

The central claim is the **asymmetry** between being a current computer-engineering student and already shipping production software for real clients. The tagline ("Three products in production. Still finishing the degree.") carries that tension. Other portfolios can claim "shipped work" or "CS student" — the truthful combination of *both, simultaneously, with named real clients* is what a neighboring portfolio cannot honestly copy.

The portfolio is not "another dev portfolio" — it is evidence that Lucas delivers production work while still completing the degree that gives him the formal foundation.

## Operating Context

- A visitor arrives via direct link, GitHub profile, LinkedIn, recruiter referral, or shared URL.
- Browsing happens on desktop or mobile; the site is responsive with a 320px minimum width.
- The page flows through six content sections: Hero, Skills, Education, Projects, Contact, plus a Footer.
- Contact channels surfaced: email (`lucasivancardozo27@gmail.com`), phone / WhatsApp (`+54 9 223 531 9564`), LinkedIn, GitHub.
- Recruiters may also receive a CV variant; that variant lives in a separate project (Astro-based) per `mi-info.md` and is out of scope for this site.

## Capabilities and Constraints

**Content & data**

- Static site; no backend, no API calls. All content is loaded from local JSON via a simple repository pattern.
- Six sections: Hero (`MeDescription` + `MeComponent`), `Skills`, `Education`, `Projects` (`ProjectCard` list), `Contact`, `Footer`.
- Data sources: `src/lib/db/{skills,education,projects,socialNetworks}.json` exposed through `src/lib/db/repository/*.ts`.
- Five projects, three flagged `featured` (carta-qr, boston-automotores, bowling-de-paso). All five carry public live URLs and GitHub links.

**Tech stack**

- React 19, Vite 7, TypeScript 5 (strict, `tsc -b` on every build).
- CSS Modules for component styles; global tokens in `src/index.css`.
- Biome 2 for lint and format (single binary, ~16ms per run).
- React Compiler (Babel) enabled for automatic memoization.
- `gh-pages` for deploy; base path `/portfolio/`.

**Editorial constraints (non-negotiable, per `mi-info.md` §12)**

- No invented projects — only the five listed, all with live URLs.
- No invented metrics (X% faster, X users). If a number has no source, omit it.
- No real client names except where pre-approved. Approved placeholders only ("Car dealership (real client)" / "Concesionario de autos (cliente real)"). Bowling de Paso is the approved exception.
- No invented CI/CD, Docker-in-production, or other infra claims without evidence in the actual project repos.
- No language certification claims unless a certificate exists.
- Voice: third person, present tense for current roles, past tense for completed. No "I", no "my".
- Tone: professional, concise, no marketing language, no unsupported superlatives.
- If a fact is missing, omit it — never invent.

**Visual commitments already in code (not extended by init)**

- Dark theme: `--color-bg: #0f0f1a`, `--color-bg-secondary: #1a1a2e`, text `#e2e8f0`, primary `#6366f1`, accent `#a78bfa`.
- Typography: Inter with a system-font fallback chain.
- `color-scheme: dark`.

**Language scope**

- English-only. The current state is intentional: no `/es`, `/en`, or `/print/*` routes, no i18n library, all copy in English.
- The bilingual ES/EN + print plan documented in `mi-info.md` belongs to a **separate CV project** (Astro-based), not this portfolio. Adding bilingual routes here would be a separate scope decision.

## Brand Commitments

- **Name**: Lucas Iván Cardozo (short form: Lucas Cardozo).
- **Headline (ES = EN)**: Full-Stack TypeScript Developer.
- **Extended title (ES = EN)**: Full-Stack TypeScript Developer · React · Next.js.
- **Tagline (current English)**: "Three products in production. Still finishing the degree." The Spanish equivalent is documented in `mi-info.md` §3 but is not surfaced on this site.
- **Voice**: third person, present for current roles, past for completed. No first person.
- **Tone**: professional, concise, evidence-first, no marketing speak.
- **Identity**: real client names are not used except where pre-approved (Bowling de Paso).
- **Visual identity** is recorded in code, not yet documented as a design system. Init does not write `DESIGN.md`; that is `document`'s job (recording the incumbent) or `new-work`'s job (replacing it).

## Evidence on Hand

- Live URLs for all five projects in `src/lib/db/projects.json` (carta-qr, boston-automotores, pathfinder, tu-amigo-fi, bowling-de-paso).
- LinkedIn: <https://www.linkedin.com/in/lucas-ivan-cardozo/>.
- GitHub: <https://github.com/LucasIvanCardozo>.
- Personal email: `lucasivancardozo27@gmail.com`.
- Phone / WhatsApp: `+54 9 223 531 9564` (`https://wa.me/5492235319564`).
- Education entries in `src/lib/db/education.json` (UNMdP Ingeniería Informática, in progress ~60%, fourth year — per `mi-info.md` §10).
- Skills inventory in `src/lib/db/skills.json`.
- Social networks list in `src/lib/db/socialNetworks.json`.
- Hero photo: `public/foto-carnet.jpg`.
- Project screenshots (WebP) in `public/images/`.
- Favicon: `public/favicon.svg`.
- SEO meta + JSON-LD `Person` schema in `index.html`.
- OG image: `/og-image.png`.

**Absences future work must not fabricate** (per `mi-info.md` §14):

- No salary expectations.
- No full postal address (only city + province + country).
- No date of birth or age.
- No nationality, ID, or relocation availability.
- No formal language or tech certifications.
- No awards, talks, publications outside the five listed projects.
- No formal employer history (only projects + freelance).
- No volunteering, teaching, mentoring claims.
- No testimonials without source.

## Product Principles

1. **Evidence over claims.** Show real URLs, real client work, the real tech stack. If a number isn't real, omit it.
2. **The degree tension is the angle.** A current CS student with shipped production software is unusual; the portfolio must make that asymmetry legible at first scroll.
3. **Full-stack ownership.** Model data, design UI, ship complete. The portfolio must not present Lucas as frontend-only.
4. **Editorial discipline.** Third person, no superlatives, no invented content. The copy quality reflects Lucas's professional rigor and his own review of his work.
5. **Static-first, fast.** No backend, no JS-required interactivity that could be plain HTML. The site itself is a quiet demonstration of craft.

## Accessibility & Inclusion

- Semantic HTML throughout.
- `aria-hidden` on decorative SVGs.
- `.sr-only` utility available for screen-reader-only text.
- 320px minimum viewport width.
- Dark color scheme with high text contrast (`#e2e8f0` text on `#0f0f1a` background).
- No explicit WCAG conformance level is currently claimed. Improvement to a target conformance level is open for future work, not pinned here.
