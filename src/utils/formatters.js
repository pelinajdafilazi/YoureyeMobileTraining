// src/utils/formatters.js
// Data formatting utilities

/**
 * Format phone number for display
 * @param {string} phone - Raw phone number
 * @returns {string} Formatted phone number
 */
export const formatPhone = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return `(${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  
  return phone;
};

/**
 * Format date to Turkish locale
 * @param {Date|string} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date
 */
export const formatDate = (date, options = {}) => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    ...options,
  };
  
  return dateObj.toLocaleDateString('tr-TR', defaultOptions);
};

/**
 * Format date and time
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date and time
 */
export const formatDateTime = (date) => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return dateObj.toLocaleString('tr-TR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Format relative time (e.g., "2 saat önce")
 * @param {Date|string} date - Date to format
 * @returns {string} Relative time string
 */
export const formatRelativeTime = (date) => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now - dateObj;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffMins < 1) return 'Az önce';
  if (diffMins < 60) return `${diffMins} dakika önce`;
  if (diffHours < 24) return `${diffHours} saat önce`;
  if (diffDays < 7) return `${diffDays} gün önce`;
  
  return formatDate(dateObj);
};

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncate = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};

/**
 * Capitalize first letter
 * @param {string} text 
 * @returns {string}
 */
export const capitalize = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

