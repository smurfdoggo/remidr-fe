import { View } from 'react-native';
import { Card } from '@/components/ui/card';
import { AppText } from '@/components/app-text';
import { money } from '@/lib/money';
export function FinancialSummary({ income, expense }: { income: number; expense: number }) {
  return <View className="-mt-10 flex-row flex-wrap gap-3 px-3">
    {[{ label: 'Income', amount: income, color: 'text-income' }, { label: 'Spent', amount: expense, color: 'text-expense' }].map(item => <Card key={item.label} className="flex-1 gap-2 rounded-3xl border-0 px-4 py-5" style={{ minWidth: 130 }}>
      <AppText weight="semibold">{item.label}</AppText>
      <AppText weight="bold" className={`text-2xl ${item.color}`}>{money(item.amount)}</AppText>
    </Card>)}
  </View>;
}
