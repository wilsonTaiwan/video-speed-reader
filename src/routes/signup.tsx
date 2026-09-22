import { createFileRoute } from "@tanstack/react-router";
import { AuthForm } from "@/components/auth-form";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [
    { title: "Create an account — Video Speed Reader" },
    { name: "description", content: "Create your Video Speed Reader account." },
    { property: "og:title", content: "Create an account — Video Speed Reader" },
    { property: "og:description", content: "Create an account for fast, accurate video transcripts." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: () => <AuthForm mode="signup" />,
});