// src/services/api/auth.service.js
// Authentication API service

import apiClient from './client';
import { API } from '../../constants';
import storageService from '../storage';

/**
 * Auth Service
 * Handles all authentication-related API calls
 */
const authService = {
  /**
   * Login user
   * @param {string} username - Kullanıcı adı (username)
   * @param {string} password - User password
   * @returns {Promise<{accessToken: string, expiresIn: number, message: string, isAdmin: boolean, id: string}>}
   */
  login: async (username, password) => {
    const response = await apiClient.post(API.ENDPOINTS.LOGIN, {
      username,
      password,
    });
    
    // Set accessToken for future requests and save to storage
    if (response.accessToken) {
      apiClient.setAuthToken(response.accessToken);
      // Save token to AsyncStorage for persistence
      await storageService.auth.setToken(response.accessToken);
      // Save user data if available
      if (response.id || response.isAdmin !== undefined) {
        await storageService.auth.setUser({
          id: response.id,
          username,
          isAdmin: response.isAdmin,
          message: response.message,
        });
      }
    }
    
    return response;
  },

  /**
   * Register new user
   * @param {object} userData - User registration data
   * @returns {Promise<{user: object, token: string}>}
   */
  register: async (userData) => {
    const response = await apiClient.post(API.ENDPOINTS.REGISTER, userData);
    
    if (response.token) {
      apiClient.setAuthToken(response.token);
    }
    
    return response;
  },

  /**
   * Logout user
   * @returns {Promise<void>}
   */
  logout: async () => {
    try {
      await apiClient.post(API.ENDPOINTS.LOGOUT);
    } finally {
      apiClient.setAuthToken(null);
      // Clear stored token and user data
      await storageService.auth.removeToken();
      await storageService.auth.removeUser();
    }
  },

  /**
   * Request password reset
   * @param {string} email - User email
   * @returns {Promise<{message: string}>}
   */
  forgotPassword: async (email) => {
    return apiClient.post(API.ENDPOINTS.FORGOT_PASSWORD, { email });
  },

  /**
   * Refresh auth token
   * @param {string} refreshToken - Refresh token
   * @returns {Promise<{token: string}>}
   */
  refreshToken: async (refreshToken) => {
    const response = await apiClient.post(API.ENDPOINTS.REFRESH_TOKEN, {
      refreshToken,
    });
    
    if (response.token) {
      apiClient.setAuthToken(response.token);
    }
    
    return response;
  },
};

export default authService;


