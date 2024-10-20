import { Button } from './components/Button';
import { Screen } from './components/Screen';
import { Stack } from './components/Stack';
import { TextField } from './components/TextField';
import { Typography } from './components/Typography';

export const Home = () => {
    return (
        <Screen enableTopInset>
            <Screen.ContentFixed>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Welcome to JShare
                    </Typography>
                </Stack>
                <Stack spacing="md">
                    <TextField />

                    <Button variant="contained" color="primary">
                        Continue
                    </Button>
                </Stack>
            </Screen.ContentFixed>
        </Screen>
    );
};
