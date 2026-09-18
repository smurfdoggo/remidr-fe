import { Tabs, TabList, TabTrigger, TabSlot, type TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { DASHBOARD_HREF } from '@/lib/routes';

export default function AppTabs() {
  return <Tabs style={{ flex: 1 }}>
    <TabSlot style={{ flex: 1 }} />
    <TabList asChild>
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-center gap-3 border-t border-border bg-card px-4 py-3">
          <Text className="text-lg font-bold text-primary">Remidr</Text>
            <TabTrigger name="dashboard" href={DASHBOARD_HREF} asChild><TabButton>Dashboard</TabButton></TabTrigger>
            <TabTrigger name="explore" href="/explore" asChild><TabButton>Explore</TabButton></TabTrigger>
      </View>
    </TabList>
  </Tabs>;
}
function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return <Pressable {...props} accessibilityRole="tab" accessibilityState={{ selected: isFocused }} className={`min-h-12 items-center justify-center rounded-2xl px-4 outline-none focus-visible:ring-2 focus-visible:ring-ring ${isFocused ? 'bg-accent' : 'bg-card'}`}>
    <Text className={isFocused ? 'font-semibold text-primary' : 'text-muted-foreground'}>{children}</Text>
  </Pressable>;
}
