import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProductsByCategory } from '../../services/productService';

// Category images mapping
const categoryImages = {
  'electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
  'jewelery': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
  "men's clothing": 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&h=300&fit=crop',
  "women's clothing": 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop'
};

const MegaMenu = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch all categories
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000,
  });

  // Fetch products for active category
  const { data: categoryProducts = [] } = useQuery({
    queryKey: ['category-products', activeCategory],
    queryFn: () => fetchProductsByCategory(activeCategory),
    enabled: !!activeCategory,
    staleTime: 5 * 60 * 1000,
  });

  if (!isOpen) return null;

  const displayProducts = categoryProducts.slice(0, 4); // Show only 4 products per category

  const formatCategoryName = (category) => {
    return category
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getCategorySlug = (category) => {
    const slugMap = {
      'electronics': 'electronics',
      'jewelery': 'jewelery',
      "men's clothing": 'mens-clothing',
      "women's clothing": 'womens-clothing'
    };
    return slugMap[category] || category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'electronics': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      'jewelery': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      "men's clothing": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      "women's clothing": (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    };
    return icons[category] || icons['electronics'];
  };

  return (
    <div 
      className="absolute left-0 right-0 top-full bg-white shadow-2xl border-t border-gray-200 z-40"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Categories Sidebar */}
          <div className="col-span-3">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Shop by Category
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onMouseEnter={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center group ${
                      activeCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className={`mr-3 ${activeCategory === category ? 'text-white' : 'text-blue-600'}`}>
                      {getCategoryIcon(category)}
                    </span>
                    <span className="font-medium">{formatCategoryName(category)}</span>
                    <svg 
                      className={`w-4 h-4 ml-auto transition-transform ${activeCategory === category ? 'rotate-90' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Display */}
          <div className="col-span-9">
            {activeCategory ? (
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {formatCategoryName(activeCategory)}
                    </h3>
                    <p className="text-gray-600">Discover our latest collection</p>
                  </div>
                  <Link
                    to={`/products/${getCategorySlug(activeCategory)}`}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center"
                    onClick={onClose}
                  >
                    View All
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Category Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group h-[400px]">
                    <img
                      src={categoryImages[activeCategory]}
                      alt={formatCategoryName(activeCategory)}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <h4 className="text-white text-2xl font-bold mb-2">
                        {formatCategoryName(activeCategory)}
                      </h4>
                      <p className="text-white/90 text-sm">
                        Explore premium {activeCategory}
                      </p>
                    </div>
                  </div>

                  {/* Featured Products */}
                  <div className="grid grid-cols-2 gap-4">
                    {displayProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all group"
                        onClick={onClose}
                      >
                        <div className="relative mb-3 overflow-hidden rounded-lg">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <h5 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
                          {product.title}
                        </h5>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ${product.price}
                          </span>
                          <div className="flex items-center text-xs text-gray-600">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {product.rating?.rate || 'N/A'}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Category Benefits */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-800 text-sm">Quality Guaranteed</h6>
                      <p className="text-xs text-gray-600">100% authentic products</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-800 text-sm">Best Prices</h6>
                      <p className="text-xs text-gray-600">Competitive pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-800 text-sm">Easy Returns</h6>
                      <p className="text-xs text-gray-600">30-day return policy</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Select a Category
                </h3>
                <p className="text-gray-600 max-w-md">
                  Hover over any category on the left to explore our products and discover amazing deals.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
