import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import AnimatedPage from '../components/common/AnimatedPage';
import SEO from '../components/common/SEO';

const NotFound = () => {
  return (
    <AnimatedPage>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
      />
      <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
