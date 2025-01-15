import { StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';

import type { MessageAttachment } from '@jshare/db/models';
import { useTheme, type Theme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { ChatMessageAttachment } from '~/components/ChatMessageAttachment';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ChatMessageProps = {
    text: string;
    timestamp: Date;
    authorName?: string;
    color: 'primary' | 'secondary';
    attachments?: MessageAttachment[];
};

export const ChatMessage = (props: ChatMessageProps) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);

    const gradientColors = (() => {
        switch (props.color) {
            case 'primary':
                return [theme.palette.primary.main, theme.palette.primary.dark];
            case 'secondary':
                return [theme.palette.background.elevation2, theme.palette.background.elevation3];
        }
    })();

    return (
        <LinearGradient
            style={styles.wrapper}
            colors={gradientColors}
            start={{ x: 0, y: -1 }}
            end={{ x: 1, y: 1 }}
        >
            {props.authorName && (
                <Stack style={styles.author}>
                    <Typography variant="h6" style={styles.authorName}>
                        {props.authorName}
                    </Typography>
                </Stack>
            )}
            {props.attachments && (
                <Stack style={styles.attachments} column justifyStart>
                    {props.attachments.map((attachment) => (
                        <ChatMessageAttachment
                            key={attachment.id}
                            type={attachment.type}
                            expenseId={attachment.expenseId ?? ''}
                        />
                    ))}
                </Stack>
            )}
            {props.text && (
                <Stack style={styles.text}>
                    <Typography variant="body1">
                        {props.text}
                        <Box style={styles.textPadding} />
                    </Typography>
                </Stack>
            )}
            <Stack style={styles.footer}>
                <Typography variant="caption" color="hint">
                    {dayjs(props.timestamp).format('HH:mm')}
                </Typography>
                <Icon name="CheckCheck" size={12} color={(theme) => theme.palette.primary.light} />
            </Stack>
        </LinearGradient>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        wrapper: {
            borderRadius: theme.borderRadius.lg,
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
            position: 'relative',
            flexDirection: 'column',
            overflow: 'hidden',
        },
        author: {
            paddingHorizontal: theme.spacing.md,
            paddingTop: theme.spacing.xs,
        },
        authorName: {
            lineHeight: 0,
            color: theme.palette.text.primary,
        },
        attachments: {
            margin: 2,
            borderRadius: theme.borderRadius.lg - 2,
            overflow: 'hidden',
            flex: 0,
        },
        text: {
            paddingBottom: theme.spacing.xs,
            paddingHorizontal: theme.spacing.md,
        },
        textPadding: {
            opacity: 0,
            width: 60,
            height: 1,
        },
        footer: {
            position: 'absolute',
            bottom: theme.spacing.xs,
            right: theme.spacing.xs,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            gap: 2,
        },
    });
};
