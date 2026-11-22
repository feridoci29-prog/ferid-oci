import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio-pages';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/projects')({
  staticData: { sitemap: true },
  head: () => portfolioHead('projects', 'en'),
  component: Page,
});

function Page() { return <PortfolioPage page="projects" language="en"/>; }
