import { get } from 'lodash';

import type { Theme } from '../types';
import type { ColorKey, TextColorKey } from './types';

export const getColor = (key: ColorKey | TextColorKey | undefined, theme: Theme) => {
    if (!key) return undefined;

    return get(theme.palette, key);
};
