import { describe, expect, it } from 'vitest';

import { groupByUnique } from './arrays';

describe('arrays', () => {
    describe('groupByUnique', () => {
        it('should group an array of objects by a key', () => {
            const arr = [
                { id: 1, name: 'A' },
                { id: 2, name: 'B' },
                { id: 3, name: 'C' },
            ];

            expect(groupByUnique(arr, 'id')).toEqual({
                '1': { id: 1, name: 'A' },
                '2': { id: 2, name: 'B' },
                '3': { id: 3, name: 'C' },
            });

            expect(groupByUnique(arr, 'name')).toEqual({
                A: { id: 1, name: 'A' },
                B: { id: 2, name: 'B' },
                C: { id: 3, name: 'C' },
            });
        });

        it('should work with a function as the key', () => {
            const arr = [
                { id: 1, name: 'A' },
                { id: 2, name: 'B' },
                { id: 3, name: 'C' },
            ];

            expect(groupByUnique(arr, (item) => item.name)).toEqual({
                A: { id: 1, name: 'A' },
                B: { id: 2, name: 'B' },
                C: { id: 3, name: 'C' },
            });
        });

        it('should take the last occurrence of a duplicated key', () => {
            const arr = [
                { id: 1, name: 'A' },
                { id: 1, name: 'B' },
                { id: 2, name: 'C' },
            ];

            expect(groupByUnique(arr, 'id')).toEqual({
                '1': { id: 1, name: 'B' },
                '2': { id: 2, name: 'C' },
            });
        });
    });
});
