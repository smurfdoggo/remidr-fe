export type SelectedMonth = { year: number; month: number };
export function shiftMonth(value: SelectedMonth, offset: number): SelectedMonth {
  const date = new Date(value.year, value.month + offset, 1);
  return { year: date.getFullYear(), month: date.getMonth() };
}
