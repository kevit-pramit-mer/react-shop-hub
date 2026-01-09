import { useEffect } from 'react';

const SEO = ({
  title = 'ShopHub - Your One-Stop E-Commerce Store',
  description = 'Discover amazing products at ShopHub. From electronics to fashion, find everything you need with fast shipping and great prices.',
  keywords = 'e-commerce, online shopping, electronics, fashion, jewelry, men\'s clothing, women\'s clothing',
}) => {
  const siteTitle = 'ShopHub';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (attr, attrValue, content) => {
      let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // Open Graph / Facebook
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', 'website');

    // Twitter
    updateMetaTag('property', 'twitter:title', fullTitle);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:card', 'summary_large_image');
  }, [fullTitle, description, keywords]);

  return null;
};

export default SEO;
