# Ferid Oci Portfolio — deployment guide

The original bilingual React + TanStack Start application from the supplied ZIP is preserved in `ferid-oci-portfolio/`. The repository's existing files and older `portfolio/` directory remain untouched.

## Vercel

The Vercel project `ferid-oci` is linked to `feridoci29-prog/ferid-oci`, with `ferid-oci-portfolio/` as its root directory and `main` as its production branch. It uses `bun install --frozen-lockfile`, `bun run build`, and Nitro's Vercel preset. Set `NEXT_PUBLIC_SITE_URL` to `https://ferid-oci.vercel.app` for production, preview, and development builds so canonical URLs, Open Graph metadata, and the sitemap use the production origin.

GitHub pushes to `main` are the production deployment source; branch pushes create previews. The existing static portfolio at https://feridoci29-prog.github.io/ is separate from the TanStack Start deployment.

## Search and indexing

The app exposes `robots.txt` and a bilingual `/sitemap.xml`. After the first successful production deployment, submit the sitemap in Google Search Console. Search ranking and indexing are not guaranteed.
