import { View } from 'react-native';
import { AppText } from '@/components/app-text';
import { MonthPicker, shiftMonth, type SelectedMonth } from '@/components/month-picker';
import { Button } from '@/components/ui/button';
import { money } from '@/lib/money';
import { useTheme } from '@/hooks/use-theme';
import { Chevron } from '@/components/chevron';
export function DashboardHeader({ month, onMonthChange, budget, remaining }: { month: SelectedMonth; onMonthChange: (month: SelectedMonth) => void; budget: number | null; remaining: number | null }) {
  const theme = useTheme();
  return <View className="overflow-hidden rounded-3xl px-6 pb-16 pt-6" style={{ backgroundColor: theme.brandHeader }}>
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants" style={{ pointerEvents: 'none', position: 'absolute', right: -65, bottom: 25, width: 150, height: 150, borderRadius: 65, backgroundColor: theme.brandDecoration, transform: [{ rotate: '25deg' }] }} />
    <View className="mb-4 flex-row items-center justify-between gap-3">
      <AppText variant="h1" weight="bold" className="text-left text-3xl" style={{ color: theme.brandHeaderForeground }}>Dashboard</AppText>
      <AppText weight="bold" style={{ color: theme.brandHeaderForeground }}>Remidr</AppText>
    </View>
    <View className="mb-5 flex-row items-center gap-2">
      <Button variant="secondary" className="min-h-12 min-w-12 rounded-full" accessibilityLabel="Previous month" onPress={() => onMonthChange(shiftMonth(month, -1))}><Chevron direction="left" color={theme.secondaryForeground} /></Button>
      <MonthPicker value={month} onChange={onMonthChange} />
      <Button variant="secondary" className="min-h-12 min-w-12 rounded-full" accessibilityLabel="Next month" onPress={() => onMonthChange(shiftMonth(month, 1))}><Chevron direction="right" color={theme.secondaryForeground} /></Button>
    </View>
    <AppText weight="semibold" className="text-lg" style={{ color: theme.brandHeaderForeground }}>{remaining === null ? 'Monthly budget' : remaining < 0 ? 'Over budget by' : 'Budget left this month'}</AppText>
    <AppText weight="bold" className="my-1 text-5xl" style={{ color: theme.brandHeaderForeground }}>{remaining === null ? 'No budget set' : money(Math.abs(remaining))}</AppText>
    {budget !== null && <AppText className="text-base" style={{ color: theme.brandHeaderForeground }}>of {money(budget)} monthly budget</AppText>}
    <AppText className="mt-4 self-start rounded-full px-3 py-1" style={{ color: theme.brandHeaderForeground, backgroundColor: theme.brandHeader }}>Sample data</AppText>
  </View>;
}
