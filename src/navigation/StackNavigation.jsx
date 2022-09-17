import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNavigations = () =>{
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginForm} options={{ headerShown: false }}/>
            <Stack.Screen name="HomeScreen" component={ HomeScreen }/>
        </Stack.Navigator>
    )
}

export default StackNavigations;