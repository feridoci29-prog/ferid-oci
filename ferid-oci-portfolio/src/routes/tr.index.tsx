import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
