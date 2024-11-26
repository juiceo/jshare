import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Icon, IconList } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Typography } from '~/components/Typography';

const meta = {
    title: 'Icon',
    component: IconButton,
    args: {
        icon: 'AArrowDown',
    },
    argTypes: {},
    decorators: [
        (Story) => (
            <View style={{ flex: 1 }}>
                <Story />
            </View>
        ),
    ],
    render: (args) => {
        //eslint-disable-next-line
        const [search, setSearch] = useState<string>('');

        const filteredIcons = (() => {
            if (!search) return IconList;
            const _search = search.toLowerCase();
            return IconList.filter((iconName) => iconName.toLowerCase().includes(_search));
        })();
        return (
            <Stack>
                <Stack p="xl">
                    <TextField
                        value={search}
                        onChange={setSearch}
                        label={'Filter icons'}
                        placeholder="Type to search"
                    />
                </Stack>
                <FlatList
                    data={filteredIcons}
                    ItemSeparatorComponent={() => <Divider horizontal />}
                    contentContainerStyle={{ paddingBottom: 200 }}
                    renderItem={(data) => (
                        <Stack p="xl" row alignCenter spacing="lg">
                            <Icon name={data.item} size={32} />
                            <Typography>{data.item}</Typography>
                        </Stack>
                    )}
                />
            </Stack>
        );
    },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Showcase: Story = {
    args: {},
};
