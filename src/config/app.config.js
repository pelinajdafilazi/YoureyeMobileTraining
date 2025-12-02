// src/config/app.config.js
// Application configuration

const APP_CONFIG = {
  // App info
  APP_NAME: 'YourEye',
  APP_VERSION: '1.0.0',
  
  // Feature flags
  FEATURES: {
    BIOMETRIC_AUTH: true,
    PUSH_NOTIFICATIONS: true,
    ANALYTICS: !__DEV__,
    CRASH_REPORTING: !__DEV__,
  },
  
  // Timeouts
  SPLASH_DURATION: 2000,
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  
  // Pagination
  DEFAULT_PAGE_SIZE: 20,
  
  // Validation
  PASSWORD_MIN_LENGTH: 8,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  // Support
  SUPPORT_EMAIL: 'support@youreye.com',
  SUPPORT_PHONE: '+90 555 123 4567',
};

export default APP_CONFIG;

