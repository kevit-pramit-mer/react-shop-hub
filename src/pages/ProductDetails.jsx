import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById, fetchProducts } from '../services/productService';
import { addToCart } from '../redux/slices/cartSlice';
import { toggleWishlist, selectIsInWishlist } from '../redux/slices/wishlistSlice';
import { formatPrice, getRatingStars, capitalize } from '../utils/helpers';
import { QUERY_KEYS } from '../utils/constants';
import Loader from '../components/common/Loader';
import Button from '../components/common/Button';
import ProductCard from '../components/product/ProductCard';
import ImageGallery from '../components/product/ImageGallery';
import AnimatedPage from '../components/common/AnimatedPage';
import SEO from '../components/common/SEO';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  
  const isInWishlist = useSelector(selectIsInWishlist(parseInt(id)));

  // Fetch product details
  const { data: product, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCT, id],
    queryFn: () => fetchProductById(id),
  });

  // Fetch related products (same category)
  const { data: relatedProducts } = useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: fetchProducts,
    select: (data) => {
      if (!product) return [];
      return data
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
    },
    enabled: !!product,
  });

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    dispatch(addToCart(productWithQuantity));
    toast.success(`${quantity} item(s) added to cart!`);
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
    toast.success(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  // Convert category name to slug for URL
  const getCategorySlug = (category) => {
    const slugMap = {
      'electronics': 'electronics',
      'jewelery': 'jewelery',
      "men's clothing": 'mens-clothing',
      "women's clothing": 'womens-clothing'
    };
    return slugMap[category] || category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  if (isLoading) {
    return <Loader fullScreen />;
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">😞</div>
        <h2 className="text-2xl font-bold mb-2">Product not found</h2>
        <p className="text-gray-600 mb-6">{error?.message}</p>
        <Button onClick={() => navigate('/')}>Back to Home</Button>
      </div>
    );
  }

  const stars = getRatingStars(product.rating?.rate || 0);

  return (
    <AnimatedPage>
      <SEO 
        title={product.title}
        description={product.description}
        keywords={`${product.category}, ${product.title}, buy online, ${product.rating?.rate} stars`}
        image={product.image}
        type="product"
      />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12">
            {/* Breadcrumbs */}
            <nav className="flex space-x-2 text-sm">
              <button 
                onClick={() => navigate('/')} 
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Home
              </button>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <button 
                onClick={() => navigate(`/products/${getCategorySlug(product.category)}`)} 
                className="text-gray-600 hover:text-blue-600 transition"
              >
                {capitalize(product.category)}
              </button>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-blue-600 font-semibold">
                {product.title.length > 50 ? product.title.substring(0, 50) + '...' : product.title}
              </span>
            </nav>
          </div>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <ImageGallery images={product.image} productTitle={product.title} />

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full">
                {capitalize(product.category)}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-bold text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{product.title}</h1>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
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
                <span className="text-gray-600">
                  {product.rating?.rate} ({product.rating?.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <span className="px-6 py-2 border-x border-gray-300 font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    Subtotal: <strong>{formatPrice(product.price * quantity)}</strong>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button onClick={handleAddToCart} className="flex-1" size="large">
                  <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </Button>
                <Button onClick={handleBuyNow} variant="success" className="flex-1" size="large">
                  Buy Now
                </Button>
                <button
                  onClick={handleToggleWishlist}
                  className={`px-4 py-2 border-2 rounded-lg transition-colors ${
                    isInWishlist
                      ? 'border-red-500 text-red-500 bg-red-50'
                      : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
                  }`}
                >
                  <svg className="w-6 h-6" fill={isInWishlist ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProductDetails;
