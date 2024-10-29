import { RectButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { useTheme } from '@jshare/theme';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Divider } from '~/components/atoms/Divider';
import Icon from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type MenuProps<T extends string> = {
    value?: T | undefined;
    isOpen: boolean;
    onClose: () => void;
    onChange: (value: T) => void;
    options: {
        id: T;
        label: string;
        secondary?: string;
    }[];
};

export const Menu = <T extends string>(props: MenuProps<T>) => {
    const { isOpen, value, onChange, onClose, options } = props;
    const insets = useSafeAreaInsets();

    const handleSelect = (id: T) => {
        onChange(id);
        onClose();
    };

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            <BottomSheetFlatList
                data={options}
                contentContainerStyle={{ paddingBottom: insets.bottom }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <MenuItem
                            label={item.label}
                            secondary={item.secondary}
                            selected={item.id === value}
                            onSelect={() => handleSelect(item.id)}
                        />
                    );
                }}
                ItemSeparatorComponent={() => <Divider horizontal />}
            />
        </BottomSheet>
    );
};

type MenuItemProps = {
    label: string;
    secondary?: string;
    selected: boolean;
    onSelect: () => void;
};
const MenuItem = (props: MenuItemProps) => {
    const { theme } = useTheme();
    return (
        <RectButton onPress={props.onSelect}>
            <Stack row>
                <Stack column p="xl" flex={1}>
                    <Typography variant="body1">{props.label}</Typography>
                    {props.secondary && (
                        <Typography variant="caption">{props.secondary}</Typography>
                    )}
                </Stack>
                <Stack center px="xl">
                    <Icon
                        name="CheckCheck"
                        color={theme.palette.accent.main}
                        style={{ opacity: props.selected ? 1 : 0 }}
                    />
                </Stack>
            </Stack>
        </RectButton>
    );
};
