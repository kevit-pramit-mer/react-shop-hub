import api from './api';
import { API_ENDPOINTS, STORAGE_KEYS } from '../utils/constants';

/**
 * Login user
 * @param {Object} credentials - Username and password
 * @returns {Promise} User data with token
 */
export const login = async (credentials) => {
  try {
    const response = await api.post(API_ENDPOINTS.LOGIN, {
      username: credentials.email,
      password: credentials.password,
    });
    
    const token = response.data.token;
    const user = {
      email: credentials.email,
      name: credentials.email.split('@')[0],
      id: Date.now(),
    };
    
    // Store token and user in localStorage
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    
    return { token, user };
  } catch (error) {
    throw error;
  }
};

/**
 * Register new user (mock implementation)
 * @param {Object} userData - User registration data
 * @returns {Promise} User data with token
 */
export const register = async (userData) => {
  try {
    // Fake Store API doesn't have proper registration
    // We'll create a mock implementation
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate mock token
    const token = 'mock_token_' + Date.now();
    const user = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
    };
    
    // Store token and user in localStorage
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    
    return { token, user };
  } catch (error) {
    throw error;
  }
};

/**
 * Logout user
 * @returns {Promise} Success message
 */
export const logout = async () => {
  // Remove token and user from localStorage
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER);
  
  return { message: 'Logged out successfully' };
};

/**
 * Get current user from localStorage
 * @returns {Object|null} User object or null
 */
export const getCurrentUser = () => {
  const userStr = localStorage.getItem(STORAGE_KEYS.USER);
  return userStr ? JSON.parse(userStr) : null;
};

/**
 * Get auth token from localStorage
 * @returns {string|null} Token or null
 */
export const getAuthToken = () => {
  return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if authenticated
 */
export const isAuthenticated = () => {
  return !!getAuthToken();
};
