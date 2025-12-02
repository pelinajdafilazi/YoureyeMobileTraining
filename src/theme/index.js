// src/theme/index.js
// Barrel export for theme system

import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import shadows from './shadows';
import borderRadius from './borderRadius';

// Complete theme object
const theme = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
};

// Named exports
export { colors, typography, spacing, shadows, borderRadius };

// Default export
export default theme;


