import { useEffect } from 'react';

const Seo = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | WIDE TAKE - Absolute Marketing Agency`;

    // Helper to set or create meta tag
    const setMetaTag = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update meta tags
    if (description) {
      setMetaTag('description', description);
      setMetaTag('og:description', description, 'property');
      setMetaTag('twitter:description', description);
    }

    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // OpenGraph and Twitter title
    setMetaTag('og:title', `${title} | WIDE TAKE`, 'property');
    setMetaTag('twitter:title', `${title} | WIDE TAKE`);

  }, [title, description, keywords]);

  return null;
};

export default Seo;
