import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleWishlist, clearWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { formatPrice, getRatingStars } from '../utils/helpers';
import Button from '../components/common/Button';
import toast from 'react-hot-toast';

// Helper function to get category-specific gradient colors
const getCategoryGradient = (category) => {
  const gradients = {
    'electronics': 'from-blue-600 to-cyan-600',
    'jewelery': 'from-purple-600 to-pink-600',
    "men's clothing": 'from-indigo-600 to-blue-600',
    "women's clothing": 'from-pink-600 to-rose-600',
  };
  
  return gradients[category?.toLowerCase()] || 'from-purple-600 to-blue-600';
};

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector(state => state.wishlist);

  const handleRemoveFromWishlist = (product) => {
    dispatch(toggleWishlist(product));
    toast.success('Removed from wishlist');
  };

  const handleMoveToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    dispatch(toggleWishlist(product));
    toast.success('Moved to cart!');
  };

  const handleClearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your wishlist?')) {
      dispatch(clearWishlist());
      toast.success('Wishlist cleared');
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8">
              Save your favorite items to keep track of them and easily add them to your cart later.
            </p>
            <Button onClick={() => navigate('/')} size="large">
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
            My Wishlist
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            {items.length} item{items.length !== 1 ? 's' : ''} saved
          </p>
        </div>

        {/* Clear Wishlist Button - Below heading */}
        {items.length > 0 && (
          <div className="flex justify-center mb-8">
            <button
              onClick={handleClearWishlist}
              className="px-6 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition font-semibold border-2 border-red-200 hover:border-red-300 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Wishlist
            </button>
          </div>
        )}

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map(product => {
            const stars = getRatingStars(product.rating?.rate || 0);
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col overflow-hidden border border-gray-100"
              >
                {/* Product Image */}
                <div
                  className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromWishlist(product);
                    }}
                    className="absolute top-3 right-3 p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 z-10"
                    aria-label="Remove from wishlist"
                  >
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-3 py-1.5 bg-gradient-to-r ${getCategoryGradient(product.category)} text-white text-xs font-semibold rounded-full capitalize shadow-lg backdrop-blur-sm`}>
                      <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Title */}
                  <h3
                    className="font-semibold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors text-base leading-snug"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {stars.map((type, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            type === 'full' ? 'text-yellow-400 fill-current' :
                            type === 'half' ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill={type === 'full' ? 'currentColor' : 'none'}
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      ({product.rating?.count || 0})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4 mt-auto">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  {/* Move to Cart Button */}
                  <button
                    onClick={() => handleMoveToCart(product)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Move to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
