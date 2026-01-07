import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleWishlist, clearWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
import { formatPrice, getRatingStars } from '../utils/helpers';
import Button from '../components/common/Button';
import toast from 'react-hot-toast';

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
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="text-8xl mb-6">❤️</div>
          <h2 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8">
            Save your favorite items to keep track of them and easily add them to your cart later.
          </p>
          <Button onClick={() => navigate('/')} size="large">
            Explore Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
            <p className="text-gray-600">{items.length} item(s) saved</p>
          </div>
          {items.length > 0 && (
            <Button variant="danger" onClick={handleClearWishlist}>
              Clear Wishlist
            </Button>
          )}
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map(product => {
            const stars = getRatingStars(product.rating?.rate || 0);
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div
                  className="relative group cursor-pointer bg-gray-50"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="aspect-square p-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Remove Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromWishlist(product);
                    }}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <svg className="w-5 h-5 text-red-500 fill-current" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Category */}
                  <span className="text-xs text-primary font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-semibold text-gray-900 mt-2 mb-2 line-clamp-2 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
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
                    <span className="text-sm text-gray-600 ml-1">
                      ({product.rating?.count || 0})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  {/* Move to Cart Button */}
                  <Button
                    onClick={() => handleMoveToCart(product)}
                    className="w-full"
                  >
                    <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Move to Cart
                  </Button>
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
