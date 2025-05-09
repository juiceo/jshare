import { observer } from 'mobx-react-lite';

import { Stack } from '~/components/atoms/Stack';
import { Switch } from '~/components/atoms/Switch';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { SystemStore } from '~/lib/store/SystemStore';
import { screen } from '~/wrappers/screen';

export default screen(
    observer(() => {
        return (
            <Screen>
                <Screen.Header title="Developer settings" />
                <Screen.Content scrollable disableTopInset>
                    <Stack p="xl" spacing="md">
                        <Stack
                            p="xl"
                            bg="background.elevation1"
                            br="xl"
                            row
                            justifyBetween
                            alignCenter
                        >
                            <Typography variant="h5">Simulate offline mode</Typography>
                            <Switch
                                checked={!SystemStore.isConnected}
                                onChange={(v) => SystemStore.setConnected(!v)}
                            />
                        </Stack>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    })
);
