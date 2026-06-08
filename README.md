# Revival Japanese Landing Page

A Next.js landing page project tailored for a young audience with a fresh white-base design.

## Project Overview

This repository contains a Next.js app rebuilt for a modern Japanese audience with:

- white-base, bright visual design
- youth-oriented typography and accent colors
- responsive landing page sections
- improved accessibility for keyboard users
- GitHub Actions CI for build and lint checks

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Deployment

Build the app for production:

```bash
npm run build
```

Run the built app locally:

```bash
npm start
```

## Documentation

- `DEPLOYMENT.md` — deployment and CI documentation
- `app/globals.css` — global white-base theme and accessibility styles
- `components/landing/` — landing page sections

## CI / GitHub Actions

This repository includes a workflow at `.github/workflows/ci.yml`.
It runs on pushes and pull requests to `main`, and executes:

- `npm install`
- `npm run build`
- `npm run lint`

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Actions](https://docs.github.com/actions)
