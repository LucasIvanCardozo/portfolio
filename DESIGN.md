---
name: Lucas Cardozo — Portfolio
description: A two-room developer portfolio — a warm working studio on top, a cool production gallery below.
colors:
  primary: "#6366f1"
  primary-light: "#818cf8"
  primary-soft: "#a5b4fc"
  accent: "#a78bfa"
  accent-deep: "#8b5cf6"
  accent-bright: "#a855f7"
  accent-magenta: "#ec4899"
  bg: "#0f0f1a"
  bg-secondary: "#1a1a2e"
  bg-deep: "#0a0a0f"
  bg-hero-top: "#f8f7f4"
  bg-hero-bottom: "#f0efe9"
  text: "#e2e8f0"
  text-muted: "#94a3b8"
  text-strong: "#f1f5f9"
  text-on-light: "#1a1a2e"
  text-on-light-muted: "#475569"
  status-success: "#10b981"
  status-success-soft: "#6ee7b7"
  status-warning: "#f59e0b"
  status-danger: "#ef4444"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontWeight: 800
    fontSize: "clamp(2rem, 6vw, 3.5rem)"
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontWeight: 700
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    lineHeight: 1.2
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontWeight: 700
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    lineHeight: 1.2
  subtitle:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontWeight: 500
    fontSize: "clamp(0.95rem, 2vw, 1.25rem)"
    lineHeight: 1.5
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontWeight: 600
    fontSize: "0.7rem"
    letterSpacing: "0.08em"
rounded:
  sm: "0.25rem"
  md: "0.5rem"
  lg: "0.6rem"
  xl: "0.75rem"
  "2xl": "1rem"
  "3xl": "1.25rem"
  pill: "999px"
  full: "2rem"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "3rem"
  "3xl": "4rem"
  "4xl": "6rem"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#475569"
    rounded: "{rounded.lg}"
    padding: "0.75rem 1.5rem"
  skill-pill:
    backgroundColor: "linear-gradient(135deg, rgba(99, 102, 241, 0.35) 0%, rgba(139, 92, 246, 0.3) 100%)"
    textColor: "#e0e7ff"
    rounded: "{rounded.full}"
    padding: "0.5rem 0.875rem"
  category-card:
    backgroundColor: "linear-gradient(145deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)"
    textColor: "{colors.text}"
    rounded: "{rounded['3xl']}"
    padding: "1.75rem"
  card-project:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.text}"
    rounded: "{rounded['2xl']}"
    padding: "1.5rem"
  card-education:
    backgroundColor: "rgba(255, 255, 255, 0.04)"
    textColor: "{colors.text}"
    rounded: "{rounded['2xl']}"
    padding: "1.75rem"
  info-item:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.text}"
    rounded: "{rounded.xl}"
    padding: "1.25rem"
  greeting-pill:
    backgroundColor: "rgba(99, 102, 241, 0.1)"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "0.4rem 0.8rem"
  status-badge-active:
    backgroundColor: "rgba(99, 102, 241, 0.12)"
    textColor: "#a5b4fc"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.65rem"
  status-badge-done:
    backgroundColor: "rgba(16, 185, 129, 0.1)"
    textColor: "#6ee7b7"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.65rem"
---

# Design System: Lucas Cardozo — Portfolio

## Overview

**Creative North Star: "The After-Hours Studio."**

Two rooms, one practice. The hero is the studio: warm light, a portrait, the developer at work. Everything below it is the production gallery — dark, cool, the products that came out of the studio. The visitor crosses from one room into the other, and the change in light is the change in register.

The palette carries that arc. Indigo is the only signal color and it shifts hue as the visitor descends — `#6366f1` at the surface, sliding into `#8b5cf6` and `#a855f7` in deeper elements, never resting on a single flat color. The cream of the hero (`#f8f7f4` → `#f0efe9`) gives way to a deep ink (`#0f0f1a`) with gradient transitions into `#16213e` in Skills, into `#1a1a2e` in Education, into `#0a0a0f` at the Footer. The site cools as it descends.

