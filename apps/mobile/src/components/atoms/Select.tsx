import { useState } from 'react';

import { FormControl, type FormControlProps } from '~/components/atoms/FormControl';
import { Menu, type MenuProps } from '~/components/atoms/Menu';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type SelectProps<T extends string> = {
    value: T | undefined;
    onChange: (value: T | undefined) => void;
    placeholder?: string;
    options: {
        id: T;
        label: string;
        secondary?: string;
    }[];
    MenuProps?: Pick<MenuProps<any>, 'title'>;
} & Omit<FormControlProps, 'focused' | 'onPress'>;

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { value, onChange, placeholder, options, MenuProps, ...formControlProps } = props;
    const [isOpen, setOpen] = useState<boolean>(false);

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
                endAdornment={<Icon name="ChevronDown" />}
            >
                <Typography variant="body1" color={selectedItem ? 'primary' : 'disabled'}>
                    {selectedItem?.label ?? placeholder}
                </Typography>
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
