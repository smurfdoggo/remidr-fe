import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts, Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { DashboardFontContext } from '@/hooks/use-dashboard-font';
import { useTheme } from '@/hooks/use-theme';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { FinancialSummary } from '@/components/dashboard/financial-summary';
import { BudgetOverview } from '@/components/dashboard/budget-overview';
import { SpendingBreakdown } from '@/components/dashboard/spending-breakdown';
import { UnpaidBillsSummary } from '@/components/dashboard/unpaid-bills-summary';
import { sampleTransactions, sampleBills, sampleBudgets } from '@/data/dashboard-samples';
import { monthlyAnalytics } from '@/lib/analytics';

export default function DashboardScreen() {
  const [month, setMonth] = useState(() => { const now = new Date(); return { year: now.getFullYear(), month: now.getMonth() }; });
  const [fontsReady] = useFonts({ NunitoRegular: Nunito_400Regular, NunitoSemibold: Nunito_600SemiBold, NunitoBold: Nunito_700Bold });
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const analytics = useMemo(() => monthlyAnalytics(sampleTransactions, sampleBills, month.year, month.month, sampleBudgets), [month]);
  return <DashboardFontContext.Provider value={fontsReady}>
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }} contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 110, paddingHorizontal: 16, alignItems: 'center' }}>
      <View className="w-full max-w-3xl gap-5">
        <View>
          <DashboardHeader month={month} onMonthChange={setMonth} budget={analytics.budgetAmount} remaining={analytics.remainingBudget} />
          <FinancialSummary income={analytics.income} expense={analytics.expense} />
        </View>
        <BudgetOverview budget={analytics.budgetAmount} expense={analytics.expense} remaining={analytics.remainingBudget} used={analytics.budgetUsed} />
        <SpendingBreakdown categories={analytics.categories} />
        <UnpaidBillsSummary bills={analytics.unpaidBills} amount={analytics.commitments} />
      </View>
    </ScrollView>
  </DashboardFontContext.Provider>;
}