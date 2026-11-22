import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio-pages';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/about')({
  staticData: { sitemap: true },
  head: () => portfolioHead('about', 'en'),
  component: Page,
});

function Page() { return <PortfolioPage page="about" language="en"/>; }
