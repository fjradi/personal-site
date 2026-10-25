# Fajar Adi Nugroho — portfolio

An English, single-page static Astro portfolio. Built locally with Astro 5.18.2, TypeScript, and plain CSS. Node 20.11.1 is supported; npm dependencies are pinned and locked.

## Develop and verify

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The development URL is normally http://localhost:4321. Production output goes to `dist/`; preview serves that output.

## Cloudflare Workers

`wrangler.jsonc` configures the `me` Worker at https://me.fjradi96.workers.dev to serve only static assets from `dist/`. Private documents and project sources are not uploaded.

Run `npx --yes wrangler@3.114.15 login` once to authorize Cloudflare, then `npm run deploy` to check, build, and publish. Wrangler is pinned to a Node 20.11.1-compatible version. Its authentication stays outside the repository; `.wrangler/` is ignored.

## Maintain

- Edit curated profile facts, employment, skills, research, and credentials in `src/data/portfolio.ts`.
- Edit page structure and metadata in `src/pages/index.astro`, navigation in `src/components/Header.astro`, and visual styles in `src/styles/global.css`.
- The software illustration and favicon are native SVGs. Google Fonts supplies DM Sans and Manrope; local system fonts provide fallbacks without network access.
- When publishing later, set the real site origin in `astro.config.mjs` and add canonical and absolute social image URLs. No placeholder domain is shipped.
- The mobile menu supports Enter/Space, link activation, and Escape to close and return focus. All links have visible keyboard focus; motion respects the visitor’s reduced-motion setting.
- Source PDFs are stored in `private-documents/`. Both this folder and all `*.pdf` files are ignored by Git. Never move private documents into `public/`: everything there ships to the website. Only `dist/` is intended for hosting.

## Content provenance

The supplied LinkedIn PDF confirms current employment dates, credentials, degree completion, and skills. The 2021 CV supports internship details and awards; the thesis confirms coauthorship and research methods. The supplied project brief provides the CAD-IT industry scope and end-to-end software description. Official employment titles are preserved while the overall positioning is Software Engineer. Certification names describe credentials earned and do not assert current validity. Client identities, private identifiers, phone numbers, and source document downloads are omitted.

Before updating employment or credentials, confirm new facts. Before publishing, check desktop/mobile layouts, keyboard navigation, menu behavior, external links, and privacy of the output.

## Dependency compatibility

The overrides pin the Astro language server, font helper, and storage helper to versions compatible with Node 20.11.1. Without them, current transitive releases require newer Node versions and the checker fails to load. Keep these pins under review when upgrading Node or Astro.

`npm audit` reports advisories in the requested Astro 5.18.2 toolchain and its dependencies, including high and critical findings. The delivered output is static HTML/CSS/JavaScript and has no Astro server, image processing endpoint, or visitor-supplied rendering inputs. This does not make the dependency audit clean; review and upgrade the toolchain before adding server behavior or accepting untrusted build inputs. The requested Astro version is retained.

## Verification

Automated axe WCAG 2 A/AA and 2.1 AA scans report zero violations at desktop (1440px) and mobile (390px) widths, including color contrast checks. Automated scans supplement the keyboard and visual checks; they are not a complete accessibility certification.

Astro check reports zero errors, warnings, or hints; the production build succeeds on Node 20.11.1. Local Edge browser checks cover widths of 320, 375, 390, 760, 768, 1024, and 1440 pixels; all have no horizontal overflow or broken section anchors. Keyboard checks cover the skip link, menu activation, Escape focus return, and closing after navigation. Reduced motion, browser script errors, and exclusion of PDFs from output were also checked. Desktop and mobile screenshots were visually inspected. Email and LinkedIn destinations match the source documents; sending email and authenticated LinkedIn access are not exercised.
