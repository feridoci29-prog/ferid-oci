# Ferid Oci Portfolio — deployment guide

This repository is intended to hold the source of **Ferid Oci's personal portfolio**, featuring Draft Wink (currently in development), with English/Turkish support and links to LinkedIn, GitHub, DEV.to, Hashnode, Peerlist and Medium.

## Uploading the application

The complete source exists as the **ferid-oci-portfolio-updated.zip** archive provided separately. Extract it locally. Upload the **contents** of the inner `ferid-oci-portfolio/` directory to the root of this repository (not the outer ZIP itself). Include all source files, package.json, and any local assets. Do not upload `node_modules`.

## Hosting

This application uses **React + TanStack Start** with server rendering, rather than plain static HTML. GitHub Pages cannot serve its server runtime directly.

For the full application, import this repository into **Vercel** or another host that supports its runtime. Install dependencies and use `npm run build`. Before deploying, confirm hosting adapter compatibility and configure the public site URL for canonical links, sitemap, and social metadata.

The existing static portfolio at https://feridoci29-prog.github.io/ is a *separate* GitHub Pages deployment. It should not be claimed to be the new TanStack Start site until the new application is deployed and its domain is set.

## Search and indexing

After a successful deployment, verify the canonical domain and sitemap in Google Search Console. Search ranking and indexing are not guaranteed.
