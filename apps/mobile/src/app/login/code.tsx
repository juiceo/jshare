import { Stack } from '../../components/atoms/Stack';
import { Typography } from '../../components/atoms/Typography';
import { Screen } from '../../components/Screen';

export default function Page() {
    return (
        <Screen name="Verify" backButtonLabel="Back">
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Please enter login code
                    </Typography>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
