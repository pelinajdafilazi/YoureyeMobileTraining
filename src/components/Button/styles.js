// src/components/Button/styles.js
import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '../../theme';

export const styles = StyleSheet.create({
  // Base styles
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.full,
    ...shadows.sm,
  },

  // Variants
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.backgroundAlt,
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  ghost: {
    backgroundColor: colors.transparent,
    ...shadows.none,
  },

  // Sizes
  size_small: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  size_medium: {
    paddingVertical: spacing.sm + 4,
    paddingHorizontal: spacing.lg,
  },
  size_large: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
  },

  // Disabled
  disabled: {
    backgroundColor: colors.disabled,
    ...shadows.none,
  },

  // Text base
  text: {
    ...typography.button,
  },

  // Text variants
  text_primary: {
    color: colors.textWhite,
  },
  text_secondary: {
    color: colors.primary,
  },
  text_outline: {
    color: colors.primary,
  },
  text_ghost: {
    color: colors.primary,
  },

  // Text sizes
  text_small: {
    ...typography.buttonSmall,
  },
  text_medium: {
    ...typography.button,
  },
  text_large: {
    ...typography.button,
    fontSize: 18,
  },

  // Text disabled
  textDisabled: {
    color: colors.textMuted,
  },
});


