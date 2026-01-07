import { createSlice } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../utils/constants';
import { calculateCartTotal } from '../../utils/helpers';

// Get initial cart from localStorage
const getInitialCart = () => {
  const cartStr = localStorage.getItem(STORAGE_KEYS.CART);
  return cartStr ? JSON.parse(cartStr) : [];
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: getInitialCart(),
    totals: calculateCartTotal(getInitialCart()),
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totals = calculateCartTotal(state.items);
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
      state.totals = calculateCartTotal(state.items);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      }

      state.totals = calculateCartTotal(state.items);
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);

      if (item) {
        item.quantity += 1;
      }

      state.totals = calculateCartTotal(state.items);
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find(item => item.id === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      state.totals = calculateCartTotal(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.totals = { subtotal: 0, tax: 0, shipping: 0, total: 0 };
    },
    applyCoupon: (state, action) => {
      // Mock coupon application
      const discount = action.payload.discount || 0;
      state.totals.discount = discount;
      state.totals.total = Math.max(0, state.totals.total - discount);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  applyCoupon,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotals = (state) => state.cart.totals;
export const selectCartItemCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartItemById = (id) => (state) =>
  state.cart.items.find(item => item.id === id);
export const selectIsInCart = (id) => (state) =>
  state.cart.items.some(item => item.id === id);

export default cartSlice.reducer;
