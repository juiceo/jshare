import { useState } from 'react';
import { Pressable } from 'react-native';
import { useSuspenseQuery } from '@tanstack/react-query';

import { Stack } from '~/components/atoms/Stack';
import { GroupCard } from '~/components/GroupCard/GroupCard';
import { IconButton } from '~/components/IconButton';
import { NewGroupMenu } from '~/components/NewGroupMenu/NewGroupMenu';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { EmptyState } from '~/components/util/EmptyState';
import { useTRPC } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';

export default screen({}, ({ router }) => {
    const trpc = useTRPC();
    const groups = useSuspenseQuery(trpc.groups.list.queryOptions()).data;
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleSelect = (value: 'create' | 'join') => {
        switch (value) {
            case 'create':
                router.push('/create-group');
                break;
            case 'join':
                router.push('/join-group');
                break;
        }
    };

    return (
        <Screen>
            <Screen.Content scrollable contentStyle={{ paddingBottom: 100 }}>
                <Stack column px="xl" pt="3xl">
                    <Stack mt="3xl" br="xl" mb="xl">
                        <Stack row alignCenter justifyBetween spacing="md">
                            <Typography variant="h1">Your groups</Typography>
                            <IconButton
                                icon="Plus"
                                rounded
                                variant="contained"
                                color="primary"
                                onPress={() => setMenuOpen(true)}
                            />
                        </Stack>
                    </Stack>
                    {groups.length ? (
                        <Stack column spacing="xl">
                            {groups?.map((group) => (
                                <Pressable
                                    key={group.id}
                                    onPress={() =>
                                        router.push({
                                            pathname: '/group/[groupId]',
                                            params: { groupId: group.id },
                                        })
                                    }
                                >
                                    <GroupCard group={group} />
                                </Pressable>
                            ))}
                        </Stack>
                    ) : (
                        <EmptyState
                            title="Welcome! 👋"
                            message="Create or join a group to get started!"
                            icon="Users"
                            bg="background.elevation1"
                            br="xl"
                        />
                    )}
                </Stack>
                <NewGroupMenu
                    isOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                    onSelect={handleSelect}
                />
            </Screen.Content>
        </Screen>
    );
});
