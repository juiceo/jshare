import { useState } from 'react';
import { LayoutAnimation, Pressable, StyleSheet, TextInput } from 'react-native';

import { useTheme, type Theme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Typography } from '~/components/Typography';

export type ChatInputFooterProps = {
    onMessage: (text: string) => void;
    onExpense: () => void;
    onPayment: () => void;
};

export const ChatInputFooter = (props: ChatInputFooterProps) => {
    const { onMessage, onExpense, onPayment } = props;
    const { theme } = useTheme();
    const styles = getStyles(theme);
    const [inputValue, setInputValue] = useState<string>('');
    const [inputFocused, setInputFocused] = useState<boolean>(false);

    const handleSendMessage = async () => {
        onMessage(inputValue);
        setInputValue('');
    };

    const handleFocus = () => {
        LayoutAnimation.configureNext({
            duration: 300,
            create: { type: 'linear', property: 'opacity' },
            update: { type: 'spring', springDamping: 2 },
            delete: { type: 'linear', property: 'opacity' },
        });
        setInputFocused(true);
    };

    const handleBlur = () => {
        LayoutAnimation.configureNext({
            duration: 300,
            create: { type: 'linear', property: 'opacity' },
            update: { type: 'spring', springDamping: 2 },
            delete: { type: 'linear', property: 'opacity' },
        });

        setInputFocused(false);
    };

    return (
        <Stack row alignCenter p="md">
            {!inputFocused && (
                <Stack row center spacing="md" pr="md">
                    <Pressable onPress={onExpense}>
                        <Stack row center spacing="md">
                            <Stack center w={24} ar="1/1" br="full" bg="primary.light">
                                <Icon
                                    name="CreditCard"
                                    size={16}
                                    color={theme.palette.text.primary}
                                />
                            </Stack>
                            <Typography variant="h6" style={{ lineHeight: 0 }}>
                                Expense
                            </Typography>
                        </Stack>
                    </Pressable>
                    <Pressable onPress={onPayment}>
                        <Stack row center spacing="md">
                            <Stack center w={24} ar="1/1" br="full" bg="primary.light">
                                <Icon
                                    name="ArrowDownUp"
                                    size={16}
                                    color={theme.palette.text.primary}
                                />
                            </Stack>
                            <Typography variant="h6" style={{ lineHeight: 0 }}>
                                Pay
                            </Typography>
                        </Stack>
                    </Pressable>
                </Stack>
            )}

            <TextInput
                style={[styles.input]}
                placeholder={'Type something...'}
                value={inputValue}
                onChangeText={setInputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {inputFocused && (
                <IconButton
                    icon="Send"
                    rounded
                    disabled={!inputValue}
                    size="sm"
                    onPress={handleSendMessage}
                    variant="contained"
                    color="error"
                />
            )}
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
            flex: 1,
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
            backgroundColor: theme.palette.background.elevation1,
            paddingHorizontal: theme.spacing.xl,
            paddingVertical: theme.spacing.md,
            borderRadius: theme.borderRadius['3xl'],
        },
    });
};
