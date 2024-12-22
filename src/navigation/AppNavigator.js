import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChallengeScreen from '../screens/ChallengeScreen';
import StudyScreen from '../screens/StudyScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Challenge" component={ChallengeScreen} />
      <Tab.Screen name="Study" component={StudyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;