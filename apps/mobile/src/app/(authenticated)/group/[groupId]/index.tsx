import { useMemo } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import Animated, { Easing, LinearTransition } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';

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
import { Store } from '~/lib/store/collections';
import { getGroupSubheader } from '~/util/groups';
import { messagesToChatListItems } from '~/util/messages';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export default screen(
    observer(() => {
        const user = useCurrentUser();
        const { group, groupId } = useGroupContext();
        const { theme } = useTheme();
        const { presentUserIds } = useGroupContext();
        const router = useRouter();
        const insets = useSafeAreaInsets();

        const messages = Store.messages.findMany(
            { groupId },
            {
                orderBy: {
                    field: 'createdAt',
                    order: 'desc',
                },
            }
        );

        const handleSendMessage = (text: string) => {
            Store.messages.create({
                groupId,
                text,
                key: '', //TODO: Remove key from the database, not necessary anymore
            });
            console.log('SEND!!!!');
        };

        const handleEndReached = () => {
            console.log('END REACHED!!!!');
        };

        const chatListItems = useMemo(() => {
            return messagesToChatListItems(messages ?? []);
        }, [messages]);

        return (
            <Screen>
                <Screen.Header
                    title={group?.data.name ?? ''}
                    subtitle={getGroupSubheader(
                        /**
                         * TODO: Check this works correctly
                         */
                        group?.data.participants?.length ?? 1,
                        presentUserIds.length - 1 // Subtract the current user
                    )}
                    footer={<ChatStatusHeader />}
                    right={
                        <BorderlessButton
                            activeOpacity={0.8}
                            onPress={() =>
                                router.push({
                                    pathname: '/group/[groupId]/settings',
                                    params: { groupId },
                                })
                            }
                        >
                            <Image
                                image={group?.data.coverImage}
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
                                                    return `messages_${item.messages.at(-1)?.id ?? ''}`;
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
                                                            userId={user.id}
                                                            authorId={chatListItem.item.authorId}
                                                            messages={chatListItem.item.messages}
                                                        />
                                                    );
                                                }
                                            }
                                        }}
                                        ListFooterComponent={
                                            group.data.inviteCode &&
                                            group.data.participants?.length === 1 ? (
                                                <CopyInviteCodeBlock code={group.data.inviteCode} />
                                            ) : null
                                        }
                                        inverted
                                        contentContainerStyle={{
                                            paddingBottom: context.headerHeight + 100,
                                            paddingHorizontal: theme.spacing.xs,
                                            paddingVertical: theme.spacing.lg,
                                        }}
                                        onEndReached={() => handleEndReached()}
                                        onEndReachedThreshold={0.5}
                                    />
                                </ChatBackground>
                                <ChatInputFooter
                                    onMessage={handleSendMessage}
                                    onExpense={() => {
                                        router.push({
                                            pathname: '/group/[groupId]/create-expense',
                                            params: { groupId },
                                        });
                                    }}
                                    onPayment={() => {
                                        router.push({
                                            pathname: '/group/[groupId]/create-payment',
                                            params: { groupId },
                                        });
                                    }}
                                />
                            </>
                        )}
                    </Screen.Content>
                </KeyboardStickyView>
            </Screen>
        );
    })
);
