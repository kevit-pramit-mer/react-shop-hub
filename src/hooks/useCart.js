import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
  updateQuantity as updateQuantityAction,
  incrementQuantity as incrementQuantityAction,
  decrementQuantity as decrementQuantityAction,
  clearCart as clearCartAction,
  selectCartItems,
  selectCartTotals,
  selectCartItemCount,
  selectIsInCart,
} from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';

/**
 * Custom hook for cart operations
 * @returns {Object} Cart methods and state
 */
export const useCart = () => {
  const dispatch = useDispatch();
  
  const items = useSelector(selectCartItems);
  const totals = useSelector(selectCartTotals);
  const itemCount = useSelector(selectCartItemCount);

  /**
   * Add product to cart
   * @param {Object} product - Product to add
   */
  const addToCart = (product) => {
    dispatch(addToCartAction(product));
    toast.success(`${product.title} added to cart`);
  };

  /**
   * Remove product from cart
   * @param {number} productId - Product ID to remove
   */
  const removeFromCart = (productId) => {
    const item = items.find(i => i.id === productId);
    dispatch(removeFromCartAction(productId));
    if (item) {
      toast.success(`${item.title} removed from cart`);
    }
  };

  /**
   * Update product quantity
   * @param {number} productId - Product ID
   * @param {number} quantity - New quantity
   */
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    dispatch(updateQuantityAction({ id: productId, quantity }));
  };

  /**
   * Increment product quantity
   * @param {number} productId - Product ID
   */
  const incrementQuantity = (productId) => {
    dispatch(incrementQuantityAction(productId));
  };

  /**
   * Decrement product quantity
   * @param {number} productId - Product ID
   */
  const decrementQuantity = (productId) => {
    dispatch(decrementQuantityAction(productId));
  };

  /**
   * Clear entire cart
   */
  const clearCart = () => {
    dispatch(clearCartAction());
    toast.success('Cart cleared');
  };

  /**
   * Check if product is in cart
   * @param {number} productId - Product ID
   * @returns {boolean}
   */
  const isInCart = (productId) => {
    return useSelector(selectIsInCart(productId));
  };

  /**
   * Get cart item by ID
   * @param {number} productId - Product ID
   * @returns {Object|null}
   */
  const getCartItem = (productId) => {
    return items.find(item => item.id === productId) || null;
  };

  return {
    items,
    totals,
    itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    isInCart,
    getCartItem,
  };
};

export default useCart;
