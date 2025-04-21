import type { PrimitiveAtom } from 'jotai';
import { isEmpty, isEqual } from 'lodash';

import type { DbDocument, DbDocumentStore } from '~/lib/collections/types';
import { jotaiStore } from '~/wrappers/JotaiProvider';

export const updateDoc = <TDoc extends DbDocument, TUpdate extends object>(
    store: PrimitiveAtom<DbDocumentStore<TDoc, TUpdate, any>>,
    id: string,
    data: TUpdate
) => {
    jotaiStore.set(store, (prev) => {
        const _documents = { ...prev.documents };
        if (_documents[id]) {
            _documents[id] = {
                ..._documents[id],
                ...data,
            };
        }
        return {
            ...prev,
            documents: _documents,
            updates: {
                ...prev.updates,
                [id]: {
                    ...prev.updates[id],
                    ...data,
                },
            },
        };
    });
};

export const addDocs = <TDoc extends DbDocument>(
    store: PrimitiveAtom<DbDocumentStore<TDoc, any, any>>,
    docsToAdd: TDoc | TDoc[] | null | undefined
) => {
    if (!docsToAdd || isEmpty(docsToAdd)) return;
    jotaiStore.set(store, (prev) => {
        const docs = Array.isArray(docsToAdd) ? docsToAdd : [docsToAdd];

        let _documents: Record<string, TDoc> | undefined;

        for (const doc of docs) {
            if (prev.documents[doc.id]) {
                if (isEqual(prev.documents[doc.id], doc)) continue;
                _documents = { ...prev.documents, [doc.id]: doc };
            } else {
                _documents = { ...prev.documents, [doc.id]: doc };
            }
        }

        if (!_documents) return prev;

        return {
            ...prev,
            documents: _documents,
        };
    });
};

export const removeDocs = <TDoc extends DbDocument>(
    store: PrimitiveAtom<DbDocumentStore<TDoc, any, any>>,
    idsToRemove: string | string[] | null | undefined
) => {
    if (!idsToRemove || isEmpty(idsToRemove)) return;
    jotaiStore.set(store, (prev) => {
        const ids = Array.isArray(idsToRemove) ? idsToRemove : [idsToRemove];

        const _documents = { ...prev.documents };
        const _deletes = { ...prev.deletes };

        for (const id of ids) {
            delete _documents[id];
            _deletes[id] = true;
        }

        return {
            ...prev,
            deletes: _deletes,
            documents: _documents,
        };
    });
};
