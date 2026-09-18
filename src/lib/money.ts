export function money(amount: number) {
  return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: Number.isInteger(amount) ? 0 : 2 }).format(amount);
}
