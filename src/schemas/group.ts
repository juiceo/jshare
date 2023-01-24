import { Group, User } from '@prisma/client';
import { z } from 'zod';

export const createGroupSchema = z.object({
	name: z.string().min(1, 'Please enter a name'),
	currency: z.enum(['EUR', 'USD']),
});

export type CreateUserSchema = z.infer<typeof createGroupSchema>;

export type GroupWithMembers = Group & { members: User[]; owner: User };
