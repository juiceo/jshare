import { z } from 'zod';

export const zExpenseShare = z.object({
    fixedAmount: z.number().min(1).nullable(),
    enabled: z.boolean(),
});

export const zExpenseSharesByUser = z.record(z.string(), zExpenseShare);

export type ExpenseShare = z.infer<typeof zExpenseShare>;
export type ExpenseSharesByUser = z.infer<typeof zExpenseSharesByUser>;
