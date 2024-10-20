import { Screen } from '../../components/Screen';
import { Stack } from '../../components/Stack';
import { Typography } from '../../components/Typography';

export default function Page() {
    return (
        <Screen name="Verify" backButtonLabel="Back">
            <Screen.ContentFixed>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Please enter login code
                    </Typography>
                </Stack>
            </Screen.ContentFixed>
        </Screen>
    );
}
