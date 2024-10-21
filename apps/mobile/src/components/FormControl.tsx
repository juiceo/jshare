import { type PropsWithChildren, type ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { useTheme, type Theme } from '@jshare/theme';

import { Stack } from './Stack';
import { Typography } from './Typography';

export type FormControlProps = {
    label: string;
    error?: string | null;
    onPress: () => void;
    focused: boolean;
    endAdornment?: ReactNode;
};

export const FormControl = (props: PropsWithChildren<FormControlProps>) => {
    const { theme } = useTheme();
    const { label, error, onPress, focused, endAdornment } = props;

    const styles = getStyles(theme);
    return (
        <Pressable style={styles.wrapper} onPress={onPress}>
            <Stack row spacing="md">
                <Stack column spacing="md" flex={1}>
                    <Typography variant="caption" color={focused ? 'accent.main' : 'primary'}>
                        {label}
                    </Typography>
                    {props.children}
                    {error && (
                        <Typography variant="caption" color="error.main">
                            {error}
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
            backgroundColor: 'rgba(255,255,255,0.05)',
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
