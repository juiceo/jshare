import { observer } from 'mobx-react-lite';

import type { DB } from '@jshare/db';

import { ChatMessageExpenseAttachment } from '~/components/ChatMessageAttachment.Expense';

export type ChatMessageAttachmentProps = ChatMessageExpenseAttachmentProps;

type ChatMessageExpenseAttachmentProps = {
    attachment: DB.MessageAttachment;
};

export const ChatMessageAttachment = observer((props: ChatMessageAttachmentProps) => {
    switch (props.attachment.type) {
        case 'Expense': {
            const expenseId = props.attachment.expenseId;
            return expenseId ? <ChatMessageExpenseAttachment expenseId={expenseId} /> : null;
        }
    }
});
