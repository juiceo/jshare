import { useState } from 'react';
import dayjs from 'dayjs';
import * as Updates from 'expo-updates';

import { Stack } from '~/components/atoms/Stack';
import { Switch } from '~/components/atoms/Switch';
import { Button } from '~/components/Button';
import { DeleteConfirmation } from '~/components/DeleteConfirmation';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/lib/trpc';
import { toast } from '~/state/toast';
import { screen } from '~/wrappers/screen';

export default screen({ auth: true }, ({ router, auth }) => {
    const [profile] = trpc.profiles.get.useSuspenseQuery({ id: auth.userId });

    const updates = Updates.useUpdates();
    const deleteAccount = trpc.profiles.delete.useMutation();
    const [isDeleting, setDeleting] = useState<boolean>(false);

    const checkForUpdates = () => {
        Updates.checkForUpdateAsync().then((result) => {
            if (result.isAvailable) {
                Updates.fetchUpdateAsync();
                Updates.reloadAsync();
            } else {
                toast.info('Your app version is up to date!');
            }
        });
    };

    const handleDeleteAccount = async () => {
        await deleteAccount.mutateAsync();
        auth.signOut();
        router.replace('/login');
    };
    return (
        <Screen>
            <Screen.Header title="Settings" />
            <Screen.Content scrollable disableTopInset>
                <Stack p="xl" spacing="md">
                    <Typography m="md" variant="h5">
                        Privacy settings
                    </Typography>
                    <Stack column bg="background.elevation1" br="xl">
                        <Stack row alignCenter spacing="xl" p="xl">
                            <Typography flex={1}>Show me in search</Typography>
                            <Switch
                                checked={profile?.showInSearch ?? false}
                                onChange={(checked) => {
                                    /**
                                     * TODO: Update profile
                                     */
                                }}
                            />
                        </Stack>
                    </Stack>

                    <Typography m="md" variant="h5" mt="2xl">
                        App information
                    </Typography>
                    <Stack p="xl" bg="background.elevation1" br="xl">
                        <Stack>
                            <Typography>
                                App version: {updates.currentlyRunning.runtimeVersion}
                            </Typography>
                            <Typography>
                                Last updated:{' '}
                                {dayjs(updates.currentlyRunning.createdAt).format(
                                    'DD/MM/YYYY HH:mm'
                                )}
                            </Typography>
                        </Stack>
                        {!updates.isUpdatePending && (
                            <Button
                                size="md"
                                color="secondary"
                                variant="contained"
                                mt="xl"
                                onPress={checkForUpdates}
                                loading={updates.isChecking}
                            >
                                {updates.isChecking
                                    ? 'Checking for updates...'
                                    : updates.isDownloading
                                      ? 'Downloading update...'
                                      : 'Check for updates'}
                            </Button>
                        )}
                        {updates.isUpdatePending && (
                            <Stack spacing="md">
                                <Button size="md" color="primary">
                                    Install update
                                </Button>
                            </Stack>
                        )}
                    </Stack>

                    <Typography m="md" variant="h5" mt="2xl">
                        Account
                    </Typography>
                    <Stack p="xl" bg="background.elevation1" br="xl">
                        <Typography>
                            To request an export of your account information, please send an email
                            to <Typography color="accent.light">support@jshare.me</Typography>
                        </Typography>
                        <Typography mt="xl">
                            If you wish to permanently delete your account, click below to begin
                            account deletion.
                        </Typography>
                        <Button
                            color="error"
                            variant="ghost"
                            mt="xl"
                            onPress={() => setDeleting(true)}
                        >
                            Delete account
                        </Button>
                    </Stack>
                </Stack>

                <DeleteConfirmation
                    isOpen={isDeleting}
                    onClose={() => setDeleting(false)}
                    onConfirm={handleDeleteAccount}
                    title="Delete account?"
                    description="Your account will be permanently deleted, all related data unlinked and anonymized, and you will be signed out. This action cannot be undone."
                    confirmPhrase={'DELETE'}
                    loading={deleteAccount.isPending}
                />
            </Screen.Content>
        </Screen>
    );
});
