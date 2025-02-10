import { describe, expect, it } from 'vitest';

import { getRandomKey, plural } from './strings';

describe('plural', () => {
    it('should return the singular form when the count is 1', () => {
        expect(plural({ singular: 'tomato', plural: 'tomatoes', count: 1 })).toBe('1 tomato');
    });

    it('should return the singular from when the count is -1', () => {
        expect(plural({ singular: 'tomato', plural: 'tomatoes', count: -1 })).toBe('-1 tomato');
    });

    it('should return the plural form in all other cases', () => {
        expect(plural({ singular: 'tomato', plural: 'tomatoes', count: 2 })).toBe('2 tomatoes');
        expect(plural({ singular: 'tomato', plural: 'tomatoes', count: 0.5 })).toBe('0.5 tomatoes');
        expect(plural({ singular: 'tomato', plural: 'tomatoes', count: -10 })).toBe('-10 tomatoes');
    });
});

describe('getRandomKey', () => {
    it('should return a key of the specified length', () => {
        expect(getRandomKey(20).length).toBe(20);
    });
});
