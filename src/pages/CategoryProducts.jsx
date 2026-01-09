import React, { useEffect, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';
import { useProductFilters } from '../hooks/useProductFilters';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import SearchBar from '../components/product/SearchBar';
import ProductSkeleton from '../components/product/ProductSkeleton';
import Loader from '../components/common/Loader';
import AnimatedPage from '../components/common/AnimatedPage';
import SEO from '../components/common/SEO';
import { QUERY_KEYS, ITEMS_PER_PAGE } from '../utils/constants';

const CategoryProducts = () => {
  const { categorySlug } = useParams();
  
  // Convert slug back to category name
  const getCategoryFromSlug = (slug) => {
    const slugMap = {
      'electronics': 'electronics',
      'jewelery': 'jewelery',
      'mens-clothing': "men's clothing",
      'womens-clothing': "women's clothing"
    };
    return slugMap[slug] || slug;
  };

  const categoryName = getCategoryFromSlug(categorySlug);

  // Format category name for display
  const formatCategoryName = (category) => {
    return category
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

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
    queryKey: [QUERY_KEYS.PRODUCTS, categoryName],
    queryFn: async ({ pageParam = 0 }) => {
      const allProducts = await fetchProducts();
      // Filter by category
      const categoryProducts = allProducts.filter(
        product => product.category.toLowerCase() === categoryName.toLowerCase()
      );
      const start = pageParam;
      const end = pageParam + ITEMS_PER_PAGE;
      
      return {
        products: categoryProducts.slice(start, end),
        nextCursor: end < categoryProducts.length ? end : undefined,
        hasMore: end < categoryProducts.length,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });

  // Get all products from pages
  const allProducts = data?.pages.flatMap(page => page.products) || [];

  // Use product filters hook - pass category name so checkbox is pre-selected
  // Note: Products are already filtered by category in the query, so we won't double-filter
  const {
    filters,
    sortBy,
    filteredProducts,
    toggleCategory,
    setPriceRange,
    setRating,
    setSearchQuery,
    setSortBy,
  } = useProductFilters(allProducts, [categoryName]); // Pre-select category checkbox

  // Ref for infinite scroll
  const loadMoreRef = useRef(null);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
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
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Scroll detection as backup
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isLoading && allProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Products</h2>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <AnimatedPage>
      <SEO 
        title={`${formatCategoryName(categoryName)} - Shop Now`}
        description={`Browse our collection of ${categoryName}. Find quality products at great prices with fast shipping.`}
        keywords={`${categoryName}, buy ${categoryName}, shop ${categoryName}, online shopping`}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
            {formatCategoryName(categoryName)}
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-4">
            Explore our curated collection of {categoryName}. Find everything you need in one place with unbeatable prices and fast shipping.
          </p>
          
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
              Products
            </Link>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-blue-600 font-semibold">
              {formatCategoryName(categoryName)}
            </span>
          </nav>
        </div>

        {/* Search and Sort Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-[75%_25%] gap-6">
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
              <div className="max-w-xs">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Rating: High to Low</option>
                  <option value="name-asc">Name: A-Z</option>
                  <option value="name-desc">Name: Z-A</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <ProductFilter
              filters={filters}
              onCategoryToggle={toggleCategory}
              onPriceRangeChange={setPriceRange}
              onRatingChange={setRating}
            />
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600 text-lg">
                Showing <span className="font-semibold text-gray-800">{filteredProducts.length}</span> products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
                <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
                >
                  Browse All Products
                </Link>
              </div>
            ) : (
              <>
                <ProductGrid products={filteredProducts} />
                
                {/* Loading indicator */}
                {isFetchingNextPage && (
                  <div className="flex justify-center items-center py-8">
                    <Loader />
                  </div>
                )}

                {/* Infinite scroll trigger */}
                <div ref={loadMoreRef} className="h-10" />

                {/* No more products message */}
                {!hasNextPage && filteredProducts.length > 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-600">You've reached the end of the list</p>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
      </div>
    </AnimatedPage>
  );
};

export default CategoryProducts;
