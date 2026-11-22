# Ferid Oci — Personal Portfolio

Bilingual (English/Turkish) personal portfolio for Ferid Oci, founder of Draft Wink.
Stack: React 19, TanStack Start, TypeScript, Tailwind CSS v4, Motion, Lucide.
Note: this project uses TanStack Start, not Next.js.

## Run locally
```sh
bun install        # or npm install
cp .env.example .env.local
bun run dev
bun run test
bun run build
```

## Site URL
Set `NEXT_PUBLIC_SITE_URL` (default `https://feridoci29-prog.github.io`) and rebuild. Canonical, hreflang, Open Graph and `/sitemap.xml` use it.

Routes: `/`, `/about`, `/projects`, `/vision`, `/contact` and `/tr/...` equivalents.

## Visuals
The hero and Draft Wink preview use a pure CSS animated orb; no image files are needed.

## Deployment
Vercel: use a TanStack Start / Nitro compatible preset (e.g. set the Nitro preset to `vercel`), set `NEXT_PUBLIC_SITE_URL`, then build. GitHub Pages only serves static files, so it needs a prerendered build.