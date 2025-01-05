import { trpc } from '~/services/trpc';

export const useGroupExpenses = (groupId: string) => {
    const expensesQuery = trpc.expenses.list.useQuery({ groupId });

    return expensesQuery;
};
