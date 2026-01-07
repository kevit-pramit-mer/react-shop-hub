import { STORAGE_KEYS } from '../../utils/constants';

// Middleware to sync cart and wishlist with localStorage
export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  // Sync cart to localStorage
  if (action.type.startsWith('cart/')) {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart.items));
  }

  // Sync wishlist to localStorage
  if (action.type.startsWith('wishlist/')) {
    localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist.items));
  }

  // Clear auth data on logout
  if (action.type === 'auth/logout') {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
  }

  return result;
};

export default localStorageMiddleware;
