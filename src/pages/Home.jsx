import React, { useEffect, useCallback, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';
import { useProductFilters } from '../hooks/useProductFilters';
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

  // Infinite scroll with scroll event listener
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!loadMoreRef.current || !hasNextPage || isFetchingNextPage) return;

      const element = loadMoreRef.current;
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        console.log('✅ Trigger visible! Loading more products...');
        fetchNextPage();
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    // Check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

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

            {/* Infinite Scroll Trigger & Loader */}
            {hasNextPage && (
              <div ref={loadMoreRef} className="mt-8 mb-8">
                {isFetchingNextPage ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Loader size="medium" />
                    <p className="mt-4 text-gray-600 text-sm">Loading more products...</p>
                  </div>
                ) : (
                  <div className="h-4"></div>
                )}
              </div>
            )}

            {/* End of List */}
            {!hasNextPage && allProducts.length > 0 && (
              <div className="mt-8 py-8 text-center">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600 font-medium">You've reached the end!</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
