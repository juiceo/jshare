/**
 * Distribute the given amount evenly among a given number of users,
 * such that:
 *
 * - The sum of the amounts is exactly equal to the given amount
 * - Each share is an integer
 */
export const distributeAmountEvenly = (amount: number, users: number): number[] => {
    if (amount <= 0) return Array.from({ length: users }).map(() => 0);
    if (users <= 0) return [];
    const split = Math.floor(amount / users);
    const remainder = amount - split * users;
    const result = Array.from({ length: users }).map(() => split);

    for (let i = 0; i < remainder; i++) {
        result[i % users]++;
    }

    return result;
};
