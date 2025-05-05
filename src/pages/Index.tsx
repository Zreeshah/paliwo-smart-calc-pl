import React from 'react';
import Layout from '@/components/Layout';
import FuelConsumptionCalculator from '@/components/FuelConsumptionCalculator';
import FuelCostCalculator from '@/components/FuelCostCalculator';
import FAQSection from '@/components/FAQSection';
import SEOHead from '@/components/SEOHead';

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

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Kalkulator Spalania Paliwa",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PLN"
    },
    "featureList": [
      "Obliczanie spalania paliwa",
      "Kalkulacja kosztów podróży",
      "Porównywanie różnych typów paliw",
      "Szacowanie emisji CO2"
    ],
    "url": "https://www.kalkulator-spalaniapaliwa.pl"
  };

  return (
    <>
      <SEOHead
        title="Kalkulator Spalania Paliwa – Oblicz Zużycie i Koszty"
        description="Sprawdź zużycie paliwa i koszty podróży z naszym kalkulatorem spalania paliwa. Prosty, szybki i dokładny – oblicz paliwo już teraz!"
        canonicalPath="/"
        schemaData={[faqSchemaData, websiteSchemaData, webApplicationSchema]}
      >
      </SEOHead>
      
      <Layout>
        <div>
          <section className="mb-10">
            <h1 className="text-3xl font-bold mb-4">Kalkulator paliwa – Szybko oblicz zużycie i koszty podróży</h1>
            <p className="text-lg mb-4">
              Witaj na stronie <strong>Kalkulator paliwa</strong>, darmowego narzędzia online, które umożliwia łatwe obliczenie spalania paliwa i kosztów jazdy Twoim samochodem. 
              Dzięki naszemu praktycznemu serwisowi sprawdzisz nie tylko średnie spalanie, ale również precyzyjnie zaplanujesz budżet na paliwo przed każdą trasą!
            </p>
            <p className="mb-4">
              Aby skorzystać z <strong>kalkulatora paliwa</strong>, wpisz przejechany dystans, ilość zużytego paliwa oraz wybierz rodzaj paliwa. Nasz kalkulator od razu pokaże Ci średnie spalanie na 100 km, a także pomoże wyliczyć koszty podróży czy ślad węglowy Twojego pojazdu.
            </p>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>
                Wprowadź przejechany dystans w kilometrach (lub milach).
              </li>
              <li>
                Podaj ilość zużytego paliwa w litrach (lub galonach).
              </li>
              <li>
                Wybierz rodzaj paliwa (benzyna, diesel, LPG).
              </li>
              <li>
                Kliknij przycisk „Oblicz zużycie".
              </li>
            </ol>
            <p className="mb-2">
              <strong>Kalkulator paliwa</strong> przyda się każdemu kierowcy. Skorzystaj z naszej bazy pojazdów, porównaj spalanie różnych modeli oraz podziel się wynikami z innymi!
            </p>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <FuelConsumptionCalculator />
            <FuelCostCalculator />
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Polecane artykuły</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <a href="/ekonomiczna-jazda" className="block p-5 bg-white border rounded shadow hover:shadow-lg transition-shadow" rel="dofollow">
                <h3 className="text-lg font-medium mb-2">Ekonomiczna Jazda</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Poznaj techniki <strong>ekonomicznej jazdy</strong> i dowiedz się, jak zmniejszyć zużycie paliwa.
                </p>
                <span className="text-blue-600 hover:underline">Jak zmniejszyć spalanie paliwa?</span>
              </a>
              <a href="/diesel" className="block p-5 bg-white border rounded shadow hover:shadow-lg transition-shadow" rel="dofollow">
                <h3 className="text-lg font-medium mb-2">Diesel vs Benzyna</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Porównanie silników diesla i benzynowych – sprawdź, kiedy wybrać diesel.
                </p>
                <span className="text-blue-600 hover:underline">Co wybrać i kiedy się opłaca?</span>
              </a>
              <a href="/lpg" className="block p-5 bg-white border rounded shadow hover:shadow-lg transition-shadow" rel="dofollow">
                <h3 className="text-lg font-medium mb-2">Co to jest LPG?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Wszystko o płynnym paliwie gazowym – skład, właściwości i zastosowanie.
                </p>
                <span className="text-blue-600 hover:underline">Zalety i zastosowanie LPG</span>
              </a>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Kalkulator Spalania Paliwa dla Twojego Samochodu</h2>
            <p className="mb-4">
              Nasze narzędzie jest dostosowane do różnych typów pojazdów i rodzajów paliw. Niezależnie od tego, czy 
              jeździsz samochodem benzynowym, dieslem czy zasilanym LPG, nasz <strong>kalkulator paliwa</strong> pomoże Ci precyzyjnie obliczyć 
              zużycie paliwa. Dzięki wbudowanej bazie popularnych modeli samochodów możesz również szybko porównać 
              swój wynik ze średnimi wartościami dla danego pojazdu.
            </p>
            <p className="mb-4">
              Dodatkowo, w kalkulatorze kosztów paliwa uwzględniamy czynniki wpływające na zużycie, np. liczbę pasażerów i ich wagę. Każde dodatkowe 100 kg w samochodzie zwiększa spalanie o ok. 0,6 litra na 100 km.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Oblicz Koszty Paliwa na Trasie</h2>
            <p className="mb-4">
              Planujesz podróż i chcesz wiedzieć, ile będzie kosztować paliwo? Nasz kalkulator kosztów paliwa umożliwia
              precyzyjne wyliczenie budżetu. Podaj dystans, średnie spalanie i aktualną cenę paliwa, a otrzymasz koszt przejazdu.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Koszt podróży na jednego pasażera – idealne przy wspólnych wyjazdach.</li>
              <li>Szacowanie emisji CO<sub>2</sub> – świadomie monitoruj ślad węglowy.</li>
              <li>Wybór waluty (PLN, EUR, USD) – przydatne podczas podróży zagranicznych.</li>
            </ul>
            <p className="mb-4">
              Dzięki tym funkcjom z <strong>kalkulatorem paliwa</strong> zaplanujesz budżet i zadbasz o ekologię.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Porady Dotyczące Oszczędzania Paliwa</h2>
            <p className="mb-4">
              Chcesz zmniejszyć zużycie paliwa i zaoszczędzić? Oto kilka sprawdzonych porad:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Utrzymuj stałą prędkość:</strong> Ekonomiczna jazda jest bardziej oszczędna niż częste hamowanie.</li>
              <li><strong>Sprawdzaj ciśnienie w oponach:</strong> Prawidłowo napompowane opony zmniejszają spalanie nawet o 3%.</li>
              <li><strong>Unikaj zbędnego obciążenia:</strong> Zredukuj zbędny ciężar w samochodzie.</li>
              <li><strong>Wyłączaj silnik na postoju:</strong> Jeśli stoisz powyżej minuty – gaś silnik.</li>
              <li><strong>Planuj trasę:</strong> Unikaj korków, korzystaj ze stałych tras.</li>
              <li><strong>Regularny serwis:</strong> Sprawny silnik spala mniej paliwa.</li>
            </ul>
            <p className="mb-4">
              Stosując te wskazówki, zmniejszysz spalanie paliwa i wydatki na podróże, a także zredukujesz negatywny wpływ na środowisko.
              Więcej znajdziesz w naszym <a href="/ekonomiczna-jazda" className="text-blue-600 hover:underline mx-1">poradniku ekonomicznej jazdy</a>.
            </p>
          </section>

          <FAQSection />
          
          {/* Partner link - visible at the bottom of the page */}
          <div className="mt-8 mb-4 text-center text-sm text-gray-500">
            <a href="https://greenbrand.pl" target="_blank" title="Wyszukiwarka firm" className="inline-block">
              <img src="https://www.greenbrand.pl/antipixel.png" alt="Wyszukiwarka firm" className="h-8" />
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
