import { ActivityIndicator, StyleSheet } from 'react-native';
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

    const styles = getStyles(theme);
    const primaryColor = getPrimaryColor({ variant, color }, theme);
    const contrastColor =
        color === 'primary' ? theme.palette.text.primary : getContrastTextColor(primaryColor);
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
                    borderWidth: variant === 'outlined' ? 3 : 0,
                    borderColor: primaryColor,
                    borderStyle: 'solid',
                    borderRadius: sizeValue / 2,
                },
                props.disabled && variant === 'contained' && styles.disabledContained,
                props.disabled && variant === 'outlined' && styles.disabledOutlined,
                props.disabled && variant === 'ghost' && styles.disabledGhost,
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
                    style={[
                        { color: textColor },
                        props.disabled && variant === 'contained' && styles.disabledContainedText,
                        props.disabled && variant === 'outlined' && styles.disabledOutlinedText,
                        props.disabled && variant === 'ghost' && styles.disabledGhostText,
                    ]}
                    align="center"
                >
                    {props.children}
                </Typography>
            </Stack>
        </RectButton>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        disabledContained: {
            backgroundColor: theme.palette.background.tertiary,
        },
        disabledContainedText: {
            color: theme.palette.text.disabled,
        },
        disabledOutlined: {
            borderColor: theme.palette.background.quaternary,
        },
        disabledOutlinedText: {
            color: theme.palette.text.disabled,
        },
        disabledGhost: {
            backgroundColor: theme.palette.background.secondary,
        },
        disabledGhostText: {
            color: theme.palette.text.disabled,
        },
    });
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
                ? theme.palette.brand.tertiary
                : theme.palette.brand.secondary;
        case 'secondary':
            return args.variant === 'contained'
                ? theme.palette.background.tertiary
                : theme.palette.text.tertiary;

        case 'error':
            return args.variant === 'contained'
                ? theme.palette.error.secondary
                : theme.palette.error.tertiary;
    }
};
