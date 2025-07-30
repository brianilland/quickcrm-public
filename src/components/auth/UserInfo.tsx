'use client';
import { useMsal } from "@azure/msal-react";

export default function UserInfo() {
  const { accounts } = useMsal();
  const user = accounts[0];

  if (!user) return null;

  return <span>Signed in as: {user.username}</span>;
}
