// src/services/api/auth.service.js
// Authentication API service

import apiClient from './client';
import { API } from '../../constants';

/**
 * Auth Service
 * Handles all authentication-related API calls
 */
const authService = {
  /**
   * Login user
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<{user: object, token: string}>}
   */
  login: async (email, password) => {
    const response = await apiClient.post(API.ENDPOINTS.LOGIN, {
      email,
      password,
    });
    
    // Set token for future requests
    if (response.token) {
      apiClient.setAuthToken(response.token);
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


