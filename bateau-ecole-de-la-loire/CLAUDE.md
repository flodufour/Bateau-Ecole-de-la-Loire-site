# Bateau École de la Loire – Claude Context

## Project Overview
Modern web platform for Bateau École de la Loire (Nantes, France).  
Goal: replace the current website with a modern, conversion-focused Next.js app.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Node.js

---

## Architecture Rules

### Folder structure

- `app/` → routes only (pages + layouts)
- `components/` → reusable UI components
- `services/` → business logic (API, booking, user, payment)
- `lib/` → utilities and helpers
- `types/` → TypeScript types

---

## Critical Rules (VERY IMPORTANT)

- Do NOT analyze or read `node_modules`
- Do NOT inspect framework internals (Next.js source, dist, etc.)
- Only work inside project source folders:
  - /app
  - /components
  - /services
  - /lib
  - /types

- Avoid unnecessary exploration or documentation lookup
- Prefer direct implementation over explanation
- Keep changes minimal and focused

---

## Coding Principles

- Keep components small and reusable
- Avoid duplicated Tailwind classes → create UI components instead
- Pages should only compose components (no heavy logic)
- Business logic must be in `/services`
- Use TypeScript strictly
- Prefer server components by default (Next.js App Router)

---

## UI Guidelines

- Clean and modern UI
- Conversion-focused design (CTA, booking-oriented UX)
- Mobile-first responsive design
- Simple navigation (public / auth / dashboard)

---

## App Structure (Routing)

- `/` → Homepage
- `/permis` → Boat licenses
- `/tarifs` → Pricing
- `/contact` → Contact page
- `/login` → Authentication
- `/dashboard` → User area (bookings, cart, profile)

---

## Feature Scope

### Public site
- SEO optimized homepage
- Permits presentation
- Pricing pages
- Contact form

### Auth system
- Login (existing backend integration)
- User session handling

### Dashboard
- Bookings
- Cart
- Profile
- Future payment integration

---

## Performance Rules

- Do NOT read or scan `node_modules`
- Do NOT search framework documentation automatically
- Only inspect files when explicitly relevant
- Keep responses and changes minimal and task-focused

---

## Goal

Build a clean, scalable, and conversion-optimized platform for a boat driving school, focusing on usability, bookings, and clarity.