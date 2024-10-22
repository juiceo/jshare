import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';

export default function OmboardingPage() {
    return (
        <Screen name="Welcome">
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Let's complete your profile!
                    </Typography>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
