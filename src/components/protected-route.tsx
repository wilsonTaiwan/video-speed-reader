import type { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

import { supabase } from "@/integrations/supabase/client";

type AuthState =
  | { status: "loading" }
  | { status: "authenticated"; user: User }
  | { status: "anonymous" };

type AuthContext = { user: User };

// Client-side replacement for TanStack Start's server `beforeLoad` guard on the
// `_authenticated` route: verify the Supabase session in the browser and redirect
// unauthenticated visitors to /signin.
export function ProtectedRoute() {
  const [auth, setAuth] = useState<AuthState>({ status: "loading" });

  useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data, error }) => {
      if (!active) return;
      if (error || !data.user) {
        setAuth({ status: "anonymous" });
      } else {
        setAuth({ status: "authenticated", user: data.user });
      }
    });
    return () => {
      active = false;
    };
  }, []);

  if (auth.status === "loading") {
    return (
      <div className="grid min-h-screen place-items-center bg-background text-foreground">
        <span className="text-sm text-muted-foreground">Loading…</span>
      </div>
    );
  }

  if (auth.status === "anonymous") {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet context={{ user: auth.user } satisfies AuthContext} />;
}

export function useAuthUser(): User {
  return useOutletContext<AuthContext>().user;
}
