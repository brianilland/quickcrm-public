'use client';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../auth/authConfig";

export default function SignInButton() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  return <button onClick={handleLogin}>Sign in with Microsoft</button>;
}
