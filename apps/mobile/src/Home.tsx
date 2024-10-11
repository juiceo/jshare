import { useTheme } from '@jshare/theme';

import { Button } from './components/Button';
import { Screen } from './components/Screen';
import { Stack } from './components/Stack';
import { TextField } from './components/TextField';
import { Typography } from './components/Typography';

export const Home = () => {
    const { theme } = useTheme();
    return (
        <Screen>
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Welcome to JShare
                    </Typography>
                </Stack>
                <TextField />
            </Screen.Content>
            <Screen.Footer>
                <Button variant="contained" color="primary">
                    Continue
                </Button>
            </Screen.Footer>
        </Screen>
    );
};
