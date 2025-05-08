import { RectButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { useTheme } from '@jshare/theme';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { Icon, type IconName } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type MenuOption<ID extends string, TData = undefined> = {
    id: ID;
    data: TData;
    label: string;
    secondary?: string;
    icon?: IconName | JSX.Element;
    hidden?: boolean;
};

export type MenuProps<ID extends string, TData = undefined> = {
    value?: ID | undefined;
    isOpen: boolean;
    onClose: () => void;
    onChange: (value: ID, data: TData) => void;
    options: MenuOption<ID, TData>[];
    title?: string;
};

export const Menu = <T extends string, TData = undefined>(props: MenuProps<T, TData>) => {
    const { isOpen, value, onChange, onClose, options, title } = props;
    const insets = useSafeAreaInsets();

    const handleSelect = (id: T, data: TData) => {
        onChange(id, data);
        onClose();
    };

    return (
        <BottomSheet isOpen={isOpen} onClose={onClose}>
            <BottomSheetFlatList
                data={options}
                contentContainerStyle={{ paddingBottom: insets.bottom }}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    title
                        ? () => (
                              <Stack center p="xl">
                                  <Typography variant="h5">{title}</Typography>
                              </Stack>
                          )
                        : null
                }
                renderItem={({ item }) => {
                    if (item.hidden) return null;
                    return (
                        <MenuItem
                            label={item.label}
                            secondary={item.secondary}
                            selected={item.id === value}
                            icon={item.icon}
                            onSelect={() => handleSelect(item.id, item.data)}
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
    icon?: IconName | JSX.Element;
    onSelect: () => void;
};
export const MenuItem = (props: MenuItemProps) => {
    const { theme } = useTheme();
    return (
        <RectButton onPress={props.onSelect}>
            <Stack row alignCenter p="xl" spacing="xl">
                {props.icon && typeof props.icon === 'string' && <Icon name={props.icon} />}
                {props.icon && typeof props.icon !== 'string' && props.icon}
                <Stack column flex={1}>
                    <Typography variant="body1">{props.label}</Typography>
                    {props.secondary && (
                        <Typography variant="caption" color="hint">
                            {props.secondary}
                        </Typography>
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
