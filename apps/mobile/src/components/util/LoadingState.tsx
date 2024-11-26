import { ActivityIndicator } from 'react-native';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type LoadingStateProps = {
    message?: string;
};

export const LoadingState = (props: LoadingStateProps) => {
    return (
        <Stack flex={1} center spacing="md">
            <ActivityIndicator />
            <Typography variant="caption">{props.message}</Typography>
        </Stack>
    );
};
