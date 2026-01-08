import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  // Mock order data - In real app, fetch from API
  const orders = [
    {
      id: 'ORD-2026-001',
      date: 'January 5, 2026',
      status: 'Delivered',
      total: 231.58,
      items: 3,
      statusColor: 'text-green-600 bg-green-50',
    },
    {
      id: 'ORD-2026-002',
      date: 'January 7, 2026',
      status: 'Processing',
      total: 1017.74,
      items: 2,
      statusColor: 'text-blue-600 bg-blue-50',
    },
    {
      id: 'ORD-2026-003',
      date: 'January 8, 2026',
      status: 'Shipped',
      total: 745.43,
      items: 3,
      statusColor: 'text-purple-600 bg-purple-50',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-1">
            My Orders
          </h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {orders.length > 0 ? (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{order.id}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">
                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {order.date}
                      </p>
                      <p className="text-sm text-gray-500">
                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {order.items} {order.items === 1 ? 'item' : 'items'}
                      </p>
                    </div>

                    <div className="flex flex-col md:items-end space-y-3">
                      <div className="text-2xl font-bold text-gray-900">
                        ${order.total.toFixed(2)}
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          to={`/orders/${order.id}`}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                        >
                          View Details
                        </Link>
                        <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-12 text-center">
              <svg className="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Orders Yet</h3>
              <p className="text-gray-600 mb-6">Start shopping to see your orders here!</p>
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
