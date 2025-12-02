// src/utils/validation.js
// Form validation utilities

import { APP_CONFIG } from '../config';

/**
 * Validate email format
 * @param {string} email 
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  if (!email) return false;
  return APP_CONFIG.EMAIL_REGEX.test(email.trim());
};

/**
 * Validate password strength
 * @param {string} password 
 * @returns {{valid: boolean, message: string}}
 */
export const validatePassword = (password) => {
  if (!password) {
    return { valid: false, message: 'Şifre gerekli' };
  }
  
  if (password.length < APP_CONFIG.PASSWORD_MIN_LENGTH) {
    return { 
      valid: false, 
      message: `Şifre en az ${APP_CONFIG.PASSWORD_MIN_LENGTH} karakter olmalı` 
    };
  }
  
  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: 'Şifre en az bir büyük harf içermeli' };
  }
  
  if (!/[a-z]/.test(password)) {
    return { valid: false, message: 'Şifre en az bir küçük harf içermeli' };
  }
  
  if (!/[0-9]/.test(password)) {
    return { valid: false, message: 'Şifre en az bir rakam içermeli' };
  }
  
  return { valid: true, message: '' };
};

/**
 * Validate phone number (Turkish format)
 * @param {string} phone 
 * @returns {boolean}
 */
export const isValidPhone = (phone) => {
  if (!phone) return false;
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || cleaned.length === 11;
};

/**
 * Check if string is empty or whitespace
 * @param {string} value 
 * @returns {boolean}
 */
export const isEmpty = (value) => {
  return !value || value.trim().length === 0;
};


