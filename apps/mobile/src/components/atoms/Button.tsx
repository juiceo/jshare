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
import { Typography } from '~/components/atoms/Typography';

export type ButtonProps = {
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary' | 'error' | 'paper';
    size?: 'sm' | 'md';
    disabled?: boolean;
    loading?: boolean;
    children: string;
    fill?: boolean;
    onPress?: () => void;
} & SxMarginProps;

export const Button = (props: ButtonProps) => {
    const { theme } = useTheme();
    const {
        variant = 'contained',
        color = 'primary',
        size = 'md',
        disabled = false,
        loading = false,
        fill = false,
        onPress,
    } = props;
    const styles = getStyles(theme, {
        color,
        fill,
        variant,
        size,
        disabled,
        loading,
    });

    return (
        <RectButton
            style={[styles.button, getSxStyles(props, theme)]}
            underlayColor={styles.buttonUnderlay.backgroundColor}
            enabled={!disabled && !loading}
            onPress={onPress}
        >
            <Stack row center flex={1} spacing="md">
                {loading && <ActivityIndicator color={styles.text.color} />}
                <Typography variant="button" style={styles.text} align="center">
                    {props.children}
                </Typography>
            </Stack>
        </RectButton>
    );
};

const getStyles = (
    theme: Theme,
    props: Required<
        Pick<ButtonProps, 'color' | 'fill' | 'disabled' | 'variant' | 'loading' | 'size'>
    >
) => {
    const primaryColor = (() => {
        switch (props.color) {
            case 'primary':
                return theme.palette.primary.main;
            case 'secondary':
                return theme.palette.text.secondary;
            case 'error':
                return theme.palette.error.main;
            case 'paper': {
                return theme.palette.background.elevation2;
            }
        }
    })();
    return StyleSheet.create({
        button: (() => {
            const baseStyles = {
                borderRadius: theme.borderRadius.lg,
                flex: props.fill ? 1 : undefined,
                opacity: props.disabled || props.loading ? 0.5 : 1,
            };

            const sizeStyles = (() => {
                switch (props.size) {
                    case 'sm': {
                        return {
                            maxHeight: 32,
                            minHeight: 32,
                            paddingHorizontal: theme.spacing.lg,
                        };
                    }
                    case 'md': {
                        return {
                            maxHeight: 52,
                            minHeight: 52,
                            paddingHorizontal: theme.spacing.xl,
                        };
                    }
                }
            })();

            switch (props.variant) {
                case 'contained': {
                    return {
                        ...baseStyles,
                        ...sizeStyles,
                        backgroundColor: primaryColor,
                    };
                }
                case 'outlined': {
                    return {
                        ...baseStyles,
                        ...sizeStyles,
                        borderColor: primaryColor,
                        borderWidth: 2,
                        borderStyle: 'solid',
                    };
                }
                case 'text': {
                    return {
                        ...baseStyles,
                        ...sizeStyles,
                    };
                }
            }
        })(),
        buttonUnderlay: (() => {
            switch (props.variant) {
                case 'contained': {
                    return {};
                }
                case 'outlined':
                case 'text': {
                    return {
                        backgroundColor: primaryColor,
                    };
                }
            }
        })(),
        text: (() => {
            const sizeStyles = (() => {
                switch (props.size) {
                    case 'sm': {
                        return {
                            fontSize: 12,
                        };
                    }
                    case 'md': {
                        return {};
                    }
                }
            })();

            switch (props.variant) {
                case 'contained': {
                    return {
                        ...sizeStyles,
                        color: getContrastTextColor(primaryColor),
                    };
                }
                case 'outlined':
                case 'text': {
                    return {
                        ...sizeStyles,
                        color: primaryColor,
                    };
                }
            }
        })(),
    });
};
