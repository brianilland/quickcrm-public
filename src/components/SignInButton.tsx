'use client';
import { useMsal } from "@azure/msal-react";

export default function SignInButton() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect();
  };

  return <button onClick={handleLogin}>Sign in with Microsoft</button>;
}