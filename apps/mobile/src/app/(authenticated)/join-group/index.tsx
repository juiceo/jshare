import { useState } from 'react';
import { useRouter } from 'expo-router';

import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { screen } from '~/wrappers/screen';

const JoinGroupScreen = screen(() => {
    const router = useRouter();
    const [code, setCode] = useState<string>('');

    return (
        <Screen>
            <Screen.Header title="Join group" backButton="down" />
            <Screen.Content scrollable>
                <Stack column center spacing="2xl" flex={1} p="2xl">
                    <Typography variant="h4">Join group with invite code</Typography>
                    <TextField
                        TextInputProps={{
                            placeholder: 'Enter your invite code',
                            textAlign: 'center',
                        }}
                        value={code}
                        onChange={setCode}
                    />
                    <Typography variant="caption" color="hint" align="center">
                        Don't have a code? Ask someone from the group to share it with you.
                    </Typography>
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Button
                    color="primary"
                    variant="contained"
                    onPress={() => {
                        router.push({
                            pathname: '/join-group/[code]',
                            params: { code },
                        });
                    }}
                    disabled={!code}
                >
                    Continue
                </Button>
            </Screen.Footer>
        </Screen>
    );
});

export default JoinGroupScreen;
