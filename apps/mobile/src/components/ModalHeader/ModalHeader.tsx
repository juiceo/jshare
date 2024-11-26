import { Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';

import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ModalHeaderProps = {
    title: string;
};

export const ModalHeader = (props: ModalHeaderProps) => {
    const { title } = props;
    const router = useRouter();
    return (
        <Stack py="2xl" style={{ position: 'relative' }}>
            <Stack row alignCenter>
                <Pressable style={{ width: 24 }} onPress={() => router.dismiss()} hitSlop={32}>
                    <Icon name="ChevronDown" />
                </Pressable>
                <Typography variant="h4" align="center" flex={1}>
                    {title}
                </Typography>
                <View style={{ width: 24 }} />
            </Stack>
        </Stack>
    );
};
