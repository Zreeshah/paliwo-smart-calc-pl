
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from '@/components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="404: Strona Nie Znaleziona - Kalkulator Spalania Paliwa"
        description="Strona, której szukasz nie istnieje. Wróć do kalkulatora spalania paliwa."
        canonicalPath="/404"
      >
        <meta name="robots" content="noindex, nofollow" />
      </SEOHead>
      
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-brand-green mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Strona nie została znaleziona</p>
            <Link to="/" className="btn-primary">
              Powrót do strony głównej
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
