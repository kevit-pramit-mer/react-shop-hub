import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { toggleWishlist, selectIsInWishlist } from '../../redux/slices/wishlistSlice';
import { formatPrice, getRatingStars, truncateText } from '../../utils/helpers';
import { useModal } from '../../context/ModalContext';
import QuickViewModal from './QuickViewModal';
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

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const isInWishlist = useSelector(selectIsInWishlist(product.id));

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success(
      (t) => (
        <div className="flex items-center gap-2">
          <span>Added to cart!</span>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              window.location.href = '/cart';
            }}
            className="text-blue-600 font-semibold hover:underline"
          >
            View Cart
          </button>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    dispatch(toggleWishlist(product));
    toast.success(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist!');
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    openModal('quick-view', <QuickViewModal productId={product.id} />, {
      size: 'xl',
    });
  };

  const stars = getRatingStars(product.rating?.rate || 0);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full flex flex-col overflow-hidden border border-gray-100">
        {/* Image */}
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 p-2.5 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 z-10"
            aria-label="Add to wishlist"
          >
            <svg
              className={`w-5 h-5 transition-colors ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-400'}`}
              fill={isInWishlist ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
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

        {/* Content */}
        <div className="flex-grow flex flex-col p-4">
          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
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
            <span className="text-xs text-gray-500 font-medium">
              ({product.rating?.count || 0})
            </span>
          </div>

          {/* Price */}
          <div className="mt-auto mb-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 md:opacity-0 md:group-hover:opacity-100 md:transform md:group-hover:translate-y-0 md:translate-y-2 transition-all duration-300">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden sm:inline">Add</span>
            </button>
            <button
              onClick={handleQuickView}
              className="px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl"
              aria-label="Quick view"
              title="Quick View"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
