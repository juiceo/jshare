import { Alert, Pressable } from 'react-native';
import { X } from 'lucide-react-native';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type ModalHeaderProps = {
    title: string;
};

export const ModalHeader = (props: ModalHeaderProps) => {
    const { title } = props;
    return (
        <Stack p="3xl" style={{ position: 'relative' }}>
            <Stack style={{ position: 'absolute', top: 0, left: 0 }} p="md">
                <Pressable onPress={() => Alert.alert('Closing!')}>
                    <X size={26} color="white" />
                </Pressable>
            </Stack>
            <Typography variant="h3" align="center">
                {title}
            </Typography>
        </Stack>
    );
};
