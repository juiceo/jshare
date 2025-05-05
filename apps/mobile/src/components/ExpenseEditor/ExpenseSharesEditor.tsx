import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { addShare, removeShare, updateShare, type PartialExpenseShare } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { AddUserSheet } from '~/components/ExpenseEditor/AddUserSheet';
import { ExpenseShareEditorSheet } from '~/components/ExpenseEditor/ExpenseShareEditorSheet';
import { ExpenseSharesEditorItem } from '~/components/ExpenseEditor/ExpenseSharesEditorItem';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ExpenseSharesEditorProps = {
    value: PartialExpenseShare[];
    onChange: (value: PartialExpenseShare[]) => void;
    expense: Pick<DB.Expense, 'amount' | 'currency'>;
    groupMembers: DB.GroupParticipant[];
    groupId: string;
};

export const ExpenseSharesEditor = (props: ExpenseSharesEditorProps) => {
    const { value, onChange, groupMembers, expense, groupId } = props;
    const [editUser, setEditUser] = useState<string | null>(null);
    const [addingUser, setAddingUser] = useState<boolean>(false);

    const handleToggle = (userId: string) => {
        const shareIndex = value.findIndex((item) => item.userId === userId);
        if (shareIndex === -1) {
            onChange(
                addShare({
                    shares: value,
                    share: {
                        userId,
                        amount: 0,
                        locked: false,
                    },
                    expenseAmount: expense.amount,
                })
            );
        } else {
            onChange(
                removeShare({
                    shares: value,
                    userId,
                    expenseAmount: expense.amount,
                })
            );
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
                                userId={member.userId}
                                share={userShare}
                                currency={expense.currency}
                                onPress={() => handleToggle(member.userId)}
                                onLongPress={() => setEditUser(member.userId)}
                            />
                            {index !== groupMembers.length - 1 && (
                                <Divider horizontal color="background.default" />
                            )}
                        </React.Fragment>
                    );
                })}
                <Divider horizontal color="background.default" />
                <RectButton onPress={() => setAddingUser(true)}>
                    <Stack row alignCenter spacing="md" p="xl">
                        <Stack center bg="background.elevation2" h={36} w={36} br="full">
                            <Icon name="Plus" size={18} />
                        </Stack>
                        <Stack column>
                            <Typography variant="buttonSmall">Add person</Typography>
                            <Typography variant="caption" color="hint">
                                Add someone who is not in the group yet
                            </Typography>
                        </Stack>
                    </Stack>
                </RectButton>
            </Stack>
            {!!editUser && (
                <ExpenseShareEditorSheet
                    onClose={() => setEditUser(null)}
                    userId={editUser}
                    share={value.find((item) => item.userId === editUser)}
                    onShareChange={(share) => {
                        onChange(
                            updateShare({
                                shares: value,
                                share,
                                expenseAmount: expense.amount,
                            })
                        );
                    }}
                />
            )}
            {!!addingUser && (
                <AddUserSheet groupId={groupId} onClose={() => setAddingUser(false)} />
            )}
        </>
    );
};
