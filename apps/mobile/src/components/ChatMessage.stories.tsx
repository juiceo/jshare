import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '~/components/atoms/Stack';
import { ChatMessage } from '~/components/ChatMessage';

const meta = {
    title: 'ChatMessage',
    component: ChatMessage,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => (
            <Stack flex={1} center p="xl">
                <Story />
            </Stack>
        ),
    ],
    render: (args) => {
        return <ChatMessage {...args} />;
    },
} satisfies Meta<typeof ChatMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Hi! I am a message',
        timestamp: new Date(),
        color: 'primary',
    },
};

export const LongMessage: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        timestamp: new Date(),
        color: 'primary',
    },
};

export const ColorSecondary: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        timestamp: new Date(),
        color: 'secondary',
    },
};

export const WithAuthorName: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        timestamp: new Date(),
        authorName: 'Juuso Lappalainen',
        color: 'primary',
    },
};
