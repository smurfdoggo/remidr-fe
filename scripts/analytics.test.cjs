const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const code = ts.transpileModule(fs.readFileSync('src/lib/analytics.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const result = { exports: {} };
new Function('exports', 'module', code)(result.exports, result);
const { monthlyAnalytics, monthKey } = result.exports;
const expense = (id, amount, date = '2026-09-02', category = 'Food') => ({ id, date, amount, category, kind: 'expense', description: id });
test('monthly budget is independent of income; paid bills are not doubled', () => {
  const data = monthlyAnalytics([expense('rent', 15000, undefined, 'Bills & rent'), expense('food', 6500), expense('travel', 3200, undefined, 'Transport'), expense('other', 2750, undefined, 'Other'), { ...expense('salary', 48000), kind: 'income' }], [{ id: 'rent', dueDate: '2026-09-02', amount: 15000, description: 'Rent', status: 'paid' }, { id: 'internet', dueDate: '2026-09-25', amount: 2800, description: 'Internet', status: 'unpaid' }], 2026, 8, [{ month: '2026-09', amount: 35000 }]);
  assert.equal(data.income, 48000); assert.equal(data.expense, 27450); assert.equal(data.balance, 20550); assert.equal(data.remainingBudget, 7550); assert.equal(data.commitments, 2800);
  assert.equal(data.categories.reduce((sum, item) => sum + item.amount, 0), data.expense);
});
test('filters months, handles leap years and year boundaries', () => {
  const monthModule = { exports: {} };
  const monthCode = ts.transpileModule(fs.readFileSync('src/lib/month.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function('exports', 'module', monthCode)(monthModule.exports, monthModule);
  assert.deepEqual(monthModule.exports.shiftMonth({ year: 2026, month: 11 }, 1), { year: 2027, month: 0 });
  assert.deepEqual(monthModule.exports.shiftMonth({ year: 2026, month: 0 }, -1), { year: 2025, month: 11 });
  const data = monthlyAnalytics([expense('sep', 200), expense('aug', 900, '2026-08-01')], [], 2026, 8);
  assert.equal(data.expense, 200); assert.equal(data.days.length, 30);
  assert.equal(monthlyAnalytics([], [], 2024, 1).days.length, 29);
  assert.equal(monthKey(2027, 0), '2027-01');
});
test('empty, missing budget, zero budget and overspending', () => {
  const empty = monthlyAnalytics([], [], 2026, 8);
  assert.equal(empty.remainingBudget, null); assert.equal(empty.categories.length, 0);
  assert.equal(monthlyAnalytics([], [], 2026, 8, [{ month: '2026-09', amount: 0 }]).remainingBudget, 0);
  const over = monthlyAnalytics([expense('food', 200)], [], 2026, 8, [{ month: '2026-09', amount: 100 }]);
  assert.equal(over.remainingBudget, -100); assert.equal(over.budgetUsed, 2);
});
