import { useMemo } from 'react';
import { sortBy } from 'lodash';
import { observer } from 'mobx-react-lite';

import type { DB } from '@jshare/db';

import { Select, type SelectProps } from '~/components/atoms/Select';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { PreferencesStore } from '~/lib/store/PreferencesStore';

export type CurrencySelectProps = Omit<SelectProps<DB.CurrencyCode, null>, 'options'>;

export const CurrencySelect = observer((props: CurrencySelectProps) => {
    const recentCurrencies = PreferencesStore.recentCurrencies;

    const sortedOptions = useMemo(() => {
        return sortBy(CURRENCY_OPTIONS, (option) => {
            const index = recentCurrencies.indexOf(option.id);
            return index === -1 ? Infinity : index;
        }).map((option) => {
            return {
                ...option,
                secondary: recentCurrencies.includes(option.id) ? 'Recently used' : undefined,
            };
        });
    }, [recentCurrencies]);

    return <Select {...props} options={sortedOptions} />;
});
