import { Alert, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronDown } from 'lucide-react-native';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type ModalHeaderProps = {
    title: string;
};

export const ModalHeader = (props: ModalHeaderProps) => {
    const { title } = props;
    const router = useRouter();
    return (
        <Stack py="2xl" style={{ position: 'relative', backgroundColor: 'blue' }}>
            <Stack row alignCenter>
                <Pressable
                    style={{ width: 24, backgroundColor: 'red' }}
                    onPress={() => router.dismiss()}
                >
                    <ChevronDown size={24} color="white" />
                </Pressable>
                <Typography variant="button" align="center" flex={1}>
                    {title}
                </Typography>
                <View style={{ width: 40 }} />
            </Stack>
        </Stack>
    );
};
