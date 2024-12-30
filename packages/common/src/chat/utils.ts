import dayjs from 'dayjs';
import { chain } from 'lodash';

import type { DB } from '@jshare/types';

export const foo = null;

export const groupMessagesByDate = <TMessage extends DB.Message>(
    messages: TMessage[]
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
        .sortBy(([date]) => -date)
        .map(([date, messages]) => ({
            date,
            messages,
        }))
        .value();
};

export const groupConsecutiveMessagesByAuthor = <TMessage extends DB.Message>(
    messages: TMessage[]
): { authorId: string | null; timestamp: Date; messages: TMessage[] }[] => {
    return messages.reduce(
        (result, message) => {
            if (result.at(-1)?.authorId === message.authorId) {
                result.at(-1)?.messages.push(message);
            } else {
                result.push({
                    authorId: message.authorId,
                    timestamp: message.createdAt,
                    messages: [message],
                });
            }
            return result;
        },
        [] as { authorId: string | null; timestamp: Date; messages: TMessage[] }[]
    );
};
