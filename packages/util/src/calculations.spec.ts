import { describe, expect, it } from 'vitest';

import { distributeAmountEvenly } from './calculations';

describe('calculations', () => {
    describe('distributeAmountEvenly', () => {
        it('should correctly distribute a 0 (or less) amount', () => {
            expect(distributeAmountEvenly(0, 5)).toEqual([0, 0, 0, 0, 0]);
            expect(distributeAmountEvenly(-5, 5)).toEqual([0, 0, 0, 0, 0]);
        });
        it('should return an empty array if the amount of users is lte 0', () => {
            expect(distributeAmountEvenly(10, 0)).toEqual([]);
        });
        it('should return the correct amount for a single user', () => {
            expect(distributeAmountEvenly(10, 1)).toEqual([10]);
        });
        it('should allow some users to have shares equal to 0', () => {
            expect(distributeAmountEvenly(2, 3)).toEqual([1, 1, 0]);
        });
        it('should correctly distribute an amount that is divisible by the number of users', () => {
            expect(distributeAmountEvenly(10, 5)).toEqual([2, 2, 2, 2, 2]);
        });

        it("should correctly distribute an amount that isn't divisible by the number of users", () => {
            expect(distributeAmountEvenly(11, 5)).toEqual([3, 2, 2, 2, 2]);
            expect(distributeAmountEvenly(14, 5)).toEqual([3, 3, 3, 3, 2]);
        });
    });
});
