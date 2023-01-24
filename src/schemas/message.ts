import { Message, User } from '@prisma/client';
import { z } from 'zod';

export const createMessageSchema = z.object({
	message: z.string().min(1, 'Please enter a message'),
	groupId: z.string().min(1, 'Please enter a group id'),
});

export type CreateMessageSchema = z.infer<typeof createMessageSchema>;

export type MessageWithSender = Message & { sender: User | null };
