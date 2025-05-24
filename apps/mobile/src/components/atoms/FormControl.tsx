import { useMemo, type PropsWithChildren, type ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import {
    getColorFromPath,
    getSxStyles,
    useTheme,
    type BackgroundColorPath,
    type SxMarginProps,
    type Theme,
} from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type FormControlProps = {
    label?: string;
    error?: string | null;
    helperText?: string | null;
    onPress?: () => void;
    focused: boolean;
    endAdornment?: ReactNode;
    backgroundColor?: 'transparent' | BackgroundColorPath;
} & SxMarginProps;

export const FormControl = (props: PropsWithChildren<FormControlProps>) => {
    const { theme } = useTheme();
    const { label, error, onPress, focused, endAdornment, helperText } = props;

    const styles = getStyles(theme);

    const backgroundColor = useMemo(() => {
        switch (props.backgroundColor) {
            case 'transparent':
                return 'transparent';
            case undefined: {
                return theme.palette.background.secondary;
            }
            default:
                return getColorFromPath(props.backgroundColor, theme);
        }
    }, [props.backgroundColor, theme]);

    return (
        <Pressable
            style={[styles.wrapper, { backgroundColor }, getSxStyles(props, theme)]}
            onPress={onPress}
        >
            <Stack row spacing="md">
                <Stack column spacing="md" flex={1}>
                    {!!label && (
                        <Typography
                            variant="caption"
                            color={focused ? 'brand.secondary' : 'secondary'}
                        >
                            {label}
                        </Typography>
                    )}
                    {props.children}
                    {error && (
                        <Typography variant="caption" color="error">
                            {error}
                        </Typography>
                    )}
                    {helperText && (
                        <Typography variant="caption" color="tertiary">
                            {helperText}
                        </Typography>
                    )}
                </Stack>
                {endAdornment && (
                    <Stack row center>
                        {endAdornment}
                    </Stack>
                )}
            </Stack>
        </Pressable>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        wrapper: {
            borderRadius: theme.borderRadius.lg,
            width: '100%',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.secondary,
            fontSize: theme.typography.body1.fontSize,
            paddingHorizontal: theme.spacing.xl,
            paddingVertical: theme.spacing.lg,
        },
        input: {
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
            paddingHorizontal: theme.spacing.xl,
            paddingTop: theme.spacing['3xl'],
            paddingBottom: theme.spacing.lg,
            backgroundColor: 'red',
        },
    });
};
