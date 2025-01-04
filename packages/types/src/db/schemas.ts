import { z } from 'zod';

import type { DB } from './types';

export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
}
export const zCurrency = z.nativeEnum(Currency) satisfies z.ZodType<DB.Currency>;

export enum Role {
    Owner = 'Owner',
    Admin = 'Admin',
    Member = 'Member',
}
export const zRole = z.nativeEnum(Role) satisfies z.ZodType<DB.Role>;

export enum AuthorType {
    User = 'User',
    System = 'System',
}

export const zAuthorType = z.nativeEnum(AuthorType) satisfies z.ZodType<DB.AuthorType>;

export const zDbImage = z.object({
    id: z.string(),
    path: z.string(),
    bucket: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    uploadedById: z.string(),
    blurhash: z.string().nullable(),
}) satisfies z.ZodType<DB.Image>;

export const zProfile = z.object({
    userId: z.string(),
    email: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    avatarId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
}) satisfies z.ZodType<DB.Profile>;

export const zExpense = z.object({
    id: z.string(),
    ownerId: z.string(),
    payerId: z.string(),
    groupId: z.string(),
    amount: z.number(),
    currency: zCurrency,
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
}) satisfies z.ZodType<DB.Expense>;

export const zExpenseShare = z.object({
    id: z.string(),
    userId: z.string(),
    expenseId: z.string(),
    amount: z.number().nullable(),
    currency: zCurrency,
    locked: z.boolean(),
    enabled: z.boolean(),
    updatedAt: z.date(),
    createdAt: z.date(),
}) satisfies z.ZodType<DB.ExpenseShare>;

export const zLocalExpenseShare = zExpenseShare.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    expenseId: true,
    currency: true,
});
export type LocalExpenseShare = z.infer<typeof zLocalExpenseShare>;
