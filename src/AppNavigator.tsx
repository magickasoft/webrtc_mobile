import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Dimensions} from 'react-native';

import {MainScreen} from './screens/MainScreen';

export type AppStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  const dimensions = Dimensions.get('window');
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureResponseDistance: dimensions.width / 2,
        animationEnabled: false,
      }}>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  );
};
