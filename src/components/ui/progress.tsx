import { cn } from '@/lib/utils';
import * as ProgressPrimitive from '@rn-primitives/progress';
import { Platform, View } from 'react-native';
import Animated, {
  Extrapolation,
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useReducedMotion,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

function Progress({
  className,
  value,
  indicatorClassName,
  motion = 'spring',
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  indicatorClassName?: string;
  motion?: 'spring' | 'runway';
}) {
  return (
    <ProgressPrimitive.Root
      value={value}
      className={cn('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className)}
      {...props}>
      <Indicator value={value} className={indicatorClassName} motion={motion} />
    </ProgressPrimitive.Root>
  );
}

export { Progress };

const Indicator = Platform.select({
  web: WebIndicator,
  native: NativeIndicator,
  default: NullIndicator,
});

type IndicatorProps = {
  value: number | undefined | null;
  className?: string;
  motion: 'spring' | 'runway';
};

function WebIndicator({ value, className, motion }: IndicatorProps) {
  if (Platform.OS !== 'web') {
    return null;
  }

  return (
    <View
      className={cn('bg-primary h-full w-full flex-1 transition-all', motion === 'runway' && 'duration-500 motion-reduce:transition-none', className)}
      style={{ transform: `translateX(-${100 - (value ?? 0)}%)`, ...(motion === 'runway' ? { transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' } : {}) }}>
      <ProgressPrimitive.Indicator className={cn('h-full w-full', className)} />
    </View>
  );
}

function NativeIndicator({ value, className, motion }: IndicatorProps) {
  const progress = useDerivedValue(() => value ?? 0);
  const reduceMotion = useReducedMotion();

  const indicator = useAnimatedStyle(() => {
    return {
      width: motion === 'runway'
        ? reduceMotion
          ? `${interpolate(progress.value, [0, 100], [1, 100], Extrapolation.CLAMP)}%`
          : withTiming(
              `${interpolate(progress.value, [0, 100], [1, 100], Extrapolation.CLAMP)}%`,
              { duration: 500, easing: Easing.out(Easing.exp) }
            )
        : withSpring(
            `${interpolate(progress.value, [0, 100], [1, 100], Extrapolation.CLAMP)}%`,
            { overshootClamping: true }
          ),
    };
  }, [value, reduceMotion, motion]);

  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <ProgressPrimitive.Indicator asChild>
      <Animated.View style={indicator} className={cn('bg-foreground h-full', className)} />
    </ProgressPrimitive.Indicator>
  );
}

function NullIndicator(_props: IndicatorProps) {
  return null;
}
