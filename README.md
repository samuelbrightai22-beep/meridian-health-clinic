# Meridian Health Clinic

A premium, multi-specialty concierge medicine website for a fictional US-based clinic in Greenwich, Connecticut — built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui.

## What's inside

- **10 hash-routed views**: Home, About, Services list + 6 detail pages, Doctors list + 4 detail pages, Health Journal list + 4 article pages, FAQ, Contact, and a 5-step Book Appointment flow
- **Brand design system**: deep teal + warm cream + brass gold palette, Playfair Display serif + Inter sans typography, editorial layout
- **Real photography**: 17 images (1 hero, 4 doctor portraits, 6 service images, 4 article covers, 2 About page images)
- **Premium interactions**: sticky header with scroll-aware styling, mobile drawer, reveal-on-scroll animations, hover-zoom image effects, full booking flow with date/time picker

## Tech stack

- [Next.js 16](https://nextjs.org/) with App Router
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) with custom brand tokens
- [shadcn/ui](https://ui.shadcn.com/) (New York style) + [Lucide icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/) (available, used selectively)
- [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (for forms)
- [Prisma](https://www.prisma.io/) ORM installed but not actively used (no database queries in current code)

## Local development

```bash
# Install dependencies
bun install

# Start the dev server (http://localhost:3000)
bun run dev

# Lint
bun run lint

# Production build
bun run build
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # Premium fonts + metadata
│   ├── globals.css          # Brand design system
│   └── page.tsx             # Main router
├── components/
│   └── site/
│       ├── router.tsx       # Hash-based router context
│       ├── header.tsx       # Sticky header with mobile drawer
│       ├── footer.tsx       # Footer with newsletter + sitemap
│       ├── ui.tsx           # Shared primitives (Logo, Button, HashLink, etc.)
│       ├── reveal.tsx       # IntersectionObserver reveal-on-scroll
│       ├── home.tsx         # Home view
│       ├── about.tsx        # About view
│       ├── services.tsx     # Services list + detail
│       ├── doctors.tsx      # Doctors list + detail
│       ├── journal.tsx     # Journal list + article
│       ├── faq.tsx          # FAQ accordion
│       ├── contact.tsx      # Contact form + map
│       └── book.tsx         # 5-step booking flow
└── lib/
    ├── clinic-data.ts       # Single source of truth (clinic, doctors, services, articles, FAQs)
    └── utils.ts             # cn() utility

public/
└── images/                 # 17 real images (hero, doctors, services, articles, about)
```

## Deployment to Vercel

This site is fully static after build (no server-side runtime, no environment variables required).

### Option A: Deploy via GitHub (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
3. Vercel auto-detects Next.js — no configuration needed.
4. Click **Deploy**. The site will be live at `<project-name>.vercel.app` within ~60 seconds.

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# From the project root
vercel

# Follow the prompts (accept all defaults for a Next.js project)
# Production deploy:
vercel --prod
```

## Customization

All clinic data — name, address, phone, doctors, services, articles, FAQs — lives in **`src/lib/clinic-data.ts`**. Change values there and every page updates automatically.

To swap images: drop replacements into `/public/images/{hero,doctors,services,articles,about}/` with the same filenames.

## License

This is a demonstration project. The clinic, physicians, and patient stories are fictional. The photography is licensed for use within this project only.
