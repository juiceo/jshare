import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';

import { Stack } from '~/components/atoms/Stack';
import { IconButton } from '~/components/IconButton';

const meta = {
    title: 'IconButton',
    component: IconButton,
    args: {
        icon: 'AArrowDown',
        variant: 'contained',
        color: 'primary',
    },
    argTypes: {
        color: {
            control: 'radio',
            options: ['primary', 'secondary', 'error'],
        },
        variant: {
            control: 'radio',
            options: ['contained', 'ghost'],
        },
        rounded: {
            control: 'boolean',
        },
    },
    decorators: [
        (Story) => (
            <View style={{ flex: 1, padding: 16 }}>
                <Story />
            </View>
        ),
    ],
    render: (args) => {
        return (
            <Stack center column spacing="md" flex={1}>
                <IconButton {...args} icon="ArrowLeft" size="sm" />
                <IconButton {...args} icon="ArrowLeft" size="md" />
                <IconButton {...args} icon="ArrowLeft" size="lg" />
            </Stack>
        );
    },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
    args: {},
};
