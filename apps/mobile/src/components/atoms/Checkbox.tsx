import { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';

export type CheckboxProps = {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    variant?: 'rounded' | 'square';
};

export const Checkbox = (props: CheckboxProps) => {
    const { theme } = useTheme();
    const { variant = 'rounded' } = props;
    const checkedSv = useSharedValue(props.checked ? 1 : 0);

    useEffect(() => {
        const toValue = props.checked ? 1 : 0;
        checkedSv.value = withTiming(toValue, { duration: 200 });
    });

    const animatedViewStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                checkedSv.value,
                [0, 1],
                ['transparent', theme.palette.brand.primary]
            ),
        };
    });

    const animatedIconStyle = useAnimatedStyle(() => {
        return {
            opacity: checkedSv.value,
            transform: [
                {
                    scale: interpolate(checkedSv.value, [0, 1], [0.5, 1]),
                },
            ],
        };
    });
    return (
        <Pressable onPress={() => props.onChange?.(!props.checked)}>
            <Animated.View
                style={[
                    {
                        width: 32,
                        height: 32,
                        borderRadius: variant === 'rounded' ? 16 : 8,
                        borderColor: theme.palette.brand.primary,
                        borderWidth: 2,
                    },
                    animatedViewStyle,
                ]}
            >
                <Stack center w="100%" h="100%">
                    <Animated.View style={animatedIconStyle}>
                        <Icon name="Check" size={20} />
                    </Animated.View>
                </Stack>
            </Animated.View>
        </Pressable>
    );
};
