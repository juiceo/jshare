import { z } from 'zod';

export const updateUserSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
});
