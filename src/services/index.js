// src/services/index.js
// Barrel export for all services

import api, { apiClient, authService } from './api';
import storageService from './storage';

export { api, apiClient, authService, storageService };

export default {
  api,
  storage: storageService,
};









