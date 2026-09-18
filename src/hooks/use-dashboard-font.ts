import { createContext, useContext } from 'react';
export const DashboardFontContext = createContext(false);
export function useDashboardFont(weight: 'regular' | 'semibold' | 'bold' = 'regular') {
  const ready = useContext(DashboardFontContext);
  return ready ? { regular: 'NunitoRegular', semibold: 'NunitoSemibold', bold: 'NunitoBold' }[weight] : undefined;
}
