import type { Meta, StoryObj } from '@storybook/react';
import { ScrollView } from 'react-native';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

const meta = {
    title: 'Typography',
    component: Typography,
    args: {
        color: 'primary',
    },
    argTypes: {
        color: {
            control: 'radio',
            options: ['primary', 'secondary', 'hint', 'disabled', 'accent.main', 'error.main'],
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
                <Typography {...args} variant="h1">
                    Heading 1
                </Typography>
                <Typography {...args} variant="h2">
                    Heading 2
                </Typography>
                <Typography {...args} variant="h3">
                    Heading 3
                </Typography>
                <Typography {...args} variant="h4">
                    Heading 4
                </Typography>
                <Typography {...args} variant="h5">
                    Heading 5
                </Typography>
                <Typography {...args} variant="overline">
                    Overline
                </Typography>
                <Typography {...args} variant="body1">
                    Body 1, lorem ipsum dolor sit amet
                </Typography>
                <Typography {...args} variant="body2">
                    Body 2, lorem ipsum dolor sit amet
                </Typography>
                <Typography {...args} variant="caption">
                    Caption here
                </Typography>
                <Typography {...args} variant="button">
                    Button
                </Typography>
            </Stack>
        );
    },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
    args: {},
};
