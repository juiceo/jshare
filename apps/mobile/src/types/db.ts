import { z } from 'zod';

import type { Group, Image, Profile } from '@jshare/prisma';

export const zDbImage: z.ZodType<DbImage> = z.object({
    id: z.string(),
    path: z.string(),
    bucket: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    uploadedById: z.string(),
});

export type DbImage = Image;
export type ProfileWithAvatar = Profile & { avatar: DbImage | null };
export type GroupWithCoverImage = Group & { coverImage: DbImage | null };
