import { useMemo } from 'react';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import Animated, { Easing, LinearTransition } from 'react-native-reanimated';
import { sortBy } from 'lodash';

import { useTheme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { ChatBackground } from '~/components/ChatBackground';
import { ChatDateSeparator } from '~/components/ChatDateSeparator';
import { ChatInputFooter } from '~/components/ChatInputFooter';
import { ChatMessageGroup } from '~/components/ChatMessageGroup';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
import { useGroupMessages } from '~/hooks/useGroupMessages';
import { messagesToChatListItems } from '~/util/messages';
import { useCurrentGroup } from '~/wrappers/GroupProvider';

export default function GroupHome() {
    const { group } = useCurrentGroup();
    const { theme } = useTheme();
    const {
        data: messages,
        fetchNextPage: loadOlderMessages,
        sendMessage,
    } = useGroupMessages(group.id);

    const chatListItems = useMemo(() => {
        return messagesToChatListItems(messages ?? []);
    }, [messages]);

    return (
        <Screen disableBottomInset>
            <Screen.Content>
                <Header title={group.name} bordered />
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    keyboardVerticalOffset={44}
                >
                    <ChatBackground flex={1}>
                        <Animated.FlatList
                            data={chatListItems}
                            itemLayoutAnimation={LinearTransition.duration(200).easing(
                                Easing.inOut(Easing.ease)
                            )}
                            keyExtractor={(item) => {
                                switch (item.type) {
                                    case 'date':
                                        return `date_${item.date}`;
                                    case 'messages':
                                        return `messages_${item.messages.at(-1)?.key ?? ''}`;
                                }
                            }}
                            ItemSeparatorComponent={() => <Box height={8} />}
                            renderItem={(chatListItem) => {
                                switch (chatListItem.item.type) {
                                    case 'date': {
                                        return <ChatDateSeparator date={chatListItem.item.date} />;
                                    }
                                    case 'messages': {
                                        return (
                                            <ChatMessageGroup
                                                authorId={chatListItem.item.authorId}
                                                messages={sortBy(
                                                    chatListItem.item.messages,
                                                    (message) => message.createdAt
                                                )}
                                            />
                                        );
                                    }
                                }
                            }}
                            inverted
                            contentContainerStyle={{
                                paddingHorizontal: theme.spacing.xs,
                                paddingVertical: theme.spacing.lg,
                            }}
                            onEndReached={() => loadOlderMessages()}
                            onEndReachedThreshold={0.5}
                        />
                    </ChatBackground>
                </KeyboardAvoidingView>
                <ChatInputFooter onSendMessage={sendMessage} />
            </Screen.Content>
        </Screen>
    );
}
