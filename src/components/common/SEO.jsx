import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'ShopHub - Your One-Stop E-Commerce Store',
  description = 'Discover amazing products at ShopHub. From electronics to fashion, find everything you need with fast shipping and great prices.',
  keywords = 'e-commerce, online shopping, electronics, fashion, jewelry, men\'s clothing, women\'s clothing',
  image = '/logo.png',
  url = window.location.href,
  type = 'website',
}) => {
  const siteTitle = 'ShopHub';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="ShopHub Team" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
