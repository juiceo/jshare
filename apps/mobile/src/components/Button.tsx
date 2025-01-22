import { ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import {
    getContrastTextColor,
    getSxStyles,
    useTheme,
    type SxMarginProps,
    type Theme,
} from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type ButtonProps = {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: 'sm' | 'md';
    disabled?: boolean;
    loading?: boolean;
    children: string;
    onPress?: () => void;
} & SxMarginProps;

type ButtonColor = 'primary' | 'secondary' | 'error';
type ButtonVariant = 'contained' | 'outlined' | 'ghost';

export const Button = (props: ButtonProps) => {
    const { theme } = useTheme();
    const {
        variant = 'contained',
        color = 'primary',
        size = 'md',
        disabled = false,
        loading = false,
        onPress,
    } = props;

    const primaryColor = getPrimaryColor({ variant, color }, theme);
    const contrastColor = getContrastTextColor(primaryColor);
    const textColor = variant === 'contained' ? contrastColor : primaryColor;

    const sizeValue = size === 'sm' ? 32 : 52;

    return (
        <RectButton
            style={[
                {
                    opacity: props.disabled || props.loading ? 0.5 : 1,
                    maxHeight: sizeValue,
                    minHeight: sizeValue,
                    paddingHorizontal: size === 'sm' ? theme.spacing.lg : theme.spacing.xl,
                    backgroundColor: variant === 'contained' ? primaryColor : undefined,
                    borderWidth: variant === 'outlined' ? 2 : 0,
                    borderColor: primaryColor,
                    borderStyle: 'solid',
                    borderRadius: sizeValue / 2,
                },
                getSxStyles(props, theme),
            ]}
            activeOpacity={0.1}
            underlayColor={variant === 'contained' ? 'black' : primaryColor}
            enabled={!disabled && !loading}
            onPress={onPress}
        >
            <Stack row center flex={1} spacing="md">
                {loading && <ActivityIndicator color={textColor} size="small" />}
                <Typography
                    variant={size === 'sm' ? 'buttonSmall' : 'button'}
                    style={{ color: textColor }}
                    align="center"
                >
                    {props.children}
                </Typography>
            </Stack>
        </RectButton>
    );
};

const getPrimaryColor = (
    args: {
        color: ButtonColor;
        variant: ButtonVariant;
    },
    theme: Theme
): string => {
    switch (args.color) {
        case 'primary':
            return args.variant === 'contained'
                ? theme.palette.primary.main
                : theme.palette.primary.light;
        case 'secondary':
            return args.variant === 'contained'
                ? theme.palette.background.elevation2
                : theme.palette.text.hint;

        case 'error':
            return args.variant === 'contained'
                ? theme.palette.error.main
                : theme.palette.error.light;
    }
};
