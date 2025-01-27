import { StyleSheet } from 'react-native';
import { Tabs, type TabBarProps } from 'react-native-collapsible-tab-view';
import { BorderlessButton } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';

import { useTheme, type Theme } from '@jshare/theme';

import { AnimatedTabBarIndicator } from '~/components/AnimatedTabBar/AnimatedTabBarIndicator';
import { AnimatedTabBarTab } from '~/components/AnimatedTabBar/AnimatedTabBarTab';
import { Divider } from '~/components/atoms/Divider';
import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { IconButton } from '~/components/IconButton';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { trpc } from '~/services/trpc';
import { toast } from '~/state/toast';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/settings',
        auth: true,
    },
    ({ params, auth, router }) => {
        const { theme } = useTheme();
        const styles = getStyles(theme);
        const trpcUtils = trpc.useUtils();
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const refreshInviteCode = trpc.groups.refreshCode.useMutation();

        const handleRefreshInviteCode = async () => {
            const updatedGroup = await refreshInviteCode.mutateAsync({ groupId: params.groupId });
            trpcUtils.groups.get.setData({ id: params.groupId }, updatedGroup);
            trpcUtils.groups.get.invalidate();
        };

        const handleCopyInviteCode = async (code: string) => {
            await Clipboard.setStringAsync(code);
            toast.info('Invite code copied!');
        };

        const renderHeader = () => {
            return (
                <Stack center ar="1/1">
                    <Image
                        image={group.coverImage}
                        width={140}
                        height={140}
                        br="full"
                        bg="background.elevation1"
                        mb="2xl"
                    />
                    <Typography variant="h4">{group.name}</Typography>
                    <Typography variant="body1" color="hint">
                        {group.participants.length} members
                    </Typography>
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
                            />
                        ))}
                    </Stack>
                    <AnimatedTabBarIndicator {...props} />
                </Stack>
            );
        };

        const renderMembersHeader = () => {
            const code = group.inviteCode;
            if (!code) return null;
            return (
                <BorderlessButton onPress={() => handleCopyInviteCode(code)} activeOpacity={0.8}>
                    <Stack alignCenter row bg="background.elevation1" p="xl" spacing="xl">
                        <Stack column flex={1}>
                            <Typography variant="caption">Tap to copy invite code</Typography>
                            <Typography variant="subtitle1" color="primary.light">
                                {group.inviteCode}
                            </Typography>
                        </Stack>
                        <Stack center>
                            <IconButton
                                icon="RefreshCcw"
                                disabled={refreshInviteCode.isPending}
                                onPress={handleRefreshInviteCode}
                                variant="ghost"
                            />
                        </Stack>
                    </Stack>
                </BorderlessButton>
            );
        };

        return (
            <Screen>
                <Screen.Header title="Manage group" blur />
                <Screen.Content disableTopInset>
                    <Tabs.Container
                        renderHeader={renderHeader}
                        renderTabBar={renderTabBar}
                        headerContainerStyle={styles.header}
                    >
                        <Tabs.Tab name="Members">
                            <Tabs.FlatList
                                data={group.participants}
                                renderItem={({ item }) => (
                                    <Stack row p="xl" spacing="xl">
                                        <Avatar userId={item.userId} size="md" />
                                        <Stack column flex={1}>
                                            <Typography variant="subtitle1">
                                                <UserName userId={item.userId} variant="full" />
                                            </Typography>
                                            <Typography variant="caption" color="hint">
                                                Last seen 2 minutes ago
                                            </Typography>
                                        </Stack>
                                        <Stack column center>
                                            <Typography variant="subtitle2" color="hint">
                                                {item.role === 'Owner' && 'Owner'}
                                                {item.role === 'Admin' && 'Admin'}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                )}
                                keyExtractor={(item) => item.userId}
                                ListHeaderComponent={renderMembersHeader}
                                ItemSeparatorComponent={() => (
                                    <Divider horizontal color="background.elevation1" />
                                )}
                            />
                        </Tabs.Tab>
                        <Tabs.Tab name="Settings">
                            <Tabs.ScrollView>
                                <Stack ar="1/1">
                                    <Typography variant="h4">Settings here</Typography>
                                </Stack>
                            </Tabs.ScrollView>
                        </Tabs.Tab>
                    </Tabs.Container>
                </Screen.Content>
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
