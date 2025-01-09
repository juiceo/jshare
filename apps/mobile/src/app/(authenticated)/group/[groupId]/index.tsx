import { useMemo } from 'react';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import Animated, { Easing, LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { sortBy } from 'lodash';

import { useTheme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { ChatBackground } from '~/components/ChatBackground';
import { ChatDateSeparator } from '~/components/ChatDateSeparator';
import { ChatInputFooter } from '~/components/ChatInputFooter';
import { ChatMessageGroup } from '~/components/ChatMessageGroup';
import { ChatStatusHeader } from '~/components/ChatStatusHeader';
import { IconButton } from '~/components/IconButton';
import { Screen } from '~/components/Screen';
import { useGroupMessages } from '~/hooks/useGroupMessages';
import { trpc } from '~/services/trpc';
import { messagesToChatListItems } from '~/util/messages';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]',
        loadingMessage: 'Loading group...',
        auth: true,
    },
    ({ params, auth }) => {
        const { groupId } = params;
        const [group] = trpc.groups.get.useSuspenseQuery({ id: groupId });
        const { theme } = useTheme();
        const router = useRouter();
        const insets = useSafeAreaInsets();

        const {
            data: messages,
            fetchNextPage: loadOlderMessages,
            sendMessage,
        } = useGroupMessages({ groupId, userId: auth.session.user.id });

        const chatListItems = useMemo(() => {
            return messagesToChatListItems(messages ?? []);
        }, [messages]);

        return (
            <Screen>
                <Screen.Header title={group.name} bordered />
                <KeyboardStickyView
                    style={{ flex: 1, zIndex: 0 }}
                    offset={{ opened: insets.bottom }}
                >
                    <Screen.Content disableTopInset>
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
                                            return (
                                                <ChatDateSeparator date={chatListItem.item.date} />
                                            );
                                        }
                                        case 'messages': {
                                            return (
                                                <ChatMessageGroup
                                                    userId={auth.session.user.id}
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
                                ListHeaderComponent={
                                    <Stack row center spacing="md" mt="3xl">
                                        <IconButton
                                            icon={'CreditCard'}
                                            text="New expense"
                                            textPos="right"
                                            variant="ghost"
                                            onPress={() => {
                                                router.push({
                                                    pathname: '/group/[groupId]/create-expense',
                                                    params: { groupId: group.id },
                                                });
                                            }}
                                        />
                                        <IconButton
                                            icon={'ArrowLeftRight'}
                                            text="New payment"
                                            textPos="right"
                                            variant="ghost"
                                            onPress={() => {
                                                router.push({
                                                    pathname: '/group/[groupId]/create-payment',
                                                    params: { groupId: group.id },
                                                });
                                            }}
                                        />
                                    </Stack>
                                }
                                inverted
                                contentContainerStyle={{
                                    paddingBottom: 100,
                                    paddingHorizontal: theme.spacing.xs,
                                    paddingVertical: theme.spacing.lg,
                                }}
                                onEndReached={() => loadOlderMessages()}
                                onEndReachedThreshold={0.5}
                            />
                            <ChatStatusHeader groupId={group.id} currency={group.currency} />
                        </ChatBackground>
                        <ChatInputFooter onSendMessage={sendMessage} />
                    </Screen.Content>
                </KeyboardStickyView>
            </Screen>
        );
    }
);
