import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2f95dc',
      }}
    >
      <Tab.Screen
        name="Home"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
