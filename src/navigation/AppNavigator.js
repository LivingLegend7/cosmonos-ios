import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Trophy, BookOpen, User } from 'lucide-react-native';

import ChallengeScreen from '../screens/ChallengeScreen';
import StudyScreen from '../screens/StudyScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let Icon;
            if (route.name === 'Challenge') Icon = Trophy;
            else if (route.name === 'Study') Icon = BookOpen;
            else if (route.name === 'Profile') Icon = User;
            return <Icon size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3B82F6',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            height: 60,
            paddingBottom: 10,
            paddingTop: 10
          }
        })}
      >
        <Tab.Screen 
          name="Challenge" 
          component={ChallengeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F3F4F6',
              elevation: 0,
              shadowOpacity: 0
            }
          }}
        />
        <Tab.Screen 
          name="Study" 
          component={StudyScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F3F4F6',
              elevation: 0,
              shadowOpacity: 0
            }
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F3F4F6',
              elevation: 0,
              shadowOpacity: 0
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;