import { useState, type ReactNode } from 'react';

import { FormControl, type FormControlProps } from '~/components/atoms/FormControl';
import { Menu, type MenuOption, type MenuProps } from '~/components/atoms/Menu';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type SelectProps<T extends string, TData = undefined> = {
    value: T | undefined;
    onChange: (value: T | undefined, data: TData) => void;
    placeholder?: string;
    options: MenuOption<T, TData>[];
    renderValue?: (value: T, data: TData) => ReactNode;
    MenuProps?: Pick<MenuProps<T, TData>, 'title'>;
} & Omit<FormControlProps, 'focused' | 'onPress'>;

export const Select = <T extends string, TData = undefined>(props: SelectProps<T, TData>) => {
    const { value, onChange, placeholder, options, MenuProps, renderValue, ...formControlProps } =
        props;
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleSelect = (id: T, data: TData) => {
        onChange(id, data);
        setOpen(false);
    };

    const selectedItem = options.find((item) => item.id === value);

    return (
        <>
            <FormControl
                {...formControlProps}
                onPress={() => setOpen(true)}
                focused={isOpen}
                endAdornment={
                    <Icon name="ChevronDown" color={(theme) => theme.palette.text.hint} />
                }
            >
                {renderValue && selectedItem ? (
                    renderValue(selectedItem.id, selectedItem.data)
                ) : (
                    <Typography variant="body1" color={selectedItem ? 'primary' : 'disabled'}>
                        {selectedItem?.label ?? placeholder}
                    </Typography>
                )}
            </FormControl>
            <Menu
                {...MenuProps}
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                options={options}
                value={value}
                onChange={handleSelect}
            />
        </>
    );
};
