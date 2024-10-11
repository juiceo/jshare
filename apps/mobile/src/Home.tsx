import { useTheme } from '@jshare/theme';

import { Button } from './components/Button';
import { Screen } from './components/Screen';
import { Stack } from './components/Stack';
import { Typography } from './components/Typography';

export const Home = () => {
    const { theme } = useTheme();
    return (
        <Screen>
            <Stack column justifyStart flex={1}>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Welcome to JShare
                    </Typography>
                </Stack>
                <Stack column spacing="md">
                    <Button variant="text" color="primary">
                        Log in
                    </Button>
                    <Button variant="contained" color="primary">
                        Create account
                    </Button>
                </Stack>
            </Stack>
        </Screen>
    );
};
