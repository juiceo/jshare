import { TRPCError } from '@trpc/server';
import { observable } from '@trpc/server/observable';
import EventEmitter from 'events';
import { z } from 'zod';

import { MessageWithSender, createMessageSchema } from '@/schemas/message';
import * as Events from '@/server/events';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';
import { isUserInGroup } from '@/utils/groups';

const ee = new EventEmitter();

export const messageRouter = trpc.router({
	send: trpc.authenticatedProcedure
		.input(createMessageSchema)
		.mutation(async ({ input, ctx }) => {
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
					},
					include: {
						sender: true,
					},
				});
				ee.emit(Events.CreateMessageInGroup(input.groupId), message);
				return message;
			} catch (err) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Failed to send message',
					cause: err,
				});
			}
		}),
	onSendMessageToGroup: trpc.authenticatedProcedure
		.input(z.string())
		.subscription(async ({ input }) => {
			return observable<MessageWithSender>((emit) => {
				const onSend = (data: MessageWithSender) => {
					if (data.groupId === input) {
						emit.next(data);
					}
				};
				ee.on(Events.CreateMessageInGroup(input), onSend);

				return () => {
					ee.off(Events.CreateMessageInGroup(input), onSend);
				};
			});
		}),
	getByGroupId: trpc.authenticatedProcedure
		.input(z.string())
		.query(async ({ input }) => {
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
});
