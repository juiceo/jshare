import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { useTheme } from '@jshare/theme';

import Icon, { type IconName } from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type HeaderProps = {
    title: string;
    backButtonStyle?: 'back' | 'close';
};

export const Header = (props: HeaderProps) => {
    const { title, backButtonStyle = 'back' } = props;
    const router = useRouter();
    const { theme } = useTheme();

    const backIcon = ((): IconName => {
        switch (backButtonStyle) {
            case 'back': {
                return 'ChevronLeft';
            }
            case 'close': {
                return 'X';
            }
        }
    })();
    return (
        <Stack row spacing="xl" width="100%" p="xl">
            <Pressable onPress={() => router.dismiss()}>
                <Stack height={48} width={48} bg="background.elevation1" br="xl" center>
                    <Icon name={backIcon} size={16} />
                </Stack>
            </Pressable>
            <Stack center flex={1}>
                <Typography variant="h5">{title}</Typography>
            </Stack>
            <Pressable>
                <Stack height={48} width={48} bg="background.elevation1" br="xl" center>
                    <Icon name="Ellipsis" size={16} />
                </Stack>
            </Pressable>
        </Stack>
    );
};
