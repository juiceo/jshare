import { useState } from 'react';
import { Pressable } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { GroupCard } from '~/components/GroupCard/GroupCard';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { NewGroupMenu } from '~/components/NewGroupMenu/ImageUploadMenu';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { EmptyState } from '~/components/util/EmptyState';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/(tabs)/groups',
    },
    ({ router }) => {
        const { theme } = useTheme();
        const [groups] = trpc.groups.list.useSuspenseQuery();
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
    }
);
