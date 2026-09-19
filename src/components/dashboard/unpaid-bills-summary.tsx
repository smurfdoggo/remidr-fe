import { View } from 'react-native';
import { AppText } from '@/components/app-text';
import { money } from '@/lib/money';
import type { Bill } from '@/lib/analytics';
export function UnpaidBillsSummary({ bills, amount }: { bills: Bill[]; amount: number }) {
  const next = bills[0];
  const due = next ? new Date(`${next.dueDate}T12:00:00`).toLocaleDateString('en', { month: 'short', day: 'numeric' }) : null;
  return <View className="gap-2 rounded-2xl bg-accent p-5">
    <AppText weight="bold" className="text-2xl text-accent-foreground" style={{ fontVariant: ['tabular-nums'] }}>{amount > 0 ? `${money(amount)} still to pay` : 'No unpaid bills'}</AppText>
    <AppText className="text-accent-foreground">{next ? `${next.description} is due ${due}.` : 'You are clear for this month.'}</AppText>
    <AppText className="text-sm text-muted-foreground">Kept separate from recorded spending.</AppText>
  </View>;
}
