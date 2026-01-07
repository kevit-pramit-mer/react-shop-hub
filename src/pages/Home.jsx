import React, { useEffect, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';
import { useProductFilters } from '../hooks/useProductFilters';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import SearchBar from '../components/product/SearchBar';
import ProductSkeleton from '../components/product/ProductSkeleton';
import Loader from '../components/common/Loader';
import { QUERY_KEYS, ITEMS_PER_PAGE, SORT_OPTIONS } from '../utils/constants';

const Home = () => {
  // Fetch products with TanStack Query
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: async ({ pageParam = 0 }) => {
      const allProducts = await fetchProducts();
      const start = pageParam;
      const end = pageParam + ITEMS_PER_PAGE;
      
      return {
        products: allProducts.slice(start, end),
        nextCursor: end < allProducts.length ? end : undefined,
        hasMore: end < allProducts.length,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });

  // Get all products from pages
  const allProducts = data?.pages.flatMap(page => page.products) || [];

  // Use product filters hook
  const {
    filters,
    sortBy,
    filteredProducts,
    toggleCategory,
    setPriceRange,
    setRating,
    setSearchQuery,
    setSortBy,
    clearFilters,
    hasActiveFilters,
  } = useProductFilters(allProducts);

  // Infinite scroll with intersection observer
  const { ref: loadMoreRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  // Load more when scrolling to bottom
  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isIntersecting, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Handle search with useCallback to prevent unnecessary re-renders
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, [setSearchQuery]);

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="bg-gray-200 h-96 rounded-lg animate-pulse"></div>
          </div>
          <div className="lg:col-span-3">
            <ProductSkeleton count={9} />
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Failed to load products
          </h2>
          <p className="text-gray-600 mb-4">{error?.message || 'Something went wrong'}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Discover Amazing Products
          </h1>
          <p className="text-gray-600">
            Browse our collection of {allProducts.length}+ products
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="md:w-48">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <ProductFilter
              filters={filters}
              onToggleCategory={toggleCategory}
              onPriceRangeChange={setPriceRange}
              onRatingChange={setRating}
              onClearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                {filters.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-primary text-white text-sm rounded-full flex items-center gap-2"
                  >
                    {cat}
                    <button
                      onClick={() => toggleCategory(cat)}
                      className="hover:text-gray-200"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {filters.priceRange && (
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full flex items-center gap-2">
                    Price: {filters.priceRange.label}
                    <button
                      onClick={() => setPriceRange(null)}
                      className="hover:text-gray-200"
                    >
                      ×
                    </button>
                  </span>
                )}
                {filters.rating && (
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full flex items-center gap-2">
                    {filters.rating}★ & above
                    <button
                      onClick={() => setRating(null)}
                      className="hover:text-gray-200"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Results Count */}
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              {filters.searchQuery && (
                <span> for "<strong>{filters.searchQuery}</strong>"</span>
              )}
            </div>

            {/* Product Grid */}
            <ProductGrid products={filteredProducts} loading={false} />

            {/* Load More Trigger */}
            {hasNextPage && (
              <div ref={loadMoreRef} className="mt-8 flex justify-center">
                {isFetchingNextPage ? (
                  <Loader size="medium" />
                ) : (
                  <button
                    onClick={() => fetchNextPage()}
                    className="btn-primary px-8"
                  >
                    Load More Products
                  </button>
                )}
              </div>
            )}

            {/* End of List */}
            {!hasNextPage && allProducts.length > 0 && (
              <div className="mt-8 text-center text-gray-600">
                <p>You've reached the end of the list!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
