import { RectButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { useTheme } from '@jshare/theme';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Divider } from '~/components/atoms/Divider';
import Icon, { type IconName } from '~/components/atoms/Icon';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type MenuOption<T extends string> = {
    id: T;
    label: string;
    secondary?: string;
    icon?: IconName;
    hidden?: boolean;
};

export type MenuProps<T extends string> = {
    value?: T | undefined;
    isOpen: boolean;
    onClose: () => void;
    onChange: (value: T) => void;
    options: MenuOption<T>[];
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
                    if (item.hidden) return null;
                    return (
                        <MenuItem
                            label={item.label}
                            secondary={item.secondary}
                            selected={item.id === value}
                            icon={item.icon}
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
    icon?: IconName;
    onSelect: () => void;
};
const MenuItem = (props: MenuItemProps) => {
    const { theme } = useTheme();
    return (
        <RectButton onPress={props.onSelect}>
            <Stack row alignCenter p="xl" spacing="xl">
                {props.icon && <Icon name={props.icon} />}
                <Stack column flex={1}>
                    <Typography variant="body1">{props.label}</Typography>
                    {props.secondary && (
                        <Typography variant="caption">{props.secondary}</Typography>
                    )}
                </Stack>
                <Stack center pl="xl">
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
