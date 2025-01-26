import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/join-group/[code]',
        loadingMessage: 'Checking code...',
    },
    ({ router, params }) => {
        const [group] = trpc.groups.getByCode.useSuspenseQuery({ code: params.code });

        const handleJoin = async () => {};

        return (
            <Screen>
                <Screen.Header title="Join group" backButton="back" disableInset />
                <Screen.Content>
                    {group ? (
                        <Stack column center flex={1} p="2xl" spacing="md">
                            <Image
                                image={group.coverImage}
                                width={200}
                                height={200}
                                background="background.elevation1"
                                br="full"
                            />
                            <Typography variant="h4">{group.name}</Typography>
                            <Typography variant="caption" color="hint" align="center">
                                {group.participants.length} members
                            </Typography>
                        </Stack>
                    ) : (
                        <Stack column center spacing="2xl" flex={1} p="2xl">
                            <Typography variant="h4">Invalid code</Typography>
                        </Stack>
                    )}
                </Screen.Content>
                <Screen.Footer>
                    {group ? (
                        <Button
                            color="primary"
                            variant="contained"
                            onPress={() => {
                                router.replace('/profile');
                            }}
                        >
                            Join group
                        </Button>
                    ) : (
                        <Button color="secondary" variant="contained" onPress={router.back}>
                            Go back
                        </Button>
                    )}
                </Screen.Footer>
            </Screen>
        );
    }
);
