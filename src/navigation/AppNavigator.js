// src/navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Constants
import { SCREENS } from '../constants';

// Screens
import OpeningPage from '../screens/OpeningPage';
import InfoPage from '../screens/InfoPage';
import LoginPage from '../screens/LoginPage';

const Stack = createNativeStackNavigator();

// Default screen options
const defaultScreenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  gestureEnabled: true,
};

/**
 * Main App Navigator
 * Handles all screen navigation in the app
 */
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.OPENING}
      screenOptions={defaultScreenOptions}
    >
      {/* Onboarding Flow */}
      <Stack.Screen 
        name={SCREENS.OPENING} 
        component={OpeningPage}
        options={{ animation: 'fade' }}
      />
      <Stack.Screen 
        name={SCREENS.INFO} 
        component={InfoPage}
        options={{ 
          animation: 'fade_from_bottom',
          animationDuration: 500,
        }}
      />
      
      {/* Auth Flow */}
      <Stack.Screen 
        name={SCREENS.LOGIN} 
        component={LoginPage}
        options={{ animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
