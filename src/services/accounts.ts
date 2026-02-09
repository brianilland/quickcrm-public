export type Account = {
  id: number;
  name: string;
  status: string;
};

const accounts: Account[] = [
  { id: 1, name: 'Northwind Traders', status: 'Active' },
  { id: 2, name: 'Contoso Ltd.', status: 'Prospect' },
];

export const getAccounts = (): Account[] => accounts;
