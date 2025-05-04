import React from 'react';
import { StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';
import { observer } from 'mobx-react-lite';

import { useTheme, type Theme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import type { Docs } from '~/lib/store/collections';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export type ChatMessageProps = {
    message: Docs.Message;
};

const _ChatMessage = observer((props: ChatMessageProps) => {
    const { theme } = useTheme();
    const styles = getStyles(theme);
    const currentUser = useCurrentUser();

    const { message } = props;

    const isSelf = props.message.data.authorId === currentUser.id;

    const gradientColors = ((): [string, string] => {
        if (isSelf) {
            return [theme.palette.primary.main, theme.palette.primary.dark];
        } else {
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
            {!isSelf && message.data.authorId ? (
                <Stack style={styles.author}>
                    <Typography variant="h6" style={styles.authorName}>
                        <UserName userId={message.data.authorId} variant="short" />
                    </Typography>
                </Stack>
            ) : (
                <Box h={4} />
            )}
            {/**
             * TODO: Add support for attachments
             */}
            {/* {attachments.length && (
                <Stack style={styles.attachments} column justifyStart>
                    {attachments.map((attachment) => (
                        <ChatMessageAttachment
                            key={attachment.id}
                            type={attachment.type}
                            expenseId={attachment.expenseId ?? ''}
                        />
                    ))}
                </Stack>
            )} */}
            {message.data.text && (
                <Stack style={styles.text}>
                    <Typography variant="body1">
                        {message.data.text}
                        <Box style={styles.textPadding} />
                    </Typography>
                </Stack>
            )}
            <Stack style={styles.footer}>
                <Typography variant="caption" color="hint">
                    {dayjs(message.data.createdAt).format('HH:mm')}
                </Typography>
            </Stack>
        </LinearGradient>
    );
});

export const ChatMessage = React.memo(_ChatMessage);

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
