import React from 'react';

const Loader = ({ fullScreen = false, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-4',
    large: 'w-16 h-16 border-4',
  };

  const loaderComponent = (
    <div
      className={`${sizeClasses[size]} border-primary border-t-transparent rounded-full animate-spin`}
    ></div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {loaderComponent}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8">
      {loaderComponent}
    </div>
  );
};

export default Loader;
