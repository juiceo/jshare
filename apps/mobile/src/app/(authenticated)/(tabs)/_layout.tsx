import React from 'react';
import { Tabs } from 'expo-router';
import { observer } from 'mobx-react-lite';

import { useTheme } from '@jshare/theme';

import { Avatar } from '~/components/Avatar';
import { Icon } from '~/components/Icon';
import { SessionStore } from '~/lib/store/SessionStore';
import { screen } from '~/wrappers/screen';

export default screen(
    observer(() => {
        const user = SessionStore.user;
        const { theme } = useTheme();
        return (
            <Tabs
                initialRouteName="groups"
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: theme.palette.background.secondary,
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: theme.palette.accent.main,
                    sceneStyle: {
                        backgroundColor: theme.palette.background.primary,
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
    })
);
