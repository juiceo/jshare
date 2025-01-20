import type { DB } from '@jshare/db';

import { Select, type SelectProps } from '~/components/atoms/Select';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';

export type CurrencySelectProps = Omit<SelectProps<DB.CurrencyCode, null>, 'options'>;

export const CurrencySelect = (props: CurrencySelectProps) => {
    return <Select {...props} options={CURRENCY_OPTIONS} />;
};
