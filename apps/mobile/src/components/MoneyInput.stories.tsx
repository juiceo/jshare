import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Stack } from '~/components/atoms/Stack';
import { MoneyInput } from './MoneyInput';

const meta = {
    title: 'MoneyInput',
    component: MoneyInput,
    args: {
        value: 0,
        onChange: () => {},
        currency: 'EUR',
    },
    argTypes: {},
    decorators: [
        (Story) => (
            <Stack flex={1} center p="xl">
                <Story />
            </Stack>
        ),
    ],
    render: (args) => {
        //eslint-disable-next-line
        const [value, onChange] = useState<number>(args.value);
        return <MoneyInput {...args} value={value} onChange={onChange} />;
    },
} satisfies Meta<typeof MoneyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
