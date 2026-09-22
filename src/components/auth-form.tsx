import { Link, useNavigate } from "@tanstack/react-router";
import { Loader2, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

type AuthFormProps = { mode: "signin" | "signup" };

export function AuthForm({ mode }: AuthFormProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isSignIn = mode === "signin";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const result = isSignIn
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    setLoading(false);
    if (result.error) {
      setError(result.error.message);
      return;
    }
    navigate({ to: "/app", replace: true });
  }

  return (
    <main className="grid min-h-screen place-items-center bg-background px-5 py-12 text-foreground">
      <div className="w-full max-w-md animate-rise-in">
        <Link to="/" className="mb-10 flex items-center justify-center gap-2.5 font-semibold">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground"><Sparkles className="size-4" /></span>
          Video Speed Reader
        </Link>
        <div className="rounded-lg border border-border bg-card p-7 shadow-2xl sm:p-9">
          <h1 className="text-2xl font-semibold">{isSignIn ? "Welcome back" : "Create your account"}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {isSignIn ? "Sign in to continue to your workspace." : "Start turning long videos into useful text."}
          </p>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium">
              Email
              <Input className="mt-2 h-11 bg-background" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              Password
              <Input className="mt-2 h-11 bg-background" type="password" autoComplete={isSignIn ? "current-password" : "new-password"} minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} required />
            </label>
            {error && <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
            <Button className="h-11 w-full" variant="brand" type="submit" disabled={loading}>
              {loading && <Loader2 className="animate-spin" />}
              {isSignIn ? "Sign in / 登入" : "Create account / 註冊"}
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isSignIn ? "New here? " : "Already have an account? "}
            <Link to={isSignIn ? "/signup" : "/signin"} className="font-medium text-primary hover:underline">
              {isSignIn ? "Create an account" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}