import { useEffect, useRef, useState, type PropsWithChildren } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import Animated, {
    Extrapolation,
    interpolate,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Toast, TOAST_HEIGHT } from '~/components/Toast/Toast';
import { toast, useToasts, useToastsDismissAt } from '~/state/toast';

export type ToastManagerProps = {
    position?: 'top' | 'bottom';
};

export const ToastManager = () => {
    const { theme } = useTheme();
    const [key, setKey] = useState<number>(0);
    const toasts = useToasts();
    const dismissAt = useToastsDismissAt();

    const visibleItems = toasts.slice(-5);

    useEffect(() => {
        const timeout = dismissAt
            ? setTimeout(() => {
                  toast.dismissAll();
              }, dismissAt - Date.now())
            : null;

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [dismissAt]);

    return (
        <KeyboardStickyView
            style={styles.wrapper}
            key={key}
            pointerEvents={toasts.length ? 'auto' : 'none'}
        >
            <SwipeDownToDismiss
                height={(() => {
                    const itemsHeight = visibleItems.length * TOAST_HEIGHT;
                    const spacing = visibleItems.length * theme.spacing.md;
                    const padding = theme.spacing.xl + theme.spacing['2xl'];
                    return itemsHeight + spacing + padding;
                })()}
                onDismiss={() => {
                    toast.dismissAll();
                    setKey((prev) => prev + 1);
                }}
                onTouchStart={() => toast.clearTimer()}
                onTouchEnd={() => toast.startTimer()}
            >
                <Stack column spacing="md" p="xl" pb="2xl">
                    {visibleItems.map((item) => {
                        return (
                            <Toast
                                key={item.key}
                                variant={item.variant}
                                title={item.title}
                                onDismiss={() => toast.dismiss(item.key)}
                            />
                        );
                    })}
                </Stack>
            </SwipeDownToDismiss>
        </KeyboardStickyView>
    );
};

const SwipeDownToDismiss = (
    props: PropsWithChildren<{
        height: number;
        onDismiss: () => void;
        onTouchStart: () => void;
        onTouchEnd: () => void;
    }>
) => {
    const { height, onDismiss, onTouchStart, onTouchEnd } = props;
    const translationY = useSharedValue<number>(0);
    const viewRef = useRef<View>(null);

    const pan = Gesture.Pan()
        .onStart(() => {
            runOnJS(onTouchStart)();
        })
        .onUpdate((e) => {
            translationY.value = Math.max(0, e.translationY);
        })
        .onEnd((e) => {
            runOnJS(onTouchEnd)();
            const threshold = height / 3;
            const distance = height * 2;
            const duration = Math.min((distance * 1000) / Math.abs(e.velocityY), 500);

            const shouldDismiss = e.translationY > threshold || e.velocityY > 1000;

            if (shouldDismiss) {
                translationY.value = withTiming(height * 2, { duration }, () => {
                    runOnJS(onDismiss)();
                });
            } else {
                translationY.value = withTiming(0, { duration: 200 });
            }
        });

    const animatedStyles = useAnimatedStyle(() => {
        const progress = translationY.value / height;
        return {
            transform: [{ translateY: translationY.value }],
            opacity: interpolate(progress, [0.2, 0.5], [1, 0.6], Extrapolation.CLAMP),
        };
    });

    return (
        <Pressable onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <GestureDetector gesture={pan}>
                <Animated.View style={animatedStyles} ref={viewRef}>
                    {props.children}
                </Animated.View>
            </GestureDetector>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
});
