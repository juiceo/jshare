import { faker } from '@faker-js/faker';
import { range } from 'lodash';
import moment from 'moment';

import { AuthorType, type Group, type Message, type Prisma, type PrismaClient } from '../../build';

export const seedMessages = async (prisma: PrismaClient, groups: Group[]): Promise<Message[]> => {
    const seedMessagesForGroup = async (group: Group) => {
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

        return prisma.message.createManyAndReturn({
            data: userIds.flatMap((userId) => {
                const messageCount = faker.helpers.weightedArrayElement([
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

                return range(messageCount).map((): Prisma.MessageCreateManyInput => {
                    const messageCreatedAt = faker.date.between({ from: minDate, to: maxDate });
                    return {
                        text: faker.company.buzzPhrase(),
                        authorType: AuthorType.User,
                        authorId: userId,
                        groupId: group.id,
                        createdAt: messageCreatedAt,
                        updatedAt: messageCreatedAt,
                    };
                });
            }),
        });
    };

    const results = await Promise.all(groups.map(seedMessagesForGroup));

    return results.flat();
};
