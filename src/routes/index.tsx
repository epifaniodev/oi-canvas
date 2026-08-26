import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "oi" },
      { name: "description", content: "oi" },
      { property: "og:title", content: "oi" },
      { property: "og:description", content: "oi" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <h1 className="text-foreground text-5xl font-semibold">oi</h1>
    </div>
  );
}
