# GDG RBU – Google Developer Groups on Campus, Ramdeobaba University

Responsive Next.js website built for the **GDG RBU Frontend Developer Recruitment Task 2026-27**. It reproduces the supplied Figma design (neo-brutalist grid background, bold black borders, offset shadows, pixel headings, Google-colour palette) and adds dark/light mode, an accessible FAQ accordion, a mobile menu and a small interactive search.

## Features

- Navbar with logo, Home / Team / Events / Gallery / Portfolio / More, profile menu, scroll-spy active states and a working hamburger menu on tablet/mobile
- Hero with pixel-font title, supporting copy, black graphic and **working "jump to" search** (bonus interactive feature)
- Upcoming Event feature card + yellow "New Event" card with date/time and Register Now
- Team section with split layout and the supplied team photograph
- FAQ accordion – click, Enter/Space, Arrow Up/Down, Home/End; `aria-expanded` / `aria-controls`
- Contact footer with address (opens Google Maps), email (`mailto:`), social links and the geometric shapes border
- Dark / light theme, persisted in `localStorage`, applied before first paint (no flash)
- Smooth scrolling, hover/press transitions, reveal-on-scroll; everything is disabled under `prefers-reduced-motion`
- Extra routes `/gallery` and `/portfolio` so every nav button goes somewhere real
- SEO metadata (title template, description, Open Graph, Twitter), `next/image` optimisation, skip-to-content link, semantic landmarks

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · lucide-react · self-hosted fonts via `@fontsource` (Tiny5, Hanken Grotesk, Courier Prime). No backend, database or API keys.

## Getting started

Requires Node.js 20+.

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:3000
npm run test         # typecheck + lint
npm run build        # production build
npm start            # serve the production build
```

## Configuration (optional)

Registration and social URLs were not supplied with the design, so they are **not invented**. Copy `.env.example` to `.env.local` and fill in what you have:

| Variable | Effect |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Base URL for SEO / Open Graph |
| `NEXT_PUBLIC_REGISTER_URL` | Target of "Register Now". If empty, it opens an email to `gdsc@rknec.edu` |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_X_URL` | Social links. If empty, that icon is shown disabled (no fake link) |

Event, FAQ, team and portfolio content lives in typed files under `src/data/`.

## Project structure

```
public/assets/          gdg-logo.png, team-photo.jpg, avatar.jpg, shapes-border.png
src/app/                layout.tsx, page.tsx, globals.css, gallery/, portfolio/, icon.png
src/components/         Navbar.tsx, Footer.tsx
src/components/sections Hero.tsx, HeroSearch.tsx, Events.tsx, Team.tsx, FAQ.tsx
src/components/ui/      ThemeToggle, Reveal, Dropdown, BrutLink, SectionHeading, SocialIcons
src/data/               site.ts, navigation.ts, events.ts, faqs.ts, team.ts, portfolio.ts
src/lib/cn.ts           className helper
netlify.toml            Netlify build config
```

Only interactive pieces are client components (`Navbar`, `FAQ`, `HeroSearch`, `ThemeToggle`, `Reveal`, `Dropdown`); the rest are server components.

## Deploy to Netlify

1. Push the repo to GitHub (below).
2. In Netlify: **Add new site → Import an existing project → GitHub** and pick the repo.
3. Build command `npm run build`; Netlify detects Next.js and applies its runtime automatically (`netlify.toml` is included). Node 20 is set.
4. Under **Site configuration → Environment variables** add any variables from the table above, then redeploy.

Vercel also works with zero config (import the repo, no settings needed).

## Connect to GitHub

```bash
git init
git add .
git commit -m "Initial commit: GDG RBU website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Create the empty repository on github.com first (no README/licence).

## Requirement checklist

| Requirement | How it is met |
| --- | --- |
| Figma → responsive React site | Next.js + Tailwind; checked at 1440 / 768 / 375 px with no horizontal scroll |
| Mobile, tablet, desktop | Breakpoints in every section; hamburger menu below 1024 px |
| Semantic HTML, clean architecture | Landmarks (`header`, `nav`, `main`, `section`, `footer`), modular components, typed data files |
| Optimised assets | `next/image`, AVIF/WebP, self-hosted fonts, transparent shapes PNG |
| Dark / Light mode | `ThemeToggle`, class strategy, `localStorage` persistence, pre-paint init script |
| Smooth animations & transitions | Hover/press transitions, accordion height animation, scroll reveal, smooth scroll; reduced-motion respected |
| Working FAQ accordion | Five questions, keyboard accessible |
| Working mobile menu | Toggle, `aria-expanded`, closes on link click / Escape |
| Nav buttons go to real places | `#home #team #events #faqs #contact`, `/gallery`, `/portfolio` |
| No dead buttons / lorem ipsum | Env-driven links with honest fallbacks |
| TypeScript, Next.js (bonus) | Strict TS, App Router |
| Interactive feature (bonus) | Hero "jump to" search |
| Deployable | `netlify.toml`, static build, `npm run build` passes |

## Notes

- Fonts: the original pixel typeface was not identifiable from screenshots; Tiny5 is the closest match found.
- The design's FAQ screenshot only shows the answer to the first question. The other four answers were written for this project and should be replaced with official wording.
- The event date (Oct 7, 2026) is copied from the design.
