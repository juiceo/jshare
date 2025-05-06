import React, { useMemo, useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import * as Clipboard from 'expo-clipboard';
import { useRouter } from 'expo-router';
import { sortBy } from 'lodash';
import { observer } from 'mobx-react-lite';
import shortid from 'shortid';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Avatar } from '~/components/Avatar';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { DeleteConfirmation } from '~/components/DeleteConfirmation';
import { IconButton } from '~/components/IconButton';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { Store } from '~/lib/store/collections';
import { toast } from '~/state/toast';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

export default screen(
    observer(() => {
        const router = useRouter();
        const { group, groupId, groupMemberIds, isAdmin, isOwner } = useGroupContext();
        const { presentUserIds } = useGroupContext();

        const [isDeleting, setDeleting] = useState<boolean>(false);

        const members = Store.profiles.findByIds(groupMemberIds);

        const handleRefreshInviteCode = async () => {
            group.update({
                inviteCode: shortid.generate(),
            });
        };

        const handleCopyInviteCode = async () => {
            const inviteCode = group.data.inviteCode;
            if (!inviteCode) return;
            await Clipboard.setStringAsync(inviteCode);
            toast.info('Invite code copied!');
        };

        const handleGroupDelete = async () => {
            try {
                Store.groups.delete(groupId);
                router.replace('/(authenticated)/(tabs)/groups');
                toast.info(`Success`, `${group.data.name} was deleted`);
            } catch {
                toast.error('Something went wrong');
            }
            setDeleting(false);
        };

        const sortedParticipants = useMemo(() => {
            return sortBy(members, (member) => {
                if (presentUserIds.includes(member.id)) return -Infinity;
                return -1 * new Date(member.data.lastActivity).valueOf();
            });
        }, [presentUserIds, members]);

        return (
            <Screen>
                <Screen.Header title="Manage group" blur />
                <Screen.Content scrollable disableTopInset>
                    <Stack center ar="1/1" spacing="xl">
                        <AvatarPicker
                            value={group.data.coverImage}
                            onChange={(value) => {
                                group.set({
                                    coverImage: value,
                                });
                                group.update({
                                    coverImageId: value?.id ?? null,
                                });
                            }}
                        />
                        <Typography variant="h4">{group.data.name}</Typography>
                    </Stack>
                    <Stack column p="xl">
                        <Typography variant="h6" mb="xl">
                            Members ({group.data.participants.length})
                        </Typography>
                        {group.data.inviteCode && (
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
                                            {group.data.inviteCode}
                                        </Typography>
                                    </Stack>
                                    <Stack center>
                                        <IconButton
                                            icon="RefreshCcw"
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
                                        <Avatar userId={participant.id} size="lg" />
                                        <Stack column flex={1}>
                                            <Typography variant="subtitle1">
                                                <UserName userId={participant.id} variant="full" />
                                            </Typography>
                                            {presentUserIds.includes(participant.id) ? (
                                                <Typography variant="caption" color="primary.light">
                                                    Online
                                                </Typography>
                                            ) : !participant.data.temporary ? (
                                                <Typography variant="caption" color="hint">
                                                    {`Last seen ${dayjs(participant.data.lastActivity).fromNow()}`}
                                                </Typography>
                                            ) : (
                                                <Typography variant="caption" color="hint">
                                                    Temporary user
                                                </Typography>
                                            )}
                                        </Stack>
                                        <Stack column center>
                                            <Typography variant="subtitle2" color="hint">
                                                {isOwner ? 'Owner' : isAdmin ? 'Admin' : null}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    {index !== sortedParticipants.length - 1 && (
                                        <Divider horizontal color="background.main" />
                                    )}
                                </React.Fragment>
                            ))}
                        </Stack>
                        {isAdmin && (
                            <Stack mt="3xl" spacing="xl">
                                <Typography variant="h6">Settings</Typography>
                                <TextField
                                    label="Group name"
                                    value={group.data.name}
                                    onChange={(value) => {
                                        group.update({
                                            name: value,
                                        });
                                    }}
                                />
                                {isOwner && (
                                    <>
                                        <Button
                                            color="error"
                                            variant="ghost"
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
                                            confirmPhrase={group.data.name}
                                        />
                                    </>
                                )}
                            </Stack>
                        )}
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    })
);
