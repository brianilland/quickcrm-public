'use client';
import { useMsal } from "@azure/msal-react";

export default function SignOutButton() {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return <button onClick={handleLogout}>Sign out</button>;
}