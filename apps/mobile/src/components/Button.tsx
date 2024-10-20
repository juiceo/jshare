import { ActivityIndicator, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { getContrastTextColor, useTheme, type Theme } from '@jshare/theme';

import { Stack } from './Stack';
import { Typography } from './Typography';

export type ButtonProps = {
    variant: 'contained' | 'outlined' | 'text';
    color: 'primary' | 'secondary' | 'error';
    disabled?: boolean;
    loading?: boolean;
    children: string;
    fill?: boolean;
};

export const Button = (props: ButtonProps) => {
    const { theme } = useTheme();
    const { disabled, loading } = props;
    const styles = getStyles(theme, props);

    return (
        <RectButton
            style={styles.button}
            underlayColor={styles.buttonUnderlay.backgroundColor}
            enabled={!disabled && !loading}
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

const getStyles = (theme: Theme, props: ButtonProps) => {
    const primaryColor = (() => {
        switch (props.color) {
            case 'primary':
                return theme.palette.accent.main;
            case 'secondary':
                return theme.palette.text.secondary;
            case 'error':
                return theme.palette.error.main;
        }
    })();
    return StyleSheet.create({
        button: (() => {
            const baseStyles = {
                borderRadius: theme.borderRadius.lg,
                maxHeight: 52,
                minHeight: 52,
                paddingLeft: theme.spacing.xl,
                paddingRight: theme.spacing.xl,
                flex: props.fill ? 1 : undefined,
                opacity: props.disabled || props.loading ? 0.5 : 1,
            };

            switch (props.variant) {
                case 'contained': {
                    return {
                        ...baseStyles,
                        backgroundColor: primaryColor,
                    };
                }
                case 'outlined': {
                    return {
                        ...baseStyles,
                        borderColor: primaryColor,
                        borderWidth: 2,
                        borderStyle: 'solid',
                    };
                }
                case 'text': {
                    return {
                        ...baseStyles,
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
            switch (props.variant) {
                case 'contained': {
                    return {
                        color: getContrastTextColor(primaryColor),
                    };
                }
                case 'outlined':
                case 'text': {
                    return {
                        color: primaryColor,
                    };
                }
            }
        })(),
    });
};
