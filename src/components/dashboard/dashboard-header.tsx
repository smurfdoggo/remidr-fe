import { View, type TextStyle } from 'react-native';
import { AppText } from '@/components/app-text';
import { MonthPicker, shiftMonth, type SelectedMonth } from '@/components/month-picker';
import { Button } from '@/components/ui/button';
import { money } from '@/lib/money';
import { useTheme } from '@/hooks/use-theme';
import { Chevron } from '@/components/chevron';
import { Progress } from '@/components/ui/progress';

type DashboardHeaderProps = {
  month: SelectedMonth;
  onMonthChange: (month: SelectedMonth) => void;
  budget: number | null;
  remaining: number | null;
  used: number;
  income: number;
  expense: number;
  commitments: number;
};

export function DashboardHeader({ month, onMonthChange, budget, remaining, used, income, expense, commitments }: DashboardHeaderProps) {
  const theme = useTheme();
  const percentUsed = Math.min(100, Math.max(0, Number.isFinite(used) ? used * 100 : 0));
  const percentLeft = budget && remaining !== null ? Math.max(0, Math.round((remaining / budget) * 100)) : null;
  const monthEnd = new Date(month.year, month.month + 1, 0).getDate();

  const numberStyle: TextStyle = { color: theme.brandHeaderForeground, fontVariant: ['tabular-nums'] };

  return <View className="overflow-hidden rounded-2xl px-6 pb-6 pt-6" style={{ backgroundColor: theme.brandHeader }}>
    <View className="mb-5 flex-row items-center justify-between gap-3">
      <AppText variant="h1" weight="bold" className="text-left text-3xl" style={{ color: theme.brandHeaderForeground }}>Dashboard</AppText>
      <AppText weight="bold" className="rounded-full px-3 py-1" style={{ color: theme.brandHeaderForeground, backgroundColor: 'rgba(255,255,255,0.14)' }}>Sample data</AppText>
    </View>
    <View className="mb-7 flex-row items-center gap-2">
      <Button variant="secondary" className="min-h-12 min-w-12 rounded-full bg-white/15 active:bg-white/25" accessibilityLabel="Previous month" onPress={() => onMonthChange(shiftMonth(month, -1))}><Chevron direction="left" color={theme.brandHeaderForeground} /></Button>
      <MonthPicker value={month} onChange={onMonthChange} appearance="onBrand" />
      <Button variant="secondary" className="min-h-12 min-w-12 rounded-full bg-white/15 active:bg-white/25" accessibilityLabel="Next month" onPress={() => onMonthChange(shiftMonth(month, 1))}><Chevron direction="right" color={theme.brandHeaderForeground} /></Button>
    </View>
    <AppText weight="semibold" className="text-lg" style={{ color: theme.brandHeaderForeground }}>{remaining === null ? 'Set a monthly budget' : remaining < 0 ? 'Over budget this month' : 'Your budget remaining'}</AppText>
    <AppText weight="bold" className="my-1 text-6xl" numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.68} style={numberStyle}>{remaining === null ? 'No budget yet' : money(Math.abs(remaining))}</AppText>
    <AppText className="text-base" style={{ color: theme.brandHeaderForeground }}>{budget === null ? 'Add a plan to see what is safe to spend.' : `From ${money(budget)} through ${new Date(month.year, month.month, monthEnd).toLocaleDateString('en', { month: 'short', day: 'numeric' })}`}</AppText>

    {budget !== null && <View className="mt-6 gap-2">
      <View className="flex-row justify-between gap-3">
        <AppText weight="semibold" style={numberStyle}>{money(expense)} spent</AppText>
        <AppText weight="semibold" style={numberStyle}>{money(budget)} limit</AppText>
      </View>
      <Progress value={percentUsed} max={100} motion="runway" accessibilityLabel="Monthly budget used" className="h-2 bg-white/20" indicatorClassName="rounded-full bg-white" />
      <View className="flex-row justify-between gap-3">
        <AppText className="text-sm" style={numberStyle}>{Math.round(used * 100)}% used</AppText>
        <AppText className="text-sm" style={numberStyle}>{percentLeft}% safe to spend</AppText>
      </View>
    </View>}

    <View className="mt-6 flex-row border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.28)' }}>
      <View className="flex-1 gap-1 pr-4">
        <AppText style={{ color: theme.brandHeaderForeground }}>Income</AppText>
        <AppText weight="bold" className="text-2xl" style={numberStyle}>{money(income)}</AppText>
      </View>
      <View className="w-px" style={{ backgroundColor: 'rgba(255,255,255,0.28)' }} />
      <View className="flex-1 gap-1 pl-4">
        <AppText style={{ color: theme.brandHeaderForeground }}>Spent</AppText>
        <AppText weight="bold" className="text-2xl" style={numberStyle}>{money(expense)}</AppText>
      </View>
    </View>
    {commitments > 0 && <AppText className="mt-3 text-sm" style={{ color: theme.brandHeaderForeground }}>{money(commitments)} in unpaid bills is kept separate.</AppText>}
  </View>;
}
