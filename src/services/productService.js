import api from './api';
import { API_ENDPOINTS } from '../utils/constants';

/**
 * Fetch all products
 * @returns {Promise} Products array
 */
export const fetchProducts = async () => {
  const response = await api.get(API_ENDPOINTS.PRODUCTS);
  return response.data;
};

/**
 * Fetch single product by ID
 * @param {number} id - Product ID
 * @returns {Promise} Product object
 */
export const fetchProductById = async (id) => {
  const response = await api.get(API_ENDPOINTS.PRODUCT_BY_ID(id));
  return response.data;
};

/**
 * Fetch all categories
 * @returns {Promise} Categories array
 */
export const fetchCategories = async () => {
  const response = await api.get(API_ENDPOINTS.CATEGORIES);
  return response.data;
};

/**
 * Fetch products by category
 * @param {string} category - Category name
 * @returns {Promise} Products array
 */
export const fetchProductsByCategory = async (category) => {
  const response = await api.get(API_ENDPOINTS.CATEGORY_PRODUCTS(category));
  return response.data;
};

/**
 * Fetch paginated products (for infinite scroll)
 * @param {number} limit - Number of products per page
 * @param {number} offset - Starting index
 * @returns {Promise} Products array
 */
export const fetchPaginatedProducts = async ({ limit = 9, offset = 0 }) => {
  // Since Fake Store API doesn't support pagination well, we'll simulate it
  const allProducts = await fetchProducts();
  const start = offset;
  const end = offset + limit;
  
  return {
    products: allProducts.slice(start, end),
    hasMore: end < allProducts.length,
    total: allProducts.length,
  };
};
