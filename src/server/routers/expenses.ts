import { TRPCError } from '@trpc/server';
import { observable } from '@trpc/server/observable';
import EventEmitter from 'events';
import { sumBy } from 'lodash';
import { z } from 'zod';

import { getAmountByMember } from '@/modules/expenses';
import { isUserInGroup } from '@/modules/groups';
import {
	ExpenseWithSenderAndShares,
	createExpenseSchema,
	editExpenseSchema,
} from '@/schemas/expense';
import * as Events from '@/server/events';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

const ee = new EventEmitter();

export const expenseRouter = trpc.router({
	create: trpc.authenticatedProcedure
		.input(createExpenseSchema)
		.mutation(async ({ input, ctx }) => {
			try {
				const group = await prisma.group.findUnique({
					where: {
						id: input.groupId,
					},
				});

				if (!group) {
					throw new TRPCError({
						code: 'NOT_FOUND',
						message: 'Group not found',
					});
				}
				const amountByMember = getAmountByMember({
					shares: input.shares,
					total: input.amount,
				});
				const sharesToCreate = Object.entries(input.shares).reduce(
					(acc, [memberId, share]) => {
						acc.push({
							memberId,
							amount: amountByMember[memberId] ?? 0,
							locked: share.amount !== undefined,
						});
						return acc;
					},
					[] as {
						memberId: string;
						amount: number;
						locked: boolean;
					}[],
				);
				const [expense] = await prisma.$transaction([
					prisma.expense.create({
						data: {
							...input,
							senderId: ctx.user.id,
							currency: group.currency,
							number: group.expenseCount + 1,
							shares: {
								create: sharesToCreate,
							},
						},
						include: {
							shares: true,
							sender: true,
						},
					}),
					prisma.group.update({
						where: {
							id: group.id,
						},
						data: {
							expenseCount: {
								increment: 1,
							},
							total: {
								increment: input.amount,
							},
						},
					}),
				]);

				ee.emit(Events.CreateExpenseInGroup(input.groupId), expense);

				return expense;
			} catch (err) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Failed to create expense',
					cause: err,
				});
			}
		}),
	edit: trpc.authenticatedProcedure
		.input(editExpenseSchema)
		.mutation(async ({ input, ctx }) => {
			const expense = await prisma.expense.findUnique({
				where: {
					id: input.id,
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

			const amountByMember = getAmountByMember({
				shares: input.shares,
				total: input.amount,
			});

			const shares = Object.entries(input.shares).reduce(
				(acc, [memberId, share]) => {
					acc.push({
						memberId,
						amount: amountByMember[memberId] ?? 0,
						locked: share.amount !== undefined,
					});
					return acc;
				},
				[] as {
					memberId: string;
					amount: number;
					locked: boolean;
				}[],
			);

			const [updatedExpense, updatedGroup, ...updatedShares] =
				await prisma.$transaction([
					prisma.expense.update({
						where: {
							id: input.id,
						},
						data: {
							payerId: input.payerId,
							amount: input.amount,
							title: input.title,
						},
					}),
					prisma.group.update({
						where: {
							id: expense.groupId,
						},
						data: {
							total: {
								increment: input.amount - expense.amount,
							},
						},
					}),
					...shares.map((share) =>
						prisma.expenseShareWithMember.update({
							where: {
								expenseId_memberId: {
									expenseId: expense.id,
									memberId: share.memberId,
								},
							},
							data: {
								amount: share.amount,
								locked: share.locked,
							},
						}),
					),
				]);

			const expenseAfter = {
				...updatedExpense,
				shares: updatedShares,
			};

			ee.emit(
				Events.EditExpenseInGroup(expenseAfter.groupId),
				expenseAfter,
			);

			return expenseAfter;
		}),
	delete: trpc.authenticatedProcedure
		.input(z.string())
		.mutation(async ({ input, ctx }) => {
			const expense = await prisma.expense.findUnique({
				where: {
					id: input,
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
					message: 'You cannot delete an expense you did not create',
				});
			}

			await prisma.$transaction([
				prisma.expense.delete({
					where: {
						id: expense.id,
					},
				}),
				prisma.group.update({
					where: {
						id: expense.groupId,
					},
					data: {
						total: {
							decrement: expense.amount,
						},
						expenseCount: {
							decrement: 1,
						},
					},
				}),
			]);
		}),
	onCreateExpenseInGroup: trpc.authenticatedProcedure
		.input(z.string())
		.subscription(async ({ input }) => {
			return observable<ExpenseWithSenderAndShares>((emit) => {
				const onSend = (data: ExpenseWithSenderAndShares) => {
					emit.next(data);
				};
				ee.on(Events.CreateExpenseInGroup(input), onSend);

				return () => {
					ee.off(Events.CreateExpenseInGroup(input), onSend);
				};
			});
		}),
	onEditExpenseInGroup: trpc.authenticatedProcedure
		.input(z.string())
		.subscription(async ({ input }) => {
			return observable<ExpenseWithSenderAndShares>((emit) => {
				const onSend = (data: ExpenseWithSenderAndShares) => {
					emit.next(data);
				};
				ee.on(Events.EditExpenseInGroup(input), onSend);

				return () => {
					ee.off(Events.EditExpenseInGroup(input), onSend);
				};
			});
		}),

	getByGroupId: trpc.authenticatedProcedure
		.input(z.string())
		.query(async ({ input, ctx }) => {
			const group = await prisma.group.findUnique({
				where: {
					id: input,
				},
				select: {
					ownerId: true,
					members: true,
				},
			});
			if (
				!group ||
				(group.ownerId !== ctx.user.id &&
					!group.members.some((mem) => mem.id === ctx.user.id))
			) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Group not found',
				});
			}

			const expenses = await prisma.expense.findMany({
				where: {
					groupId: input,
				},
				include: {
					shares: true,
					sender: true,
				},
			});
			return expenses;
		}),
	getTotalByGroupId: trpc.authenticatedProcedure
		.input(z.string())
		.query(async ({ input, ctx }) => {
			const group = await prisma.group.findUnique({
				where: {
					id: input,
				},
				select: {
					ownerId: true,
					members: true,
				},
			});

			if (
				!group ||
				(group.ownerId !== ctx.user.id &&
					!group.members.some((mem) => mem.id === ctx.user.id))
			) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Group not found',
				});
			}

			const expenses = await prisma.expense.findMany({
				where: {
					groupId: input,
				},
				select: {
					amount: true,
				},
			});

			return sumBy(expenses, (e) => e.amount);
		}),
	getById: trpc.authenticatedProcedure
		.input(z.string())
		.query(async ({ input, ctx }) => {
			const expense = await prisma.expense.findUnique({
				where: {
					id: input,
				},
				include: {
					shares: true,
					sender: true,
				},
			});

			if (!expense) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Expense not found',
				});
			}

			const group = await prisma.group.findUnique({
				where: {
					id: expense.groupId,
				},
				select: {
					owner: true,
					members: true,
				},
			});

			if (!group || !isUserInGroup(ctx.user.id, group)) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Expense not found',
				});
			}

			return expense;
		}),
});
