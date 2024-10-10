import { Pressable, type TextStyle, type ViewStyle } from 'react-native';

import {
    alpha,
    getBorderRadius,
    getColorVariant,
    getContrastTextColor,
    isAcceptableContrast,
    useTheme,
    type BackgroundColorKey,
    type Theme,
} from '@jshare/theme';

import { Stack } from './Stack';
import { Typography } from './Typography';

export type ButtonProps = {
    variant?: 'contained' | 'outlined' | 'text';
    shape?: 'rounded' | 'rect';
    color?: BackgroundColorKey;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    text: string;
};

export const Button = (props: ButtonProps) => {
    const propsWithDefaults: Required<ButtonProps> = {
        variant: 'contained',
        shape: 'rounded',
        color: 'background',
        size: 'md',
        fullWidth: false,
        ...props,
    };
    const { theme } = useTheme();
    const pressedStyles = getStyles(propsWithDefaults, true, theme);
    const defaultStyles = getStyles(propsWithDefaults, false, theme);
    return (
        <Pressable
            style={({ pressed }) => ({
                ...(pressed ? pressedStyles.view : defaultStyles.view),
                width: propsWithDefaults.fullWidth ? '100%' : undefined,
                alignSelf: 'baseline',
                borderRadius: propsWithDefaults.shape === 'rounded' ? getBorderRadius('3xl') : 0,
            })}
        >
            <Stack row center>
                <Typography variant="button" align="center" style={{ ...defaultStyles.text }}>
                    {propsWithDefaults.text}
                </Typography>
            </Stack>
        </Pressable>
    );
};

const getStyles = (
    props: Required<ButtonProps>,
    pressed: boolean,
    theme: Theme
): {
    view: ViewStyle;
    text: TextStyle;
} => {
    switch (props.variant) {
        case 'contained': {
            return {
                view: {
                    backgroundColor: getColorVariant(props.color, pressed ? 'dark' : 'main', theme),
                    ...getPaddings(props.size, 0, theme),
                },
                text: {
                    color: getContrastTextColor(getColorVariant(props.color, 'main', theme)),
                },
            };
        }
        case 'outlined': {
            return {
                view: {
                    backgroundColor: pressed
                        ? alpha(getColorVariant(props.color, 'main', theme), 0.1)
                        : 'transparent',
                    borderWidth: 2,
                    borderColor: getColorVariant(props.color, 'main', theme),
                    borderStyle: 'solid',
                    ...getPaddings(props.size, 2, theme),
                },
                text: {
                    color: getColorVariant(props.color, 'main', theme),
                },
            };
        }
        case 'text': {
            const textColor = getColorVariant(props.color, 'main', theme);
            const backgroundColor = theme.palette.background.main;
            return {
                view: {
                    backgroundColor: pressed
                        ? alpha(getColorVariant(props.color, 'main', theme), 0.1)
                        : 'transparent',
                    ...getPaddings(props.size, 0, theme),
                },
                text: {
                    color: isAcceptableContrast(backgroundColor, textColor)
                        ? textColor
                        : theme.palette.text.primary,
                },
            };
        }
    }
};

const getPaddings = (
    size: Required<ButtonProps['size']>,
    borderWidth: number,
    theme: Theme
): ViewStyle => {
    switch (size) {
        case 'sm': {
            return {
                paddingHorizontal: theme.spacing.md - borderWidth,
                paddingVertical: theme.spacing.sm - borderWidth,
            };
        }
        case 'md': {
            return {
                paddingHorizontal: theme.spacing.lg - borderWidth,
                paddingVertical: theme.spacing.md - borderWidth,
            };
        }
        case 'lg': {
            return {
                paddingHorizontal: theme.spacing.xl - borderWidth,
                paddingVertical: theme.spacing.lg - borderWidth,
            };
        }
        default: {
            return {};
        }
    }
};
