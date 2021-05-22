/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import DrawerStackScreen from '../RootStackNavigator/DrawerNavigator';
import ColorConstants from '../../theme/ColorConstants';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColorl: ColorConstants.black,
      }}>
      <RootStack.Screen 
        name="DrawerStackScreen" 
        component={DrawerStackScreen} 
        options={{ headerShown: false }} 
      />
    </RootStack.Navigator>
  );
};
const RootStackScreen = (props) => {
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen options={{ gestureEnabled: false }} name="MainNavigator" component={MainNavigator} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;