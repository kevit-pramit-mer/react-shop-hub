import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProductById } from '../../services/productService';
import { addToCart } from '../../redux/slices/cartSlice';
import { toggleWishlist, selectIsInWishlist } from '../../redux/slices/wishlistSlice';
import { formatPrice, getRatingStars } from '../../utils/helpers';
import { QUERY_KEYS } from '../../utils/constants';
import { useModal } from '../../contexts/ModalContext';
import Skeleton from '../common/Skeleton';
import toast from 'react-hot-toast';

const QuickViewModal = ({ productId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const [quantity, setQuantity] = React.useState(1);

  // Fetch product details
  const { data: product, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCT_DETAILS, productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
  });

  const isInWishlist = useSelector(selectIsInWishlist(productId));

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
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

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
    toast.success(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist!');
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="w-full aspect-square rounded-xl" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 font-semibold mb-4">Failed to load product details</p>
        <button
          onClick={() => closeModal('quick-view')}
          className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Close
        </button>
      </div>
    );
  }

  const stars = getRatingStars(product.rating?.rate || 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center border border-gray-200">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full capitalize shadow-lg">
            {product.category}
          </span>
        </div>
      </motion.div>

      {/* Product Details */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center">
            {stars.map((type, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
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
          <span className="text-sm text-gray-600 font-medium">
            {product.rating?.rate} ({product.rating?.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <p className="text-gray-600 leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Quantity
          </label>
          <div className="flex items-center border-2 border-gray-300 rounded-lg w-fit">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-gray-100 transition font-semibold text-gray-700"
            >
              -
            </button>
            <span className="px-6 py-2 border-x-2 border-gray-300 font-bold text-gray-900 min-w-[60px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-gray-100 transition font-semibold text-gray-700"
            >
              +
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </button>
          <button
            onClick={handleToggleWishlist}
            className="p-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition"
            aria-label="Add to wishlist"
          >
            <svg
              className={`w-6 h-6 transition-colors ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-400'}`}
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
        </div>

        {/* View Full Details Link */}
        <button
          onClick={() => {
            closeModal('quick-view');
            navigate(`/product/${product.id}`);
          }}
          className="mt-4 text-center text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline w-full"
        >
          View Full Product Details →
        </button>
      </motion.div>
    </div>
  );
};

export default QuickViewModal;
