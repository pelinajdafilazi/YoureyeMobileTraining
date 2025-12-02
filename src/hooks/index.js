// src/hooks/index.js
// Barrel export for custom hooks

import useKeyboard from './useKeyboard';
import useAppState from './useAppState';
import useDebounce from './useDebounce';

export { useKeyboard, useAppState, useDebounce };

export default {
  useKeyboard,
  useAppState,
  useDebounce,
};

