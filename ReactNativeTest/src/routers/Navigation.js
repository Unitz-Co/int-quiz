import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {FilterScreen} from '../screens/Filter';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
};
