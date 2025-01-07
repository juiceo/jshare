import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { getUserDefaultAvatarUrl, getUserShortName } from '@jshare/common';
import { useTheme, type Theme } from '@jshare/theme';
import { DB } from '@jshare/types';

import { Box } from '~/components/atoms/Box';
import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { ChatMessage } from '~/components/ChatMessage';
import { useProfileById } from '~/hooks/useProfileById';

export type ChatMessageGroupProps = {
    userId: string;
    authorId: string | null;
    messages: DB.Message<{ author: true; attachments: true }>[];
};

export const ChatMessageGroup = (props: PropsWithChildren<ChatMessageGroupProps>) => {
    const { theme } = useTheme();
    const { profile } = useProfileById(props.authorId);
    const isSelf = props.authorId === props.userId;
    const styles = getStyles(theme, {
        align: isSelf ? 'right' : 'left',
    });
    return (
        <Stack style={[styles.wrapper]}>
            <Box style={styles.messages}>
                {props.messages.map((message) => {
                    return (
                        <ChatMessage
                            key={message.id}
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

const getStyles = (theme: Theme, opts: { align: 'left' | 'right' }) => {
    return StyleSheet.create({
        wrapper: {
            flexDirection: opts.align === 'right' ? 'row' : 'row-reverse',
            alignItems: 'flex-end',
            gap: theme.spacing.sm,
            paddingLeft: opts.align === 'right' ? theme.spacing['3xl'] : 0,
            paddingRight: opts.align === 'left' ? theme.spacing['3xl'] : 0,
        },
        messages: {
            flexDirection: 'column',
            alignItems: opts.align === 'right' ? 'flex-end' : 'flex-start',
            gap: 2,
            flex: 1,
        },
        avatar: {
            width: 40,
        },
    });
};
