// src/components/Icons/index.js
// Reusable SVG icon components

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';
import colors from '../../theme/colors';

/**
 * WiFi Signal Icon
 */
export const WifiIcon = memo(({ size = 120, color = colors.brand.primaryLight }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3C7.46 3 3.34 4.78 0.29 7.67C-0.1 8.04 -0.1 8.64 0.29 9.01C0.68 9.38 1.3 9.38 1.69 9.01C4.35 6.49 7.98 4.97 12 4.97C16.02 4.97 19.65 6.49 22.31 9.01C22.7 9.38 23.32 9.38 23.71 9.01C24.1 8.64 24.1 8.04 23.71 7.67C20.66 4.78 16.54 3 12 3Z"
      fill={color}
    />
    <Path
      d="M12 7C8.95 7 6.16 8.17 4.05 10.1C3.66 10.47 3.66 11.07 4.05 11.44C4.44 11.81 5.06 11.81 5.45 11.44C7.18 9.85 9.47 8.97 12 8.97C14.53 8.97 16.82 9.85 18.55 11.44C18.94 11.81 19.56 11.81 19.95 11.44C20.34 11.07 20.34 10.47 19.95 10.1C17.84 8.17 15.05 7 12 7Z"
      fill={color}
    />
    <Path
      d="M12 11C10.35 11 8.85 11.63 7.76 12.67C7.37 13.04 7.37 13.64 7.76 14.01C8.15 14.38 8.77 14.38 9.16 14.01C9.87 13.33 10.88 12.97 12 12.97C13.12 12.97 14.13 13.33 14.84 14.01C15.23 14.38 15.85 14.38 16.24 14.01C16.63 13.64 16.63 13.04 16.24 12.67C15.15 11.63 13.65 11 12 11Z"
      fill={color}
    />
    <Path
      d="M12 15C10.9 15 10 15.9 10 17C10 18.1 10.9 19 12 19C13.1 19 14 18.1 14 17C14 15.9 13.1 15 12 15Z"
      fill={color}
    />
  </Svg>
));

WifiIcon.displayName = 'WifiIcon';
WifiIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

/**
 * Eye Icon for password visibility
 */
export const EyeIcon = memo(({ visible, color = colors.brand.primary }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    {visible ? (
      <G fill={color}>
        <Path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
      </G>
    ) : (
      <G fill={color}>
        <Path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
      </G>
    )}
  </Svg>
));

EyeIcon.displayName = 'EyeIcon';
EyeIcon.propTypes = {
  visible: PropTypes.bool,
  color: PropTypes.string,
};

/**
 * Arrow Right Icon
 */
export const ArrowRightIcon = memo(({ size = 40, color = colors.text.white }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
      fill={color}
    />
  </Svg>
));

ArrowRightIcon.displayName = 'ArrowRightIcon';
ArrowRightIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};









