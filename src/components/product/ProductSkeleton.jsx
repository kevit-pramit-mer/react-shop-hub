import React from 'react';

const ProductSkeleton = ({ count = 9 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="card animate-pulse">
          {/* Image Skeleton */}
          <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
          
          {/* Title Skeleton */}
          <div className="space-y-2 mb-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
          
          {/* Rating Skeleton */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-4 bg-gray-200 rounded w-20"></div>
            <div className="h-3 bg-gray-200 rounded w-10"></div>
          </div>
          
          {/* Price Skeleton */}
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-3"></div>
          
          {/* Button Skeleton */}
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
