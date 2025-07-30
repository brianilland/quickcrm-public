'use client';
import { useEffect } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    const accounts = instance.getAllAccounts();
    if (!isAuthenticated && accounts.length === 0) {
      instance.loginRedirect().catch((error) => {
        if (error.errorCode !== "interaction_in_progress") {
          console.error("Login error:", error);
        }
      });
    }
  }, [isAuthenticated, instance]);

  // ✅ Prevent render until we confirm user is authenticated
  if (!isAuthenticated) return null;

  return <>{children}</>;
}
