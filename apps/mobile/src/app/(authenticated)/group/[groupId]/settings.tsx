import React, { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import * as Clipboard from 'expo-clipboard';
import { useLocalSearchParams } from 'expo-router';
import { sortBy } from 'lodash';
import shortid from 'shortid';

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
import { trpc } from '~/lib/trpc';
import { toast } from '~/state/toast';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

type FormData = Pick<DB.Group, 'name'>;

export default screen(
    {
        auth: true,
    },
    ({ auth, router }) => {
        const { groupId } = useLocalSearchParams<{ groupId: string }>();
        const group = useSuspenseQuery(
            trpc.z.group.findUniqueOrThrow.queryOptions({
                where: { id: groupId },
                include: { coverImage: true, participants: { include: { user: true } } },
            })
        ).data as DB.Group<{ coverImage: true; participants: { include: { user: true } } }>;
        const { presentUserIds } = useGroupContext();
        const updateGroup = useMutation(trpc.z.group.update.mutationOptions());
        const deleteGroup = useMutation(trpc.z.group.delete.mutationOptions());

        const [isDeleting, setDeleting] = useState<boolean>(false);

        const role = group.participants.find((p) => p.userId === auth.session.user.id)?.role;
        const isAdmin = role === DB.Role.Admin || role === DB.Role.Owner;
        const isOwner = role === DB.Role.Owner;

        const form = useForm<FormData>({
            defaultValues: {
                name: group.name,
            },
        });

        const handleRefreshInviteCode = async () => {
            await updateGroup.mutateAsync({
                where: { id: groupId },
                data: {
                    inviteCode: shortid.generate(),
                },
            });
        };

        const handleCopyInviteCode = async () => {
            const inviteCode = group.inviteCode;
            if (!inviteCode) return;
            await Clipboard.setStringAsync(inviteCode);
            toast.info('Invite code copied!');
        };

        const handleGroupDelete = async () => {
            try {
                await deleteGroup.mutateAsync({ where: { id: groupId } });
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

        const handleSubmit = (data: FormData) => {
            updateGroup.mutateAsync({
                where: { id: groupId },
                data,
            });
        };

        return (
            <Screen onBlur={form.handleSubmit(handleSubmit)}>
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
                                            disabled={updateGroup.isPending}
                                            onPress={handleRefreshInviteCode}
                                            variant="ghost"
                                        />
                                    </Stack>
                                </Stack>
                            </BorderlessButton>
                        )}

                        <Stack column bg="background.elevation1" br="xl">
                            {sortedParticipants.map((participant, index) => (
                                <React.Fragment key={participant.id}>
                                    <Stack row alignCenter p="xl" spacing="xl">
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
                                </React.Fragment>
                            ))}
                        </Stack>
                        {isAdmin && (
                            <Stack mt="3xl" spacing="xl">
                                <Typography variant="h6">Settings</Typography>
                                <Controller
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <TextField
                                            label="Group name"
                                            value={field.value}
                                            onChange={field.onChange}
                                        />
                                    )}
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
