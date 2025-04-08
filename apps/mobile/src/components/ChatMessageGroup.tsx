import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { skipToken } from '@tanstack/react-query';

import { getUserDefaultAvatarUrl, getUserShortName } from '@jshare/common';
import { DB } from '@jshare/db';
import { useTheme, type Theme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { ChatMessage } from '~/components/ChatMessage';
import { SystemMessage } from '~/components/SystemMessage';
import { trpc } from '~/lib/trpc';

export type ChatMessageGroupProps = {
    userId: string;
    authorId: string | null;
    messages: DB.Message<{ author: true; attachments: true }>[];
};

export const ChatMessageGroup = (props: PropsWithChildren<ChatMessageGroupProps>) => {
    const { theme } = useTheme();
    const { data: profile } = trpc.profiles.get.useQuery(
        props.authorId ? { id: props.authorId } : skipToken
    );
    const isSelf = props.authorId === props.userId;
    const isSystem = props.authorId === null;
    const styles = getStyles(theme, {
        align: isSelf ? 'right' : isSystem ? 'center' : 'left',
    });

    return (
        <Stack style={[styles.wrapper]}>
            <Box style={styles.messages}>
                {props.messages.map((message) => {
                    switch (message.authorType) {
                        case 'User': {
                            return (
                                <ChatMessage
                                    key={message.key}
                                    text={message.text ?? ''}
                                    timestamp={message.createdAt}
                                    authorName={
                                        !isSelf && message.author
                                            ? getUserShortName(message.author)
                                            : undefined
                                    }
                                    color={isSelf ? 'primary' : 'secondary'}
                                    attachments={message.attachments}
                                />
                            );
                        }
                        case 'System': {
                            return (
                                <SystemMessage
                                    key={message.key}
                                    text={message.text ?? ''}
                                    timestamp={message.createdAt}
                                />
                            );
                        }
                    }
                })}
            </Box>
            {!isSelf && props.authorId && (
                <Box style={styles.avatar}>
                    <Image
                        image={profile?.avatar}
                        source={{ uri: profile ? getUserDefaultAvatarUrl(profile) : undefined }}
                        width={40}
                        height={40}
                        br="full"
                    />
                </Box>
            )}
        </Stack>
    );
};

const getStyles = (theme: Theme, opts: { align: 'left' | 'right' | 'center' }) => {
    return StyleSheet.create({
        wrapper: {
            flexDirection: opts.align === 'right' ? 'row' : 'row-reverse',
            alignItems: 'flex-end',
            gap: theme.spacing.sm,
            paddingLeft:
                opts.align === 'right' || opts.align === 'center' ? theme.spacing['3xl'] : 0,
            paddingRight:
                opts.align === 'left' || opts.align === 'center' ? theme.spacing['3xl'] : 0,
        },
        messages: {
            flexDirection: 'column',
            alignItems:
                opts.align === 'right'
                    ? 'flex-end'
                    : opts.align === 'center'
                      ? 'center'
                      : 'flex-start',
            gap: 2,
            flex: 1,
        },
        avatar: {
            width: 40,
        },
    });
};
