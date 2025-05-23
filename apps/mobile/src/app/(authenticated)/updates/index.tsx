import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import * as Updates from 'expo-updates';
import { observer } from 'mobx-react-lite';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { toast } from '~/state/toast';
import { screen } from '~/wrappers/screen';

const UpdatesScreen = screen(
    observer(() => {
        const updates = Updates.useUpdates();
        const [isInstalling, setInstalling] = useState<boolean>(false);

        useEffect(() => {
            Updates.checkForUpdateAsync();
        }, []);

        const installUpdate = () => {
            setInstalling(true);
            Updates.fetchUpdateAsync()
                .then(() => {
                    Updates.reloadAsync();
                })
                .catch(() => {
                    toast.error('Failed to install update');
                })
                .finally(() => {
                    setInstalling(false);
                });
        };

        return (
            <Screen>
                <Screen.Header title="Updates" blur />
                <Screen.Content scrollable disableTopInset>
                    <Stack p="xl" spacing="md">
                        <Stack p="xl" bg="background.secondary" br="xl">
                            <Stack column spacing="3xl">
                                <Stack>
                                    <Typography variant="h5">Current version</Typography>
                                    <Typography color="secondary">
                                        App version: {updates.currentlyRunning.runtimeVersion}
                                    </Typography>
                                    <Typography color="secondary">
                                        Last updated:{' '}
                                        {dayjs(updates.currentlyRunning.createdAt).format(
                                            'DD/MM/YYYY HH:mm'
                                        )}
                                    </Typography>
                                </Stack>

                                {updates.isUpdateAvailable || updates.isUpdatePending ? (
                                    <Stack column>
                                        <Typography variant="h5">Update available</Typography>
                                        <Typography color="secondary">
                                            A new version of the app is available.
                                        </Typography>
                                        <Button
                                            mt="xl"
                                            color="primary"
                                            loading={isInstalling}
                                            onPress={installUpdate}
                                        >
                                            {isInstalling
                                                ? 'Installing update...'
                                                : 'Install update'}
                                        </Button>
                                    </Stack>
                                ) : (
                                    <Stack column>
                                        <Typography variant="h5">No updates available</Typography>
                                        <Typography color="secondary">
                                            Your app is up to date. Check back later.
                                        </Typography>
                                        <Button
                                            mt="xl"
                                            color="secondary"
                                            loading={updates.isChecking}
                                        >
                                            Check for updates
                                        </Button>
                                    </Stack>
                                )}
                            </Stack>
                        </Stack>

                        <Typography variant="h3" mt="2xl" align="center">
                            Changelog
                        </Typography>
                        <Stack column spacing="3xl" mt="3xl">
                            <Stack>
                                <Typography variant="caption" color="tertiary">
                                    May 20th, 2025
                                </Typography>
                                <Typography variant="h4" mb="xl" color="brand.primary">
                                    Improved user management
                                </Typography>
                                <Typography variant="body1" color="secondary">
                                    Group owners and admins can now promote other users to group
                                    admins, and remove users from the group. You can now also leave
                                    groups yourself! When a user leaves or is removed from a group,
                                    you must choose which other member to transfer their balance to.
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="caption" color="tertiary">
                                    May 12th, 2025
                                </Typography>
                                <Typography variant="h4" mb="xl" color="brand.primary">
                                    Added support for invite links
                                </Typography>
                                <Typography variant="body1" color="secondary">
                                    You can now easily invite friends to join your group by just
                                    sharing a link with them!
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="caption" color="tertiary">
                                    May 8th, 2025
                                </Typography>
                                <Typography variant="h4" mb="xl" color="brand.primary">
                                    Introducing offline mode!
                                </Typography>
                                <Typography variant="body1" color="secondary">
                                    JShare now supports offline mode! You can now use the app
                                    without an internet connection, and all of your changes will be
                                    synced when you come back online. This update also greatly
                                    reduces data usage and improves performance of the app.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    })
);

export default UpdatesScreen;
