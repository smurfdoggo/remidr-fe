import type { Transaction, Bill, MonthlyBudget } from '@/lib/analytics';
export const sampleBudgets: MonthlyBudget[] = [{ month: '2026-09', amount: 35000 }, { month: '2026-08', amount: 32000 }];
export const sampleTransactions: Transaction[] = [
  { id: 'salary-sep', date: '2026-09-01', kind: 'income', amount: 48000, category: 'Salary', description: 'Monthly salary' },
  { id: 'rent-sep', date: '2026-09-02', kind: 'expense', amount: 15000, category: 'Bills & rent', description: 'Rent and paid bills' },
  { id: 'food-sep', date: '2026-09-05', kind: 'expense', amount: 6500, category: 'Food', description: 'Food and groceries' },
  { id: 'transport-sep', date: '2026-09-10', kind: 'expense', amount: 3200, category: 'Transport', description: 'Transport' },
  { id: 'other-sep', date: '2026-09-15', kind: 'expense', amount: 2750, category: 'Other', description: 'Other purchases' },
  { id: 'salary-aug', date: '2026-08-01', kind: 'income', amount: 45000, category: 'Salary', description: 'Monthly salary' },
  { id: 'rent-aug', date: '2026-08-02', kind: 'expense', amount: 14000, category: 'Bills & rent', description: 'Rent and paid bills' },
  { id: 'food-aug', date: '2026-08-08', kind: 'expense', amount: 5800, category: 'Food', description: 'Groceries' },
  { id: 'transport-aug', date: '2026-08-12', kind: 'expense', amount: 2400, category: 'Transport', description: 'Commute' },
];
export const sampleBills: Bill[] = [
  { id: 'paid-rent', dueDate: '2026-09-02', amount: 15000, description: 'Rent and paid bills', status: 'paid' },
  { id: 'internet', dueDate: '2026-09-25', amount: 1500, description: 'Internet', status: 'unpaid' },
  { id: 'electricity', dueDate: '2026-09-28', amount: 1300, description: 'Electricity', status: 'unpaid' },
];
