import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, type TabBarProps } from 'react-native-collapsible-tab-view';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';

import { formatAmount, getBalanceByParticipant, sumInCurrency } from '@jshare/common';
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
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

export default screen(
    observer(() => {
        const user = SessionStore.user;
        const router = useRouter();
        const { theme } = useTheme();
        const { group, groupId } = useGroupContext();

        const expenses = Store.expenses.findMany({
            groupId,
        });

        const payments = Store.payments.findMany({
            groupId,
        });

        const groupTotal = useMemo(() => {
            return sumInCurrency(
                expenses.map((e) => e.data),
                group.data.currency
            );
        }, [expenses, group.data.currency]);

        const balances = useMemo(() => {
            return getBalanceByParticipant({
                expenses: expenses.map((e) => e.data),
                payments: payments.map((p) => p.data),
                participants: group.data.participants,
                currency: group.data.currency,
            });
        }, [expenses, payments, group.data.participants, group.data.currency]);

        const ownBalance = balances.find((b) => b.userId === user.id);

        const styles = getStyles(theme);

        const renderHeader = () => {
            return (
                <Stack center ar="4/3" spacing="xl">
                    <Typography variant="h5">Group total</Typography>
                    <Typography variant="h1" align="center">
                        {formatAmount(groupTotal, group.data.currency)}
                    </Typography>
                    {ownBalance && (
                        <StatusBadge
                            prefix="You:"
                            amount={ownBalance.balance}
                            currency={group.data.currency}
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
                <Screen.Header title="Summary" subtitle={group.data.name} />
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
                                        highlight={item.userId === user.id}
                                    />
                                )}
                                keyExtractor={(item) => item.userId}
                                ItemSeparatorComponent={() => (
                                    <Divider horizontal color="background.secondary" />
                                )}
                            />
                        </Tabs.Tab>
                        <Tabs.Tab name="Expenses">
                            <Tabs.FlatList
                                data={expenses}
                                renderItem={({ item }) => (
                                    <ExpenseListItem data={item.data} userId={user.id} />
                                )}
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={() => (
                                    <Divider horizontal color="background.secondary" />
                                )}
                                ListEmptyComponent={
                                    <EmptyState icon="CreditCard" title="No expenses yet" />
                                }
                            />
                        </Tabs.Tab>
                        <Tabs.Tab name="Payments">
                            <Tabs.FlatList
                                data={payments}
                                renderItem={({ item }) => <PaymentListItem data={item.data} />}
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={() => (
                                    <Divider horizontal color="background.secondary" />
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
    })
);

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        header: {
            backgroundColor: theme.palette.background.primary,
        },
        tabBar: {
            borderBottomWidth: 1,
            borderBottomColor: theme.palette.background.secondary,
        },
    });
};
