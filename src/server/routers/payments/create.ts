import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { formatAmount, zCurrencyCode } from '@/modules/money';
import { getUserDisplayName } from '@/modules/users';
import * as Events from '@/server/events';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const createPaymentInput = z.object({
	to: z.string(),
	from: z.string(),
	amount: z.number().int(),
	currency: zCurrencyCode,
});

export const createPayment = trpc.groupMemberProcedure.input(createPaymentInput).mutation(async ({ input, ctx }) => {
	const [from, to] = await Promise.all([
		prisma.user.findUnique({
			where: {
				id: input.from,
			},
		}),
		prisma.user.findUnique({
			where: {
				id: input.to,
			},
		}),
	]);

	if (!from || !to) {
		throw new TRPCError({
			code: 'BAD_REQUEST',
			message: 'Payer or receiver not found',
		});
	}

	const payment = await prisma.payment.create({
		data: {
			toId: input.to,
			fromId: input.from,
			amount: input.amount,
			currency: input.currency,
			groupId: input.groupId,
		},
	});

	try {
		const fromName = getUserDisplayName(from, 'full');
		const toName = getUserDisplayName(to, 'full');

		const message = await prisma.message.create({
			data: {
				message: `${fromName} paid ${formatAmount(payment.amount, payment.currency)} to ${toName}`,
				senderId: ctx.user.id,
				groupId: input.groupId,
				type: 'BOT',
			},
			include: {
				sender: true,
			},
		});
		Events.emit(Events.CreateMessageInGroup(input.groupId), message);
	} catch (err) {}

	return payment;
});
