import { Text } from '@/components/ui/text';
import { useDashboardFont } from '@/hooks/use-dashboard-font';
import type { ComponentProps } from 'react';

export function AppText({ style, weight = 'regular', ...props }: ComponentProps<typeof Text> & { weight?: 'regular' | 'semibold' | 'bold' }) {
  const font = useDashboardFont(weight);
  return <Text {...props} style={[{ fontFamily: font }, style]} />;
}
