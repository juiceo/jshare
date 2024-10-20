import { useState } from 'react';

import { Button } from './components/Button';
import { Screen } from './components/Screen';
import { Stack } from './components/Stack';
import { TextField } from './components/TextField';
import { Typography } from './components/Typography';

export const Home = () => {
    const [phone, setPhone] = useState<string>('');
    return (
        <Screen enableTopInset>
            <Screen.ContentFixed>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Welcome to JShare
                    </Typography>
                </Stack>
                <Stack spacing="md">
                    <TextField
                        label="Phone number"
                        value={phone}
                        onChange={setPhone}
                        TextInputProps={{
                            placeholder: '+1 123 456 7890',
                            keyboardType: 'phone-pad',
                        }}
                    />
                    <Button variant="contained" color="primary">
                        Continue
                    </Button>
                </Stack>
            </Screen.ContentFixed>
        </Screen>
    );
};
