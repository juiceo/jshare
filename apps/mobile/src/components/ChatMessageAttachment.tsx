import { type MessageAttachmentType } from '@jshare/db/models';

import { ChatMessageExpenseAttachment } from '~/components/ChatMessageAttachment.Expense';

export type ChatMessageAttachmentProps = ChatMessageExpenseAttachmentProps;

type ChatMessageExpenseAttachmentProps = {
    type: MessageAttachmentType;
    expenseId: string;
};

export const ChatMessageAttachment = (props: ChatMessageAttachmentProps) => {
    switch (props.type) {
        case 'Expense': {
            return <ChatMessageExpenseAttachment expenseId={props.expenseId} />;
        }
    }
};
