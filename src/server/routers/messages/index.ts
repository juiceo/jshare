import { TRPCError } from '@trpc/server';
import { observable } from '@trpc/server/observable';
import { z } from 'zod';

import { isUserInGroup } from '@/modules/groups';
import { MessageWithSender, createMessageSchema } from '@/schemas/message';
import * as Events from '@/server/events';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const messageRouter = trpc.router({
	send: trpc.authenticatedProcedure.input(createMessageSchema).mutation(async ({ input, ctx }) => {
		try {
			const group = await prisma.group.findUnique({
				where: {
					id: input.groupId,
				},
				include: {
					members: true,
					owner: true,
				},
			});

			if (!group || !isUserInGroup(ctx.user.id, group)) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Group not found',
				});
			}
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
		} catch (err) {
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: 'Failed to send message',
				cause: err,
			});
		}
	}),
	onSendMessageToGroup: trpc.authenticatedProcedure.input(z.string()).subscription(async ({ input }) => {
		return observable<MessageWithSender>((emit) => {
			const onSend = (data: MessageWithSender) => {
				if (data.groupId === input) {
					emit.next(data);
				}
			};
			Events.on(Events.CreateMessageInGroup(input), onSend);

			return () => {
				Events.off(Events.CreateMessageInGroup(input), onSend);
			};
		});
	}),
	listByGroupId: trpc.authenticatedProcedure.input(z.string()).query(async ({ input }) => {
		try {
			const messages = await prisma.message.findMany({
				where: {
					groupId: input,
				},
				include: {
					sender: true,
				},
			});

			return messages;
		} catch (err) {
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: 'Failed to get messages',
				cause: err,
			});
		}
	}),
	listByGroupIdInfinite: trpc.authenticatedProcedure
		.input(
			z.object({
				groupId: z.string(),
				limit: z.number().min(1),
				cursor: z.string().nullish(),
			}),
		)
		.query(async ({ input, ctx }) => {
			const { groupId, limit, cursor } = input;
			const group = await prisma.group.findUnique({
				where: {
					id: groupId,
				},
				include: {
					members: true,
					owner: true,
				},
			});

			if (!group || !isUserInGroup(ctx.user.id, group)) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Group not found',
				});
			}

			const messages = await prisma.message.findMany({
				take: limit + 1,
				where: {
					groupId,
				},
				include: {
					sender: true,
				},
				cursor: cursor ? { id: cursor } : undefined,
				orderBy: {
					createdAt: 'desc',
				},
			});

			let nextCursor: typeof cursor | undefined = undefined;
			if (messages.length > limit) {
				const nextItem = messages.pop();
				if (!!nextItem) {
					nextCursor = nextItem.id;
				}
			}
			return {
				messages,
				nextCursor,
			};
		}),
});
