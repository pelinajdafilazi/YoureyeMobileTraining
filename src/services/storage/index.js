// src/services/storage/index.js
// Local storage service using AsyncStorage

import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../constants';

/**
 * Storage Service
 * Wrapper for AsyncStorage with typed keys
 */
const storageService = {
  /**
   * Get item from storage
   * @param {string} key - Storage key
   * @returns {Promise<any>} Parsed value or null
   */
  get: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.warn(`Storage get error for key ${key}:`, error);
      return null;
    }
  },

  /**
   * Set item in storage
   * @param {string} key - Storage key
   * @param {any} value - Value to store
   * @returns {Promise<boolean>} Success status
   */
  set: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Storage set error for key ${key}:`, error);
      return false;
    }
  },

  /**
   * Remove item from storage
   * @param {string} key - Storage key
   * @returns {Promise<boolean>} Success status
   */
  remove: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Storage remove error for key ${key}:`, error);
      return false;
    }
  },

  /**
   * Clear all app storage
   * @returns {Promise<boolean>} Success status
   */
  clear: async () => {
    try {
      const keys = Object.values(STORAGE_KEYS);
      await AsyncStorage.multiRemove(keys);
      return true;
    } catch (error) {
      console.warn('Storage clear error:', error);
      return false;
    }
  },

  // Convenience methods for common operations
  auth: {
    getToken: () => storageService.get(STORAGE_KEYS.AUTH_TOKEN),
    setToken: (token) => storageService.set(STORAGE_KEYS.AUTH_TOKEN, token),
    removeToken: () => storageService.remove(STORAGE_KEYS.AUTH_TOKEN),
    
    getUser: () => storageService.get(STORAGE_KEYS.USER_DATA),
    setUser: (user) => storageService.set(STORAGE_KEYS.USER_DATA, user),
    removeUser: () => storageService.remove(STORAGE_KEYS.USER_DATA),
  },

  onboarding: {
    isComplete: () => storageService.get(STORAGE_KEYS.ONBOARDING_COMPLETE),
    setComplete: () => storageService.set(STORAGE_KEYS.ONBOARDING_COMPLETE, true),
  },
};

export default storageService;









