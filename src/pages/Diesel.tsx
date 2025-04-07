import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { getImagePath } from '@/utils/imagePaths';

const Diesel = () => {
  return (
    <>
      <Helmet>
        <title>Diesel vs Benzyna – Co Wybrać i Kiedy Się Opłaca?</title>
        <meta name="description" content="Porównanie silników diesla i benzynowych. Dowiedz się, kiedy warto wybrać diesel, a kiedy lepszą opcją będzie silnik benzynowy. Koszty eksploatacji i różnice." />
        <link rel="canonical" href="https://www.kalkulator-spalaniapaliwa.pl/diesel" />
      </Helmet>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Diesel vs Benzyna – Co Wybrać i Kiedy Się Opłaca?</h1>
          
          <div className="my-8">
            <img 
              src={getImagePath("diesel-engine.jpg")} 
              alt="Silnik Diesla - porównanie z silnikiem benzynowym" 
              className="mx-auto max-w-full h-auto rounded-lg shadow-md" 
            />
          </div>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Porównanie Silników: Diesel vs Benzyna</h2>
          <p className="mb-4">Jakie są różnice między <strong>silnikiem diesla</strong> a <strong>silnikiem benzynowym</strong>? Oto szczegółowe zestawienie:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p><strong>Spalanie paliwa</strong>: Diesel zużywa mniej paliwa (np. 5-6 l/100 km vs 7-8 l/100 km dla benzyny), co obniża <strong>koszty paliwa</strong> na długich trasach.</p>
            </li>
            <li>
              <p><strong>Cena zakupu</strong>: Silniki benzynowe są tańsze, ale mniej ekonomiczne.</p>
            </li>
            <li>
              <p><strong>Naprawy</strong>: Diesel wymaga droższych serwisów, zwłaszcza turbosprężarek i wtryskiwaczy.</p>
            </li>
            <li>
              <p><strong>Dynamika</strong>: Diesel oferuje lepszy moment obrotowy, idealny do dynamicznej jazdy, podczas gdy benzyna lepiej sprawdza się w mieście.</p>
            </li>
          </ul>
          <p className="mb-6"><strong>Diesel czy benzyna</strong>? Jeśli jeździsz głównie po mieście, benzyna może być lepsza. Na autostrady i duże przebiegi – diesel. Oblicz różnice w zużyciu z naszym <strong>kalkulatorem spalania paliwa</strong>!</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Jak Dbać o Silnik Diesel?</h3>
          <p className="mb-4">Silniki wysokoprężne są wrażliwe na niskie temperatury i krótkie trasy. Kilka wskazówek:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p><strong>Rozgrzewka</strong>: Po uruchomieniu silnika w zimie odczekaj chwilę, by olej dotarł do wszystkich elementów.</p>
            </li>
            <li>
              <p><strong>Chłodzenie</strong>: Po długiej jeździe nie wyłączaj silnika od razu – daj turbosprężarce ostygnąć.</p>
            </li>
          </ul>
          <p className="mb-6">Te nawyki zmniejszają ryzyko awarii i wydłużają żywotność silnika. Dzięki nim Twój diesel będzie bardziej niezawodny, a <strong>koszty paliwa</strong> pozostaną pod kontrolą.</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Spadek Popularności Diesla – Dlaczego?</h3>
          <p className="mb-4">Sprzedaż samochodów z <strong>silnikiem diesla</strong> spada – w 2018 roku tylko 25% nowych aut miało silnik wysokoprężny, a reszta to benzyna i hybrydy. Powody?</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p><strong>Normy emisji spalin</strong>: Unia Europejska zaostrza przepisy, a diesle emitują więcej CO2 niż silniki benzynowe.</p>
            </li>
            <li>
              <p><strong>Koszty produkcji</strong>: Droższe technologie oczyszczania spalin (np. filtry DPF) podnoszą cenę diesli.</p>
            </li>
            <li>
              <p><strong>Trendy rynkowe</strong>: Producenci ograniczają ofertę diesli na rzecz hybryd i elektryków.</p>
            </li>
          </ul>
          <p className="mb-6">To oznacza, że diesel staje się mniej opłacalny, szczególnie dla osób z mniejszymi przebiegami. Chcesz porównać <strong>spalanie paliwa</strong> diesla i benzyny? Skorzystaj z naszego narzędzia!</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Diesel czy Benzyna – Co Się Opłaca?</h3>
          <p className="mb-4">Podsumujmy:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p><strong>Diesel</strong>: Idealny na długie dystanse, niższe <strong>spalanie paliwa</strong>, ale droższy w zakupie i serwisie.</p>
            </li>
            <li>
              <p><strong>Benzyna</strong>: Tańsza w zakupie, lepsza na krótkie trasy, choć mniej ekonomiczna.</p>
            </li>
          </ul>
          <p className="mb-6">Decyzja zależy od Twojego stylu jazdy i rocznego przebiegu. Jeśli robisz ponad 20-30 tys. km rocznie, diesel może się opłacać. Dla mniejszych dystansów benzyna jest praktyczniejsza. Sprawdź, ile wydajesz na paliwo z naszym <strong>kalkulatorem spalania paliwa</strong> – wpisz dane i porównaj <strong>koszty paliwa</strong> dla obu opcji!</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Jak Oszczędzać na Paliwie?</h3>
          <p className="mb-6">Niezależnie od wyboru – diesel czy benzyna – możesz obniżyć wydatki:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p>Tankuj w promocjach na stacjach.</p>
            </li>
            <li>
              <p>Monitoruj <strong>spalanie paliwa</strong> z naszym kalkulatorem.</p>
            </li>
            <li>
              <p>Jeźdź płynnie, by zminimalizować zużycie.</p>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default Diesel;
