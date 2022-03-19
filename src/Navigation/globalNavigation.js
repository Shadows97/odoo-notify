// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StarterScreen from '../Screens/Starter';


const Stack = createNativeStackNavigator();

export function GlobalStack() {
  return (
   
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen 
            name="Start" 
            component={StarterScreen} 
            options={
                {
                    headerShown: false
                }
            } />
      </Stack.Navigator>
   
  );
}