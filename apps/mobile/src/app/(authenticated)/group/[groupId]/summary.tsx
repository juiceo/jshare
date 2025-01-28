import React from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, type TabBarProps } from 'react-native-collapsible-tab-view';
import { useRouter } from 'expo-router';

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
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/summary',
        auth: true,
    },
    ({ params, auth }) => {
        const router = useRouter();
        const userId = auth.session.user.id;
        const { theme } = useTheme();
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const [groupTotal] = trpc.expenses.getTotalForGroup.useSuspenseQuery({
            groupId: params.groupId,
        });
        const [balances, { refetch: refetchBalances, isRefetching: isRefetchingBalances }] =
            trpc.balances.getByParticipantInGroup.useSuspenseQuery({
                groupId: params.groupId,
            });

        const [expenses, { refetch: refetchExpenses, isRefetching: isRefetchingExpenses }] =
            trpc.expenses.list.useSuspenseQuery({
                groupId: params.groupId,
            });

        const [payments, { refetch: refetchPayments, isRefetching: isRefetchingPayments }] =
            trpc.payments.list.useSuspenseQuery({
                groupId: params.groupId,
            });

        const ownBalance = balances.find((b) => b.userId === userId);

        const throttledIsRefetchingBalances = useThrottledLoading(isRefetchingBalances, 1000);
        const throttledIsRefetchingExpenses = useThrottledLoading(isRefetchingExpenses, 1000);
        const throttledIsRefetchingPayments = useThrottledLoading(isRefetchingPayments, 1000);

        const styles = getStyles(theme);

        const renderHeader = () => {
            return (
                <Stack center ar="1/1" spacing="xl">
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
                                    <BalanceListItem
                                        data={item}
                                        highlight={item.userId === userId}
                                    />
                                )}
                                keyExtractor={(item) => item.userId}
                                onRefresh={refetchBalances}
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
                                    <ExpenseListItem data={item} userId={userId} />
                                )}
                                keyExtractor={(item) => item.id}
                                onRefresh={refetchExpenses}
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
                                onRefresh={refetchPayments}
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
                                    params: { groupId: params.groupId },
                                })
                            }
                        >
                            Settle up
                        </Button>
                    </Screen.Footer>
                ) : null}
            </Screen>
        );
    }
);

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
