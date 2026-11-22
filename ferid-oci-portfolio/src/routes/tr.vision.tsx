import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/vision")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/vision" });
  },
});
