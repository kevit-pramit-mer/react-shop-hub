import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotals, selectCartItemCount } from '../redux/slices/cartSlice';
import { useCart } from '../hooks/useCart';
import Button from '../components/common/Button';
import { formatPrice } from '../utils/helpers';

const Cart = () => {
  const items = useSelector(selectCartItems);
  const totals = useSelector(selectCartTotals);
  const itemCount = useSelector(selectCartItemCount);
  const { incrementQuantity, decrementQuantity, removeFromCart, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products yet. Start shopping to fill your cart!</p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold shadow-lg">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-lg">Review your items and proceed to checkout ({itemCount} {itemCount === 1 ? 'item' : 'items'})</p>
        </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-3"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border-2 border-gray-300 rounded-lg">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="px-4 py-2 hover:bg-gray-100 transition font-semibold text-gray-700"
                        >
                          -
                        </button>
                        <span className="px-6 py-2 border-x-2 border-gray-300 font-bold text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="px-4 py-2 hover:bg-gray-100 transition font-semibold text-gray-700"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-semibold flex items-center gap-1 transition"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              onClick={clearCart}
              className="w-full md:w-auto px-6 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition font-semibold border-2 border-red-200 hover:border-red-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cart
            </button>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-20">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span className="text-sm">Subtotal</span>
                  <span className="font-semibold text-gray-900">{formatPrice(totals.subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="text-sm">Tax (18%)</span>
                  <span className="font-semibold text-gray-900">{formatPrice(totals.tax)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="text-sm">Shipping</span>
                  <span className="text-green-600 font-bold flex items-center">
                    {totals.shipping === 0 ? (
                      <>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        FREE
                      </>
                    ) : (
                      formatPrice(totals.shipping)
                    )}
                  </span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {formatPrice(totals.total)}
                    </span>
                  </div>
                </div>
              </div>
              <Link to="/checkout" className="block mt-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
