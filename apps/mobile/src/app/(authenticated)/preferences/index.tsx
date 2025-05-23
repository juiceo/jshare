import { observer } from 'mobx-react-lite';

import { Stack } from '~/components/atoms/Stack';
import { Switch } from '~/components/atoms/Switch';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { screen } from '~/wrappers/screen';

export default screen(
    observer(() => {
        const user = SessionStore.user;
        const profile = Store.profiles.findById(user.id);

        return (
            <Screen>
                <Screen.Header title="Preferences" />
                <Screen.Content scrollable disableTopInset>
                    <Stack p="xl" spacing="md">
                        <Typography mx="md" variant="h5">
                            Notifications
                        </Typography>
                        <Stack bg="background.secondary" br="xl" p="xl" spacing="xl">
                            <Stack row alignCenter justifyBetween>
                                <Typography variant="h5">Enable notifications</Typography>
                                <Switch
                                    checked={profile?.data?.showInSearch ?? false}
                                    onChange={(checked) => {
                                        profile?.update({ showInSearch: checked });
                                    }}
                                />
                            </Stack>
                            <Typography variant="body2" color="secondary">
                                When enabled, JShare will send you notifications for new activity in
                                any groups you are a part of. More fine-grained control for
                                notifications is coming soon.
                            </Typography>
                        </Stack>
                        <Typography mx="md" variant="h5" mt="2xl">
                            Privacy
                        </Typography>
                        <Stack bg="background.secondary" br="xl" p="xl" spacing="xl">
                            <Stack row alignCenter justifyBetween>
                                <Typography variant="h5">Show me in search</Typography>
                                <Switch
                                    checked={profile?.data?.showInSearch ?? false}
                                    onChange={(checked) => {
                                        profile?.update({ showInSearch: checked });
                                    }}
                                />
                            </Stack>
                            <Typography variant="body2" color="secondary">
                                When enabled, other users will be able to find you in search and
                                easily add you to groups. Other users can see your name and avatar.
                            </Typography>
                        </Stack>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    })
);
