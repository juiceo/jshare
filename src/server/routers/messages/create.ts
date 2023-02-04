import { observable } from '@trpc/server/observable';
import { z } from 'zod';

import { MessageWithSender } from '@/schemas/message';
import * as Events from '@/server/events';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const createMessageInput = z.object({
	message: z.string().min(1, 'Please enter a message'),
});

export const createMessage = trpc.groupMemberProcedure.input(createMessageInput).mutation(async ({ input, ctx }) => {
	const message = await prisma.message.create({
		data: {
			...input,
			senderId: ctx.user.id,
			type: 'TEXT',
		},
		include: {
			sender: true,
		},
	});
	Events.emit(Events.CreateMessageInGroup(input.groupId), message);
	return message;
});

export const onCreateMessageInGroup = trpc.authenticatedProcedure
	.input(
		z.object({
			groupId: z.string(),
		}),
	)
	.subscription(async ({ input }) => {
		const { groupId } = input;
		return observable<MessageWithSender>((emit) => {
			const onSend = (data: MessageWithSender) => {
				if (data.groupId === groupId) {
					emit.next(data);
				}
			};
			Events.on(Events.CreateMessageInGroup(groupId), onSend);

			return () => {
				Events.off(Events.CreateMessageInGroup(groupId), onSend);
			};
		});
	});
