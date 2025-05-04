import dayjs from 'dayjs';

import type { Docs } from '~/lib/store/collections';

export type MessageGroup = {
    authorId: string | null;
    timestamp: Date;
    messages: Docs.Message[];
};

export type ChatListItem =
    | {
          type: 'messages';
          authorId: string | null;
          messages: Docs.Message[];
      }
    | {
          type: 'date';
          date: string;
      };

export const messagesToChatListItems = (messages: Docs.Message[]): ChatListItem[] => {
    let currentDate: string | null = dayjs(messages.at(0)?.data.createdAt)
        .startOf('day')
        .toISOString();
    let currentAuthor: string | null = messages.at(0)?.data.authorId ?? null;
    let currentMessages: Docs.Message[] = [];

    const result: ChatListItem[] = [];

    for (const message of messages) {
        if (!!currentDate && !dayjs(message.data.createdAt).isSame(currentDate, 'day')) {
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
            currentAuthor = message.data.authorId;
            currentMessages = [message];
            continue;
        }

        if (message.data.authorId !== currentAuthor) {
            result.push({
                type: 'messages',
                authorId: currentAuthor,
                messages: currentMessages,
            });
            currentAuthor = message.data.authorId;
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

    const lastMessageDate = dayjs(messages.at(-1)?.data.createdAt).startOf('day').toISOString();
    const lastDateSeparator = result.findLast((item) => item.type === 'date');

    if (lastDateSeparator && lastDateSeparator.date !== lastMessageDate) {
        result.push({
            type: 'date',
            date: lastMessageDate,
        });
    }

    return result;
};
