/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/v10/router
 * @see https://trpc.io/docs/v10/procedures
 */

import { TRPCError, initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

import { isUserInGroup } from '@/modules/groups';
import { prisma } from '@/server/prisma';

import { Context } from './context';

const t = initTRPC.context<Context>().create({
	/**
	 * @see https://trpc.io/docs/v10/data-transformers
	 */
	transformer: superjson,
	/**
	 * @see https://trpc.io/docs/v10/error-formatting
	 */
	errorFormatter({ shape }) {
		return shape;
	},
});

/**
 * Create a router
 * @see https://trpc.io/docs/v10/router
 */
export const router = t.router;

/**
 * Create an unprotected procedure
 * @see https://trpc.io/docs/v10/procedures
 **/
export const publicProcedure = t.procedure;

/**
 * @see https://trpc.io/docs/v10/middlewares
 */
export const middleware = t.middleware;

/**
 * @see https://trpc.io/docs/v10/merging-routers
 */
export const mergeRouters = t.mergeRouters;

const isAuthenticated = middleware(({ next, ctx }) => {
	const user = ctx.session?.user;

	if (!user?.name || !ctx.session?.userId) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}

	return next({
		ctx: {
			user: {
				...user,
				name: user.name,
				id: ctx.session.userId,
			},
		},
	});
});

/**
 * Protected base procedure
 */
export const authenticatedProcedure = t.procedure.use(isAuthenticated);

/**
 * Protected procedure for group members
 */
export const groupMemberProcedure = authenticatedProcedure
	.input(
		z.object({
			groupId: z.string(),
		}),
	)
	.use(async ({ input, ctx, next }) => {
		const group = await prisma.group.findUnique({
			where: {
				id: input.groupId,
			},
			include: {
				members: true,
				owner: true,
			},
		});

		if (!group) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Group not found',
			});
		}

		if (!isUserInGroup(ctx.user.id, group)) {
			throw new TRPCError({
				code: 'UNAUTHORIZED',
				message: 'You are not a member of this group',
			});
		}

		return next({
			ctx: {
				...ctx,
				group,
			},
		});
	});

/**
 * Protected procedure for group owners
 */
export const groupOwnerProcedure = authenticatedProcedure
	.input(
		z.object({
			groupId: z.string(),
		}),
	)
	.use(async ({ input, ctx, next }) => {
		const group = await prisma.group.findUnique({
			where: {
				id: input.groupId,
			},
			include: {
				members: true,
				owner: true,
			},
		});

		if (!group) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Group not found',
			});
		}

		if (group.ownerId !== ctx.user.id) {
			throw new TRPCError({
				code: 'UNAUTHORIZED',
				message: 'You are not the owner of this group',
			});
		}

		return next({
			ctx: {
				...ctx,
				group,
			},
		});
	});

/**
 * Protected procedure for expense owners
 */
export const expenseOwnerProcedure = authenticatedProcedure
	.input(
		z.object({
			expenseId: z.string(),
		}),
	)
	.use(async ({ input, ctx, next }) => {
		const expense = await prisma.expense.findUnique({
			where: {
				id: input.expenseId,
			},
			include: {
				sender: true,
			},
		});

		if (!expense) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Expense not found',
			});
		}

		if (expense.senderId !== ctx.user.id) {
			throw new TRPCError({
				code: 'UNAUTHORIZED',
				message: 'You are not the owner of this expense',
			});
		}

		return next({
			ctx: {
				...ctx,
				expense,
			},
		});
	});

/**
 * User procedure
 */
export const userProcedure = authenticatedProcedure
	.input(
		z.object({
			userId: z.string(),
		}),
	)
	.use(async ({ input, ctx, next }) => {
		if (input.userId !== ctx.user.id) {
			throw new TRPCError({
				code: 'UNAUTHORIZED',
				message: "You don't have access to edit this user",
			});
		}

		return next();
	});
