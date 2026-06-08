# Deployment Guide

This project is a Next.js application designed for Japanese landing pages.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app:

```text
http://localhost:3000
```

## Production Build

Build the app for production:

```bash
npm run build
```

Start the production server locally:

```bash
npm start
```

## GitHub Actions

A CI workflow has been added at `.github/workflows/ci.yml`.
It runs automatically on pushes and pull requests to `main`.

The workflow performs:

- checkout
- Node.js setup
- dependency install
- `npm run build`
- `npm run lint`

## Deployment Notes

This repository can be deployed on Vercel, Netlify, or any platform that supports Next.js.

- For Vercel: connect the repository and use the `main` branch.
- For GitHub Pages or other static hosting: this project is a server-rendered Next.js app, so use Vercel or a Node-compatible host.

## Useful Commands

- `npm run dev` — Start local development server
- `npm run build` — Build production files
- `npm start` — Run built app in production mode
- `npm run lint` — Run ESLint
