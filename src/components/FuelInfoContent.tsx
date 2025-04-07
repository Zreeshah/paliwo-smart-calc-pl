
import React from 'react';
import { Separator } from '@/components/ui/separator';
import OptimizedImage from '@/components/OptimizedImage';

const FuelInfoContent: React.FC = () => {
  return (
    <div className="mt-12 space-y-8">
      <section>
        <h2 className="text-2xl md:text-3xl mb-4 text-brand-darkgreen">Kalkulator Spalania Paliwa – Jak Obliczyć Zużycie i Koszty Paliwa?</h2>
        
        <div className="my-8">
          <OptimizedImage 
            src="/lovable-uploads/31f20ffa-34f5-4f8f-898b-e1be0f6d106a.png" 
            alt="kalkulator paliwa" 
            className="mx-auto max-w-full h-auto rounded-lg shadow-md"
            priority={true} // This is the main hero image so we load it with priority
          />
        </div>
        
        <h3 className="text-xl md:text-2xl mb-3 text-gray-700">Jak Działa Kalkulator Paliwa i Dlaczego Warto Go Użyć?</h3>
        <p>
          Chcesz wiedzieć, ile paliwa zużywa Twój samochód w mieście, na autostradzie czy w trasie? Nasz <strong>kalkulator spalania paliwa</strong> pomoże Ci szybko i dokładnie obliczyć <strong>spalanie paliwa</strong> oraz koszty podróży. Zużycie paliwa podawane przez producentów samochodów często różni się od rzeczywistości. Dlaczego? Testy fabryczne odbywają się w idealnych warunkach, a w praktyce na <strong>licznik spalania paliwa</strong> wpływają takie czynniki jak styl jazdy, obciążenie pojazdu, ciśnienie w oponach, prędkość czy włączona klimatyzacja. Dzięki naszemu <strong>przelicznikowi paliwa</strong> dowiesz się, jak te elementy wpływają na Twoje wydatki i jak jeździć ekonomiczniej – sprawdź nasze porady poniżej!
        </p>
      </section>
      
      <Separator />
      
      <section>
        <h3 className="text-xl md:text-2xl mb-3 text-gray-700">Jak Obliczyć Spalanie Paliwa w Mieście?</h3>
        <p>Aby precyzyjnie sprawdzić <strong>spalanie paliwa</strong> w warunkach miejskich, wykonaj kilka prostych kroków:</p>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Zatankuj bak do pełna i wyzeruj licznik kilometrów.</li>
          <li>Przejedź określony dystans, np. w ruchu miejskim.</li>
          <li>Po zatankowaniu ponownie zanotuj, ile litrów paliwa dodałeś i ile kilometrów przejechałeś.</li>
          <li>Skorzystaj z wzoru:</li>
        </ol>
        
        <p className="font-bold my-4">śsp = izp / d * 100</p>
        
        <p>gdzie:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>śsp</strong> – średnie spalanie paliwa (litry na 100 km),</li>
          <li><strong>izp</strong> – ilość zatankowanego paliwa (litry),</li>
          <li><strong>d</strong> – dystans (kilometry).</li>
        </ul>
        
        <p className="font-bold mt-4">Przykład:</p>
        <p>
          Zatankowałeś 44 litry paliwa i przejechałeś 450 km w mieście. Obliczenie wygląda tak:
        </p>
        
        <p className="font-bold my-4">śsp = 44 / 450 * 100 = 9,7 litra na 100 km.</p>
        
        <p>W tym przypadku Twoje auto zużywa 9,7 litra paliwa na każde 100 km w ruchu miejskim. Nasz <strong>kalkulator spalania benzyny</strong> zrobi to za Ciebie w kilka sekund!</p>
      </section>
      
      <Separator />
      
      <section>
        <h3 className="text-xl md:text-2xl mb-3 text-gray-700">Spalanie Paliwa na Autostradzie i w Trasie</h3>
        <p>
          Metoda obliczania <strong>spalania paliwa</strong> na autostradzie, drogach krajowych czy w cyklu mieszanym jest taka sama. Wystarczy dostosować warunki jazdy i ponownie użyć wzoru. Na przykład na autostradzie spalanie może być niższe dzięki stałej prędkości, ale klimatyzacja czy większa prędkość mogą je zwiększyć. Skorzystaj z naszego <strong>kalkulatora kosztów paliwa</strong>, aby porównać wyniki dla różnych tras i dowiedzieć się, jak zaoszczędzić.
        </p>
      </section>
      
      <Separator />
      
      <section>
        <h3 className="text-xl md:text-2xl mb-3 text-gray-700">Jak Obciążenie Wpływa na Spalanie Paliwa?</h3>
        <p>
          Dodatkowy bagaż czy pasażerowie zwiększają zużycie paliwa. W naszym <strong>kalkulatorze spalania paliwa</strong> przyjęliśmy, że każde 100 kg dodatkowego obciążenia podnosi spalanie o 0,6 litra na 100 km. Aby obliczyć dodatkowe spalanie, użyj wzoru:
        </p>
        
        <p className="font-bold my-4">ds = (śwo * io * 0.6) / 100</p>
        
        <p>gdzie:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>ds</strong> – dodatkowe spalanie (litry na 100 km),</li>
          <li><strong>śwo</strong> – średnia waga osoby (kg),</li>
          <li><strong>io</strong> – ilość osób.</li>
        </ul>
        
        <p className="font-bold mt-4">Przykład:</p>
        <p>
          W pojeździe podróżuje 5 osób, każda o średniej wadze 70 kg. Obliczenie:
        </p>
        
        <p className="font-bold my-4">ds = (70 * 5 * 0.6) / 100 = 2,1 litra na 100 km.</p>
        
        <p>
          To oznacza, że pasażerowie zwiększają spalanie o 2,1 litra na każde 100 km. Nasz <strong>licznik paliwa</strong> automatycznie uwzględni te dane, abyś mógł precyzyjnie <strong>obliczyć paliwo</strong> i koszty.
        </p>
      </section>
      
      <Separator />
      
      <section>
        <h3 className="text-xl md:text-2xl mb-3 text-gray-700">Dlaczego Warto Używać Kalkulatora Spalania Paliwa?</h3>
        <p>Nasz <strong>kalkulator paliwa</strong> to nie tylko <strong>przelicznik paliwa</strong>, ale także narzędzie do oszczędzania. Dzięki niemu:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Sprawdzisz rzeczywiste <strong>spalanie paliwa</strong> swojego samochodu.</li>
          <li>Obliczysz <strong>koszty paliwa</strong> na dowolnej trasie.</li>
          <li>Dowiesz się, jak obciążenie, styl jazdy czy warunki drogowe wpływają na zużycie.</li>
          <li>Otrzymasz wskazówki, jak jeździć ekonomicznie i zmniejszyć wydatki na paliwo.</li>
        </ul>
      </section>
      
      <Separator />
      
      <section>
        <h3 className="text-xl md:text-2xl mb-3 text-gray-700">Porady na Ekonomiczne Zużycie Paliwa</h3>
        <p>Chcesz obniżyć <strong>spalanie paliwa</strong> i zaoszczędzić? Oto kilka wskazówek:</p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Unikaj gwałtownego przyspieszania</strong> – płynna jazda zmniejsza zużycie paliwa.</li>
          <li><strong>Sprawdzaj ciśnienie w oponach</strong> – zbyt niskie zwiększa opór i spalanie.</li>
          <li><strong>Wyłącz klimatyzację, gdy nie jest potrzebna</strong> – to dodatkowy koszt paliwa.</li>
          <li><strong>Planuj trasy</strong> – nasz <strong>kalkulator kosztów paliwa</strong> pomoże Ci wybrać najtańszą opcję.</li>
        </ul>
        <p>Dowiedz się więcej o ekonomicznej jeździe i przetestuj nasz <strong>kalkulator spalania paliwa</strong> już teraz!</p>
      </section>
      
      <Separator />
      
      <section>
        <h3 className="text-xl md:text-2xl mb-3 text-gray-700">Jak Skorzystać z Naszego Kalkulatora Paliwa?</h3>
        <ol className="list-decimal pl-6 space-y-2 my-4">
          <li>Wprowadź dystans podróży (km lub mile).</li>
          <li>Podaj ilość zatankowanego paliwa lub wybierz średnie spalanie Twojego pojazdu.</li>
          <li>Wybierz typ paliwa (benzyna, diesel, LPG).</li>
          <li>Dodaj dane o pasażerach lub bagażu, jeśli chcesz uwzględnić obciążenie.</li>
          <li>Kliknij „Oblicz" – wyniki pojawią się natychmiast, w tym <strong>spalanie paliwa</strong>, koszty i emisja CO2.</li>
        </ol>
        <p>Nasz <strong>licznik spalania paliwa</strong> jest intuicyjny i szybki – idealny dla każdego kierowcy!</p>
      </section>
    </div>
  );
};

export default FuelInfoContent;
