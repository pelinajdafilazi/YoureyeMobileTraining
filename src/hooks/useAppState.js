// src/hooks/useAppState.js
// Hook for tracking app state (foreground/background)

import { useEffect, useState, useRef } from 'react';
import { AppState } from 'react-native';

/**
 * Hook to track app state changes
 * @param {Function} onForeground - Callback when app comes to foreground
 * @param {Function} onBackground - Callback when app goes to background
 * @returns {string} Current app state
 */
const useAppState = (onForeground, onBackground) => {
  const appState = useRef(AppState.currentState);
  const [currentState, setCurrentState] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      // App came to foreground
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        onForeground?.();
      }

      // App went to background
      if (
        appState.current === 'active' &&
        nextAppState.match(/inactive|background/)
      ) {
        onBackground?.();
      }

      appState.current = nextAppState;
      setCurrentState(nextAppState);
    });

    return () => {
      subscription.remove();
    };
  }, [onForeground, onBackground]);

  return currentState;
};

export default useAppState;


