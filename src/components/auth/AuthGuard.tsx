'use client';
import { useEffect } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    const accounts = instance.getAllAccounts();

    // ✅ Wait for MSAL to finish before making redirect decisions
    if (inProgress === InteractionStatus.None && !isAuthenticated && accounts.length === 0) {
      instance.loginRedirect().catch((error) => {
        if (error.errorCode !== "interaction_in_progress") {
          console.error("Login error:", error);
        }
      });
    }
  }, [isAuthenticated, instance, inProgress]);

  // ✅ Wait for MSAL to finish
  if (inProgress !== InteractionStatus.None) return null;
  if (!isAuthenticated) return null;

  return <>{children}</>;
}
