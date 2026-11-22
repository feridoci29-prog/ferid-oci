import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/tr/projects")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/projects" });
  },
});
