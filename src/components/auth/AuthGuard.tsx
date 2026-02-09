// src/components/auth/AuthGuard.tsx

'use client';
import { useEffect } from 'react';
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    const accounts = instance.getAllAccounts();
    if (!isAuthenticated && accounts.length === 0 && inProgress === InteractionStatus.None) {
      instance.loginRedirect().catch((error) => {
        if (error.errorCode !== 'interaction_in_progress') {
          console.error('Login error:', error);
        }
      });
    }
  }, [isAuthenticated, inProgress, instance]);

  useEffect(() => {
    if (!isAuthenticated || inProgress !== InteractionStatus.None) return;
    if (instance.getActiveAccount()) return;

    const accounts = instance.getAllAccounts();
    if (accounts.length > 0) {
      instance.setActiveAccount(accounts[0]);
    }
  }, [inProgress, instance, isAuthenticated]);

  // ✅ Block rendering while MSAL is figuring things out
  if (inProgress !== InteractionStatus.None || !isAuthenticated) return null;

  return <>{children}</>;
}
