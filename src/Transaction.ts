type Transaction = {
  id: number;
  title: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
  category: string;
};
export type { Transaction as default }