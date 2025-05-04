import React, { useMemo, type PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { sortBy } from 'lodash';
import { observer } from 'mobx-react-lite';

import { getUserDefaultAvatarUrl } from '@jshare/common';
import { useTheme, type Theme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { ChatMessage } from '~/components/ChatMessage';
import { SystemMessage } from '~/components/SystemMessage';
import { Store, type Docs } from '~/lib/store/collections';

export type ChatMessageGroupProps = {
    userId: string;
    authorId: string | null;
    messages: Docs.Message[];
};

const _ChatMessageGroup = observer((props: PropsWithChildren<ChatMessageGroupProps>) => {
    const { theme } = useTheme();

    const profile = Store.profiles.findById(props.authorId);
    const avatar = profile?.get('avatar');

    const isSelf = props.authorId === props.userId;
    const isSystem = props.authorId === null;
    const styles = getStyles(theme, {
        align: isSelf ? 'right' : isSystem ? 'center' : 'left',
    });

    const sortedMessages = useMemo(() => {
        return sortBy(props.messages, (message) => message.data.createdAt);
    }, [props.messages]);

    return (
        <Stack style={[styles.wrapper]}>
            <Box style={styles.messages}>
                {sortedMessages.map((message) => {
                    switch (message.data.authorType) {
                        case 'User': {
                            return <ChatMessage key={message.id} message={message} />;
                        }
                        case 'System': {
                            return <SystemMessage key={message.id} message={message} />;
                        }
                    }
                })}
            </Box>
            {!isSelf && props.authorId && (
                <Box style={styles.avatar}>
                    <Image
                        image={avatar?.data}
                        source={{
                            uri: profile ? getUserDefaultAvatarUrl(profile.data) : undefined,
                        }}
                        width={40}
                        height={40}
                        br="full"
                    />
                </Box>
            )}
        </Stack>
    );
});

export const ChatMessageGroup = React.memo(_ChatMessageGroup);

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
