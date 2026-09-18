export type Transaction = {
  id: string;
  date: string; // Local calendar date, YYYY-MM-DD (no timezone conversion).
  kind: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
};

export type Bill = {
  id: string;
  dueDate: string;
  amount: number;
  description: string;
  status: 'paid' | 'unpaid';
};

export function monthKey(year: number, month: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}`;
}

export type MonthlyBudget = { month: string; amount: number };

export function monthlyAnalytics(transactions: readonly Transaction[], bills: readonly Bill[], year: number, month: number, budgets: readonly MonthlyBudget[] = []) {
  const key = monthKey(year, month);
  const days = Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, index) => ({
    day: index + 1, income: 0, expense: 0,
  }));
  const categories = new Map<string, number>();
  const entries = transactions.filter((transaction) => transaction.date.startsWith(`${key}-`));
  let income = 0;
  let expense = 0;
  for (const transaction of entries) {
    const day = days[Number(transaction.date.slice(8, 10)) - 1];
    if (!day || !Number.isFinite(transaction.amount) || transaction.amount < 0) continue;
    day[transaction.kind] += transaction.amount;
    if (transaction.kind === 'income') income += transaction.amount;
    else {
      expense += transaction.amount;
      categories.set(transaction.category, (categories.get(transaction.category) ?? 0) + transaction.amount);
    }
  }
  // Paid bills must already be represented by an expense transaction; never add them twice.
  const unpaidBills = bills.filter((bill) => bill.status === 'unpaid' && bill.dueDate.startsWith(`${key}-`));
  unpaidBills.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
  const budget = budgets.find((item) => item.month === key)?.amount;
  const budgetAmount = budget !== undefined && Number.isFinite(budget) && budget >= 0 ? budget : null;
  return {
    budgetAmount,
    remainingBudget: budgetAmount === null ? null : budgetAmount - expense,
    budgetUsed: budgetAmount !== null && budgetAmount > 0 ? expense / budgetAmount : expense > 0 ? 1 : 0,
    income, expense, balance: income - expense, days, entries,
    categories: [...categories].map(([name, amount]) => ({ name, amount, share: expense ? amount / expense : 0 })).sort((a, b) => b.amount - a.amount),
    unpaidBills,
    commitments: unpaidBills.reduce((total, bill) => total + bill.amount, 0),
  };
}
