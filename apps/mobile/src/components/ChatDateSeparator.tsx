import { formatDateRelative } from '@jshare/common';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type ChatDateSeparatorProps = {
    date: string;
};

export const ChatDateSeparator = (props: ChatDateSeparatorProps) => {
    return (
        <Stack center p="2xl">
            <Box bg="background.main" px="sm" br="lg">
                <Typography variant="h5" style={{ lineHeight: 0 }}>
                    {formatDateRelative(props.date)}
                </Typography>
            </Box>
        </Stack>
    );
};
