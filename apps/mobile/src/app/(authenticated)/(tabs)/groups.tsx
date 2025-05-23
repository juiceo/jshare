import { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';

import { Stack } from '~/components/atoms/Stack';
import { GroupCard } from '~/components/GroupCard/GroupCard';
import { IconButton } from '~/components/IconButton';
import { NewGroupMenu } from '~/components/NewGroupMenu/NewGroupMenu';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { EmptyState } from '~/components/util/EmptyState';
import { Store } from '~/lib/store/collections';
import { SystemStore } from '~/lib/store/SystemStore';
import { screen } from '~/wrappers/screen';

export default screen(
    observer(() => {
        const router = useRouter();
        const pendingDeepLink = SystemStore.pendingDeepLink;

        const groups = Store.groups.findMany(
            {},
            {
                orderBy: {
                    field: 'lastActivity',
                    order: 'desc',
                },
            }
        );

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

        useEffect(() => {
            if (pendingDeepLink) {
                switch (pendingDeepLink.type) {
                    case 'invite':
                        /**
                         * The modal does not open correctly without the timeout,
                         * for whatever reason.
                         */
                        setTimeout(() => {
                            router.push({
                                pathname: '/join-group/[code]',
                                params: { code: pendingDeepLink.code },
                            });
                        }, 1);

                        SystemStore.setPendingDeepLink(null);
                        break;
                }
            }
        }, [pendingDeepLink, router]);

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
                                {groups.map((group) => (
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
                                bg="background.secondary"
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
    })
);
