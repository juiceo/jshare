import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { reloadAppAsync } from 'expo';
import { observer } from 'mobx-react-lite';

import { SUPPORT_EMAIL } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { DeleteConfirmation } from '~/components/DeleteConfirmation';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { resetStores } from '~/lib/store/collections';
import { trpc } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';
import { useSession } from '~/wrappers/SessionProvider';

export default screen(
    observer(() => {
        const { signOut } = useSession();

        const deleteAccount = useMutation(trpc.profiles.delete.mutationOptions());

        const [isDeleting, setDeleting] = useState<boolean>(false);

        const handleDeleteAccount = async () => {
            await deleteAccount.mutateAsync();
            signOut();
        };

        const handleClearLocalData = async () => {
            await resetStores();
            reloadAppAsync();
        };

        return (
            <Screen>
                <Screen.Header title="Settings" />
                <Screen.Content scrollable disableTopInset>
                    <Stack p="xl" spacing="md">
                        <Typography m="md" variant="h5">
                            Local data
                        </Typography>
                        <Stack p="xl" bg="background.elevation1" br="xl">
                            <Typography variant="body1" mb="xl">
                                JShare stores data on your device to improve performance, reduce
                                data usage and provide offline capabilities. If you are experiencing
                                issues, press below to clear any local data and reload the app.
                            </Typography>
                            <Button variant="ghost" onPress={handleClearLocalData}>
                                Clear local data
                            </Button>
                        </Stack>

                        <Typography m="md" variant="h5" mt="2xl">
                            Account
                        </Typography>
                        <Stack p="xl" bg="background.elevation1" br="xl">
                            <Typography>
                                To request an export of your account information, please send an
                                email to{' '}
                                <Typography color="accent.light">{SUPPORT_EMAIL}</Typography>
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
    })
);
