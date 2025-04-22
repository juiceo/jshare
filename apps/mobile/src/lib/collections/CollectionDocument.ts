import { atom, type Getter, type PrimitiveAtom } from 'jotai';

import type { DbDocument } from '~/lib/collections/types';
import { jotaiStore } from '~/wrappers/JotaiProvider';

export class CollectionDocument<T extends DbDocument> {
    data: T;
    getter: Getter;

    constructor(data: T, getter: Getter) {
        this.data = data;
        this.getter = getter;
    }

    update(updates: Partial<T>) {
        // jotaiStore.set(this.data, (prev) => ({ ...prev, ...updates }));
    }
}
