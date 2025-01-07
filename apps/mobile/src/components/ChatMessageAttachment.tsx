import { StyleSheet } from 'react-native';

import { type Theme } from '@jshare/theme';
import { MessageAttachmentType, type DB } from '@jshare/types';

import { ChatMessageExpenseAttachment } from '~/components/ChatMessageAttachment.Expense';

export type ChatMessageAttachmentProps = ChatMessageExpenseAttachmentProps;

type ChatMessageExpenseAttachmentProps = {
    type: DB.MessageAttachmentType;
    expenseId: string;
};

export const ChatMessageAttachment = (props: ChatMessageAttachmentProps) => {
    switch (props.type) {
        case MessageAttachmentType.Expense: {
            return <ChatMessageExpenseAttachment expenseId={props.expenseId} />;
        }
    }
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({});
};
