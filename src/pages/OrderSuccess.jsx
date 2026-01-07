import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';

const OrderSuccess = () => {
  const { orderId } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl text-green-500 mb-6">✓</div>
        <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-2">Thank you for your purchase.</p>
        <p className="text-gray-600 mb-8">Order ID: {orderId}</p>
        
        <div className="space-y-4">
          <Link to="/">
            <Button fullWidth>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
