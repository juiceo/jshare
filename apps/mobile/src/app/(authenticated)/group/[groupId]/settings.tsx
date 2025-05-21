import React, { useMemo, useState } from 'react';
import ContextMenu, { type ContextMenuAction } from 'react-native-context-menu-view';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import * as Clipboard from 'expo-clipboard';
import { useRouter } from 'expo-router';
import { sortBy } from 'lodash';
import { observer } from 'mobx-react-lite';
import shortid from 'shortid';

import { DB } from '@jshare/db';
import { useTheme } from '@jshare/theme';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Avatar } from '~/components/Avatar';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { DeleteConfirmation } from '~/components/DeleteConfirmation';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { RemoveUserSheet } from '~/components/RemoveUserSheet';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { Store, type Docs } from '~/lib/store/collections';
import { trpc } from '~/lib/trpc';
import { toast } from '~/state/toast';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

enum UserAction {
    TransferOwnership = 'Transfer ownership',
    RemoveFromGroup = 'Remove from group',
    DemoteFromAdmin = 'Remove Admin rights',
    PromoteToAdmin = 'Promote to Admin',
}

export default screen(
    observer(() => {
        const router = useRouter();
        const { theme } = useTheme();
        const currentUser = useCurrentUser();
        const {
            group,
            groupId,
            groupMemberIds,
            isAdmin,
            isUserOwner,
            isOwner,
            isUserAdmin,
            presentUserIds,
        } = useGroupContext();

        const [isDeleting, setDeleting] = useState<boolean>(false);
        const [removingUserId, setRemovingUserId] = useState<string | null>(null);

        const members = Store.profiles.findByIds(groupMemberIds);
        const changeParticipantRole = useMutation(
            trpc.groupParticipants.changeParticipantRole.mutationOptions()
        );

        const handleRefreshInviteCode = async () => {
            group.update({
                inviteCode: shortid.generate(),
            });
        };

        const handleCopyInviteCode = async () => {
            const inviteCode = group.data.inviteCode;
            const link = `https://app.jshare.me/l/invite/${inviteCode}`;
            if (!inviteCode) return;
            await Clipboard.setStringAsync(link);
            toast.info('Invite link copied!');
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

        const getUserActions = (participant: Docs.Profile) => {
            const actions: ContextMenuAction[] = [];
            const isTemporaryUser = participant.data.temporary;

            if (participant.id === currentUser.id) return [];

            if (isUserOwner(currentUser.id) && !isTemporaryUser) {
                actions.push({
                    title: UserAction.TransferOwnership,
                    systemIcon: 'star',
                });

                if (!isUserAdmin(participant.id)) {
                    actions.push({
                        title: UserAction.PromoteToAdmin,
                        systemIcon: 'key',
                    });
                } else {
                    actions.push({
                        title: UserAction.DemoteFromAdmin,
                        systemIcon: 'key.slash',
                        destructive: true,
                    });
                }
            }

            if (isUserAdmin(currentUser.id) && !isUserAdmin(participant.id)) {
                actions.push({
                    title: UserAction.RemoveFromGroup,
                    systemIcon: 'trash',
                    destructive: true,
                });
            }

            return actions;
        };

        const handleAction = async (userId: string, action: UserAction) => {
            try {
                switch (action) {
                    case UserAction.DemoteFromAdmin: {
                        const updatedGroup = await changeParticipantRole.mutateAsync({
                            groupId,
                            userId,
                            role: DB.Role.Member,
                        });
                        Store.groups.registerItem(updatedGroup);
                        toast.info('User is no longer admin');
                        break;
                    }
                    case UserAction.PromoteToAdmin: {
                        const updatedGroup = await changeParticipantRole.mutateAsync({
                            groupId,
                            userId,
                            role: DB.Role.Admin,
                        });
                        Store.groups.registerItem(updatedGroup);
                        toast.info('User is now admin');
                        break;
                    }
                    case UserAction.TransferOwnership: {
                        const updatedGroup = await changeParticipantRole.mutateAsync({
                            groupId,
                            userId,
                            role: DB.Role.Owner,
                        });
                        Store.groups.registerItem(updatedGroup);
                        toast.info('Ownership transferred');
                        break;
                    }
                    case UserAction.RemoveFromGroup: {
                        setRemovingUserId(userId);
                        break;
                    }
                }
            } catch {
                toast.error('Something went wrong');
            }
        };

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
                                            Tap to copy invite link
                                        </Typography>
                                        <Typography variant="subtitle1" color="accent.light">
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

                        <Stack
                            column
                            bg="background.elevation1"
                            br="xl"
                            style={{ overflow: 'hidden' }}
                        >
                            {isAdmin && (
                                <>
                                    <Stack p="xl" row alignCenter spacing="sm">
                                        <Icon
                                            name="Info"
                                            size={12}
                                            color={(theme) => theme.palette.text.hint}
                                        />
                                        <Typography variant="caption" color="hint" align="center">
                                            Long press to edit users
                                        </Typography>
                                    </Stack>
                                    <Divider horizontal color="background.main" />
                                </>
                            )}
                            {sortedParticipants.map((participant, index) => (
                                <React.Fragment key={participant.id}>
                                    <ContextMenu
                                        title="Edit user"
                                        borderRadius={theme.borderRadius.xl}
                                        actions={getUserActions(participant)}
                                        onPress={(action) => {
                                            handleAction(
                                                participant.id,
                                                action.nativeEvent.name as UserAction
                                            );
                                        }}
                                        disabled={!isAdmin}
                                    >
                                        <Stack
                                            row
                                            alignCenter
                                            p="xl"
                                            spacing="xl"
                                            bg="background.elevation1"
                                        >
                                            <Avatar userId={participant.id} size="lg" />
                                            <Stack column flex={1}>
                                                {isUserOwner(participant.id) ? (
                                                    <Typography
                                                        variant="caption"
                                                        color="accent.light"
                                                    >
                                                        <Icon
                                                            name="Star"
                                                            size={12}
                                                            color={(t) => t.palette.accent.light}
                                                        />
                                                        {' Owner'}
                                                    </Typography>
                                                ) : isUserAdmin(participant.id) ? (
                                                    <Typography
                                                        variant="caption"
                                                        color="accent.light"
                                                    >
                                                        <Icon
                                                            name="Key"
                                                            size={12}
                                                            color={(t) => t.palette.accent.light}
                                                        />
                                                        {' Admin'}
                                                    </Typography>
                                                ) : null}
                                                <Typography variant="subtitle1">
                                                    <UserName
                                                        userId={participant.id}
                                                        variant="full"
                                                    />
                                                </Typography>
                                                {presentUserIds.includes(participant.id) ? (
                                                    <Typography
                                                        variant="caption"
                                                        color="primary.light"
                                                    >
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
                                            {isAdmin && <Stack row center></Stack>}
                                        </Stack>
                                    </ContextMenu>
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
                            </Stack>
                        )}
                        <Stack mt="3xl" spacing="xl">
                            <Typography variant="h6">Danger zone</Typography>
                            {isOwner && (
                                <Typography variant="caption" color="hint">
                                    You are the owner of this group. To leave the group, you must
                                    first transfer ownership to another user.
                                </Typography>
                            )}
                            <Button
                                color="error"
                                variant="outlined"
                                onPress={() => setRemovingUserId(currentUser.id)}
                                disabled={isOwner}
                            >
                                Leave group
                            </Button>
                            {isOwner && (
                                <>
                                    <Button color="error" onPress={() => setDeleting(true)}>
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
                    </Stack>
                </Screen.Content>
                {removingUserId ? (
                    <RemoveUserSheet
                        userId={removingUserId}
                        onClose={() => setRemovingUserId(null)}
                    />
                ) : null}
            </Screen>
        );
    })
);
