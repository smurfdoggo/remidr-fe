import { useState } from 'react';
import { Modal, ScrollView, View } from 'react-native';
import { Button } from '@/components/ui/button';
import { AppText } from '@/components/app-text';
import { useTheme } from '@/hooks/use-theme';
import { StepIcon } from '@/components/chevron';
import type { SelectedMonth } from '@/lib/month';
export { shiftMonth, type SelectedMonth } from '@/lib/month';

export function MonthPicker({ value, onChange }: { value: SelectedMonth; onChange: (value: SelectedMonth) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(value);
  const theme = useTheme();
  const label = new Date(value.year, value.month, 1).toLocaleDateString('en', { month: 'short', year: 'numeric' });
  function close() { setOpen(false); }
  return <>
    <Button variant="secondary" className="min-h-12 rounded-full px-4" accessibilityLabel={`Choose month, ${label}`} onPress={() => { setDraft(value); setOpen(true); }}>
      <AppText weight="bold">{label}</AppText>
    </Button>
    <Modal transparent visible={open} animationType="fade" onRequestClose={close}>
      <View className="flex-1 items-center justify-center bg-black/40 p-5">
        <View accessibilityViewIsModal className="w-full max-w-md rounded-3xl bg-card p-5" style={{ backgroundColor: theme.card }}>
          <AppText variant="h3" weight="bold">Choose month</AppText>
          <View className="my-4 flex-row items-center justify-between">
            <Button variant="outline" className="min-h-12 min-w-12" accessibilityLabel="Previous year" onPress={() => setDraft({ ...draft, year: draft.year - 1 })}><StepIcon color={theme.foreground} /></Button>
            <AppText weight="bold">{draft.year}</AppText>
            <Button variant="outline" className="min-h-12 min-w-12" accessibilityLabel="Next year" onPress={() => setDraft({ ...draft, year: draft.year + 1 })}><StepIcon increase color={theme.foreground} /></Button>
          </View>
          <ScrollView style={{ maxHeight: 300 }}>
            <View className="flex-row flex-wrap gap-2">
              {Array.from({ length: 12 }, (_, month) => <Button key={month} variant={draft.month === month ? 'default' : 'outline'} className="min-h-12" style={{ width: '30%' }} accessibilityState={{ selected: draft.month === month }} onPress={() => setDraft({ ...draft, month })}>
                <AppText>{new Date(2026, month, 1).toLocaleDateString('en', { month: 'short' })}</AppText>
              </Button>)}
            </View>
          </ScrollView>
          <View className="mt-5 flex-row justify-end gap-3">
            <Button variant="outline" className="min-h-12" onPress={close}><AppText>Cancel</AppText></Button>
            <Button className="min-h-12" onPress={() => { onChange(draft); close(); }}><AppText>Apply</AppText></Button>
          </View>
        </View>
      </View>
    </Modal>
  </>;
}
