import { View } from 'react-native';
import { Card } from '@/components/ui/card';
import { AppText } from '@/components/app-text';
import { Progress } from '@/components/ui/progress';
import { money } from '@/lib/money';
export function BudgetOverview({ budget, expense, remaining, used }: { budget: number | null; expense: number; remaining: number | null; used: number }) {
  return <Card className="gap-4 rounded-3xl border-0 p-5 shadow-none">
    <AppText variant="h4" weight="bold">Monthly budget</AppText>
    {budget === null ? <AppText className="text-muted-foreground">No budget set for this month.</AppText> : <>
      <Progress
        value={Math.min(100, Math.max(0, Number.isFinite(used) ? used * 100 : 0))}
        max={100}
        accessibilityLabel="Monthly budget spent"
        className="h-3 bg-accent"
        indicatorClassName="rounded-full bg-primary"
      />
      <View className="flex-row flex-wrap justify-between gap-2"><AppText>{money(expense)} spent</AppText><AppText className="text-muted-foreground">{money(budget)} budget</AppText></View>
      <AppText className={remaining !== null && remaining < 0 ? 'text-overdue' : 'rounded-xl bg-accent p-3 text-accent-foreground'}>
        {remaining !== null && remaining < 0 ? `Over budget by ${money(-remaining)}` : budget > 0 ? `${Math.round((remaining ?? 0) / budget * 100)}% of your budget remains` : 'Your monthly budget is zero.'}
      </AppText>
    </>}
  </Card>;
}
