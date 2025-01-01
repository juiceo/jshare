import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';

import { useTheme, type Theme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { type IconName } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { Typography } from '~/components/Typography';

export type HeaderProps = {
    title: string;
    backButtonStyle?: 'back' | 'close' | 'down';
    bordered?: boolean;
    modal?: boolean;
};

export const Header = (props: HeaderProps) => {
    const { title, backButtonStyle = 'back' } = props;
    const router = useRouter();
    const { theme } = useTheme();
    const styles = getStyles(theme);

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

    const handleBackPress = () => {
        router.dismiss();
    };
    return (
        <Stack
            row
            spacing="xl"
            width="100%"
            style={[
                styles.base,
                props.bordered ? styles.bordered : undefined,
                props.modal ? styles.modal : undefined,
            ]}
        >
            <IconButton variant="ghost" onPress={handleBackPress} icon={backIcon} />
            <Stack center flex={1}>
                <Typography variant="h5">{title}</Typography>
            </Stack>
            <View style={{ width: 48 }}>
                {/* <IconButton variant={buttonVariant} onPress={() => {}} icon="Ellipsis" /> */}
            </View>
        </Stack>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        base: {
            padding: theme.spacing.xs,
        },
        bordered: {
            borderBottomWidth: 1,
            borderBottomColor: theme.palette.border.divider,
        },
        modal: {
            padding: theme.spacing.xl,
        },
    });
};
