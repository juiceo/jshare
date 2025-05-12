import { BlurView } from 'expo-blur';
import * as Clipboard from 'expo-clipboard';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Typography } from '~/components/Typography';
import { toast } from '~/state/toast';

export const CopyInviteCodeBlock = (props: { code: string }) => {
    const handleCopy = async () => {
        const link = `https://app.jshare.me/l/invite/${props.code}`;
        await Clipboard.setStringAsync(link);
        toast.info('Invite link copied!');
    };

    return (
        <Stack p="2xl">
            <BlurView style={{ flex: 1 }} intensity={30}>
                <Stack
                    p="xl"
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                    br="xl"
                    center
                >
                    <Typography variant="h4" align="center">
                        It's lonely in here! 👀
                    </Typography>
                    <Typography variant="body1" align="center">
                        Invite your friends to join the group by sharing this invite code:
                    </Typography>
                    <Typography variant="subtitle1" color="accent.light" my="2xl">
                        {props.code}
                    </Typography>
                    <Button size="sm" color="primary" onPress={handleCopy}>
                        Copy link
                    </Button>
                </Stack>
            </BlurView>
        </Stack>
    );
};
