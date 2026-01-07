import toast from 'react-hot-toast';
import { TOAST_CONFIG } from '../utils/constants';

/**
 * Custom hook for toast notifications
 * @returns {Object} Toast methods
 */
export const useToast = () => {
  /**
   * Show success toast
   * @param {string} message - Message to display
   */
  const success = (message) => {
    toast.success(message, TOAST_CONFIG);
  };

  /**
   * Show error toast
   * @param {string} message - Message to display
   */
  const error = (message) => {
    toast.error(message, TOAST_CONFIG);
  };

  /**
   * Show info toast
   * @param {string} message - Message to display
   */
  const info = (message) => {
    toast(message, {
      ...TOAST_CONFIG,
      icon: 'ℹ️',
    });
  };

  /**
   * Show warning toast
   * @param {string} message - Message to display
   */
  const warning = (message) => {
    toast(message, {
      ...TOAST_CONFIG,
      icon: '⚠️',
    });
  };

  /**
   * Show loading toast
   * @param {string} message - Message to display
   * @returns {string} Toast ID for dismissal
   */
  const loading = (message) => {
    return toast.loading(message, TOAST_CONFIG);
  };

  /**
   * Dismiss toast by ID
   * @param {string} toastId - Toast ID to dismiss
   */
  const dismiss = (toastId) => {
    toast.dismiss(toastId);
  };

  /**
   * Dismiss all toasts
   */
  const dismissAll = () => {
    toast.dismiss();
  };

  /**
   * Show promise toast (for async operations)
   * @param {Promise} promise - Promise to track
   * @param {Object} messages - Messages for loading, success, error states
   */
  const promise = (promise, messages) => {
    return toast.promise(
      promise,
      {
        loading: messages.loading || 'Loading...',
        success: messages.success || 'Success!',
        error: messages.error || 'Error occurred',
      },
      TOAST_CONFIG
    );
  };

  return {
    success,
    error,
    info,
    warning,
    loading,
    dismiss,
    dismissAll,
    promise,
  };
};

export default useToast;
