import dayjs from 'dayjs';
import { chain, sortBy } from 'lodash';

import type { DB } from '@jshare/types';

export const foo = null;

export const groupMessagesByDate = <TMessage extends DB.Message>(
    messages: TMessage[],
    sortOrder: 'asc' | 'desc'
): { date: string; messages: TMessage[] }[] => {
    return chain(messages)
        .reduce(
            (result, message) => {
                const date = dayjs(message.createdAt).format('YYYY-MM-DD');
                if (result[date]) {
                    result[date].push(message);
                } else {
                    result[date] = [message];
                }
                return result;
            },
            {} as Record<string, TMessage[]>
        )
        .entries()
        .sortBy(([date]) => (sortOrder === 'asc' ? date : -date))
        .map(([date, messages]) => ({
            date,
            messages: sortBy(messages, (message) =>
                sortOrder === 'asc' ? message.createdAt : -message.createdAt
            ),
        }))
        .value();
};

export const groupConsecutiveMessagesByAuthor = <TMessage extends DB.Message>(
    messages: TMessage[]
): { authorId: string | null; messages: TMessage[] }[] => {
    const groups: { authorId: string | null; messages: TMessage[] }[] = [];

    messages.forEach((message) => {
        if (groups.at(-1)?.authorId === message.authorId) {
            groups.at(-1)?.messages.push(message);
        } else {
            groups.push({
                authorId: message.authorId,
                messages: [message],
            });
        }
    });

    return groups;
};
