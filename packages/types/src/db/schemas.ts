import { z } from 'zod';

import { zCurrencyCode } from '../currencies';
import type { DB } from './types';

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

export enum MessageAttachmentType {
    Expense = 'Expense',
}

export const zMessageAttachmentType = z.nativeEnum(
    MessageAttachmentType
) satisfies z.ZodType<DB.MessageAttachmentType>;

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
    currency: zCurrencyCode,
    avatarId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
}) satisfies z.ZodType<DB.Profile>;

export const zMessage = z.object({
    id: z.string(),
    key: z.string(),
    text: z.string().nullable(),
    authorType: zAuthorType,
    authorId: z.string().nullable(),
    groupId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
}) satisfies z.ZodType<DB.Message>;

export const zMessageAttachment = z.object({
    id: z.string(),
    messageId: z.string(),
    type: zMessageAttachmentType,
    expenseId: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
}) satisfies z.ZodType<DB.MessageAttachment>;

export const zExpense = z.object({
    id: z.string(),
    ownerId: z.string(),
    payerId: z.string(),
    groupId: z.string(),
    amount: z.number(),
    currency: zCurrencyCode,
    description: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
}) satisfies z.ZodType<DB.Expense>;

export const zExpenseShare = z.object({
    id: z.string(),
    userId: z.string(),
    expenseId: z.string(),
    amount: z.number(),
    currency: zCurrencyCode,
    locked: z.boolean(),
    updatedAt: z.date(),
    createdAt: z.date(),
}) satisfies z.ZodType<DB.ExpenseShare>;
