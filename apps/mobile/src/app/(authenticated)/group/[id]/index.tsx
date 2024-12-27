import { useMemo } from 'react';
import { SectionList } from 'react-native';

import { groupConsecutiveMessagesByAuthor, groupMessagesByDate } from '@jshare/common';

import { Box } from '~/components/atoms/Box';
import { ChatDateSeparator } from '~/components/ChatDateSeparator';
import { ChatMessageGroup } from '~/components/ChatMessageGroup';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useGroupMessages } from '~/hooks/useGroupMessages';
import { useCurrentGroup } from '~/wrappers/GroupProvider';

export default function GroupHome() {
    const { group } = useCurrentGroup();
    const { data: messages } = useGroupMessages(group.id);

    const sections = useMemo(() => {
        return groupMessagesByDate(messages ?? []).map(({ date, messages }) => {
            return {
                title: date,
                data: groupConsecutiveMessagesByAuthor(messages),
                key: date,
            };
        });
    }, [messages]);

    return (
        <Screen>
            <Screen.Content>
                <Header title={group.name} />
                <SectionList
                    sections={sections}
                    renderSectionHeader={({ section: { title } }) => (
                        <ChatDateSeparator date={title} />
                    )}
                    ItemSeparatorComponent={() => <Box height={8} />}
                    renderItem={(messageGroup) => {
                        return (
                            <ChatMessageGroup
                                authorId={messageGroup.item.authorId}
                                messages={messageGroup.item.messages}
                            />
                        );
                    }}
                />
                <Box>
                    <Typography>Footer here</Typography>
                </Box>
            </Screen.Content>
        </Screen>
    );
}
