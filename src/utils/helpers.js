import { TAX_RATE, SHIPPING_COST, FREE_SHIPPING_THRESHOLD } from './constants';

/**
 * Format price to currency string
 * @param {number} price - Price to format
 * @param {string} currency - Currency symbol (default: $)
 * @returns {string} Formatted price
 */
export const formatPrice = (price, currency = '$') => {
  if (typeof price !== 'number') return `${currency}0.00`;
  return `${currency}${price.toFixed(2)}`;
};

/**
 * Calculate cart subtotal
 * @param {Array} items - Cart items
 * @returns {number} Subtotal
 */
export const calculateSubtotal = (items) => {
  if (!Array.isArray(items)) return 0;
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

/**
 * Calculate tax amount
 * @param {number} subtotal - Subtotal amount
 * @returns {number} Tax amount
 */
export const calculateTax = (subtotal) => {
  return subtotal * TAX_RATE;
};

/**
 * Calculate shipping cost
 * @param {number} subtotal - Subtotal amount
 * @returns {number} Shipping cost
 */
export const calculateShipping = (subtotal) => {
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
};

/**
 * Calculate total cart value
 * @param {Array} items - Cart items
 * @returns {object} Object with subtotal, tax, shipping, total
 */
export const calculateCartTotal = (items) => {
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping(subtotal);
  const total = subtotal + tax + shipping;

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
    shipping: parseFloat(shipping.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
  };
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 50) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Generate unique ID
 * @returns {string} Unique ID
 */
export const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get initials from name
 * @param {string} name - Full name
 * @returns {string} Initials
 */
export const getInitials = (name) => {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

/**
 * Sort products based on sort option
 * @param {Array} products - Products array
 * @param {string} sortBy - Sort option
 * @returns {Array} Sorted products
 */
export const sortProducts = (products, sortBy) => {
  if (!Array.isArray(products)) return [];
  
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'rating-desc':
      return sortedProducts.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sortedProducts;
  }
};

/**
 * Filter products by criteria
 * @param {Array} products - Products array
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered products
 */
export const filterProducts = (products, filters) => {
  if (!Array.isArray(products)) return [];
  
  let filtered = [...products];
  
  // Debug logging
  console.log('🔍 Filter Debug:', {
    totalProducts: products.length,
    filterCategories: filters.categories,
    sampleProductCategory: products[0]?.category,
    filters: filters
  });
  
  // Filter by category (case-insensitive)
  if (filters.categories && filters.categories.length > 0) {
    filtered = filtered.filter(product => {
      const match = filters.categories.some(cat => 
        cat.toLowerCase() === product.category.toLowerCase()
      );
      if (!match) {
        console.log('❌ No match:', product.category, 'not in', filters.categories);
      }
      return match;
    });
    console.log('✅ After category filter:', filtered.length, 'products');
  }
  
  // Filter by price range
  if (filters.priceRange) {
    const { min, max } = filters.priceRange;
    filtered = filtered.filter(product => 
      product.price >= min && product.price <= max
    );
  }
  
  // Filter by rating
  if (filters.rating) {
    filtered = filtered.filter(product => 
      (product.rating?.rate || 0) >= filters.rating
    );
  }
  
  // Filter by search query
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(product =>
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  }
  
  console.log('📦 Final filtered products:', filtered.length);
  return filtered;
};

/**
 * Get rating stars array
 * @param {number} rating - Rating value
 * @returns {Array} Array of star types ['full', 'half', 'empty']
 */
export const getRatingStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('full');
  }
  
  if (hasHalfStar) {
    stars.push('half');
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push('empty');
  }
  
  return stars;
};

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date
 */
export const formatDate = (date) => {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Check if item is in array by ID
 * @param {Array} array - Array to check
 * @param {number|string} id - ID to find
 * @returns {boolean} True if found
 */
export const isItemInArray = (array, id) => {
  if (!Array.isArray(array)) return false;
  return array.some(item => item.id === id);
};

/**
 * Get item from array by ID
 * @param {Array} array - Array to search
 * @param {number|string} id - ID to find
 * @returns {Object|null} Found item or null
 */
export const getItemById = (array, id) => {
  if (!Array.isArray(array)) return null;
  return array.find(item => item.id === id) || null;
};

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Get error message from error object
 * @param {Error} error - Error object
 * @returns {string} Error message
 */
export const getErrorMessage = (error) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

/**
 * Delay function for async operations
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
