import { View, useWindowDimensions, type TextStyle } from 'react-native';
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
  const total = categories.reduce((sum, category) => sum + category.amount, 0);
  const topCategory = categories[0];
  const numberStyle: TextStyle = { fontVariant: ['tabular-nums'] };
  return <Card className="gap-5 rounded-2xl border-0 p-5 shadow-none">
    <View className="flex-row flex-wrap items-end justify-between gap-3">
      <View className="gap-1">
        <AppText variant="h3" weight="bold">Where your money went</AppText>
        <AppText className="text-muted-foreground">{topCategory ? `${topCategory.name} led spending at ${Math.round(topCategory.share * 100)}%.` : 'Your category story will appear here.'}</AppText>
      </View>
      {total > 0 && <AppText weight="bold" className="text-xl" style={numberStyle}>{money(total)}</AppText>}
    </View>
    {!categories.length ? <AppText className="text-muted-foreground">No expenses recorded this month.</AppText> : <View className={horizontal ? 'flex-row items-center gap-6' : 'items-center gap-5'}>
      <PieChart slices={categories.map((c, index) => ({ label: c.name, value: c.amount, color: colors[index % colors.length] }))} />
      <View className="w-full" style={horizontal ? { flex: 1 } : undefined}>
        {categories.map((category, index) => <View key={category.name} className={`flex-row items-center gap-3 py-3 ${index < categories.length - 1 ? 'border-b border-border' : ''}`}>
          <View className="h-3 w-3 rounded-full" style={{ backgroundColor: colors[index % colors.length] }} />
          <View className="flex-1">
            <AppText weight="semibold">{category.name}</AppText>
            <AppText className="text-sm text-muted-foreground">{Math.round(category.share * 100)}% of spending</AppText>
          </View>
          <AppText weight="bold" className="text-lg" style={numberStyle}>{money(category.amount)}</AppText>
        </View>)}
      </View>
    </View>}
  </Card>;
}
