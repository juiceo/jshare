import type { Getter } from 'jotai';

import type { DbDocument } from '~/lib/collections/types';

export class CollectionDocument<T extends DbDocument> {
    data: T;
    getter: Getter;

    constructor(data: T, getter: Getter) {
        this.data = data;
        this.getter = getter;
    }
}
