import { Pressable, type TextStyle, type ViewStyle } from 'react-native';

import { alpha, darken, getContrastTextColor, useTheme, type Theme } from '@jshare/theme';

import { Typography } from './Typography';

export type ButtonProps = {
    variant: 'contained' | 'text';
    color: 'primary' | 'secondary' | 'error';
    children: string;
};

export const Button = (props: ButtonProps) => {
    const { theme } = useTheme();

    return (
        <Pressable
            style={({ pressed }) => [
                {
                    paddingVertical: theme.spacing.lg,
                    paddingHorizontal: theme.spacing.xl,
                    borderRadius: theme.borderRadius['3xl'],
                },
                getButtonStyles(props, pressed, theme),
            ]}
        >
            <Typography variant="button" style={getTextStyles(props, theme)} align="center">
                {props.children}
            </Typography>
        </Pressable>
    );
};

const getButtonStyles = (props: ButtonProps, pressed: boolean, theme: Theme): ViewStyle => {
    const primaryColor = getPrimaryColor(props.color, theme);

    switch (props.variant) {
        case 'contained': {
            return {
                backgroundColor: pressed ? darken(primaryColor, 1) : primaryColor,
            };
        }
        case 'text': {
            return {
                backgroundColor: pressed ? alpha(primaryColor, 0.1) : 'transparent',
            };
        }
    }
};

const getTextStyles = (props: ButtonProps, theme: Theme): TextStyle => {
    const primaryColor = getPrimaryColor(props.color, theme);
    switch (props.variant) {
        case 'contained': {
            return {
                color: getContrastTextColor(primaryColor),
            };
        }
        case 'text': {
            return {
                color: primaryColor,
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
