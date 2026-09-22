import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Captions, Clock3, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Video Speed Reader — Video to transcript in three minutes" },
      { name: "description", content: "Upload a video and receive an accurate Chinese or English transcript in three minutes." },
      { property: "og:title", content: "Video Speed Reader" },
      { property: "og:description", content: "Upload your video, get a clean transcript in three minutes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const features = [
  {
    icon: Captions,
    title: "高準確度逐字稿",
    english: "High-accuracy transcripts",
    copy: "Powered by OpenAI Whisper, with accurate transcription in both Chinese and English.",
  },
  {
    icon: Clock3,
    title: "三分鐘交付",
    english: "Three-minute turnaround",
    copy: "Processing runs quietly in the background. We’ll email you as soon as it’s ready.",
  },
  {
    icon: ShieldCheck,
    title: "可商用授權",
    english: "Commercial-use ready",
    copy: "You own the output. Repurpose it into articles, course notes, or searchable archives.",
  },
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5 font-semibold text-foreground">
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <Sparkles className="size-4" />
      </span>
      <span>Video Speed Reader</span>
    </Link>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Brand />
        <Button asChild variant="outline">
          <Link to="/signin">Sign in / 登入</Link>
        </Button>
      </header>

      <section className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-5 py-20 sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-x-1/4 top-1/3 h-64 bg-primary/10 blur-[120px]" />
        <div className="relative max-w-4xl animate-rise-in">
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]" />
            Video to text, without the wait
          </p>
          <h1 className="text-balance text-5xl font-bold leading-[1.04] sm:text-7xl lg:text-8xl">
            Video Speed Reader
          </h1>
          <p className="mt-8 max-w-3xl text-balance text-2xl font-medium leading-relaxed text-foreground sm:text-4xl">
            上傳影片，三分鐘內拿到逐字稿。
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Upload your video, get a clean transcript in three minutes.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="brand" size="xl">
              <Link to="/signup">Get started <ArrowRight /></Link>
            </Button>
            <span className="text-sm text-muted-foreground">Built for creators, educators, and engineers.</span>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/35">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase text-primary">Focused on the transcript</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">From recording to usable words, fast.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="animate-rise-in rounded-lg border border-border bg-card p-7 shadow-sm"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <feature.icon className="size-6 text-primary" />
                <h3 className="mt-8 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{feature.english}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© 2026 Video Speed Reader</span>
        <span>Accurate transcripts. Ready when you are.</span>
      </footer>
    </main>
  );
}