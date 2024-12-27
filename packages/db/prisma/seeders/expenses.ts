import { faker } from '@faker-js/faker';
import { range, sum } from 'lodash';
import moment from 'moment';

import { type Expense, type Group, type PrismaClient } from '../../build';

export const seedExpenses = async (prisma: PrismaClient, groups: Group[]): Promise<Expense[]> => {
    const seedExpensesForGroup = async (group: Group) => {
        const maxDate = faker.date.between({
            from: moment().subtract(1, 'week').toDate(),
            to: new Date(),
        });
        const minDate = faker.date.between({
            from: moment(maxDate).subtract(1, 'month').toDate(),
            to: maxDate,
        });

        const userIds = await prisma.groupParticipant
            .findMany({
                where: {
                    groupId: group.id,
                },
            })
            .then((res) => res.map((item) => item.userId));

        return Promise.all(
            userIds.map((userId) => {
                const expenseCount = faker.helpers.weightedArrayElement([
                    {
                        weight: 10,
                        value: 0,
                    },
                    {
                        weight: 5,
                        value: faker.number.int({ min: 1, max: 5 }),
                    },
                    {
                        weight: 5,
                        value: faker.number.int({ min: 15, max: 30 }),
                    },
                ]);

                return Promise.all(
                    range(expenseCount).map(() => {
                        const expenseCreatedAt = faker.date.between({ from: minDate, to: maxDate });

                        const expenseShares = userIds.map((userId) => {
                            return faker.helpers.weightedArrayElement([
                                {
                                    weight: 5,
                                    value: 0,
                                },
                                {
                                    weight: 3,
                                    value: faker.number.int({ min: 100, max: 50_00 }),
                                },
                                {
                                    weight: 3,
                                    value: faker.number.int({ min: 50_00, max: 200_00 }),
                                },
                                {
                                    weight: 1,
                                    value: faker.number.int({ min: 200_00, max: 1000_00 }),
                                },
                            ]);
                        });

                        const totalAmount = sum(expenseShares);

                        const payerId = faker.helpers.weightedArrayElement([
                            {
                                weight: 2,
                                value: userId,
                            },
                            {
                                weight: 1,
                                value: faker.helpers.arrayElement(userIds),
                            },
                        ]);

                        return prisma.expense.create({
                            data: {
                                ownerId: userId,
                                payerId,
                                groupId: group.id,
                                amount: totalAmount,
                                currency: 'USD',
                                description: faker.commerce.productName(),
                                createdAt: expenseCreatedAt,
                                updatedAt: expenseCreatedAt,
                                shares: {
                                    createMany: {
                                        data: userIds.map((userId, index) => {
                                            return {
                                                userId,
                                                amount: expenseShares[index],
                                                currency: 'USD',
                                            };
                                        }),
                                    },
                                },
                            },
                        });
                    })
                );
            })
        );
    };

    const expenses: Expense[] = [];
    for (const group of groups) {
        const groupExpenses = await seedExpensesForGroup(group);
        expenses.push(...groupExpenses.flat());
    }

    return expenses;
};
