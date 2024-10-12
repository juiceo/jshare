import { BaseButton } from 'react-native-gesture-handler';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { alpha, darken, getContrastTextColor, useTheme, type Theme } from '@jshare/theme';

import { Typography } from './Typography';

export type ButtonProps = {
    variant: 'contained' | 'text';
    color: 'primary' | 'secondary' | 'error';
    children: string;
};

export const Button = (props: ButtonProps) => {
    const { theme } = useTheme();
    const active = useSharedValue<number>(0);

    const colors = getButtonColors(props, theme);

    const animatedButtonStyles = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                active.value,
                [0, 1],
                [colors.defaultBackground, colors.activeBackground]
            ),
        };
    });

    return (
        <BaseButton
            onActiveStateChange={(value) => {
                active.value = withTiming(value ? 1 : 0, { duration: 200 });
            }}
        >
            <Animated.View
                style={[
                    {
                        paddingVertical: theme.spacing.lg,
                        paddingHorizontal: theme.spacing.xl,
                        borderRadius: theme.borderRadius['3xl'],
                    },
                    animatedButtonStyles,
                ]}
            >
                <Typography
                    variant="button"
                    style={{
                        color: colors.text,
                    }}
                    align="center"
                >
                    {props.children}
                </Typography>
            </Animated.View>
        </BaseButton>
    );
};

const getButtonColors = (props: ButtonProps, theme: Theme) => {
    switch (props.variant) {
        case 'contained': {
            const primaryColor = getPrimaryColor(props.color, theme);
            return {
                defaultBackground: primaryColor,
                activeBackground: darken(primaryColor, 1),
                text: getContrastTextColor(primaryColor),
            };
        }
        case 'text': {
            const primaryColor = getPrimaryColor(props.color, theme);
            return {
                defaultBackground: 'transparent',
                activeBackground: alpha(primaryColor, 0.1),
                text: primaryColor,
            };
        }
    }
};

const getPrimaryColor = (color: ButtonProps['color'], theme: Theme) => {
    switch (color) {
        case 'primary':
            return theme.palette.accent.main;
        case 'secondary':
            return theme.palette.text.secondary;
        case 'error':
            return theme.palette.error.main;
    }
};
