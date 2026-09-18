import { View } from 'react-native';
import { Card } from '@/components/ui/card';
import { AppText } from '@/components/app-text';
import { money } from '@/lib/money';
import type { Bill } from '@/lib/analytics';
export function UnpaidBillsSummary({ bills, amount }: { bills: Bill[]; amount: number }) {
  const next = bills[0];
  const due = next ? new Date(`${next.dueDate}T12:00:00`).toLocaleDateString('en', { month: 'short', day: 'numeric' }) : null;
  return <Card className="gap-2 rounded-3xl border-0 p-5 shadow-none">
    <View className="flex-row flex-wrap items-center justify-between gap-2"><AppText variant="h4" weight="bold">Unpaid bills</AppText><AppText weight="bold" className="text-xl text-due-soon">{money(amount)}</AppText></View>
    <AppText className="text-muted-foreground">{next ? `Earliest unpaid: ${next.description} · ${due}` : 'No unpaid bills this month.'}</AppText>
    <AppText className="text-muted-foreground">Separate from recorded spending.</AppText>
  </Card>;
}
