# Portfolio

My personal portfolio site built with Next.js, Tailwind CSS, and PostgreSQL. Projects are stored in a database, the contact form sends real emails, and the whole thing supports dark/light mode.

## Stack

- **Next.js 16** — App Router, server components, route handlers
- **TypeScript**
- **Tailwind CSS v4**
- **Prisma** with `@prisma/adapter-pg` — PostgreSQL via connection string
- **Resend** — contact form emails
- **next-themes** — dark/light mode

## Getting started

1. **Clone and install**

   ```bash
   git clone https://github.com/bobson/portfolio.git
   cd portfolio
   npm install
   ```

2. **Environment variables**

   Create a `.env` file in the root:

   ```env
   DATABASE_URL=postgresql://user:password@host:5432/dbname
   RESEND_API_KEY=re_...
   ```

3. **Push the schema and seed the database**

   ```bash
   npx prisma db push
   npm run seed
   ```

4. **Start the dev server**

   ```bash
   npm run dev
   ```

## Project structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/   # Email handler (Resend)
│   │   └── projects/  # REST endpoint for projects
│   ├── about/
│   ├── contact/
│   ├── projects/
│   └── page.tsx       # Home
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ContactForm.tsx
│   ├── ThemeToggle.tsx
│   └── ...
├── lib/
│   └── prisma.ts
prisma/
├── schema.prisma
└── seed.ts
```

## Adding projects

Projects are managed through the database. The quickest way is to edit `prisma/seed.ts` and re-run:

```bash
npm run seed
```

Each project has a `featured` flag (shows up in the highlighted section) and an `order` field that controls the display order.

## Contact form

The form POSTs to `/api/contact` which uses Resend to forward messages to the configured inbox. On Resend's free tier you can only send from `onboarding@resend.dev` — to use a custom `from` address, verify a domain in the Resend dashboard and update the `from` field in `src/app/api/contact/route.ts`.

## Deployment

The site is built to run on Vercel. Make sure to add `DATABASE_URL` and `RESEND_API_KEY` to your project's environment variables in the Vercel dashboard before deploying.
