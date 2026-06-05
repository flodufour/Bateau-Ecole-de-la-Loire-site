# Changelog

All notable changes to this project are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] — 2026-06-06

> First stable release. Complete public-facing website.

### Pages

- **`/`** — Homepage with hero section, feature cards, pricing carousel (7 offers), autonomy callout, gift callout
- **`/permis`** — Permits overview with one card per permit (photo, key facts, CTA)
- **`/permis/cotier`** — Côtier permit: description, key facts sidebar, required documents, exam details, theory program (25 items), practical objectives (10 items)
- **`/permis/fluvial`** — Fluvial permit: description, key facts, documents, exam, theory program (16 items)
- **`/permis/hauturier`** — Hauturier permit: description, prerequisite notice, documents, exam, theory program (15 items)
- **`/tarifs`** — 9 pricing cards across 4 modes (traditionnel, autonomie, mixte, cadeau), legend, downloadable forms panel
- **`/examens`** — Exam process walkthrough, booking options (via school or independent)
- **`/contact`** — Contact form (server action + validation), info card, Google Maps embed
- **`/candidat-libre`** — Permit upgrade options, 2-step application process, auto-scrolling cities carousel (96+ departments), downloadable documents

### Components

- `Button` — polymorphic (renders as `<Link>` or `<button>`), 4 variants, 3 sizes
- `Container` — consistent max-width layout wrapper used across all pages
- `PageHero` — reusable breadcrumb + page title header
- `Header` — sticky nav with mobile burger menu
- `Footer` — address, contact, exam info, navigation links
- `CitiesCarousel` — RAF-based auto-scroll with manual drag, fixed-position tooltip, pause on hover
- `ContactForm` — React 19 `useActionState`, success state, field-level validation
- `PermitDetailLayout` — shared layout for all 3 permit detail pages
- `PricingCard` — dual pricing support, requirement warning, popular badge

### SEO & Meta

- `metadataBase` + `openGraph` configured globally in root layout
- Per-page `title`, `description`, and `keywords` metadata
- `lang="fr"` on `<html>`
- Semantic HTML: `<main>`, `<section>`, `<article>`, `<address>`, `<nav aria-label>`
- Breadcrumb navigation on all inner pages
- Favicon at `app/favicon.ico`
