import React from 'react';

const Input = ({
  label,
  error,
  type = 'text',
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all ${
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
            : 'border-gray-300 focus:border-primary focus:ring-blue-200'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
