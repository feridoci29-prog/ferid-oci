import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio-pages';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/tr/vision')({
  staticData: { sitemap: true },
  head: () => portfolioHead('vision', 'tr'),
  component: Page,
});

function Page() { return <PortfolioPage page="vision" language="tr"/>; }
