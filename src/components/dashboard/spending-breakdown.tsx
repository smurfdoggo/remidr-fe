import { View, useWindowDimensions } from 'react-native';
import { Card } from '@/components/ui/card';
import { AppText } from '@/components/app-text';
import { PieChart } from '@/components/pie-chart';
import { useTheme } from '@/hooks/use-theme';
import { money } from '@/lib/money';
export function SpendingBreakdown({ categories }: { categories: { name: string; amount: number; share: number }[] }) {
  const theme = useTheme();
  const { width, fontScale } = useWindowDimensions();
  const horizontal = width >= 600 && fontScale <= 1.2;
  const colors = [theme.expense, theme.chart1, theme.chart4, theme.chart5, theme.chart2];
  return <Card className="gap-4 rounded-3xl border-0 p-5 shadow-none">
    <AppText variant="h4" weight="bold">Spending breakdown</AppText>
    {!categories.length ? <AppText className="text-muted-foreground">No expenses recorded this month.</AppText> : <View className={horizontal ? 'flex-row items-center gap-6' : 'items-center gap-5'}>
      <PieChart slices={categories.map((c, index) => ({ label: c.name, value: c.amount, color: colors[index % colors.length] }))} />
      <View className="w-full gap-4" style={horizontal ? { flex: 1 } : undefined}>
        {categories.map((category, index) => <View key={category.name} className="flex-row items-start gap-3">
          <View className="mt-1 h-4 w-4 rounded-full" style={{ backgroundColor: colors[index % colors.length] }} />
          <AppText className="flex-1" weight="semibold">{category.name}</AppText>
          <AppText weight="bold">{money(category.amount)}</AppText>
        </View>)}
      </View>
    </View>}
  </Card>;
}
