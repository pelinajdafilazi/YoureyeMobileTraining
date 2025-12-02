// src/components/Logo/index.js
import React, { memo } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

// Assets
import logo from '../../assets/logo/logo.png';

// Styles
import { styles } from './styles';

/**
 * Logo Component
 * Displays the app logo with customizable size
 */
const Logo = ({ size, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={logo}
        style={[styles.image, { width: size, height: size }]}
        resizeMode="contain"
      />
    </View>
  );
};

Logo.propTypes = {
  /** Size of the logo (width and height) */
  size: PropTypes.number,
  /** Additional container styles */
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

Logo.defaultProps = {
  size: 80,
  style: null,
};

export default memo(Logo);
