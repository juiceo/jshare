import { useMemo } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import Animated, { Easing, LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { sortBy } from 'lodash';

import { useTheme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { Image } from '~/components/atoms/Image';
import { ChatBackground } from '~/components/ChatBackground';
import { ChatDateSeparator } from '~/components/ChatDateSeparator';
import { ChatInputFooter } from '~/components/ChatInputFooter';
import { ChatMessageGroup } from '~/components/ChatMessageGroup';
import { ChatStatusHeader } from '~/components/ChatStatusHeader';
import { CopyInviteCodeBlock } from '~/components/CopyInviteCodeBlock';
import { Screen } from '~/components/Screen';
import { useGroupMessages } from '~/hooks/useGroupMessages';
import { trpc } from '~/lib/trpc';
import { getGroupSubheader } from '~/util/groups';
import { messagesToChatListItems } from '~/util/messages';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        loadingMessage: 'Loading group...',
        auth: true,
    },
    ({ auth }) => {
        const { groupId } = useLocalSearchParams<{ groupId: string }>();
        const [group] = trpc.groups.get.useSuspenseQuery({ id: groupId });
        const { theme } = useTheme();
        const { presentUserIds } = useGroupContext();
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
                <Screen.Header
                    title={group.name}
                    subtitle={getGroupSubheader(
                        group.participants.length,
                        presentUserIds.length - 1 // Subtract the current user
                    )}
                    footer={<ChatStatusHeader groupId={group.id} currency={group.currency} />}
                    right={
                        <BorderlessButton
                            activeOpacity={0.8}
                            onPress={() =>
                                router.push({
                                    pathname: '/group/[groupId]/settings',
                                    params: { groupId: group.id },
                                })
                            }
                        >
                            <Image
                                image={group.coverImage}
                                width={40}
                                height={40}
                                br="full"
                                bg="background.elevation1"
                            />
                        </BorderlessButton>
                    }
                />
                <KeyboardStickyView
                    style={{ flex: 1, zIndex: 0 }}
                    offset={{ opened: insets.bottom }}
                >
                    <Screen.Content disableHeaderOffset>
                        {(context) => (
                            <>
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
                                                        <ChatDateSeparator
                                                            date={chatListItem.item.date}
                                                        />
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
                                        ListFooterComponent={
                                            group.inviteCode && group.participants.length === 1 ? (
                                                <CopyInviteCodeBlock code={group.inviteCode} />
                                            ) : null
                                        }
                                        inverted
                                        contentContainerStyle={{
                                            paddingBottom: context.headerHeight + 100,
                                            paddingHorizontal: theme.spacing.xs,
                                            paddingVertical: theme.spacing.lg,
                                        }}
                                        onEndReached={() => loadOlderMessages()}
                                        onEndReachedThreshold={0.5}
                                    />
                                </ChatBackground>
                                <ChatInputFooter
                                    onMessage={sendMessage}
                                    onExpense={() => {
                                        router.push({
                                            pathname: '/group/[groupId]/create-expense',
                                            params: { groupId: group.id },
                                        });
                                    }}
                                    onPayment={() => {
                                        router.push({
                                            pathname: '/group/[groupId]/create-payment',
                                            params: { groupId: group.id },
                                        });
                                    }}
                                />
                            </>
                        )}
                    </Screen.Content>
                </KeyboardStickyView>
            </Screen>
        );
    }
);
