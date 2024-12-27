import { View } from 'react-native';
import { useRouter } from 'expo-router';

import { Stack } from '~/components/atoms/Stack';
import { type IconName } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Typography } from '~/components/Typography';

export type HeaderProps = {
    title: string;
    backButtonStyle?: 'back' | 'close' | 'down';
};

export const Header = (props: HeaderProps) => {
    const { title, backButtonStyle = 'back' } = props;
    const router = useRouter();

    const backIcon = ((): IconName => {
        switch (backButtonStyle) {
            case 'back': {
                return 'ChevronLeft';
            }
            case 'close': {
                return 'X';
            }
            case 'down':
                return 'ChevronDown';
        }
    })();
    return (
        <Stack row spacing="xl" width="100%">
            <IconButton variant="ghost" onPress={() => router.dismiss()} icon={backIcon} />
            <Stack center flex={1}>
                <Typography variant="h5">{title}</Typography>
            </Stack>
            <View style={{ width: 48 }}>
                {/* <IconButton variant={buttonVariant} onPress={() => {}} icon="Ellipsis" /> */}
            </View>
        </Stack>
    );
};
