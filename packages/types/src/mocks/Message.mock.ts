import { AuthorType, type DB } from '../db';
import { Mocker } from './mocker';

class MessageMocker extends Mocker<DB.Message> {
    build(partial?: Partial<DB.Message>): DB.Message {
        return {
            id: partial?.id ?? this.getId(),
            key: partial?.key ?? this.getId(),
            text: partial?.text ?? 'mock-message-text',
            authorType: partial?.authorType ?? AuthorType.User,
            authorId: partial?.authorId ?? this.getId(),
            groupId: partial?.groupId ?? this.getId(),
            createdAt: partial?.createdAt ?? new Date(),
            updatedAt: partial?.updatedAt ?? new Date(),
        };
    }
}

export const MessageMock = new MessageMocker();
