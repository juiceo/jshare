import { useLocalSearchParams } from 'expo-router';

import { Button } from '../../../components/Button';
import { Screen } from '../../../components/Screen';
import { Stack } from '../../../components/Stack';
import { Typography } from '../../../components/Typography';

export default function VerifyLogin() {
    const { phoneNumber } = useLocalSearchParams<{ phoneNumber: string }>();
    return (
        <Screen name="Verify" backButtonLabel="Back">
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Enter code
                    </Typography>
                    <Typography variant="body1" align="center">
                        Please enter the 6-digit code sent to
                    </Typography>
                    <Typography variant="body1" align="center">
                        {phoneNumber}
                    </Typography>
                </Stack>
                <Button color="primary" variant="contained" disabled>
                    Continue
                </Button>
            </Screen.Content>
        </Screen>
    );
}
