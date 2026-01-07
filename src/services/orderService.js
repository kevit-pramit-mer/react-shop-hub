import { STORAGE_KEYS } from '../utils/constants';
import { generateId } from '../utils/helpers';

/**
 * Place order (mock implementation)
 * @param {Object} orderData - Order details
 * @returns {Promise} Order confirmation
 */
export const placeOrder = async (orderData) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const order = {
      id: generateId(),
      ...orderData,
      orderDate: new Date().toISOString(),
      status: 'confirmed',
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    };
    
    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));
    
    // Clear cart after order
    localStorage.removeItem(STORAGE_KEYS.CART);
    
    return order;
  } catch (error) {
    throw new Error('Failed to place order');
  }
};

/**
 * Get user orders
 * @returns {Promise} Orders array
 */
export const getUserOrders = async () => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    return orders;
  } catch (error) {
    throw new Error('Failed to fetch orders');
  }
};

/**
 * Get order by ID
 * @param {string} orderId - Order ID
 * @returns {Promise} Order object
 */
export const getOrderById = async (orderId) => {
  try {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = orders.find(o => o.id === orderId);
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    return order;
  } catch (error) {
    throw error;
  }
};
