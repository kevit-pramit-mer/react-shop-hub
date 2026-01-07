import axios from 'axios';
import { API_BASE_URL, STORAGE_KEYS } from '../utils/constants';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - Add auth token to requests
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    
    // If token exists, add to Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Log request in development mode
    if (import.meta.env.DEV) {
      console.log('🚀 API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
      });
    }
    
    return config;
  },
  (error) => {
    // Handle request error
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor - Handle responses and errors
api.interceptors.response.use(
  (response) => {
    // Log response in development mode
    if (import.meta.env.DEV) {
      console.log('✅ API Response:', {
        status: response.status,
        url: response.config.url,
        data: response.data,
      });
    }
    
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle different error status codes
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          console.error('❌ Bad Request:', data.message || 'Invalid request');
          break;
          
        case 401:
          // Unauthorized - Clear auth data and redirect to login
          console.error('❌ Unauthorized:', data.message || 'Please login');
          
          // Clear auth data
          localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
          localStorage.removeItem(STORAGE_KEYS.USER);
          
          // Redirect to login page (only if not already on login page)
          if (!window.location.pathname.includes('/login')) {
            window.location.href = '/login';
          }
          break;
          
        case 403:
          console.error('❌ Forbidden:', data.message || 'Access denied');
          break;
          
        case 404:
          console.error('❌ Not Found:', data.message || 'Resource not found');
          break;
          
        case 500:
          console.error('❌ Server Error:', data.message || 'Internal server error');
          break;
          
        case 503:
          console.error('❌ Service Unavailable:', data.message || 'Service temporarily unavailable');
          break;
          
        default:
          console.error('❌ API Error:', data.message || 'An error occurred');
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('❌ Network Error:', 'No response from server');
    } else {
      // Something happened in setting up the request
      console.error('❌ Request Setup Error:', error.message);
    }
    
    // Log full error in development
    if (import.meta.env.DEV) {
      console.error('Full Error:', error);
    }
    
    return Promise.reject(error);
  }
);

// Retry logic for failed requests (optional)
export const retryRequest = async (fn, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

export default api;
