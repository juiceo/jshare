import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { plural } from '@jshare/common';

import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { trpc } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    () => {
        const user = SessionStore.user;
        const router = useRouter();
        const { code } = useLocalSearchParams<{ code: string }>();
        const group = useSuspenseQuery(trpc.groups.getByCode.queryOptions({ code })).data;
        const joinGroup = useMutation(trpc.groups.joinByCode.mutationOptions());

        const isMember = group?.participants.some((p) => p.userId === user.id);

        const handleJoin = async () => {
            if (!group) return;
            if (!isMember) {
                await joinGroup.mutateAsync({ code });
                Store.groups.registerItem(group);
                Store.groups.invalidate();
                Store.messages.invalidate();
                Store.expenses.invalidate();
                Store.payments.invalidate();
            }

            router.dismissAll();
            router.push({
                pathname: '/(authenticated)/group/[groupId]',
                params: { groupId: group.id },
            });
        };

        return (
            <Screen>
                <Screen.Header title="Join group" backButton="back" />
                <Screen.Content>
                    {group ? (
                        <Stack column center flex={1} p="2xl" spacing="md">
                            <Image
                                image={group.coverImage}
                                width={140}
                                height={140}
                                background="background.secondary"
                                br="full"
                            />
                            <Typography variant="h4">{group.name}</Typography>
                            {isMember ? (
                                <Typography variant="subtitle1">You're already a member</Typography>
                            ) : (
                                <Typography variant="caption" color="hint" align="center">
                                    {plural({
                                        singular: 'member',
                                        plural: 'members',
                                        count: group.participants.length,
                                    })}
                                </Typography>
                            )}
                        </Stack>
                    ) : (
                        <Stack column center flex={1} p="2xl">
                            <Stack column center spacing="md">
                                <Icon name="Frown" size={48} />
                                <Typography variant="h3" align="center">
                                    Invalid code
                                </Typography>
                            </Stack>
                            <Stack column spacing="md" mt="2xl">
                                <Typography variant="body1" align="center" color="primary">
                                    No group was found with the code{' '}
                                    <Typography variant="subtitle1" color="primary.light">
                                        {code}
                                    </Typography>
                                </Typography>
                                <Typography variant="caption" align="center" color="hint">
                                    Please double-check the code or ask the group owner to send you
                                    a new one.
                                </Typography>
                            </Stack>
                        </Stack>
                    )}
                </Screen.Content>
                <Screen.Footer>
                    {group ? (
                        <Button
                            color="primary"
                            variant="contained"
                            onPress={handleJoin}
                            loading={joinGroup.isPending}
                        >
                            {isMember ? 'Go to group' : 'Join group'}
                        </Button>
                    ) : (
                        <Button color="secondary" variant="contained" onPress={router.back}>
                            Go back
                        </Button>
                    )}
                </Screen.Footer>
            </Screen>
        );
    },
    {
        loadingMessage: 'Checking code...',
    }
);
