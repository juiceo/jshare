import React, { useState } from 'react';

import type { DB, LocalExpenseShare } from '@jshare/types';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { ExpenseShareEditorSheet } from '~/components/ExpenseShares/ExpenseShareEditorSheet';
import { ExpenseSharesEditorItem } from '~/components/ExpenseShares/ExpenseSharesEditorItem';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ExpenseSharesEditorProps = {
    value: Record<string, LocalExpenseShare>;
    onChange: (value: Record<string, LocalExpenseShare>) => void;
    expense: Pick<DB.Expense, 'amount' | 'currency'>;
    groupMembers: DB.GroupParticipant<{ user: true }>[];
};

export const ExpenseSharesEditor = (props: ExpenseSharesEditorProps) => {
    const { value, onChange, groupMembers, expense } = props;
    const [editUser, setEditUser] = useState<DB.Profile | null>(null);

    const handleToggle = (userId: string) => {
        onChange({
            ...value,
            [userId]: {
                ...value[userId],
                locked: false,
                enabled: !value[userId]?.enabled,
            },
        });
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
                    const share = value[member.userId];
                    if (!share) return null;
                    return (
                        <React.Fragment key={member.id}>
                            <ExpenseSharesEditorItem
                                user={member.user}
                                share={share}
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
                    share={value[editUser.userId]}
                    onShareChange={(share) => {
                        onChange({
                            ...value,
                            [editUser.userId]: share,
                        });
                    }}
                />
            )}
        </>
    );
};
