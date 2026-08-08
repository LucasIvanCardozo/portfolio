# CV — Lucas Iván Cardozo

Single-page A4 résumés in **English** and **Spanish**, in **two versions each**:
one ATS-strict (for upload), one designed (for direct send to recruiters).

## Files

| File              | Purpose                                                       |
| ----------------- | ------------------------------------------------------------- |
| `cv-en-ats.html`  | English CV — ATS-strict (for upload to job boards)             |
| `cv-es-ats.html`  | Spanish CV — ATS-strict                                        |
| `cv-en.html`      | English CV — designed (for direct send to recruiters)         |
| `cv-es.html`      | Spanish CV — designed                                         |
| `cv-ats.css`      | ATS stylesheet (single column, no decoration)                  |
| `cv.css`          | Designed stylesheet (indigo accent, refined typography)       |
| `build.py`        | Playwright build script — renders all HTML to PDFs            |
| `../public/cv/cv-en-ats.pdf`  | Generated ATS PDF (EN), served at `/portfolio/cv/cv-en-ats.pdf` |
| `../public/cv/cv-es-ats.pdf`  | Generated ATS PDF (ES), served at `/portfolio/cv/cv-es-ats.pdf` |
| `../public/cv/cv-en.pdf`      | Generated designed PDF (EN), served at `/portfolio/cv/cv-en.pdf`     |
| `../public/cv/cv-es.pdf`      | Generated designed PDF (ES), served at `/portfolio/cv/cv-es.pdf`     |

## When to use which version

| Channel                                                         | Version                         |
| --------------------------------------------------------------- | ------------------------------- |
| LinkedIn Easy Apply / job board upload / ATS form submission    | `*-ats.pdf` (ATS-strict)        |
| Direct email to a recruiter with the PDF attached                | `*.pdf` (designed)              |
| Job fair / printed hand-out                                      | `*.pdf` (designed, prints well)  |

**Same content, two treatments.** Designed version is for humans reading the file; ATS version is for parsers.

## Why HTML + Playwright instead of LaTeX

- Reproducible: any dev can regenerate with `python3 build.py`
- No LaTeX toolchain required
- Full control over typography and spacing
- Two stylesheets share the same HTML — minimal duplication
- Same Playwright install already used in the workspace for portfolio screenshots

## Why this is ATS-strict (`-ats` versions)

Based on 2026 research (Jobscan data: 99.7% of recruiters use keyword-filtered ATS):

- **Single column** — no tables or two-column layouts that cause text-layer scrambling
- **All contact info in the body** — no headers/footers (many scrapers skip them)
- **Standard web-safe fonts** (Inter with Helvetica/Arial fallback)
- **Industry-standard section titles** (Professional Experience, Education, Skills)
- **Date format**: `Month YYYY` or `MMM YYYY` (no apostrophes, no `Jan '24`)
- **No images, no icons, no graphics**
- **PDF output** — preserves layout while remaining text-extractable
- **No tables** — the skills list uses semantic `<dl>`/`<dt>`/`<dd>` styled to look like a list
- **No headers/footers/text boxes**

## What the designed version adds (and why it doesn't break ATS)

The designed versions share the same HTML structure as the ATS versions — same single column, same fonts, no images, no tables, no headers/footers, no gradients. What changes:

- **Single accent color** (`#6366f1` indigo from the portfolio palette) on: section title hairlines, role headline, skill category labels, project period labels, bullet dots, language labels
- **Hairline accents** under section titles (0.5pt, not borders >1px) — the craft floor's "no border-left >1px" rule is respected
- **Refined typography**: name 20pt (was 18pt ATS), tighter letter-spacing, italic for role-meta and stack
- **Subtle 22mm accent bar** at the top-left of the page
- **Slightly tighter margins and section spacing** to keep it on one page

The accent is **always a solid color**, never a gradient (gradients cause text-layer scrambling in many parsers). Print-friendly: works in B&W too.

**Both versions pass 18/18 ATS keyword checks** (TypeScript, React, Next.js, PostgreSQL, Prisma, Node.js, Auth.js, Playwright, Vitest, Multi-tenant, SaaS, WebSockets, RBAC, OAuth, Zod, Docker, JWT, Cloudinary).

## Build

```bash
# Run from this directory
python3 build.py
```

Renders all 4 HTML files to `public/cv/` (so Vite picks them up and serves them at the configured `base`). The output filename mirrors the source stem (no `-ats.html` → no `-ats.pdf`).

The portfolio's `Download CV` button in the hero opens a modal that offers all 4 versions — built from these PDFs.

To render a single file:

```bash
python3 build.py cv-en.html
```

## Distribution

- The PDFs are served at `/portfolio/cv/cv-en.pdf` etc. (via `public/cv/`)
- The hero's **Download CV** button opens a modal that lets the visitor pick the right version
- **Suggested upload filenames** (ATS-friendly, no spaces): `Lucas-Cardozo-CV-EN.pdf`, `Lucas-Cardozo-CV-EN-ATS.pdf`, `Lucas-Cardozo-CV-ES.pdf`, `Lucas-Cardozo-CV-ES-ATS.pdf` — these match the `download=` attribute on each modal option

## Editing

All content lives in the HTML files (4 of them, paired by language). The ATS and designed versions of each language share the **same content** — only the stylesheet differs. When you change a project, update both `cv-en-ats.html` and `cv-en.html` (and same for ES), and `mi-info.md` in the portfolio repo.

## Constraints (non-negotiable)

Inherited from `mi-info.md` §12 in the portfolio repo:

- No invented projects, no invented metrics
- No "autodidacta" or "lectura" next to language levels
- No real client names except approved (Bowling de Paso is the exception)
- No salary, no full address, no DOB, no nationality
- No formal certifications
- Third-person voice, present tense for current, past for completed
- Professional tone, no marketing language, no unsupported superlatives
