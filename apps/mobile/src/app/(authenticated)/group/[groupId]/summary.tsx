import React from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, type TabBarProps } from 'react-native-collapsible-tab-view';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { formatAmount } from '@jshare/common';
import { useTheme, type Theme } from '@jshare/theme';

import { AnimatedTabBarIndicator } from '~/components/AnimatedTabBar/AnimatedTabBarIndicator';
import { AnimatedTabBarTab } from '~/components/AnimatedTabBar/AnimatedTabBarTab';
import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { BalanceListItem } from '~/components/BalanceListItem';
import { Button } from '~/components/Button';
import { ExpenseListItem } from '~/components/ExpenseListItem';
import { PaymentListItem } from '~/components/PaymentListItem';
import { Screen } from '~/components/Screen';
import { StatusBadge } from '~/components/StatusBadge';
import { Typography } from '~/components/Typography';
import { EmptyState } from '~/components/util/EmptyState';
import { useThrottledLoading } from '~/hooks/useThrottledLoading';
import { trpc } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export default screen(() => {
    const user = useCurrentUser();
    const router = useRouter();
    const { theme } = useTheme();
    const { groupId } = useLocalSearchParams<{ groupId: string }>();
    const group = useSuspenseQuery(trpc.groups.get.queryOptions({ id: groupId })).data;
    const groupTotal = useSuspenseQuery(
        trpc.expenses.getTotalForGroup.queryOptions({ groupId })
    ).data;
    const balancesQuery = useSuspenseQuery(
        trpc.balances.getByParticipantInGroup.queryOptions({ groupId })
    );
    const balances = balancesQuery.data;
    const expensesQuery = useSuspenseQuery(trpc.expenses.list.queryOptions({ groupId }));
    const expenses = expensesQuery.data;
    const paymentsQuery = useSuspenseQuery(trpc.payments.list.queryOptions({ groupId }));
    const payments = paymentsQuery.data;

    const ownBalance = balances.find((b) => b.userId === user.id);

    const throttledIsRefetchingBalances = useThrottledLoading(balancesQuery.isRefetching, 1000);
    const throttledIsRefetchingExpenses = useThrottledLoading(expensesQuery.isRefetching, 1000);
    const throttledIsRefetchingPayments = useThrottledLoading(paymentsQuery.isRefetching, 1000);

    const styles = getStyles(theme);

    const renderHeader = () => {
        return (
            <Stack center ar="4/3" spacing="xl">
                <Typography variant="h5">Group total</Typography>
                <Typography variant="h1" align="center">
                    {formatAmount(groupTotal, group.currency)}
                </Typography>
                {ownBalance && (
                    <StatusBadge
                        prefix="You:"
                        amount={ownBalance.balance}
                        currency={group.currency}
                    />
                )}
            </Stack>
        );
    };

    const renderTabBar = (props: TabBarProps) => {
        return (
            <Stack column style={styles.tabBar}>
                <Stack row>
                    {props.tabNames.map((name, index) => (
                        <AnimatedTabBarTab
                            key={name}
                            name={name}
                            index={index}
                            activeIndex={props.indexDecimal}
                            onPress={() => props.onTabPress(name)}
                            badge={(() => {
                                switch (name) {
                                    case 'Balances':
                                        return undefined;
                                    case 'Expenses':
                                        return expenses.length;
                                    case 'Payments':
                                        return payments.length;
                                    default:
                                        return undefined;
                                }
                            })()}
                        />
                    ))}
                </Stack>
                <AnimatedTabBarIndicator {...props} />
            </Stack>
        );
    };

    return (
        <Screen>
            <Screen.Header title="Summary" subtitle={group.name} />
            <Screen.Content disableTopInset>
                <Tabs.Container
                    renderHeader={renderHeader}
                    headerHeight={200}
                    minHeaderHeight={0}
                    headerContainerStyle={styles.header}
                    renderTabBar={renderTabBar}
                >
                    <Tabs.Tab name="Balances">
                        <Tabs.FlatList
                            data={balances}
                            renderItem={({ item }) => (
                                <BalanceListItem data={item} highlight={item.userId === user.id} />
                            )}
                            keyExtractor={(item) => item.userId}
                            onRefresh={balancesQuery.refetch}
                            refreshing={throttledIsRefetchingBalances}
                            ItemSeparatorComponent={() => (
                                <Divider horizontal color="background.elevation1" />
                            )}
                        />
                    </Tabs.Tab>
                    <Tabs.Tab name="Expenses">
                        <Tabs.FlatList
                            data={expenses}
                            renderItem={({ item }) => (
                                <ExpenseListItem data={item} userId={user.id} />
                            )}
                            keyExtractor={(item) => item.id}
                            onRefresh={expensesQuery.refetch}
                            refreshing={throttledIsRefetchingExpenses}
                            ItemSeparatorComponent={() => (
                                <Divider horizontal color="background.elevation1" />
                            )}
                            ListEmptyComponent={
                                <EmptyState icon="CreditCard" title="No expenses yet" />
                            }
                        />
                    </Tabs.Tab>
                    <Tabs.Tab name="Payments">
                        <Tabs.FlatList
                            data={payments}
                            renderItem={({ item }) => <PaymentListItem data={item} />}
                            keyExtractor={(item) => item.id}
                            onRefresh={paymentsQuery.refetch}
                            refreshing={throttledIsRefetchingPayments}
                            ItemSeparatorComponent={() => (
                                <Divider horizontal color="background.elevation1" />
                            )}
                            ListEmptyComponent={
                                <EmptyState icon="ArrowDownUp" title="No payments yet" />
                            }
                        />
                    </Tabs.Tab>
                </Tabs.Container>
            </Screen.Content>
            {ownBalance && ownBalance.balance !== 0 ? (
                <Screen.Footer>
                    <Button
                        color="primary"
                        variant="contained"
                        onPress={() =>
                            router.push({
                                pathname: '/(authenticated)/group/[groupId]/settle',
                                params: { groupId },
                            })
                        }
                    >
                        Settle up
                    </Button>
                </Screen.Footer>
            ) : null}
        </Screen>
    );
});

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        header: {
            backgroundColor: theme.palette.background.main,
        },
        tabBar: {
            borderBottomWidth: 1,
            borderBottomColor: theme.palette.background.elevation1,
        },
    });
};
