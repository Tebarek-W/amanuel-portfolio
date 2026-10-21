# Amanuel Tadele Dabarsho — Professional Portfolio

Research-focused portfolio site for **Amanuel Tadele Dabarsho**, Research Specialist / data management professional.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (Base UI / Nova)
- Neon Postgres + Drizzle ORM (blog / admin)
- Motion (`motion/react`), Lucide React, React Hook Form, Zod
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
| `data/services.ts` | Professional services |
| `data/publications.ts` | Publications / research data |
| `data/certificates.ts` | Certificates |
| `data/skills.ts` | Skills, expertise, workflow |
| `data/education.ts` | Education |
| `data/experience.ts` | Roles and experience letters |

Blog posts are stored in Postgres (not in `data/`).

## Contact form

The form validates client-side and opens a `mailto:` draft. No backend email service is configured.

## Deploy on Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set env vars: `NEXT_PUBLIC_SITE_URL`, `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET`.
4. Run `npm run db:push` against the production database.
5. After the domain is live, confirm `NEXT_PUBLIC_SITE_URL` matches it, then submit `/sitemap.xml` in Google Search Console.
