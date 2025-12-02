// src/constants/api.js
// API related constants

const API = {
  BASE_URL: __DEV__ 
    ? 'http://localhost:3000/api' 
    : 'https://api.youreye.com',
  
  TIMEOUT: 30000, // 30 seconds
  
  ENDPOINTS: {
    // Auth
    LOGIN: '/auth/login',
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

