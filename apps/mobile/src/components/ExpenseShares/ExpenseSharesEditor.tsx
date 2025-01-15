import React, { useState } from 'react';

import { addShare, removeShare, updateShare, type PartialExpenseShare } from '@jshare/common';
import type { Expense, ExpenseShare, GroupParticipant, Profile } from '@jshare/db/models';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { ExpenseShareEditorSheet } from '~/components/ExpenseShares/ExpenseShareEditorSheet';
import { ExpenseSharesEditorItem } from '~/components/ExpenseShares/ExpenseSharesEditorItem';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ExpenseSharesEditorProps = {
    value: PartialExpenseShare[];
    onChange: (value: PartialExpenseShare[]) => void;
    expense: Pick<Expense, 'amount' | 'currency'>;
    groupMembers: (GroupParticipant & { user: Profile })[];
};

export const ExpenseSharesEditor = (props: ExpenseSharesEditorProps) => {
    const { value, onChange, groupMembers, expense } = props;
    const [editUser, setEditUser] = useState<Profile | null>(null);

    const handleToggle = (userId: string) => {
        const shareIndex = value.findIndex((item) => item.userId === userId);
        if (shareIndex === -1) {
            onChange(addShare(value, expense.amount, userId));
        } else {
            onChange(removeShare(value, expense.amount, userId));
        }
    };

    return (
        <>
            <Stack column bg="background.elevation1" br="xl">
                <Stack p="xl" row alignCenter spacing="sm">
                    <Icon name="Info" size={12} color={(theme) => theme.palette.text.hint} />
                    <Typography variant="caption" color="hint" align="center">
                        Tap to toggle people, long press to edit
                    </Typography>
                </Stack>
                <Divider horizontal color="background.default" />
                {groupMembers.map((member, index) => {
                    const userShare = value.find((item) => item.userId === member.userId);

                    return (
                        <React.Fragment key={member.id}>
                            <ExpenseSharesEditorItem
                                user={member.user}
                                share={userShare}
                                currency={expense.currency}
                                onPress={() => handleToggle(member.userId)}
                                onLongPress={() => setEditUser(member.user)}
                            />
                            {index !== groupMembers.length - 1 && (
                                <Divider horizontal color="background.default" />
                            )}
                        </React.Fragment>
                    );
                })}
            </Stack>
            {!!editUser && (
                <ExpenseShareEditorSheet
                    onClose={() => setEditUser(null)}
                    user={editUser}
                    share={value.find((item) => item.userId === editUser.userId)}
                    onShareChange={(share) => {
                        onChange(updateShare(value, expense.amount, share));
                    }}
                />
            )}
        </>
    );
};
