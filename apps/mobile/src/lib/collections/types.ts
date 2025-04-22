export type DbDocument = { id: string } & Record<string, any>;

export type DocumentMetadata = {
    syncedAt: Date;
    invalidated: boolean;
};

export type DbDocumentStore<
    TDocument extends DbDocument,
    TUpdate extends object,
    TInsert extends object,
> = {
    documents: Record<string, TDocument>;
    updates: Record<string, TUpdate>;
    inserts: Record<string, TInsert>;
    deletes: Record<string, true>;
};

export type CollectionLoaders<T extends DbDocument> = {
    findById: (id: string) => Promise<T | undefined | null>;
    findMany: (where: Partial<T>) => Promise<T[]>;
};
