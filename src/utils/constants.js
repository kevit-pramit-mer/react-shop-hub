// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://fakestoreapi.com';
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'ShopHub';
export const ITEMS_PER_PAGE = parseInt(import.meta.env.VITE_ITEMS_PER_PAGE) || 9;

// API Endpoints
export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  PRODUCT_BY_ID: (id) => `/products/${id}`,
  CATEGORIES: '/products/categories',
  CATEGORY_PRODUCTS: (category) => `/products/category/${category}`,
  LOGIN: '/auth/login',
  USERS: '/users',
  REGISTER: '/users',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
  CART: 'cart',
  WISHLIST: 'wishlist',
  THEME: 'theme',
};

// Product Categories
export const CATEGORIES = [
  'electronics',
  'jewelery',
  'men\'s clothing',
  'women\'s clothing',
];

// Price Ranges for Filtering
export const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100 - $200', min: 100, max: 200 },
  { label: '$200 - $500', min: 200, max: 500 },
  { label: 'Above $500', min: 500, max: Infinity },
];

// Sort Options
export const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Highest Rating' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
];

// Rating Options
export const RATING_OPTIONS = [
  { value: 4, label: '4 Stars & Above' },
  { value: 3, label: '3 Stars & Above' },
  { value: 2, label: '2 Stars & Above' },
  { value: 1, label: '1 Star & Above' },
];

// Payment Methods
export const PAYMENT_METHODS = [
  { value: 'card', label: 'Credit/Debit Card' },
  { value: 'upi', label: 'UPI' },
  { value: 'cod', label: 'Cash on Delivery' },
];

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Tax and Shipping
export const TAX_RATE = 0.18; // 18% GST
export const SHIPPING_COST = 5.99;
export const FREE_SHIPPING_THRESHOLD = 100;

// Regex Patterns
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[6-9]\d{9}$/,
  PINCODE: /^\d{6}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

// Countries
export const COUNTRIES = [
  'India',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
];

// Toast Configuration
export const TOAST_CONFIG = {
  duration: 3000,
  position: 'top-right',
  style: {
    borderRadius: '8px',
    background: '#333',
    color: '#fff',
  },
};

// Debounce Delay
export const DEBOUNCE_DELAY = 500; // milliseconds

// Query Keys for TanStack Query
export const QUERY_KEYS = {
  PRODUCTS: 'products',
  PRODUCT: 'product',
  CATEGORIES: 'categories',
  CATEGORY_PRODUCTS: 'category-products',
};
