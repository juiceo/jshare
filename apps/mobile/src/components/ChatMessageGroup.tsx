import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

import { getUserShortName } from '@jshare/common';
import { useTheme, type Theme } from '@jshare/theme';
import { DB } from '@jshare/types';

import { Box } from '~/components/atoms/Box';
import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { ChatMessage } from '~/components/ChatMessage';
import { useProfileById } from '~/hooks/useProfileById';
import { useAuthenticatedSession } from '~/wrappers/AuthenticatedContextProvider';

export type ChatMessageGroupProps = {
    authorId: string | null;
    messages: DB.Message<{ author: true }>[];
};

export const ChatMessageGroup = (props: PropsWithChildren<ChatMessageGroupProps>) => {
    const { theme } = useTheme();
    const session = useAuthenticatedSession();
    const { profile } = useProfileById(props.authorId);
    const isSelf = props.authorId === session.session.user.id;
    const styles = getStyles(theme, {
        align: isSelf ? 'right' : 'left',
    });
    return (
        <Stack style={[styles.wrapper]}>
            <Box style={styles.messages}>
                {props.messages.map((message, index) => {
                    const showAuthorName = !isSelf && index === 0;
                    return (
                        <ChatMessage
                            key={message.id}
                            text={message.text ?? ''}
                            timestamp={message.createdAt}
                            authorName={
                                showAuthorName && message.author
                                    ? getUserShortName(message.author)
                                    : undefined
                            }
                            color={isSelf ? 'primary' : 'secondary'}
                        />
                    );
                })}
            </Box>
            {!isSelf && props.authorId && (
                <Box style={styles.avatar}>
                    <Image
                        image={profile?.avatar}
                        source={{ uri: 'https://picsum.photos/id/1003/40/40' }}
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
