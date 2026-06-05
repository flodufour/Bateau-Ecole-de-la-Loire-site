# Bateau École de la Loire

Modern website for **Bateau École de la Loire** — a boat driving school based in Nantes, France.

## Tech Stack

- [Next.js 15](https://nextjs.org) — App Router, server components
- React 19 — `useActionState` for forms
- TypeScript — strict mode
- Tailwind CSS 4.x

## Project Structure

```
app/                  # Routes (pages + layouts)
components/           # Reusable UI components
  ui/                 # Button, Container, PageHero
  layout/             # Header, Footer
  home/               # Homepage sections
  permis/             # Permit detail components
  tarifs/             # Pricing components
  examens/            # Exam page components
  candidat-libre/     # Candidat libre components
  contact/            # Contact form + map
lib/                  # Data & utilities
public/
  images/             # Photos + favicon
  documents/          # Downloadable PDFs
  icons/              # SVG icons
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://bateauecoledelaloire.fr
```

## Changelog

### v1.0.0 — 2026-06-06 — Public site complete

**Pages**
- `/` — Homepage: hero, feature cards, pricing carousel, callouts
- `/permis` — Permits overview (3 cards with photos)
- `/permis/cotier` — Côtier: full program, documents, exam, practical
- `/permis/fluvial` — Fluvial: full program, documents, exam
- `/permis/hauturier` — Hauturier: full program, documents, exam
- `/tarifs` — 9 pricing cards, legend, info panel, downloadable forms
- `/examens` — Exam process, booking via school or independent
- `/contact` — Server action form, info card, Google Maps embed
- `/candidat-libre` — Upgrade options, application process, cities carousel, documents

**Technical**
- Shared UI primitives: `Button`, `Container`, `PageHero`
- RAF-based auto-scroll carousel with manual drag (`CitiesCarousel`)
- Contact form with React 19 `useActionState`
- `metadataBase` + `openGraph` for social sharing on all pages
- Favicon served via `app/favicon.ico`
- Semantic HTML throughout (breadcrumbs, `<address>`, `aria-label`)