The language of components is expressive but disciplined. Buttons are saturated gradients with glow, cards lift and bloom on hover, and a single overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`) punctuates the most important reveal — the "View Project" overlay on project cards. The hero alone carries an entrance animation: social icons curve in over 2 seconds, then bounce twice and rest. Everything below reacts to the visitor; the hero performs for the visitor.

**Key Characteristics:**

- Two-room composition: a warm hero above, a dark production gallery below.
- Indigo → violet → magenta as a chromatic arc, not a fixed accent.
- Glass surfaces (translucent white over dark) for every card and info item.
- Expressive but bounded: gradients and overshoot reserved for primary actions and reveals.
- Responsive typography via root `font-size` stepping at 768 / 1024 / 1280 px.
- Print styles invert to black-on-white for clean CV extraction.

## Colors

A cool dark palette anchored by a single signal color (indigo) that warms as it travels through the system.

### Primary

- **Electric Indigo** (`#6366f1`): The signal color. Used in CTA gradients, links, the greeting pill, hero stat numbers, section divider lines, and the central accent across every dark surface. The hero `.highlight` ("Cardozo") is a three-stop gradient from this color through `#8b5cf6` to `#a855f7`.

### Secondary

- **Signal Violet** (`#a78bfa`): The companion accent. Used in gradient endpoints, hover states, the Education progress bar, project-card period labels, and the focus-visible outline.
- **Accent Deep** (`#8b5cf6`) and **Accent Bright** (`#a855f7`): The middle and far stops of the indigo arc. They almost always appear inside a gradient, never alone.

### Tertiary

- **Accent Magenta** (`#ec4899`): A warm punctuation color. Used only in skill-pill hovers and the Skills category dot for Tools (the fifth category). Never appears alone — always embedded in a gradient with indigo or violet.
- **Status palette** (functional, not decorative):
  - **Success** (`#10b981`): "Completed" status badge in Education and the Skills category dot for Backend (the second category). A softer mint (`#6ee7b7`) is used for badge text on dark bg.
  - **Warning** (`#f59e0b`): Skills category dot for Databases (the third category).
  - **Danger** (`#ef4444`): Skills category dot for Security (the fourth category).

### Neutral

- **Ink** (`#0f0f1a`): Default page background for Skills, Education, Projects, Contact. Exposed as `--color-bg` on `:root`.
- **Deep Ink** (`#1a1a2e`): Section gradient partner and Education card surface. Exposed as `--color-bg-secondary` on `:root`.
- **Footer Ink** (`#0a0a0f`): The final, almost-black layer used only on the Footer.
- **Cool Text** (`#e2e8f0`): Default body text on dark surfaces. Exposed as `--color-text`.
- **Muted Slate** (`#94a3b8`): Secondary text, period labels, captions. Exposed as `--color-text-muted`.
- **Strong** (`#f1f5f9`): High-emphasis text on dark surfaces (Contact labels, Education degree titles).
- **Soft Indigo** (`#a5b4fc`): A lighter indigo used as a gradient endpoint for section titles, the active status badge text, and hover states on project links.

### Hero neutrals

- **Hero Text** (`#1a1a2e`): The hero `.name` color — same hex as Deep Ink, used here for contrast against the cream background.
- **Hero Muted** (`#475569`): The hero subhead and description text on the cream background.

### Hero gradient

- **Cream Top** (`#f8f7f4`): Top stop of the hero gradient.
- **Cream Bottom** (`#f0efe9`): Bottom stop of the hero gradient. Both are warm, near-white, slightly textured.

### Named Rules

**The Indigo Arc Rule.** The primary accent is never used as a single flat color. It always appears at the beginning of a gradient that warms toward violet and magenta. The visitor never sees indigo without seeing where it's going.

**The Glass Surface Rule.** Every card, info item, or social-link container on a dark surface is a translucent white (`rgba(255, 255, 255, 0.04–0.10)`) over the bg. The bg color gives the surface its tint. There are no opaque card fills on dark surfaces.

**The Cream Sanctuary Rule.** The hero is the only light surface on the site. It is also the only surface where body text is dark, indigo glows are absent, and section dividers do not exist. The boundary between hero and the rest is non-negotiable.

