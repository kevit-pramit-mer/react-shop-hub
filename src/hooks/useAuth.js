import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logout as logoutAction,
  selectAuth,
  selectUser,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
} from '../redux/slices/authSlice';
import { clearCart } from '../redux/slices/cartSlice';
import { clearWishlist } from '../redux/slices/wishlistSlice';
import * as authService from '../services/authService';
import toast from 'react-hot-toast';

/**
 * Custom hook for authentication
 * @returns {Object} Auth methods and state
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const auth = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);

  /**
   * Login user
   * @param {Object} credentials - Email and password
   */
  const login = async (credentials) => {
    try {
      dispatch(loginStart());
      const data = await authService.login(credentials);
      dispatch(loginSuccess(data));
      toast.success('Login successful!');
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      dispatch(loginFailure(errorMessage));
      toast.error(errorMessage);
      throw error;
    }
  };

  /**
   * Register new user
   * @param {Object} userData - User registration data
   */
  const register = async (userData) => {
    try {
      dispatch(loginStart());
      const data = await authService.register(userData);
      dispatch(loginSuccess(data));
      toast.success('Registration successful!');
      return data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed';
      dispatch(loginFailure(errorMessage));
      toast.error(errorMessage);
      throw error;
    }
  };

  /**
   * Logout user
   */
  const logout = async () => {
    try {
      await authService.logout();
      dispatch(logoutAction());
      dispatch(clearCart());
      dispatch(clearWishlist());
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed');
    }
  };

  /**
   * Check if user is authenticated
   * @returns {boolean}
   */
  const checkAuth = () => {
    return authService.isAuthenticated();
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
    checkAuth,
  };
};

export default useAuth;
