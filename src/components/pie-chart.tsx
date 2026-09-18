import Svg, { Circle, Path } from 'react-native-svg';
import { View } from 'react-native';
export type PieSlice = { label: string; value: number; color: string };
export function PieChart({ slices, size = 156 }: { slices: PieSlice[]; size?: number }) {
  const valid = slices.filter(s => Number.isFinite(s.value) && s.value > 0);
  const total = valid.reduce((sum, s) => sum + s.value, 0);
  let angle = -Math.PI / 2;
  return <View accessible accessibilityRole="image" accessibilityLabel={valid.map(s => `${s.label}: ${(s.value / total * 100).toFixed(1)} percent`).join(', ')}>
    <Svg width={size} height={size} viewBox="0 0 100 100">
      {valid.map((s, index) => {
        const start = angle;
        angle += s.value / total * Math.PI * 2;
        if (valid.length === 1) return <Circle key={index} cx={50} cy={50} r={49} fill={s.color} />;
        const path = `M 50 50 L ${50 + 49 * Math.cos(start)} ${50 + 49 * Math.sin(start)} A 49 49 0 ${angle - start > Math.PI ? 1 : 0} 1 ${50 + 49 * Math.cos(angle)} ${50 + 49 * Math.sin(angle)} Z`;
        return <Path key={index} d={path} fill={s.color} stroke="white" strokeWidth={0.7} />;
      })}
    </Svg>
  </View>;
}
