Riviera Baku — Restaurant • Lounge • Park

Modern single‑page site built with Vite + React + React Router + Tailwind CSS.

Quick Start
- Prerequisites: Node 18+ and npm.
- Install deps: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview build: `npm run preview`

Features
- Smooth route transitions and smooth scroll (with offset for fixed navbar)
- Responsive, luxury‑leaning UI with Tailwind utility classes
- i18n (AZ / RU / EN) via simple JSON dictionaries and context hook
- SEO titles/descriptions set per route from i18n
- Menu page with search, category pills, dotted leaders and mobile‑friendly layout
- Gallery grid (4‑up on large screens)

 i18n
- Dictionaries live in `src/i18n/az.json`, `src/i18n/ru.json`, `src/i18n/en.json`.
- Use the `LangSwitch` component in the navbar to change language. The choice is saved to `localStorage` under `rivierabaku-lang`, and `<html lang>` is updated.
- Missing keys fall back to AZ.
- Business hours are unified to `10:00 – 02:00` across all languages.

Adding/Editing Translations
- Add keys to the JSON files; keep the same structure across languages.
- Menu items resolve by slug first (`menu.items.{slug}.name|desc`) and fall back by index (`menu.itemsByIndex.{categoryId}.{index}.name|desc`). This avoids coupling to original strings.

Project Structure (selected)
- `src/App.jsx` — Router, page transitions, SEO updates
- `src/i18n/i18n.jsx` — I18nProvider and `useI18n()`
- `src/components/*` — UI sections (Hero, About, Menu, Gallery, Reservation, Footer, etc.)
- `src/pages/*` — Route wrappers
- `src/assets/*` — Media assets (images/videos)

Notes
- Index HTML sets a Riviera Baku default title/description; runtime SEO overrides via `App.jsx` effect.
- If translations don’t appear after editing JSON, hard refresh or restart dev server (Vite caches modules in dev).

License
Private project. All rights reserved by the owner.
