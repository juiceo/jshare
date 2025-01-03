import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { useTheme, type Theme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';

export type ExpenseShareStatusButtonProps = {
    status: 'active' | 'inactive' | 'locked';
    onPress: () => void;
};

export const ExpenseShareStatusButton = (props: ExpenseShareStatusButtonProps) => {
    const { status, onPress } = props;
    const { theme } = useTheme();
    const styles = getStyles(theme);

    return (
        <RectButton
            style={styles.wrapper}
            underlayColor={theme.palette.primary.light}
            onPress={onPress}
        >
            <Stack row center>
                {status === 'inactive' && (
                    <Icon name="Circle" size={32} color={theme.palette.text.disabled} />
                )}
                {status === 'active' && (
                    <Icon name="CircleCheck" size={32} color={theme.palette.primary.light} />
                )}
                {status === 'locked' ? (
                    <Icon name="Lock" size={32} color={theme.palette.primary.light} />
                ) : (
                    <Icon name="LockOpen" size={32} color={theme.palette.primary.light} />
                )}
            </Stack>
        </RectButton>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        wrapper: {
            borderRadius: 9999,
        },
    });
};
