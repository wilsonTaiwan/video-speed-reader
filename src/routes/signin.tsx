import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth-form";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [
    { title: "Sign in — Video Speed Reader" },
    { name: "description", content: "Sign in to your Video Speed Reader workspace." },
    { property: "og:title", content: "Sign in — Video Speed Reader" },
    { property: "og:description", content: "Access your Video Speed Reader workspace." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <AuthForm mode="signin" />,
});