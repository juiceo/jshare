import { z } from 'zod';

import type { DB } from './types';

export const zDbImage: z.ZodType<DB.Image> = z.object({
    id: z.string(),
    path: z.string(),
    bucket: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    uploadedById: z.string(),
    blurhash: z.string().nullable(),
});

export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
}
export const zCurrency: z.ZodType<DB.Currency> = z.nativeEnum(Currency);

export enum Role {
    Owner = 'Owner',
    Admin = 'Admin',
    Member = 'Member',
}
export const zRole: z.ZodType<DB.Role> = z.nativeEnum(Role);

export enum AuthorType {
    User = 'User',
    System = 'System',
}

export const zAuthorType: z.ZodType<DB.AuthorType> = z.nativeEnum(AuthorType);
