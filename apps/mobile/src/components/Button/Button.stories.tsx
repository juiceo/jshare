import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Stack } from '~/components/atoms/Stack';
import { Button } from './Button';

const meta = {
    title: 'Button',
    component: Button,
    args: {
        variant: 'contained',
        color: 'primary',
        children: 'Press me',
        fill: true,
    },
    decorators: [
        (Story) => (
            <View style={{ padding: 16, flex: 1 }}>
                <Story />
            </View>
        ),
    ],
    render: (args) => {
        return (
            <Stack column spacing="md">
                <Button {...args} color="primary">
                    Primary
                </Button>
                <Button {...args} color="secondary">
                    Secondary
                </Button>
                <Button {...args} color="paper">
                    Paper
                </Button>
                <Button {...args} color="error">
                    Error
                </Button>
            </Stack>
        );
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
    args: {
        variant: 'contained',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
    },
};
