// src/services/api/client.js
// Centralized API client with interceptors

import { API } from '../../constants';

/**
 * API Client
 * Handles all HTTP requests with consistent error handling
 */
class ApiClient {
  constructor() {
    this.baseURL = API.BASE_URL;
    this.timeout = API.TIMEOUT;
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  /**
   * Set authorization token
   * @param {string} token - Bearer token
   */
  setAuthToken(token) {
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.headers['Authorization'];
    }
  }

  /**
   * Build full URL
   * @param {string} endpoint - API endpoint
   * @returns {string} Full URL
   */
  buildURL(endpoint) {
    return `${this.baseURL}${endpoint}`;
  }

  /**
   * Handle response
   * @param {Response} response - Fetch response
   * @returns {Promise<any>} Parsed response data
   */
  async handleResponse(response) {
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
      const error = new Error(data?.message || 'Bir hata oluştu');
      error.status = response.status;
      error.data = data;
      throw error;
    }
    
    return data;
  }

  /**
   * Make HTTP request
   * @param {string} method - HTTP method
   * @param {string} endpoint - API endpoint
   * @param {object} options - Request options
   * @returns {Promise<any>} Response data
   */
  async request(method, endpoint, options = {}) {
    const { body, params, headers: customHeaders } = options;
    
    let url = this.buildURL(endpoint);
    
    // Add query params
    if (params) {
      const queryString = new URLSearchParams(params).toString();
      url = `${url}?${queryString}`;
    }

    const config = {
      method,
      headers: { ...this.headers, ...customHeaders },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    // Add timeout using AbortController
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);
    config.signal = controller.signal;

    try {
      const response = await fetch(url, config);
      clearTimeout(timeoutId);
      return this.handleResponse(response);
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        throw new Error('İstek zaman aşımına uğradı');
      }
      throw error;
    }
  }

  // HTTP method shortcuts
  get(endpoint, options) {
    return this.request('GET', endpoint, options);
  }

  post(endpoint, body, options) {
    return this.request('POST', endpoint, { ...options, body });
  }

  put(endpoint, body, options) {
    return this.request('PUT', endpoint, { ...options, body });
  }

  patch(endpoint, body, options) {
    return this.request('PATCH', endpoint, { ...options, body });
  }

  delete(endpoint, options) {
    return this.request('DELETE', endpoint, options);
  }
}

// Export singleton instance
const apiClient = new ApiClient();
export default apiClient;

