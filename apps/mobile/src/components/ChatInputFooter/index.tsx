import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { useTheme, type Theme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { IconButton } from '~/components/IconButton';

export type ChatInputFooterProps = {
    onSendMessage: (text: string) => void;
};

export const ChatInputFooter = (props: ChatInputFooterProps) => {
    const { onSendMessage } = props;
    const { theme } = useTheme();
    const styles = getStyles(theme);
    const [inputValue, setInputValue] = useState<string>('');

    const handleSendMessage = async () => {
        onSendMessage(inputValue);
        setInputValue('');
    };

    return (
        <Stack>
            <Stack row spacing="md" alignCenter p="md">
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    value={inputValue}
                    onChangeText={setInputValue}
                />
                <IconButton
                    icon="Send"
                    rounded
                    disabled={!inputValue}
                    size="sm"
                    onPress={handleSendMessage}
                />
            </Stack>
        </Stack>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        inputWrapper: {
            padding: theme.spacing.md,
            backgroundColor: theme.palette.background.main,
            borderTopWidth: 1,
            borderTopColor: theme.palette.border.divider,
        },

        input: {
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
            backgroundColor: theme.palette.background.elevation1,
            paddingHorizontal: theme.spacing.xl,
            paddingVertical: theme.spacing.md,
            borderRadius: theme.borderRadius['3xl'],
            flex: 1,
        },
    });
};
