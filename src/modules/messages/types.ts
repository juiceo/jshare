import { Message } from '@prisma/client';
import { User } from 'next-auth';

export type MessageWithSender = Message & { sender: User | null };
