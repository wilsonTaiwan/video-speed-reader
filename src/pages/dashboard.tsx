import { LogOut, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { usePageTitle } from "@/App";
import { useAuthUser } from "@/components/protected-route";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export default function Dashboard() {
  usePageTitle("Dashboard — Video Speed Reader");
  const user = useAuthUser();
  const navigate = useNavigate();

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate("/signin", { replace: true });
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5 font-semibold">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground"><Sparkles className="size-4" /></span>
            <span className="hidden sm:inline">Video Speed Reader</span>
          </Link>
          <Button variant="outline" onClick={handleSignOut}><LogOut /> Sign Out</Button>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-medium text-primary">YOUR WORKSPACE</p>
        <h1 className="mt-4 break-words text-3xl font-semibold sm:text-5xl">Hi {user.email}</h1>
        <div className="mt-12 max-w-3xl border-l-2 border-primary pl-6 sm:pl-8">
          <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            Your dashboard is coming soon. Upload functionality will be added in the next milestone.
          </p>
        </div>
      </section>
    </main>
  );
}
