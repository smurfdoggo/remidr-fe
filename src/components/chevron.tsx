import Svg, { Path } from 'react-native-svg';
export function Chevron({ direction, color }: { direction: 'left' | 'right'; color: string }) {
  return <Svg width={20} height={20} viewBox="0 0 24 24"><Path d={direction === 'left' ? 'M15 5L8 12L15 19' : 'M9 5L16 12L9 19'} stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" fill="none" /></Svg>;
}
export function StepIcon({ increase, color }: { increase?: boolean; color: string }) {
  return <Svg width={20} height={20} viewBox="0 0 24 24"><Path d={increase ? 'M5 12H19M12 5V19' : 'M5 12H19'} stroke={color} strokeWidth={2.5} strokeLinecap="round" fill="none" /></Svg>;
}
