import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from '~/components/atoms/Stack';
import { StatusBadge } from '~/components/StatusBadge';

const meta = {
    title: 'StatusBadge',
    component: StatusBadge,
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
        return <StatusBadge {...args} />;
    },
} satisfies Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        amount: 0,
        currency: 'USD',
        prefix: 'Status:',
    },
};

export const NegativeAmount: Story = {
    args: {
        amount: -1120,
        currency: 'USD',
        prefix: 'Status:',
    },
};

export const PositiveAmount: Story = {
    args: {
        amount: 2359,
        currency: 'USD',
        prefix: 'Status:',
    },
};

export const NoPrefix: Story = {
    args: {
        amount: 2359,
        currency: 'USD',
    },
};
