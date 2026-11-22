import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/contact")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
});
