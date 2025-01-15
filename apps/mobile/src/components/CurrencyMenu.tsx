import { SORTED_CURRENCIES } from '@jshare/common';
import type { CurrencyCode } from 'node_modules/@jshare/db/build/zenstack/.logical-prisma-client/index-fixed';

import { Menu, MenuOption } from '~/components/atoms/Menu';

export type CurrencyMenuProps = {
    value: string | undefined;
    onChange: (value: string) => void;
    isOpen: boolean;
    onClose: () => void;
};

export const CURRENCY_OPTIONS: MenuOption<CurrencyCode>[] = SORTED_CURRENCIES.map((currency) => {
    return {
        id: currency.code,
        label: currency.name,
        secondary: currency.symbol,
    };
});

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
