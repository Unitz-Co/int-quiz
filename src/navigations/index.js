import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';

import {ScreenName, AdvisorList, AdvisorProfile} from '@screens';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={ScreenName.AdvisorList} component={AdvisorList} />
        <Stack.Screen
          name={ScreenName.AdvisorProfile}
          component={AdvisorProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
