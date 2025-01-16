import { SORTED_CURRENCIES } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Menu, MenuOption } from '~/components/atoms/Menu';

export type CurrencyMenuProps = {
    value: string | undefined;
    onChange: (value: string) => void;
    isOpen: boolean;
    onClose: () => void;
};

export const CURRENCY_OPTIONS = SORTED_CURRENCIES.map(
    (currency): MenuOption<DB.CurrencyCode, null> => {
        return {
            id: currency.code,
            label: currency.name,
            secondary: currency.symbol,
            data: null,
        };
    }
);

export const CurrencyMenu = (props: CurrencyMenuProps) => {
    const { value, onChange, isOpen, onClose } = props;

    return (
        <Menu
            title="Select currency"
            value={value}
            onChange={(currency) => onChange(currency)}
            isOpen={isOpen}
            onClose={onClose}
            options={CURRENCY_OPTIONS}
        />
    );
};
