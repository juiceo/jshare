import { type DB } from '../db';
import { Mocker } from './mocker';

class ExpenseShareMocker extends Mocker<DB.ExpenseShare> {
    build(partial?: Partial<DB.ExpenseShare>): DB.ExpenseShare {
        return {
            id: partial?.id ?? this.getId(),
            userId: partial?.userId ?? this.getId(),
            expenseId: partial?.expenseId ?? this.getId(),
            amount: partial?.amount ?? 0,
            currency: partial?.currency ?? 'USD',
            locked: partial?.locked ?? false,
            updatedAt: partial?.updatedAt ?? new Date(),
            createdAt: partial?.createdAt ?? new Date(),
        };
    }
}

export const ExpenseShareMock = new ExpenseShareMocker();
