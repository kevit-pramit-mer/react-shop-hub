import { createSlice } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../utils/constants';

// Get initial wishlist from localStorage
const getInitialWishlist = () => {
  const wishlistStr = localStorage.getItem(STORAGE_KEYS.WISHLIST);
  return wishlistStr ? JSON.parse(wishlistStr) : [];
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: getInitialWishlist(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const exists = state.items.find(item => item.id === product.id);

      if (!exists) {
        state.items.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const existingIndex = state.items.findIndex(item => item.id === product.id);

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(product);
      }
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions;

// Selectors
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistCount = (state) => state.wishlist.items.length;
export const selectIsInWishlist = (id) => (state) =>
  state.wishlist.items.some(item => item.id === id);

export default wishlistSlice.reducer;
