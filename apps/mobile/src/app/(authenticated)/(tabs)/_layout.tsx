import React from 'react';
import { Tabs } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { Avatar } from '~/components/Avatar';
import { Icon } from '~/components/Icon';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/(tabs)',
        auth: true,
    },
    ({ auth }) => {
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
                }}
                sceneContainerStyle={{
                    backgroundColor: theme.palette.background.main,
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
                    name="profile"
                    options={{
                        title: 'You',
                        tabBarIcon: () => <Avatar userId={auth.session.user.id} size="sm" />,
                    }}
                />
            </Tabs>
        );
    }
);
