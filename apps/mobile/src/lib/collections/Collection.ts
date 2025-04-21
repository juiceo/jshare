import { atom, type Atom, type Getter, type PrimitiveAtom } from 'jotai';
import { matches, uniqBy } from 'lodash';

import type { CollectionDocument } from '~/lib/collections/CollectionDocument';
import type { DbDocument, DbDocumentStore } from '~/lib/collections/types';
import { addDocs, updateDoc } from '~/lib/collections/utils';

export type CollectionLoaders<T extends DbDocument> = {
    findByIds: (ids: string[]) => Promise<T[]>;
    findMany: (wheres: Partial<T>[]) => Promise<T[]>;
};

export type DocumentCollectionArgs<
    TDocument extends DbDocument,
    TUpdate extends object,
    TInsert extends object,
    TTransformed extends CollectionDocument<TDocument> = CollectionDocument<TDocument>,
> = {
    name: string;
    store: PrimitiveAtom<DbDocumentStore<TDocument, TUpdate, TInsert>>;
    loaders: CollectionLoaders<TDocument>;
    transformer: (doc: TDocument, getter: Getter) => TTransformed;
    defaults: () => TDocument;
};

export class DocumentCollection<
    TDocument extends DbDocument,
    TUpdate extends object,
    TInsert extends object,
    TDocumentTransformed extends CollectionDocument<TDocument> = CollectionDocument<TDocument>,
> {
    name: string;
    store: PrimitiveAtom<DbDocumentStore<TDocument, TUpdate, TInsert>>;
    loaders: CollectionLoaders<TDocument>;
    transformer: ((doc: TDocument, getter: Getter) => TDocumentTransformed) | undefined;
    currentDocs: Atom<TDocument[]>;
    currentDocsById: Atom<Record<string, TDocument>>;
    requestedIds: string[];
    requestedWhere: Partial<TDocument>[];

    constructor(args: DocumentCollectionArgs<TDocument, TUpdate, TInsert, TDocumentTransformed>) {
        this.name = args.name;
        this.store = args.store;
        this.loaders = args.loaders;
        this.transformer = args.transformer;
        this.currentDocs = atom((get) => {
            console.log('REBUILD CURRENT DOCS', this.name);
            const store = get(this.store);
            return Object.values(store.documents).reduce((results, doc) => {
                if (store.deletes[doc.id]) return results;
                if (store.updates[doc.id]) {
                    results.push({
                        ...doc,
                        ...store.updates[doc.id],
                    });
                } else {
                    results.push(doc);
                }
                return results;
            }, [] as TDocument[]);
        });
        this.currentDocsById = atom((get) => {
            console.log('REBUILD CURRENT DOCS BY ID', this.name);
            const docs = get(this.currentDocs);

            return docs.reduce(
                (results, doc) => {
                    results[doc.id] = doc;
                    return results;
                },
                {} as Record<string, TDocument>
            );
        });
        this.requestedIds = [];
        this.requestedWhere = [];
    }

    private transform(doc: TDocument, getter: Getter): TDocumentTransformed {
        return this.transformer
            ? this.transformer(doc, getter)
            : (doc as unknown as TDocumentTransformed);
    }

    async loadById(id: string) {
        this.requestedIds.push(id);
        setTimeout(async () => {
            const ids = this.requestedIds;
            if (ids.length === 0) return;
            this.requestedIds = [];
            const uniqueIds = [...new Set(ids)];
            const docs = await this.loaders.findByIds(uniqueIds);
            addDocs(this.store, docs);
        }, 1);
    }

    async loadWhere(where: Partial<TDocument>) {
        this.requestedWhere.push(where);
        setTimeout(async () => {
            const wheres = this.requestedWhere;
            if (wheres.length === 0) return;
            this.requestedWhere = [];
            const uniqueWheres = uniqBy(wheres, JSON.stringify);
            const docs = await this.loaders.findMany(uniqueWheres);
            addDocs(this.store, docs);
        }, 1);
    }

    findById(id: string): Atom<TDocumentTransformed | undefined> {
        console.log('findById INIT', this.name);
        this.loadById(id);
        return atom((get) => {
            console.log('findById EVALUATE', this.name);
            const currentDocsById = get(this.currentDocsById);
            const doc = currentDocsById[id];
            if (!doc) return undefined;
            return this.transform(doc, get);
        });
    }

    findMany(where: Partial<TDocument>): Atom<TDocumentTransformed[]> {
        console.log('findMany INIT', this.name);
        this.loadWhere(where);
        return atom((get) => {
            console.log('findMany EVALUATE', this.name);
            return get(this.currentDocs).reduce((results, doc) => {
                if (matches(where)(doc)) {
                    results.push(this.transform(doc, get));
                }
                return results;
            }, [] as TDocumentTransformed[]);
        });
    }

    update(id: string, data: TUpdate): void {
        console.log('update RUN', this.name);
        updateDoc(this.store, id, data);
    }
}
