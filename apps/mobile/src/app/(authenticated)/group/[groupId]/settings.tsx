import { useMemo, useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import * as Clipboard from 'expo-clipboard';
import { sortBy } from 'lodash';

import { DB } from '@jshare/db';

import { Divider } from '~/components/atoms/Divider';
import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { DeleteConfirmation } from '~/components/DeleteConfirmation';
import { IconButton } from '~/components/IconButton';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { trpc } from '~/services/trpc';
import { toast } from '~/state/toast';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/settings',
        auth: true,
    },
    ({ params, auth, router }) => {
        const trpcUtils = trpc.useUtils();
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const { presentUserIds } = useGroupContext();
        const updateGroup = trpc.groups.update.useMutation();
        const refreshInviteCode = trpc.groups.refreshCode.useMutation();
        const deleteGroup = trpc.groups.delete.useMutation();

        const [isDeleting, setDeleting] = useState<boolean>(false);

        const role = group.participants.find((p) => p.userId === auth.session.user.id)?.role;
        const isAdmin = role === DB.Role.Admin || role === DB.Role.Owner;
        const isOwner = role === DB.Role.Owner;

        const [groupName, setGroupName] = useState<string>(group.name);

        const handleRefreshInviteCode = async () => {
            const updatedGroup = await refreshInviteCode.mutateAsync({ groupId: params.groupId });
            trpcUtils.groups.get.setData({ id: params.groupId }, updatedGroup);
            trpcUtils.groups.get.invalidate();
        };

        const handleCopyInviteCode = async () => {
            const inviteCode = group.inviteCode;
            if (!inviteCode) return;
            await Clipboard.setStringAsync(inviteCode);
            toast.info('Invite code copied!');
        };

        const handleGroupUpdate = async (args: Pick<DB.Group, 'name'>) => {
            trpcUtils.groups.get.setData({ id: params.groupId }, (prev) => {
                if (!prev) return prev;
                return {
                    ...prev,
                    ...args,
                };
            });
            await updateGroup.mutateAsync({
                groupId: params.groupId,
                updates: args,
            });
            trpcUtils.groups.invalidate();
        };

        const handleGroupDelete = async () => {
            try {
                await deleteGroup.mutateAsync({ groupId: params.groupId });
                trpcUtils.groups.invalidate();
                router.replace('/(authenticated)/(tabs)/groups');
                toast.info(`Success`, `${group.name} was deleted`);
            } catch {
                toast.error('Something went wrong');
            }
            setDeleting(false);
        };

        const sortedParticipants = useMemo(() => {
            return sortBy(group.participants, (participant) => {
                if (presentUserIds.includes(participant.userId)) return -Infinity;
                return -1 * new Date(participant.user.lastActivity).valueOf();
            });
        }, [group.participants, presentUserIds]);

        return (
            <Screen>
                <Screen.Header title="Manage group" blur />
                <Screen.Content scrollable disableTopInset>
                    <Stack center ar="1/1">
                        <Image
                            image={group.coverImage}
                            width={140}
                            height={140}
                            br="full"
                            bg="background.elevation1"
                        />
                        <Typography variant="h4">{group.name}</Typography>
                    </Stack>
                    <Stack column p="xl">
                        <Typography variant="h6" mb="xl">
                            Members ({group.participants.length})
                        </Typography>
                        {group.inviteCode && (
                            <BorderlessButton
                                onPress={() => handleCopyInviteCode()}
                                activeOpacity={0.8}
                            >
                                <Stack
                                    alignCenter
                                    row
                                    bg="background.elevation1"
                                    p="xl"
                                    spacing="xl"
                                    br="xl"
                                    mb="xl"
                                >
                                    <Stack column flex={1}>
                                        <Typography variant="caption">
                                            Tap to copy invite code
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary.light">
                                            {group.inviteCode}
                                        </Typography>
                                    </Stack>
                                    <Stack center>
                                        <IconButton
                                            icon="RefreshCcw"
                                            disabled={refreshInviteCode.isPending}
                                            onPress={handleRefreshInviteCode}
                                            variant="ghost"
                                        />
                                    </Stack>
                                </Stack>
                            </BorderlessButton>
                        )}

                        <Stack column bg="background.elevation1" br="xl">
                            {sortedParticipants.map((participant, index) => (
                                <>
                                    <Stack row alignCenter p="xl" spacing="xl" key={participant.id}>
                                        <Avatar userId={participant.userId} size="lg" />
                                        <Stack column flex={1}>
                                            <Typography variant="subtitle1">
                                                <UserName
                                                    userId={participant.userId}
                                                    variant="full"
                                                />
                                            </Typography>
                                            {presentUserIds.includes(participant.userId) ? (
                                                <Typography variant="caption" color="primary.light">
                                                    Online
                                                </Typography>
                                            ) : !participant.user.temporary ? (
                                                <Typography variant="caption" color="hint">
                                                    {`Last seen ${dayjs(participant.user.lastActivity).fromNow()}`}
                                                </Typography>
                                            ) : (
                                                <Typography variant="caption" color="hint">
                                                    Temporary user
                                                </Typography>
                                            )}
                                        </Stack>
                                        <Stack column center>
                                            <Typography variant="subtitle2" color="hint">
                                                {participant.role === 'Owner' && 'Owner'}
                                                {participant.role === 'Admin' && 'Admin'}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    {index !== group.participants.length - 1 && (
                                        <Divider horizontal color="background.main" />
                                    )}
                                </>
                            ))}
                        </Stack>
                        {isAdmin && (
                            <Stack mt="3xl" spacing="xl">
                                <Typography variant="h6">Settings</Typography>
                                <TextField
                                    label="Group name"
                                    value={groupName}
                                    onChange={setGroupName}
                                    TextInputProps={{
                                        onBlur: () => handleGroupUpdate({ name: groupName }),
                                    }}
                                />
                                {isOwner && (
                                    <>
                                        <Button
                                            color="error"
                                            variant="outlined"
                                            onPress={() => setDeleting(true)}
                                        >
                                            Delete group
                                        </Button>
                                        <DeleteConfirmation
                                            isOpen={isDeleting}
                                            onClose={() => setDeleting(false)}
                                            onConfirm={handleGroupDelete}
                                            title="Delete group?"
                                            description="All data related to this group will be deleted. This action cannot be undone."
                                            confirmPhrase={group.name}
                                            loading={deleteGroup.isPending}
                                        />
                                    </>
                                )}
                            </Stack>
                        )}
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    }
);
