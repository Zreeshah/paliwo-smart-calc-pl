
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import FuelConsumptionCalculator from '@/components/FuelConsumptionCalculator';
import FuelCostCalculator from '@/components/FuelCostCalculator';
import FAQSection from '@/components/FAQSection';
import FuelInfoContent from '@/components/FuelInfoContent';

const Index = () => {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak obliczyć spalanie paliwa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aby obliczyć spalanie paliwa, podziel ilość zużytego paliwa (w litrach) przez przejechany dystans (w kilometrach), a następnie pomnóż przez 100. Otrzymasz wynik w litrach na 100 kilometrów (L/100km)."
        }
      },
      {
        "@type": "Question",
        "name": "Czy kalkulator paliwa działa dla LPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, nasz kalkulator obsługuje różne rodzaje paliwa, w tym benzynę, olej napędowy (diesel) oraz LPG. Wystarczy wybrać odpowiedni rodzaj paliwa z listy dostępnych opcji."
        }
      }
    ]
  };

  const websiteSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kalkulator Spalania Paliwa",
    "url": "https://www.kalkulator-spalaniapaliwa.pl/",
    "description": "Sprawdź zużycie paliwa i koszty podróży z naszym kalkulatorem spalania paliwa. Prosty, szybki i dokładny – oblicz paliwo już teraz!",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.kalkulator-spalaniapaliwa.pl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Helmet>
        <title>Kalkulator Spalania Paliwa – Oblicz Zużycie i Koszty</title>
        <meta name="description" content="Sprawdź zużycie paliwa i koszty podróży z naszym kalkulatorem spalania paliwa. Prosty, szybki i dokładny – oblicz paliwo już teraz!" />
        <link rel="canonical" href="https://www.kalkulator-spalaniapaliwa.pl/" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchemaData)}
        </script>
      </Helmet>
      
      <Layout>
        <div>
          <h1>Kalkulator Spalania Paliwa – Oblicz Zużycie i Koszty</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <FuelConsumptionCalculator />
            <FuelCostCalculator />
          </div>
          
          <FuelInfoContent />
          
          <FAQSection />
        </div>
      </Layout>
    </>
  );
};

export default Index;
