import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { toggleWishlist, selectIsInWishlist } from '../../redux/slices/wishlistSlice';
import { formatPrice, getRatingStars, truncateText } from '../../utils/helpers';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isInWishlist = useSelector(selectIsInWishlist(product.id));

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success('Added to cart!');
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    dispatch(toggleWishlist(product));
    toast.success(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist!');
  };

  const stars = getRatingStars(product.rating?.rate || 0);

  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="card group cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square mb-4 bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Add to wishlist"
          >
            <svg
              className={`w-5 h-5 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
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
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col">
          {/* Title */}
          <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
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
            <span className="text-xs text-gray-600">
              ({product.rating?.count || 0})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-3 w-full btn-primary py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
