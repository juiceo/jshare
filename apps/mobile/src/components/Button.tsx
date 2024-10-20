import { StyleSheet } from 'react-native';
import { BaseButton, RectButton } from 'react-native-gesture-handler';

import { getContrastTextColor, useTheme, type Theme } from '@jshare/theme';

import { Typography } from './Typography';

export type ButtonProps = {
    variant: 'contained' | 'text';
    color: 'primary' | 'secondary' | 'error';
    children: string;
};

export const Button = (props: ButtonProps) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    const colors = getButtonColors(props, theme);

    return (
        <RectButton style={[styles.button, { backgroundColor: colors.background }]}>
            <Typography
                variant="button"
                style={{
                    color: colors.text,
                }}
                align="center"
            >
                {props.children}
            </Typography>
        </RectButton>
    );
};

const getButtonColors = (props: ButtonProps, theme: Theme) => {
    switch (props.variant) {
        case 'contained': {
            const primaryColor = getPrimaryColor(props.color, theme);
            return {
                background: primaryColor,
                text: getContrastTextColor(primaryColor),
            };
        }
        case 'text': {
            const primaryColor = getPrimaryColor(props.color, theme);
            return {
                background: 'transparent',
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

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        button: {
            padding: theme.spacing.xl,
        },
    });
};
