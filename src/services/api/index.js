// src/services/api/index.js
// Barrel export for API services

import apiClient from './client';
import authService from './auth.service';

export { apiClient, authService };

export default {
  client: apiClient,
  auth: authService,
};









