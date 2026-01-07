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
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to get started!</p>
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({itemCount} items)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="card flex gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-primary font-bold mb-2">{formatPrice(item.price)}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <Button variant="danger" onClick={clearCart} size="small">
            Clear Cart
          </Button>
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <div className="card sticky top-20">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>{formatPrice(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%):</span>
                <span>{formatPrice(totals.tax)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>{formatPrice(totals.shipping)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span className="text-primary">{formatPrice(totals.total)}</span>
              </div>
            </div>
            <Link to="/checkout" className="block mt-4">
              <Button fullWidth>Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
