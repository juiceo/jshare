import { Group, User } from '@prisma/client';
import { z } from 'zod';

import { zCurrencyCode } from './../modules/money/types';

export const createGroupSchema = z.object({
	name: z.string().min(1, 'Please enter a name'),
	currency: zCurrencyCode,
});

export type CreateUserSchema = z.infer<typeof createGroupSchema>;

export type GroupWithMembers = Group & { members: User[]; owner: User };
