import { BlurView } from 'expo-blur';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type SystemMessageProps = {
    text: string;
    timestamp: Date;
};

export const SystemMessage = (props: SystemMessageProps) => {
    return (
        <BlurView>
            <Stack center py="sm" px="md" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} br="2xl">
                <Typography>{props.text}</Typography>
            </Stack>
        </BlurView>
    );
};
