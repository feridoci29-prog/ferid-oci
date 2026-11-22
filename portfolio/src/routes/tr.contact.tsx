import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio-pages';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/tr/contact')({
  staticData: { sitemap: true },
  head: () => portfolioHead('contact', 'tr'),
  component: Page,
});

function Page() { return <PortfolioPage page="contact" language="tr"/>; }