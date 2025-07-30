'use client';
import { useMsal } from "@azure/msal-react";

export default function SignOutButton() {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: '/', // Redirect to root after logout - links to signin page
    });
  };

  return <button onClick={handleLogout}>Sign out</button>;
}