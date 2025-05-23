import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useTheme, type Theme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';
import type { ToastVariant } from '~/state/toast';

export type ToastProps = {
    variant: ToastVariant;
    title: string;
    message?: string;
    onDismiss?: () => void;
};

export const TOAST_HEIGHT = 72;

export const Toast = (props: ToastProps) => {
    const { theme } = useTheme();
    const { title, message, onDismiss } = props;
    const styles = getStyles(theme);

    const iconColor = (() => {
        switch (props.variant) {
            case 'info':
                return theme.palette.primary.main;
            case 'error':
                return theme.palette.error.main;
            case 'warning':
                return theme.palette.warning.main;
            case 'success':
                return theme.palette.success.main;
        }
    })();

    return (
        <Stack row alignCenter spacing="xl" p="xl" br="xl" style={styles.wrapper}>
            <Icon name="Info" size={24} color={iconColor} />
            <Stack column flex={1}>
                <Typography variant="subtitle1" color="primary">
                    {title}
                </Typography>
                {message && (
                    <Typography variant="body2" color="primary">
                        {message}
                    </Typography>
                )}
            </Stack>
            <BorderlessButton onPress={onDismiss}>
                <Stack h={40} w={40} center br="full">
                    <Icon name={'X'} />
                </Stack>
            </BorderlessButton>
        </Stack>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        wrapper: {
            height: TOAST_HEIGHT,
            backgroundColor: theme.palette.background.secondary,
            borderWidth: 2,
            borderColor: theme.palette.border.primary,
        },
        text: {
            color: theme.palette.text.primary,
        },
        closeButton: {
            color: theme.palette.text.primary,
        },
    });
};
