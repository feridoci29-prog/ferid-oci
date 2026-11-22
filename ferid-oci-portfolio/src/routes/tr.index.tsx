import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio-pages';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/tr/')({
  staticData: { sitemap: true },
  head: () => portfolioHead('home', 'tr'),
  component: Page,
});

function Page() { return <PortfolioPage page="home" language="tr"/>; }
