import { useRouter } from 'expo-router';

import { Button } from '~/components/atoms/Button';
import Icon from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { ProfileBadge } from '~/components/ProfileBadge/ProfileBadge';
import { Screen } from '~/components/Screen';

export default function HomePage() {
    const router = useRouter();

    return (
        <Screen disableBottomInset>
            <Screen.Content scrollable>
                <Stack column px="xl" pt="3xl">
                    <Stack row justifyBetween>
                        <ProfileBadge onPress={() => router.push('/profile')} />
                        <Stack row center spacing="xl">
                            <Icon name="Search" />
                            <Icon name="Bell" />
                        </Stack>
                    </Stack>
                    <Stack row height={140} mt="3xl">
                        <Stack column justifyCenter>
                            <Typography variant="overline" mb="md">
                                Your balance
                            </Typography>
                            <Typography variant="h1">$13,370.86</Typography>
                        </Stack>
                        <Stack
                            bg="error.light"
                            br="2xl"
                            height="100%"
                            width={200}
                            style={{ position: 'relative', right: -50 }}
                        />
                    </Stack>
                    <Stack mt="3xl" bg="background.elevation1" p="xl" br="xl">
                        <Stack row alignCenter justifyBetween>
                            <Typography variant="overline">Your groups</Typography>
                            <Button
                                size="sm"
                                color="paper"
                                onPress={() => router.push('/create-group')}
                            >
                                New group
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
