import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import dayjs from 'dayjs';
import * as Updates from 'expo-updates';
import { observer } from 'mobx-react-lite';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { toast } from '~/state/toast';
import { screen } from '~/wrappers/screen';

export default screen(
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
                <Screen.Header title="Updates" />
                <Screen.Content scrollable disableTopInset>
                    <Stack p="xl" spacing="md">
                        <Stack p="xl" bg="background.elevation1" br="xl">
                            <Stack column spacing="3xl">
                                <Stack>
                                    <Typography variant="h5">Current version</Typography>
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

                                {updates.isUpdateAvailable || updates.isUpdatePending ? (
                                    <Stack column>
                                        <Typography variant="h5">Update available</Typography>
                                        <Typography>
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
                                        <Typography>
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
                                <Typography variant="caption" color="hint">
                                    May 12th, 2025
                                </Typography>
                                <Typography variant="h4" mb="xl" color="accent.light">
                                    Added support for invite links
                                </Typography>
                                <Typography variant="body1">
                                    You can now easily invite friends to join your group by just
                                    sharing a link with them!
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography variant="caption" color="hint">
                                    May 8th, 2025
                                </Typography>
                                <Typography variant="h4" mb="xl" color="accent.light">
                                    Introducing offline mode!
                                </Typography>
                                <Typography variant="body1">
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
