import { createFileRoute } from '@tanstack/react-router';
import { getRouterInstance } from '@tanstack/react-start';
import { sitemapStaticPaths, sitemapXML } from '@/lib/sitemap';
import { siteURL } from '@/lib/site';

export const Route = createFileRoute('/sitemap.xml')({
  staticData: { sitemap: false },
  server: { handlers: { GET: async () => {
    const router = await getRouterInstance();
    const entries = sitemapStaticPaths(router).map(path => ({ path }));
    return new Response(sitemapXML(siteURL, entries), { headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' } });
  } } },
});