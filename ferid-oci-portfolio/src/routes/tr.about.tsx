import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio-pages';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/tr/about')({
  staticData: { sitemap: true },
  head: () => portfolioHead('about', 'tr'),
  component: Page,
});

function Page() { return <PortfolioPage page="about" language="tr"/>; }
