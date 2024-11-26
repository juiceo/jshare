import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type EmptyStateProps = {
    title?: string;
    message?: string;
};

export const EmptyState = (props: EmptyStateProps) => {
    return (
        <Stack flex={1} center>
            <Typography variant="h3" maxW="60%" align="center">
                {props.title}
            </Typography>
            <Typography variant="body1" maxW="60%" align="center">
                {props.message}
            </Typography>
        </Stack>
    );
};
