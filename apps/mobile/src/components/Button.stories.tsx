import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView } from 'react-native';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';
import { Button } from './Button';

const meta = {
    title: 'Button',
    component: Button,
    args: {
        variant: 'contained',
        children: 'Press me',
        size: 'md',
        disabled: false,
        loading: false,
    },
    argTypes: {
        size: {
            type: 'string',
            options: ['sm', 'md'],
            control: 'radio',
        },
    },
    decorators: [
        (Story) => (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
                <Story />
            </ScrollView>
        ),
    ],
    render: (args) => {
        return (
            <Stack column spacing="md">
                <Typography py="xl" variant="h4">
                    Contained
                </Typography>
                <Button {...args} variant="contained" color="primary" />
                <Button {...args} variant="contained" color="secondary" />
                <Button {...args} variant="contained" color="error" />
                <Typography py="xl" variant="h4">
                    Outlined
                </Typography>
                <Button {...args} variant="outlined" color="primary" />
                <Button {...args} variant="outlined" color="secondary" />
                <Button {...args} variant="outlined" color="error" />
                <Typography py="xl" variant="h4">
                    Ghost
                </Typography>
                <Button {...args} variant="ghost" color="primary" />
                <Button {...args} variant="ghost" color="secondary" />
                <Button {...args} variant="ghost" color="error" />
            </Stack>
        );
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
    args: {},
};
