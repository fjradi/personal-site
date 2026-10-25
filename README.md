# Fajar Adi Nugroho — Portfolio

A responsive, single-page software engineer portfolio built with Astro, TypeScript, and CSS.

Live site: https://me.fjradi96.workers.dev

## Getting started

Requires Node.js 20.11.1 or newer.

```sh
npm ci
npm run dev
```

## Commands

- `npm run check` — Check Astro and TypeScript.
- `npm run build` — Build the site into `dist/`.
- `npm run preview` — Preview the production build.
- `npm run deploy` — Check, build, and deploy to Cloudflare Workers.

For the first deployment, sign in with `npx --yes wrangler@3.114.15 login`.

## Editing

- Content: `src/data/portfolio.ts`
- Page: `src/pages/index.astro`
- Styles: `src/styles/global.css`
- Hosting: `wrangler.jsonc`

Private PDFs belong in `private-documents/`, which is ignored by Git and excluded from deployment.
