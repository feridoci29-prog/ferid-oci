import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio-pages';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/tr/projects')({
  staticData: { sitemap: true },
  head: () => portfolioHead('projects', 'tr'),
  component: Page,
});

function Page() { return <PortfolioPage page="projects" language="tr"/>; }