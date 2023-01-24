import { z } from 'zod';

export const updateUserSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	displayName: z.string(),
});