## Typography

**Display Font:** Inter, with a system-font fallback chain (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`).

**Body Font:** Inter (same stack).

**Label / Mono Font:** None. Labels use uppercase Inter with letter-spacing.

**Character:** One neutral, modern grotesque across every role. The personality comes from weight, color, and clamp() ranges, not from font contrast. Inter's neutrality lets the gradients and color carry the visual energy.

### Hierarchy

- **Display** (weight 800, clamp(2rem, 6vw, 3.5rem), line-height 1.1, letter-spacing -0.02em): Used only in the hero `.name` ("Lucas Cardozo"). The single most prominent string on the site.
- **Headline** (weight 700, clamp(2rem, 5vw, 3.5rem), line-height 1.2): Default `h1` size. Currently unused on rendered pages because the hero `.name` overrides it.
- **Title** (weight 700, clamp(1.75rem, 4vw, 2.5rem), line-height 1.2): Default `h2`. Section titles — Skills, Education, Projects, Contact. Each renders as a white-to-indigo gradient text fill.
- **Subtitle** (weight 500, clamp(0.95rem, 2vw, 1.25rem), line-height 1.5): The hero subhead ("Full-Stack TypeScript Developer · React · Next.js") and small per-section subtitles.
- **Body** (weight 400, 1rem base, line-height 1.6): Default body copy. Hero descriptions step from 0.95rem at desktop to 1rem at mobile.
- **Label** (weight 600, 0.7rem, letter-spacing 0.08em, uppercase): Status badges, Contact labels, project-card period text. The hero `.greeting` ("Hi! I'm") uses a slightly larger variant at 0.9rem.

### Named Rules

**The Gradient Title Rule.** Every section title (`h2`) on a dark surface renders as a `linear-gradient(135deg, #fff 0%, #a5b4fc 50%, #a78bfa 100%)` text fill (or the simpler two-stop white → `#a5b4fc` in Education). The title is never a flat color. This is the visual signature of the dark side of the site.

**The Clamp Ramp Rule.** Responsive sizing is achieved via `clamp(min, vw-based, max)` ranges on every text element that matters (h1–h3, hero `.name`, hero `.title`, section titles). The root `font-size` steps from 16 → 17 → 18 → 19 px at the 768 / 1024 / 1280 px breakpoints as a hidden second tier.

## Layout

- **Container max-widths** (centered, `margin: 0 auto`):
  - Hero: 1600 px at desktop, full-width at mobile.
  - Skills, Projects, Footer content: 1200 px.
  - Education: 1100 px.
  - Contact: 800 px — the narrowest; designed for legibility, not density.
- **Section padding** (vertical rhythm):
  - Mobile: 1–1.5 rem.
  - Tablet: 2–3 rem.
  - Desktop: 3–4 rem.
  - Hero desktop: 3 rem vertical, with side padding scaling 1 rem → 1.5 rem → 4 rem → 6 rem at the 480 / 768 / 1024 / 1280 px breakpoints.
- **Grid systems** (CSS `repeat(auto-fit, minmax(...))`):
  - Skills categories: `minmax(300px, 1fr)`, gap 1.75 rem.
  - Projects: `minmax(320px, 1fr)`, gap 2 rem.
  - Education: `minmax(320px, 1fr)`, gap 1.5 rem.
  - Contact info: `minmax(220px, 1fr)`, gap 1 rem.
- **Breakpoints**: 480 px (small mobile), 768 px (tablet / mobile boundary), 1024 px (desktop entry), 1280 px (wide desktop).
- **Responsive root font-size**: `html { font-size: 16px }` base, stepping up to 17 / 18 / 19 px at the three upper breakpoints.
- **Hero composition**: `grid-template-columns: 1fr` on mobile, `1.2fr 1fr` at 1024 px and above (text-heavy left, portrait right). The hero is `min-height: 100vh` — one full viewport.

## Elevation & Depth

**Flat at rest, lifted on action.** Surfaces have no permanent drop shadows. Depth appears only as a response to state (hover) or as ambient glow on the most important elements. The site is not a Material/Tailwind shadow stack — depth is constructed from glass, glow, and lift.

### How depth is conveyed

- **Glass surfaces.** Translucent white (`rgba(255, 255, 255, 0.04–0.10)`) over dark backgrounds. The bg color tints the surface; the surface itself stays light.
- **Hover lifts.** `transform: translateY(-2px)` on info items and social links, `-6px` on skill category cards. Always paired with a deeper box-shadow.
- **Ambient glow shadows** (tinted with `rgba(99, 102, 241, x)` indigo):
  - **Primary button glow**: `box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3)` at rest → `0 8px 25px rgba(99, 102, 241, 0.4)` on hover.
  - **Hero portrait drop-shadow**: `filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.15))` → `0 12px 35px rgba(0, 0, 0, 0.2)` on hover.
  - **Skill category hover**: `0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.1)`.
  - **Skill pill hover**: `0 8px 20px rgba(99, 102, 241, 0.3)`.
  - **Project card hover**: `0 20px 40px rgba(0, 0, 0, 0.4)`.
  - **Social link hover**: `0 10px 25px rgba(0, 0, 0, 0.3)`.
- **Section dividers** (`:before` pseudo-elements on every dark section): A 1 px horizontal gradient seam — `linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)`.
- **Ambient color zones** (Skills section only): Three stacked radial gradients (indigo at 20% 80%, violet at 80% 20%, magenta at 50% 50% with very low alpha) wash the section in a soft glow.

### Named Rules

**The Glow Belongs to Action Rule.** Glows appear on hover, on primary buttons, and on the hero portrait — never on resting surfaces. A resting card has no shadow; a hovered card lifts and blooms.

**The Section Seam Rule.** Every dark section (except the hero) carries a 1 px gradient seam at its top edge. The seam is a structural cue — it tells the visitor that a new region is beginning. Sections without seams are not sections in this system.

## Shapes

A rounded scale, not a single radius. Five recurring steps plus two extremes:

- **Sharp-ish** (`0.25rem`): The "View Project" overlay button on project cards — the only sharp-ish element. Reads as "press to enter."
- **Square-cornered** (`0.5–0.6rem`): Tech tags, the GitHub link, icon wrappers, buttons.
- **Soft** (`0.75–1rem`): Info items, the Contact social box, project cards, education cards.
- **Pillowy** (`1.25rem`): Skill category cards — slightly more rounded than regular cards.
- **Pill / full round** (`999px`, `2rem`): Status badges, the progress bar, skill pills, the greeting pill.

No borders are thick. Most surfaces use `1px solid rgba(255, 255, 255, 0.10–0.15)` — a hairline, not a frame.

## Components

### Buttons

- **Shape.** Rounded (`0.6rem` radius), padding `0.75rem 1.5rem`.
- **Primary.** Background is `linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`. White text, weight 600, font-size 0.9rem. Carries `box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3)` at rest; on hover, lifts -2px and the shadow doubles.
- **Secondary.** Transparent background, text `#475569`, `border: 2px solid rgba(99, 102, 241, 0.3)`. On hover, fills `rgba(99, 102, 241, 0.1)`, border strengthens to `0.5`, lifts -2px. Lives only in the hero.
- **View Project (overlay).** Sits on the project card image. Translates from `translateY(15px) opacity(0)` to `translateY(0) opacity(1)` with the overshoot easing `cubic-bezier(0.34, 1.56, 0.64, 1)`. Background is the same indigo→violet gradient; radius is sharper (`0.25rem`).

### Chips

- **Skill pill.** Background `linear-gradient(135deg, rgba(99, 102, 241, 0.35), rgba(139, 92, 246, 0.3))`. Text `#e0e7ff`. Padding `0.5rem 0.875rem`. Radius `2rem` (full pill). On hover, the gradient warms to `rgba(139, 92, 246, 0.5) → rgba(236, 72, 153, 0.4)`, lifts -2px and scales 1.02, and a shimmer pseudo-element sweeps left → 100%.
- **Tech tag (project card).** Less expressive. `background: rgba(99, 102, 241, 0.25)`, `border: 1px solid rgba(99, 102, 241, 0.35)`, radius `0.5rem`. Static, no hover effect.
- **Status badge (Education).** Uppercase, weight 600, 0.7rem, padding `0.25rem 0.65rem`, radius 999 px. Two variants:
  - **Active**: `#a5b4fc` text on `rgba(99, 102, 241, 0.12)` bg, `rgba(99, 102, 241, 0.3)` border.
  - **Done**: `#6ee7b7` text on `rgba(16, 185, 129, 0.1)` bg, `rgba(16, 185, 129, 0.25)` border.

### Cards / Containers

- **Corner style.** Soft (`1rem` for project/education, `1.25rem` for skill category, `0.75rem` for info item).
- **Background.** Translucent white over dark — `rgba(255, 255, 255, 0.04)` (education), `0.08` (project, info item, social link), gradient variant for skill category.
- **Border.** `1px solid rgba(255, 255, 255, 0.10–0.15)` — a hairline.
- **Skill category top accent bar** (`:before` pseudo-element, 3 px tall): `linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)`, opacity 0 at rest, opacity 1 on hover.
- **Internal padding.** 1.25–1.75 rem.
- **Education progress bar.** 6 px tall, `background: rgba(99, 102, 241, 0.15)`, fill `linear-gradient(90deg, #6366f1, #a78bfa)`, radius 999 px.

### Inputs / Fields

- No input fields on the site. The portfolio is static — contact is via `mailto:` and `wa.me` links.

### Navigation

- No navigation component. Anchor links from CTAs (`#projects`, `#contact`) scroll to sections via `scroll-behavior: smooth`.
- The Footer carries tech-attribution links (React, Vite, GitHub Pages) in muted slate.

### Signature Components

- **Greeting pill** (`.greeting`). A small `0.9rem` indigo pill ("Hi! I'm"), padding `0.4rem 0.8rem`, radius `2rem`. Background `rgba(99, 102, 241, 0.1)`, text `#6366f1`, border `1px solid rgba(99, 102, 241, 0.2)`. Lives only in the hero, above the name. The first signal that this site is indigo-coded.
- **Hero portrait** (`.me`). WebP portrait at 14em / 16em / 18em depending on viewport, with `meBackground.svg` behind it. Carries the only entry animation on the site: the surrounding social icons curve in over 2s, then bounce twice.
- **Social icon arc** (`.ul` on hero). Four social icons arranged on a downward curve, each with `nth-child` margin offsets to form an organic arc. Animation: `iconListAnimation` rotates 180° from `scale(0) translate(6em) z-index(-1)` to `scale(1) z-index(0)`. After settling, each icon bounces once via `iconAnimation` (alternate, twice).

## Do's and Don'ts

### Do

- **Do** use the indigo gradient arc (`#6366f1 → #8b5cf6 → #a855f7`) for any new CTA or important text fill. Never a flat indigo.
- **Do** keep the hero light and the rest of the site dark. The two-room composition is the signature.
- **Do** use translucent white over dark for any new card surface. The bg color does the tinting.
- **Do** let hover lifts carry depth. Hover = lift + shadow. Rest = flat.
- **Do** reserve the cubic-bezier overshoot (`0.34, 1.56, 0.64, 1`) for reveals (the "View Project" overlay), not for everyday hovers.
- **Do** use clamp() for any new responsive text. The root `font-size` stepping is a hidden second tier.
- **Do** keep section dividers on every dark section. A section without a seam is a regression.

### Don't

- **Don't** introduce a new accent color. Indigo is the signal. Status colors are functional exceptions, not a palette.
- **Don't** add drop shadows to resting surfaces. Glow belongs to action only.
- **Don't** add borders thicker than 1 px. Hairlines, not frames.
- **Don't** animate entrance on anything except the hero. The hero performs; everything else reacts.
- **Don't** use a flat color for a section title. The gradient text fill is the signature.
- **Don't** invent metrics, real client names, or claims that aren't in the data files. The portfolio's editorial discipline mirrors its author's.
- **Don't** add bilingual routes. English-only is intentional — the bilingual plan belongs to a separate CV project.
