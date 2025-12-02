// src/components/Button/index.js
import React, { memo } from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

// Theme
import { colors } from '../../theme';

// Styles
import { styles } from './styles';

/**
 * Button Component
 * Reusable button with different variants
 */
const Button = ({
  title,
  onPress,
  variant,
  size,
  disabled,
  loading,
  style,
  textStyle,
}) => {
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[`size_${size}`],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${variant}`],
    styles[`text_${size}`],
    disabled && styles.textDisabled,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' ? colors.primary : colors.textWhite} 
          size="small" 
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  /** Button text */
  title: PropTypes.string.isRequired,
  /** Press handler */
  onPress: PropTypes.func.isRequired,
  /** Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Disabled state */
  disabled: PropTypes.bool,
  /** Loading state */
  loading: PropTypes.bool,
  /** Additional button styles */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Additional text styles */
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  style: null,
  textStyle: null,
};

export default memo(Button);


