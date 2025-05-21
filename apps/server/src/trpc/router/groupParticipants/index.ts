import { TRPCError } from '@trpc/server';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { DB, zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';

export const groupParticipantsRouter = router({
    createTemporaryParticipant: authProcedure
        .input(
            z.object({
                groupId: z.string(),
                firstName: z.string(),
                lastName: z.string(),
            })
        )
        .mutation(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const user = await db.profile.create({
                data: {
                    email: '',
                    id: uuidv4(),
                    firstName: opts.input.firstName,
                    lastName: opts.input.lastName,
                    currency: DB.CurrencyCode.USD,
                    temporary: true,
                },
            });

            return db.groupParticipant.create({
                data: {
                    groupId: opts.input.groupId,
                    role: DB.Role.Member,
                    userId: user.id,
                },
            });
        }),
    changeParticipantRole: authProcedure
        .input(
            z.object({
                groupId: z.string(),
                userId: z.string(),
                role: zDB.enums.RoleSchema,
            })
        )
        .mutation(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            if (opts.input.userId === opts.ctx.userId) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: 'You cannot change your own role',
                });
            }

            const isAdmin = await opts.ctx.acl.isGroupAdmin(opts.input.groupId);
            if (!isAdmin) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'You are not allowed to change participant roles in this group',
                });
            }
            if (opts.input.role === DB.Role.Owner) {
                const isOwner = await opts.ctx.acl.isGroupOwner(opts.input.groupId);
                if (!isOwner) {
                    throw new TRPCError({
                        code: 'UNAUTHORIZED',
                        message: 'You are not allowed to change the owner of the group',
                    });
                }

                await db.groupParticipant.updateMany({
                    where: {
                        groupId: opts.input.groupId,
                        userId: opts.input.userId,
                    },
                    data: {
                        role: DB.Role.Owner,
                    },
                });

                await db.groupParticipant.updateMany({
                    where: {
                        groupId: opts.input.groupId,
                        userId: opts.ctx.userId,
                    },
                    data: {
                        role: DB.Role.Admin,
                    },
                });
            } else {
                await db.groupParticipant.updateMany({
                    where: {
                        groupId: opts.input.groupId,
                        userId: opts.input.userId,
                    },
                    data: {
                        role: opts.input.role,
                    },
                });
            }

            return db.group.findUniqueOrThrow({
                where: {
                    id: opts.input.groupId,
                },
                include: {
                    coverImage: true,
                    participants: true,
                },
            });
        }),
    removeParticipant: authProcedure
        .input(
            z.object({
                groupId: z.string(),
                userId: z.string(),
                transferTo: z.string().nullable(),
            })
        )
        .mutation(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const isSelf = opts.input.userId === opts.ctx.userId;
            const isAdmin = await opts.ctx.acl.isGroupAdmin(opts.input.groupId);

            if (!isSelf && !isAdmin) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'You are not allowed to remove participants from this group',
                });
            }

            const userExpenses = await db.expense.findMany({
                where: {
                    OR: [
                        {
                            groupId: opts.input.groupId,
                            ownerId: opts.input.userId,
                        },
                        {
                            groupId: opts.input.groupId,
                            payerId: opts.input.userId,
                        },
                        {
                            groupId: opts.input.groupId,
                            shares: {
                                some: {
                                    userId: opts.input.userId,
                                },
                            },
                        },
                    ],
                },
                include: {
                    shares: true,
                },
            });

            const userPayments = await db.payment.findMany({
                where: {
                    OR: [
                        {
                            groupId: opts.input.groupId,
                            payerId: opts.input.userId,
                        },
                        {
                            groupId: opts.input.groupId,
                            recipientId: opts.input.userId,
                        },
                    ],
                },
            });

            if (userExpenses.length > 0 || userPayments.length > 0) {
                if (!opts.input.transferTo) {
                    throw new TRPCError({
                        code: 'BAD_REQUEST',
                        message:
                            'The user has expenses or payments in this group. You must specify a user to transfer their balance to.',
                    });
                }

                const transferTo = await db.profile.findUnique({
                    where: {
                        id: opts.input.transferTo,
                        groups: {
                            some: {
                                groupId: opts.input.groupId,
                            },
                        },
                    },
                });

                if (!transferTo) {
                    throw new TRPCError({
                        code: 'NOT_FOUND',
                        message: `User with id ${opts.input.transferTo} not found in this group`,
                    });
                }

                await db.$transaction(async (tx) => {
                    for (const expense of userExpenses) {
                        if (expense.ownerId === opts.input.userId) {
                            await tx.expense.update({
                                where: {
                                    id: expense.id,
                                },
                                data: {
                                    ownerId: transferTo.id,
                                },
                            });
                        }
                        if (expense.payerId === opts.input.userId) {
                            await tx.expense.update({
                                where: {
                                    id: expense.id,
                                },
                                data: {
                                    payerId: transferTo.id,
                                },
                            });
                        }

                        const share = expense.shares.find((s) => s.userId === opts.input.userId);

                        if (share) {
                            const targetUserShare = expense.shares.find(
                                (s) => s.userId === opts.input.transferTo
                            );
                            if (targetUserShare) {
                                await tx.expenseShare.update({
                                    where: {
                                        id: targetUserShare.id,
                                    },
                                    data: {
                                        amount: targetUserShare.amount + share.amount,
                                        locked: true,
                                    },
                                });
                                await tx.expenseShare.delete({
                                    where: {
                                        id: share.id,
                                    },
                                });
                            } else {
                                await tx.expenseShare.update({
                                    where: {
                                        id: share.id,
                                    },
                                    data: {
                                        userId: transferTo.id,
                                    },
                                });
                            }
                        }
                    }

                    for (const payment of userPayments) {
                        console.log('UPDATING PAYMENT', payment);
                        const updatedValues = {
                            payerId:
                                payment.payerId === opts.input.userId
                                    ? transferTo.id
                                    : payment.payerId,
                            recipientId:
                                payment.recipientId === opts.input.userId
                                    ? transferTo.id
                                    : payment.recipientId,
                        };

                        console.log('UPDATED VALUES', updatedValues);

                        if (updatedValues.payerId !== updatedValues.recipientId) {
                            await tx.payment.update({
                                where: {
                                    id: payment.id,
                                },
                                data: updatedValues,
                            });
                        } else {
                            await tx.payment.delete({
                                where: {
                                    id: payment.id,
                                },
                            });
                        }
                    }
                });
            }

            await db.groupParticipant.deleteMany({
                where: {
                    groupId: opts.input.groupId,
                    userId: opts.input.userId,
                },
            });

            const text = isSelf
                ? `@user=${opts.input.userId} left the group`
                : `@user=${opts.input.userId} was removed from the group by @user=${opts.ctx.userId}`;

            await db.message.create({
                data: {
                    groupId: opts.input.groupId,
                    authorType: DB.AuthorType.System,
                    text,
                    key: uuidv4(),
                },
            });
        }),
});
