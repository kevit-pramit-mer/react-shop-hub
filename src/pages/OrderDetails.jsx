import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import AnimatedPage from '../components/common/AnimatedPage';
import SEO from '../components/common/SEO';

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  // Mock order details - In real app, fetch from API based on orderId
  const orderData = {
    'ORD-2026-001': {
      id: 'ORD-2026-001',
      date: 'January 5, 2026',
      status: 'Delivered',
      statusColor: 'text-green-600 bg-green-50 border-green-200',
      total: 231.58,
      subtotal: 196.25,
      tax: 35.33,
      shipping: 0,
      deliveryDate: 'January 7, 2026',
      trackingNumber: 'TRK1234567890',
      items: [
        {
          id: 1,
          name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          quantity: 1,
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
        },
        {
          id: 2,
          name: 'Mens Casual Premium Slim Fit T-Shirts',
          price: 22.30,
          quantity: 1,
          image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
        },
        {
          id: 3,
          name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
          price: 64.00,
          quantity: 1,
          image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png',
        },
      ],
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
        phone: '+1 (555) 123-4567',
      },
      paymentMethod: 'Credit Card (**** 4242)',
    },
    'ORD-2026-002': {
      id: 'ORD-2026-002',
      date: 'January 7, 2026',
      status: 'Processing',
      statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
      total: 1017.74,
      subtotal: 863.00,
      tax: 154.74,
      shipping: 0,
      deliveryDate: 'January 12, 2026',
      trackingNumber: 'Processing...',
      items: [
        {
          id: 4,
          name: 'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet',
          price: 695.00,
          quantity: 1,
          image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png',
        },
        {
          id: 5,
          name: 'Solid Gold Petite Micropave',
          price: 168.00,
          quantity: 1,
          image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png',
        },
      ],
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
        phone: '+1 (555) 123-4567',
      },
      paymentMethod: 'Credit Card (**** 4242)',
    },
    'ORD-2026-003': {
      id: 'ORD-2026-003',
      date: 'January 8, 2026',
      status: 'Shipped',
      statusColor: 'text-purple-600 bg-purple-50 border-purple-200',
      total: 745.43,
      subtotal: 631.99,
      tax: 113.76,
      shipping: 0,
      deliveryDate: 'January 10, 2026',
      trackingNumber: 'TRK9876543210',
      items: [
        {
          id: 6,
          name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',
          price: 999.99,
          quantity: 1,
          image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png',
        },
        {
          id: 7,
          name: 'Mens Cotton Jacket',
          price: 55.99,
          quantity: 1,
          image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png',
        },
        {
          id: 8,
          name: 'Mens Casual Slim Fit',
          price: 15.99,
          quantity: 1,
          image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png',
        },
      ],
      shippingAddress: {
        name: 'John Doe',
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
        phone: '+1 (555) 123-4567',
      },
      paymentMethod: 'Credit Card (**** 4242)',
    },
  };

  const order = orderData[orderId];

  if (!order) {
    return (
      <AnimatedPage>
        <SEO title="Order Not Found" description="The order you're looking for doesn't exist." />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Order Not Found</h2>
              <p className="text-gray-600 mb-8">The order you're looking for doesn't exist.</p>
              <button
                onClick={() => navigate('/orders')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold"
              >
                Back to Orders
              </button>
            </div>
          </div>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <SEO 
        title={`Order ${order.id} Details`}
        description={`View details for order ${order.id}. Track your order status and delivery information.`}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-6">
          <button
            onClick={() => navigate('/orders')}
            className="flex items-center text-gray-600 hover:text-blue-600 transition mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Orders
          </button>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Order #{order.id}</h1>
                <p className="text-gray-600">Placed on {order.date}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className={`inline-block px-4 py-2 rounded-full font-semibold border-2 ${order.statusColor}`}>
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Items */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Items</h2>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-3"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">{item.name}</h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-500">Qty: <span className="font-semibold text-gray-700">{item.quantity}</span></p>
                          <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                  <p className="font-semibold text-gray-900 mb-2">{order.shippingAddress.name}</p>
                  <p className="text-gray-700 text-sm">{order.shippingAddress.street}</p>
                  <p className="text-gray-700 text-sm">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                  </p>
                  <p className="text-gray-700 text-sm">{order.shippingAddress.country}</p>
                  <div className="flex items-center mt-3 pt-3 border-t border-blue-200">
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-sm font-medium text-gray-700">{order.shippingAddress.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span className="text-sm">Subtotal</span>
                    <span className="font-semibold text-gray-900">${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="text-sm">Tax</span>
                    <span className="font-semibold text-gray-900">${order.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="text-sm">Shipping</span>
                    <span className="text-green-600 font-bold flex items-center">
                      {order.shipping === 0 ? (
                        <>
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          FREE
                        </>
                      ) : (
                        `$${order.shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ${order.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Delivery Info</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Expected Delivery</p>
                      <p className="font-bold text-gray-900">{order.deliveryDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Tracking Number</p>
                      <p className="font-bold text-gray-900 text-sm">{order.trackingNumber}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">Payment Method</p>
                      <p className="font-bold text-gray-900">{order.paymentMethod}</p>
                    </div>
                  </div>
                </div>
                
                {order.status === 'Shipped' || order.status === 'Delivered' ? (
                  <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Track Package
                  </button>
                ) : null}
              </div>

              {/* Need Help */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Need Help?</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Contact our support team for assistance with your order. We're here to help 24/7!
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all font-semibold border-2 border-blue-300 hover:border-blue-400 shadow-md hover:shadow-lg"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </AnimatedPage>
  );
};

export default OrderDetails;
