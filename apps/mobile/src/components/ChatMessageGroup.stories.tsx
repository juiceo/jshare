import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView } from 'react-native';

import { ChatMessage } from '~/components/ChatMessage';
import { ChatMessageGroup } from '~/components/ChatMessageGroup';

const meta = {
    title: 'ChatMessageGroup',
    component: ChatMessageGroup,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
                <Story />
            </ScrollView>
        ),
    ],
} satisfies Meta<typeof ChatMessageGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (args) => {
        return (
            <ChatMessageGroup>
                <ChatMessage text="Hi" timestamp={new Date()} color="primary" />
                <ChatMessage text="How are you?" timestamp={new Date()} color="primary" />
                <ChatMessage
                    text="Are you there? Just wondering if you've seen my previous messages"
                    timestamp={new Date()}
                    color="primary"
                />
            </ChatMessageGroup>
        );
    },
};
