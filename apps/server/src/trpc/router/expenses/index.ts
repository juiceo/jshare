import { TRPCError } from '@trpc/server';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { MessageAttachmentType } from '@jshare/db';
import { AuthorType, zCurrency, zExpenseShare } from '@jshare/types';

import { broadcastNewMessage } from '../../../services/broadcast';
import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const expensesRouter = router({
    get: authProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
        const expense = await prisma.expense.findUnique({
            where: {
                id: opts.input.id,
            },
            include: {
                shares: true,
            },
        });

        if (!expense || !opts.ctx.acl.isUserInGroup(expense.groupId)) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Expense with id ${opts.input.id} not found`,
            });
        }

        return expense;
    }),
    list: authProcedure
        .input(
            z.object({
                groupId: z.string(),
            })
        )
        .query(async (opts) => {
            const group = await prisma.group.findUnique({
                where: {
                    id: opts.input.groupId,
                    participants: {
                        some: {
                            userId: opts.ctx.userId,
                        },
                    },
                },
            });
            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            return prisma.expense.findMany({
                where: {
                    groupId: group.id,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
        }),
    create: authProcedure
        .input(
            z.object({
                groupId: z.string(),
                payerId: z.string(),
                amount: z.number().min(1),
                description: z.string().min(1).max(100),
                currency: zCurrency,
                shares: zExpenseShare
                    .pick({ amount: true, userId: true, locked: true })
                    .array()
                    .min(1),
            })
        )
        .mutation(async (opts) => {
            if (!opts.ctx.acl.isUserInGroup(opts.input.groupId)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }
            const totalAmountFromShares = opts.input.shares.reduce((result, share) => {
                if (share.amount) return result + share.amount;
                return result;
            }, 0);

            if (totalAmountFromShares !== opts.input.amount) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: `Total amount from shares (${totalAmountFromShares}) does not match the amount (${opts.input.amount})`,
                });
            }

            const expense = await prisma.$transaction(async (tx) => {
                const expense = await tx.expense.create({
                    data: {
                        ownerId: opts.ctx.userId,
                        groupId: opts.input.groupId,
                        payerId: opts.input.payerId,
                        amount: opts.input.amount,
                        description: opts.input.description,
                        currency: opts.input.currency,
                        shares: {
                            createMany: {
                                data: opts.input.shares.map((share) => ({
                                    userId: share.userId,
                                    amount: share.amount,
                                    currency: opts.input.currency,
                                    locked: share.locked,
                                })),
                            },
                        },
                    },
                });

                await tx.message.create({
                    data: {
                        authorId: opts.ctx.userId,
                        groupId: opts.input.groupId,
                        authorType: AuthorType.User,
                        key: uuidv4(),
                        attachments: {
                            create: {
                                type: MessageAttachmentType.Expense,
                                expenseId: expense.id,
                            },
                        },
                    },
                });

                return expense;
            });

            broadcastNewMessage(opts.input.groupId);

            return expense;
        }),
    totalByGroup: authProcedure.input(z.object({ groupId: z.string() })).query(async (opts) => {
        if (!opts.ctx.acl.isUserInGroup(opts.input.groupId)) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Group with id ${opts.input.groupId} not found`,
            });
        }

        const result = await prisma.expense.aggregate({
            _sum: {
                amount: true,
            },
            where: {
                groupId: opts.input.groupId,
            },
        });

        return result._sum.amount ?? 0;
    }),
    getTotalBalance: authProcedure.query(async (opts) => {
        const userId = opts.ctx.userId;

        const [paid, received] = await Promise.all([
            prisma.expense
                .aggregate({
                    _sum: {
                        amount: true,
                    },
                    where: {
                        payerId: userId,
                    },
                })
                .then((res) => res._sum.amount ?? 0),
            prisma.expenseShare
                .aggregate({
                    _sum: {
                        amount: true,
                    },
                    where: {
                        userId,
                    },
                })
                .then((res) => res._sum.amount ?? 0),
        ]);

        return {
            paid,
            received,
            balance: paid - received,
        };
    }),
});
