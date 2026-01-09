import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';
import { useProductFilters } from '../hooks/useProductFilters';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import SearchBar from '../components/product/SearchBar';
import ProductSkeleton from '../components/product/ProductSkeleton';
import Loader from '../components/common/Loader';
import AnimatedPage from '../components/common/AnimatedPage';
import SEO from '../components/common/SEO';
import { QUERY_KEYS, SORT_OPTIONS } from '../utils/constants';

const ITEMS_PER_PAGE = 6;

const Home = () => {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  
  // Fetch ALL products at once (for proper filtering)
  const {
    data: allProducts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: fetchProducts,
  });

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

  // Reset display count when filters change
  useEffect(() => {
    setDisplayCount(ITEMS_PER_PAGE);
  }, [filters, sortBy]);

  // Products to display (paginated)
  const displayedProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredProducts.length;

  // Load more products with smooth loading effect
  const loadMore = useCallback(() => {
    if (hasMore && !isLoadingMore) {
      setIsLoadingMore(true);
      // Add a small delay to show loading state
      setTimeout(() => {
        setDisplayCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredProducts.length));
        setIsLoadingMore(false);
      }, 800);
    }
  }, [hasMore, isLoadingMore, filteredProducts.length]);

  // Infinite scroll
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, loadMore, isLoadingMore]);

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
    <AnimatedPage>
      <SEO 
        title="ShopHub - Discover Amazing Products"
        description="Explore our curated collection of quality products. From electronics to fashion, find everything you need in one place with unbeatable prices and fast shipping."
        keywords="online shopping, electronics, fashion, jewelry, men's clothing, women's clothing, affordable prices, fast shipping"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
              Discover Amazing Products
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Explore our curated collection of quality products. From electronics to fashion, find everything you need in one place with unbeatable prices and fast shipping.
            </p>
          </div>

          {/* Search and Sort Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Products
                </label>
                <SearchBar onSearch={setSearchQuery} />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
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
            <ProductGrid products={displayedProducts} loading={false} />

            {/* Infinite Scroll Trigger & Loader */}
            {hasMore && (
              <div ref={loadMoreRef} className="mt-8 mb-8">
                {isLoadingMore ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="relative">
                      <Loader size="medium" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                      </div>
                    </div>
                    <p className="mt-6 text-gray-600 text-sm font-medium animate-pulse">Loading more amazing products...</p>
                    <div className="mt-3 flex space-x-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                ) : (
                  <div className="h-20 flex items-center justify-center">
                    <button
                      onClick={loadMore}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Load More Products
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* End of List */}
            {!hasMore && filteredProducts.length > 0 && (
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
    </AnimatedPage>
  );
};

export default Home;
