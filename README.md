# Amanuel Tadele Dabarsho — Professional Portfolio

Research-focused portfolio site for **Amanuel Tadele Dabarsho**, Research Specialist / data management professional.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (Base UI / Nova)
- Neon Postgres + Drizzle ORM (blog / admin)
- Formspree (contact form email)
- Motion (`motion/react`), Lucide React, Zod
- Playwright smoke tests

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run lint           # ESLint
npm run build          # Production build
npm run start          # Serve production build
npm run db:push        # Push Drizzle schema to Neon
npm run test:e2e       # Playwright smoke tests
```

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin (sitemap, OG, JSON-LD) |
| `DATABASE_URL` | Neon Postgres connection string |
| `ADMIN_PASSWORD` | Password for `/admin/login` |
| `SESSION_SECRET` | Session cookie signing secret (16+ chars) |
| `FORMSPREE_FORM_ID` | Formspree form id or full endpoint URL |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID (e.g. `G-XXXXXXXX`) |

## Blog & admin

1. Create a free [Neon](https://neon.tech) Postgres database.
2. Fill `.env.local` as above.
3. Run `npm run db:push`.
4. Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

Public posts appear at `/blog`. Admin is blocked from indexing via `robots`.

## Content editing

Typed content lives under `data/`:

| File | Purpose |
|------|---------|
| `data/site.ts` | Name, contact, social links, nav |
| `data/projects.ts` | Project cards + detail pages |
| `data/contributions.ts` | Projects page contributions list |
| `data/organizations.ts` | Home page organizations |
| `data/services.ts` | Professional services |
| `data/publications.ts` | Publications / research data |
| `data/skills.ts` | Skills, expertise, workflow |
| `data/education.ts` | Education |
| `data/media.ts` | Portrait and media paths |

Blog posts are stored in Postgres (not in `data/`).

## Contact form

Messages are sent with [Formspree](https://formspree.io) via a Server Action (no mail client popup, no domain DNS).

1. Create a free Formspree account and a new form.
2. Copy the form id from the endpoint (`https://formspree.io/f/xxxxxx` → `xxxxxx`).
3. Set `FORMSPREE_FORM_ID` in `.env.local` / Vercel (id or full URL both work).
4. Confirm your email in Formspree so submissions reach your inbox.

## Deploy on Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set env vars: `NEXT_PUBLIC_SITE_URL`, `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET`, `FORMSPREE_FORM_ID`.
4. Run `npm run db:push` against the production database.
5. After the domain is live, confirm `NEXT_PUBLIC_SITE_URL` matches it, then submit `/sitemap.xml` in Google Search Console.
