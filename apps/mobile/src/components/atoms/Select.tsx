import { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { CheckCircle, ChevronDown } from 'lucide-react-native';

import { useTheme } from '@jshare/theme';

import { BottomSheet } from '~/components/atoms/BottomSheet';
import { Divider } from '~/components/atoms/Divider';
import { FormControl, type FormControlProps } from '~/components/atoms/FormControl';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';

export type SelectProps<T extends string> = {
    value: T | undefined;
    onChange: (value: T | undefined) => void;
    placeholder?: string;
    options: {
        id: T;
        label: string;
        secondary?: string;
    }[];
} & Omit<FormControlProps, 'focused' | 'onPress'>;

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { value, onChange, placeholder, options, ...formControlProps } = props;
    const [isOpen, setOpen] = useState<boolean>(false);
    const insets = useSafeAreaInsets();
    const { theme } = useTheme();

    const handleSelect = (id: T) => {
        onChange(id);
        setOpen(false);
    };

    const selectedItem = options.find((item) => item.id === value);

    return (
        <>
            <FormControl
                {...formControlProps}
                onPress={() => setOpen(true)}
                focused={isOpen}
                endAdornment={<ChevronDown color={theme.palette.text.primary} />}
            >
                <Typography variant="body1" color={selectedItem ? 'primary' : 'disabled'}>
                    {selectedItem?.label ?? placeholder}
                </Typography>
            </FormControl>
            <BottomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
                <BottomSheetFlatList
                    data={options}
                    contentContainerStyle={{ paddingBottom: insets.bottom }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <SelectItem
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
        </>
    );
};

type SelectItemProps = {
    label: string;
    secondary?: string;
    selected: boolean;
    onSelect: () => void;
};
const SelectItem = (props: SelectItemProps) => {
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
                    <CheckCircle
                        size={24}
                        color={theme.palette.accent.main}
                        style={{ opacity: props.selected ? 1 : 0 }}
                    />
                </Stack>
            </Stack>
        </RectButton>
    );
};
