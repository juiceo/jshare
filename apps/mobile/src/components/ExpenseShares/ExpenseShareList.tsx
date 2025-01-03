import React, { useMemo, useState } from 'react';

import type { CurrencyCode } from '@jshare/common';
import type { DB } from '@jshare/types';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { ExpenseShareEditorSheet } from '~/components/ExpenseShares/ExpenseShareEditorSheet';
import { ExpenseShareItem } from '~/components/ExpenseShares/ExpenseShareItem';
import type { ExpenseSharesByUser } from '~/components/ExpenseShares/types';
import {
    DEFAULT_SHARE,
    getAmountByUser,
    getInitialShares,
    getStatusForUser,
} from '~/components/ExpenseShares/util';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type ExpenseShareListProps = {
    value: ExpenseSharesByUser | undefined;
    onChange: (value: ExpenseSharesByUser) => void;
    expenseAmount: number;
    expenseCurrency: CurrencyCode;
    groupMembers: DB.GroupParticipant<{ user: true }>[];
};

export const ExpenseShareList = (props: ExpenseShareListProps) => {
    const { value, onChange, groupMembers, expenseAmount, expenseCurrency } = props;
    const [editUser, setEditUser] = useState<DB.Profile | null>(null);

    // const handleShareChange = (userId: string, share: ExpenseShare) => {
    //     onChange({
    //         ...value,
    //         [userId]: share,
    //     });
    // };

    const sharesByUser = useMemo(() => {
        return value ?? getInitialShares({ groupMembers });
    }, [groupMembers, value]);

    const amountByUser = useMemo(() => {
        return getAmountByUser(sharesByUser, expenseAmount);
    }, [expenseAmount, sharesByUser]);

    const handleToggle = (userId: string) => {
        if (!sharesByUser[userId]?.enabled) {
            return onChange({
                ...sharesByUser,
                [userId]: {
                    enabled: true,
                    fixedAmount: null,
                },
            });
        } else {
            return onChange({
                ...sharesByUser,
                [userId]: {
                    enabled: false,
                    fixedAmount: null,
                },
            });
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
                    return (
                        <React.Fragment key={member.id}>
                            <ExpenseShareItem
                                user={member.user}
                                currency={expenseCurrency}
                                status={getStatusForUser({
                                    userId: member.userId,
                                    shares: sharesByUser,
                                })}
                                amount={amountByUser[member.userId] ?? 0}
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
                    amount={amountByUser[editUser.userId] ?? 0}
                    share={sharesByUser[editUser.userId] ?? DEFAULT_SHARE}
                    onShareChange={(share) => {
                        onChange({
                            ...sharesByUser,
                            [editUser.userId]: share,
                        });
                    }}
                />
            )}
        </>
    );
};
