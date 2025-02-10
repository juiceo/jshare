import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Stack } from '~/components/atoms/Stack';
import { Switch } from './Switch';

const meta = {
    title: 'Switch',
    component: Switch,
    args: {},
    decorators: [
        (Story) => (
            <Stack column center p="xl" flex={1}>
                <Story />
            </Stack>
        ),
    ],
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useState<boolean>(args.checked);
        return <Switch {...args} checked={value} onChange={setValue} />;
    },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: true,
        onChange: () => {},
    },
};

export const DisabledUnchecked: Story = {
    args: {
        checked: false,
        onChange: () => {},
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        checked: true,
        onChange: () => {},
        disabled: true,
    },
};
