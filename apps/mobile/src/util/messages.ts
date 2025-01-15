import dayjs from 'dayjs';

import type { DB } from '@jshare/db';

export type MessageGroup<TMessage extends DB.Message> = {
    authorId: string | null;
    timestamp: Date;
    messages: TMessage[];
};

export type ChatListItem<TMessage extends DB.Message> =
    | {
          type: 'messages';
          authorId: string | null;
          messages: TMessage[];
      }
    | {
          type: 'date';
          date: string;
      };

export const messagesToChatListItems = <TMessage extends DB.Message>(
    messages: TMessage[]
): ChatListItem<TMessage>[] => {
    let currentDate: string | null = dayjs(messages.at(0)?.createdAt).startOf('day').toISOString();
    let currentAuthor: string | null = messages.at(0)?.authorId ?? null;
    let currentMessages: TMessage[] = [];

    const result: ChatListItem<TMessage>[] = [];

    for (const message of messages) {
        if (!!currentDate && !dayjs(message.createdAt).isSame(currentDate, 'day')) {
            result.push({
                type: 'messages',
                authorId: currentAuthor ?? null,
                messages: currentMessages,
            });
            result.push({
                type: 'date',
                date: currentDate,
            });
            currentDate = null;
            currentAuthor = message.authorId;
            currentMessages = [message];
            continue;
        }

        if (message.authorId !== currentAuthor) {
            result.push({
                type: 'messages',
                authorId: currentAuthor,
                messages: currentMessages,
            });
            currentAuthor = message.authorId;
            currentMessages = [message];
            continue;
        }

        currentMessages.push(message);
    }

    result.push({
        type: 'messages',
        authorId: currentAuthor,
        messages: currentMessages,
    });

    const lastMessageDate = dayjs(messages.at(-1)?.createdAt).startOf('day').toISOString();
    const lastDateSeparator = result.findLast((item) => item.type === 'date');

    if (lastDateSeparator && lastDateSeparator.date !== lastMessageDate) {
        result.push({
            type: 'date',
            date: lastMessageDate,
        });
    }

    return result;
};
