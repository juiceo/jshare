import { StyleSheet, TextInput } from 'react-native';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme, type Theme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { IconButton } from '~/components/IconButton';

export const ChatInputFooter = () => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = getStyles(theme, insets.bottom);
    return (
        <Stack>
            <Stack row p="md" center style={styles.buttonsWrapper}>
                <Button variant="ghost" color="primary" size="sm">
                    New expense
                </Button>
                <Button variant="ghost" size="sm">
                    New payment
                </Button>
            </Stack>
            <KeyboardStickyView style={styles.inputWrapper} offset={{ opened: insets.bottom }}>
                <Stack row spacing="md" alignCenter>
                    <TextInput style={styles.input} placeholder="Type a message..." />
                    <IconButton icon="Send" rounded disabled size="sm" />
                </Stack>
            </KeyboardStickyView>
        </Stack>
    );
};

const getStyles = (theme: Theme, bottomInset: number) => {
    return StyleSheet.create({
        inputWrapper: {
            backgroundColor: theme.palette.background.elevation1,
            padding: theme.spacing.md,
            borderTopWidth: 1,
            borderTopColor: theme.palette.border.divider,
            paddingBottom: theme.spacing.md + bottomInset,
        },
        buttonsWrapper: {
            padding: theme.spacing.md,
            borderTopWidth: 1,
            borderTopColor: theme.palette.border.divider,
            backgroundColor: 'transparent',
        },
        input: {
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
            backgroundColor: theme.palette.background.elevation2,
            paddingHorizontal: theme.spacing.xl,
            paddingVertical: theme.spacing.md,
            borderRadius: theme.borderRadius['3xl'],
            flex: 1,
        },
    });
};
