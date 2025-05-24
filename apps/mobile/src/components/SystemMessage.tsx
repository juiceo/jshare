import { BlurView } from 'expo-blur';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';
import { TagText } from '~/components/util/TagText';
import type { Docs } from '~/lib/store/collections';

export type SystemMessageProps = {
    message: Docs.Message;
};

export const SystemMessage = (props: SystemMessageProps) => {
    return props.message.data.text ? (
        <BlurView>
            <Stack center py="sm" px="md" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} br="2xl">
                <Typography variant="caption" align="center" color="secondary">
                    <TagText text={props.message.data.text} />
                </Typography>
            </Stack>
        </BlurView>
    ) : null;
};
