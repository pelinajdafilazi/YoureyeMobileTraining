// App.js
// Main entry point of the application

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Navigation
import AppNavigator from './src/navigation/AppNavigator';

/**
 * App Component
 * Root component that sets up navigation and providers
 */
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

