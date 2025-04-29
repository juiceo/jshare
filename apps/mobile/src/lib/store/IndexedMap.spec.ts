import { beforeEach, describe, expect, it } from 'vitest';

import { Document } from './Document';
import { IndexedMap } from './IndexedMap';

describe('IndexedMap', () => {
    type Message = {
        id: string;
        groupId: string;
        authorId: string;
        read?: boolean;
    };

    let map: IndexedMap<Message, any, ['groupId', 'read']>;

    const getDoc = (id: string, groupId: string, authorId: string, read?: boolean) => {
        return new Document(
            null as any,
            { id, groupId, authorId, read } as Message,
            null as any
        ) as Document<Message, any, ['groupId', 'read']>;
    };

    beforeEach(() => {
        map = new IndexedMap(['groupId', 'read']);
    });

    it('adds and finds a document by single indexed key', () => {
        const doc = getDoc('1', 'group1', 'author1');
        map.add('1', doc);

        const result = map.find({ groupId: 'group1' });
        expect(result).toContain(doc);
        expect(map.has('1')).toBe(true);
    });

    it('finds by multiple indexed keys', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        const doc2 = getDoc('2', 'group1', 'author2', true);
        map.add('1', doc1);
        map.add('2', doc2);

        const result = map.find({ groupId: 'group1', read: false });
        expect(result).toEqual([doc1]);
    });

    it('finds using unindexed keys by filtering', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        const doc2 = getDoc('2', 'group2', 'author2', true);
        map.add('1', doc1);
        map.add('2', doc2);

        const result = map.find({ groupId: 'group2', read: true });
        expect(result).toEqual([doc2]);
    });

    it('returns empty array for non-matching query', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        map.add('1', doc1);

        const result = map.find({ groupId: 'group2' });
        expect(result).toEqual([]);
    });

    it('removes document and clears indexes', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        map.add('1', doc1);
        map.delete(doc1.id);

        const result = map.find({ groupId: 'group1' });
        expect(result).toEqual([]);
    });

    it('returns all items if no query given', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        const doc2 = getDoc('2', 'group1', 'author2', true);
        map.add('1', doc1);
        map.add('2', doc2);

        const result = map.find({});
        expect(result).toHaveLength(2);
        expect(result).toContain(doc1);
        expect(result).toContain(doc2);
    });

    it('finds with complex queries with both indexed and unindexed keys', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        const doc2 = getDoc('2', 'group1', 'author2', true);
        const doc3 = getDoc('3', 'group2', 'author1', false);
        map.add('1', doc1);
        map.add('2', doc2);
        map.add('3', doc3);

        const result = map.find({ groupId: 'group1', read: false });
        expect(result).toEqual([doc1]);
    });

    it('returns multiple results when there are multiple matches', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        const doc2 = getDoc('2', 'group1', 'author1', false);
        const doc3 = getDoc('3', 'group1', 'author2', true);
        map.add('1', doc1);
        map.add('2', doc2);
        map.add('3', doc3);

        const result = map.find({ groupId: 'group1', read: false });
        expect(result).toEqual([doc1, doc2]);
    });

    it('falls back to array filtering for unindexed keys', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        const doc2 = getDoc('2', 'group1', 'author2', true);
        map.add('1', doc1);
        map.add('2', doc2);

        const result = map.find({ authorId: 'author2', read: false });
        expect(result).toEqual([]);
    });

    it('correctly handles mixed queries with indexed and non-indexed keys', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        const doc2 = getDoc('2', 'group1', 'author2', true);
        const doc3 = getDoc('3', 'group2', 'author1', true);
        map.add('1', doc1);
        map.add('2', doc2);
        map.add('3', doc3);

        const result = map.find({ groupId: 'group2', read: true });
        expect(result).toEqual([doc3]);
    });

    it('correctly handles queries when some keys are unindexed', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        const doc2 = getDoc('2', 'group1', 'author2', true);
        const doc3 = getDoc('3', 'group2', 'author1', false);
        map.add('1', doc1);
        map.add('2', doc2);
        map.add('3', doc3);

        const result = map.find({ groupId: 'group2', authorId: 'author1' });
        expect(result).toEqual([doc3]);
    });

    it('returns an empty array if no documents match the query', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        map.add('1', doc1);

        const result = map.find({ groupId: 'group1', read: true });
        expect(result).toEqual([]);
    });

    it('does not find documents that were removed', () => {
        const doc1 = getDoc('1', 'group1', 'author1', false);
        map.add('1', doc1);
        map.delete(doc1.id);

        const result = map.find({ groupId: 'group1' });
        expect(result).toEqual([]);
    });
});
