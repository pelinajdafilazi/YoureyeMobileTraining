// src/constants/api.js
// API related constants

const API = {
  BASE_URL: __DEV__ 
    ? 'http://194.110.169.210:8080' 
    : 'http://194.110.169.210:8080',
  
  TIMEOUT: 30000, // 30 seconds
  
  ENDPOINTS: {
    // Auth
    LOGIN: '/api/Login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    
    // User
    USER_PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    
    // Cameras
    CAMERAS: '/cameras',
    CAMERA_DETAILS: '/cameras/:id',
    
    // Notifications
    NOTIFICATIONS: '/notifications',
  },
};

export default API;


