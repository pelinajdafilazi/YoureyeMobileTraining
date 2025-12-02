// src/screens/LoginPage/styles.js
import { StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius } from '../../theme';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
    justifyContent: 'center',
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  form: {
    marginBottom: spacing.lg,
    gap: spacing.md,
  },
  inputGroup: {
    marginBottom: spacing.sm,
  },
  label: {
    ...typography.label,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm + 2,
    ...typography.body,
    color: colors.text,
    backgroundColor: colors.backgroundAlt,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    ...typography.caption,
    color: colors.error,
    marginTop: spacing.xs,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md - 2,
    borderRadius: borderRadius.full,
    alignItems: 'center',
  },
  primaryButtonDisabled: {
    backgroundColor: colors.disabled,
  },
  primaryButtonText: {
    ...typography.button,
    color: colors.textWhite,
  },
});
