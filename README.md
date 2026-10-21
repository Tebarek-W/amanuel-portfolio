# Amanuel Tadele Dabarsho — Professional Portfolio

Research-focused portfolio site for **Amanuel Tadele Dabarsho**, Research Specialist / data management professional.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (Base UI / Nova)
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
npm run lint      # ESLint
npm run build     # Production build
npm run start     # Serve production build
npx playwright test   # Smoke tests (requires build + Chromium)
```

Optional: set `NEXT_PUBLIC_SITE_URL` for sitemap absolute URLs (defaults to `https://amanueltd.com.et`).

## Blog & admin

The public **Blog** page (`/blog`) lists published articles and achievements. The owner manages posts at `/admin` after signing in with a password.

### Setup

1. Create a free [Neon](https://neon.tech) Postgres database.
2. Copy `.env.example` to `.env.local` and fill in:
   - `DATABASE_URL` — Neon connection string
   - `ADMIN_PASSWORD` — strong password for `/admin/login`
   - `SESSION_SECRET` — long random string (16+ characters)
3. Push the schema:

```bash
npm run db:push
```

4. Start the app and open [http://localhost:3000/admin/login](http://localhost:3000/admin/login).

On Vercel, add the same env vars in Project Settings → Environment Variables.

## Content editing

Typed content lives under `data/`:

| File | Purpose |
|------|---------|
| `data/site.ts` | Name, contact, social links, nav, confirmation flags |
| `data/projects.ts` | Project cards + detail pages |
| `data/services.ts` | Professional services |
| `data/publications.ts` | Publications / research data |
| `data/certificates.ts` | Certificates |
| `data/skills.ts` | Skills, expertise, workflow |
| `data/education.ts` | Education |

Blog posts and achievements are stored in Postgres (not in `data/`).

**Confirm before treating as verified public facts** (see comments in `data/site.ts`):

- Preferred public email (`gmail` vs `amanuel@amanueltd.com.et`)
- LinkedIn path (`/in/amantd` vs `/in/amantdin`)
- Years of experience: 7+ (confirmed for public site; matches Google Site / website draft)
- Domain `amanueltd.com.et` (intended, not confirmed live)

Private CV reference contacts are **not** published.

## Contact form

The form validates client-side and opens a `mailto:` draft. No backend email service is configured. To connect Resend, Formspree, or similar later, replace the submit handler in `components/contact-form.tsx`.

## Deploy on Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: Next.js (auto-detected).
4. Set env vars: `NEXT_PUBLIC_SITE_URL`, `DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET`.
5. Run `npm run db:push` against the production database (or use Neon’s SQL editor / drizzle from CI).
6. After registering the domain, add `amanueltd.com.et` in Vercel → Domains and set DNS as instructed.
7. Once the domain is live, set `metadataBase` in `app/layout.tsx` to that origin for canonical/OG URLs.

## Source materials

Content was derived from:

- `files/AT Website.docx` (website brief)
- `files/Amanuel Tadele_CV_cred@Oct 2026.docx` (CV)

## Security note

`npm audit` reports a high-severity transitive `braces` issue via development tooling (`shadcn`, ESLint/Next tooling). Do **not** run `npm audit fix --force` — it would downgrade `shadcn` to a breaking major. This does not affect the production runtime bundle in ordinary use.
