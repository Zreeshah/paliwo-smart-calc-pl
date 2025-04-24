
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schemaData?: object | Array<object>;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalPath,
  schemaData,
  children 
}) => {
  const location = useLocation();
  const path = canonicalPath || location.pathname;
  const baseUrl = "https://www.kalkulator-spalaniapaliwa.pl";
  const canonical = path === '/' ? baseUrl : `${baseUrl}${path}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      {description && path === '/' && <meta property="og:description" content={description} />}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
      {children}
    </Helmet>
  );
};

export default SEOHead;
