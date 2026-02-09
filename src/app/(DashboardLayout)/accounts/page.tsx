import { getAccounts } from '@/services/accounts';

export default function Page() {
  const accounts = getAccounts();

  return (
    <div>
      My Accounts Page (Coming soon). {accounts.length} sample accounts loaded.
    </div>
  );
}
