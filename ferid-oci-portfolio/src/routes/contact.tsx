import { createFileRoute } from '@tanstack/react-router';
import { PortfolioPage } from '@/components/portfolio-pages';
import { portfolioHead } from '@/lib/portfolio';

export const Route = createFileRoute('/contact')({
  staticData: { sitemap: true },
  head: () => portfolioHead('contact', 'en'),
  component: Page,
});

function Page() { return <PortfolioPage page="contact" language="en"/>; }
