import { useState, useMemo, useCallback } from 'react';
import { filterProducts, sortProducts } from '../utils/helpers';

/**
 * Custom hook for product filtering and sorting
 * @param {Array} products - Products array
 * @returns {Object} Filter state and methods
 */
export const useProductFilters = (products = []) => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: null,
    rating: null,
    searchQuery: '',
    sortBy: 'default',
  });

  /**
   * Update category filter
   * @param {string} category - Category to toggle
   */
  const toggleCategory = useCallback((category) => {
    setFilters(prev => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      
      return { ...prev, categories };
    });
  }, []);

  /**
   * Update price range filter
   * @param {Object} range - Price range { min, max }
   */
  const setPriceRange = useCallback((range) => {
    setFilters(prev => ({ ...prev, priceRange: range }));
  }, []);

  /**
   * Update rating filter
   * @param {number} rating - Minimum rating
   */
  const setRating = useCallback((rating) => {
    setFilters(prev => ({ ...prev, rating }));
  }, []);

  /**
   * Update search query
   * @param {string} query - Search query
   */
  const setSearchQuery = useCallback((query) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  }, []);

  /**
   * Update sort option
   * @param {string} sortBy - Sort option
   */
  const setSortBy = useCallback((sortBy) => {
    setFilters(prev => ({ ...prev, sortBy }));
  }, []);

  /**
   * Clear all filters
   */
  const clearFilters = useCallback(() => {
    setFilters({
      categories: [],
      priceRange: null,
      rating: null,
      searchQuery: '',
      sortBy: 'default',
    });
  }, []);

  /**
   * Get filtered and sorted products
   */
  const filteredProducts = useMemo(() => {
    let result = filterProducts(products, filters);
    result = sortProducts(result, filters.sortBy);
    return result;
  }, [products, filters]);

  /**
   * Check if any filters are active
   */
  const hasActiveFilters = useMemo(() => {
    return (
      filters.categories.length > 0 ||
      filters.priceRange !== null ||
      filters.rating !== null ||
      filters.searchQuery !== ''
    );
  }, [filters]);

  return {
    filters,
    filteredProducts,
    hasActiveFilters,
    toggleCategory,
    setPriceRange,
    setRating,
    setSearchQuery,
    setSortBy,
    clearFilters,
  };
};

export default useProductFilters;
