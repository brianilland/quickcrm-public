'use client';
import { useMsal } from "@azure/msal-react";

export default function UserInfo() {
  const { accounts, instance } = useMsal();
  const activeAccount = instance.getActiveAccount() ?? accounts[0];

  if (!activeAccount) return null;

  const displayName = activeAccount.name ?? activeAccount.username;

  return (
    <span>
      Signed in as: {displayName} ({activeAccount.username})
    </span>
  );
}
