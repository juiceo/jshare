import React from 'react';
import { Tabs } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { Avatar } from '~/components/Avatar';
import { Icon } from '~/components/Icon';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export default screen(() => {
    const user = useCurrentUser();
    const { theme } = useTheme();
    return (
        <Tabs
            initialRouteName="groups"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.palette.background.elevation1,
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: theme.palette.accent.main,
                sceneStyle: {
                    backgroundColor: theme.palette.background.main,
                },
                animation: 'shift',
            }}
        >
            <Tabs.Screen
                name="groups"
                options={{
                    title: 'Groups',
                    tabBarIcon: ({ color }) => <Icon name="Users" color={color} />,
                }}
            />
            <Tabs.Screen
                name="you"
                options={{
                    title: 'You',
                    tabBarIcon: () => <Avatar userId={user.id} size="sm" />,
                }}
            />
        </Tabs>
    );
});
