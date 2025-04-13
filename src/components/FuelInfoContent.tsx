
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const FuelInfoContent: React.FC = () => {
  return (
    <div className="mt-12 space-y-12">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Jak Działa Nasz Kalkulator Paliwa?</h2>
        <p className="mb-4">
          Nasz kalkulator spalania paliwa to proste i intuicyjne narzędzie, które pozwala szybko obliczyć zużycie 
          paliwa Twojego samochodu oraz koszty podróży. Wystarczy wprowadzić kilka podstawowych danych, takich jak 
          przejechany dystans, ilość zużytego paliwa oraz typ paliwa. Kalkulator automatycznie przeliczy wartości 
          i przedstawi Ci wynik w postaci średniego zużycia paliwa na 100 kilometrów.
        </p>
        <p className="mb-4">
          Aby skorzystać z kalkulatora spalania paliwa, wykonaj następujące kroki:
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
            Kliknij przycisk "Oblicz zużycie".
          </li>
        </ol>
        <p className="mb-4">
          Po wykonaniu tych prostych kroków otrzymasz wynik w postaci średniego zużycia paliwa na 100 km. Możesz 
          również skorzystać z naszej bazy pojazdów, aby szybko porównać zużycie paliwa dla różnych modeli samochodów.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Kalkulator Spalania Paliwa dla Twojego Samochodu</h2>
        <p className="mb-4">
          Nasze narzędzie jest dostosowane do różnych typów pojazdów i rodzajów paliw. Niezależnie od tego, czy 
          jeździsz samochodem benzynowym, dieslem czy zasilanym LPG, nasz kalkulator pomoże Ci precyzyjnie obliczyć 
          zużycie paliwa. Dzięki wbudowanej bazie popularnych modeli samochodów możesz również szybko porównać 
          swój wynik ze średnimi wartościami dla danego pojazdu.
        </p>
        <p className="mb-4">
          Dodatkowo, w kalkulatorze kosztów paliwa uwzględniamy dodatkowe czynniki, które mają wpływ na zużycie, 
          takie jak liczba pasażerów i ich waga. Każde dodatkowe 100 kg w samochodzie zwiększa zużycie paliwa 
          o około 0,6 litra na 100 km, co może znacząco wpłynąć na koszty dłuższych podróży.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Polecane Artykuły</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <h3 className="text-lg font-medium mb-2">Ekonomiczna Jazda</h3>
              <p className="text-sm text-gray-600 mb-3">Poznaj techniki ekonomicznej jazdy i dowiedz się, jak zmniejszyć zużycie paliwa.</p>
              <Link to="/ekonomiczna-jazda" className="text-blue-600 hover:underline">
                Jak zmniejszyć spalanie paliwa?
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <h3 className="text-lg font-medium mb-2">Diesel vs Benzyna</h3>
              <p className="text-sm text-gray-600 mb-3">Porównanie silników diesla i benzynowych. Dowiedz się, kiedy warto wybrać diesel.</p>
              <Link to="/diesel" className="text-blue-600 hover:underline">
                Co wybrać i kiedy się opłaca?
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <h3 className="text-lg font-medium mb-2">Co to jest LPG?</h3>
              <p className="text-sm text-gray-600 mb-3">Wszystko o płynnym paliwie gazowym - skład, właściwości i zastosowanie.</p>
              <Link to="/lpg" className="text-blue-600 hover:underline">
                Zalety i zastosowanie LPG
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <h3 className="text-lg font-medium mb-2">Od Czego Zależy Cena Paliwa?</h3>
              <p className="text-sm text-gray-600 mb-3">Poznaj kluczowe czynniki wpływające na ceny paliw w Polsce.</p>
              <Link to="/cena-paliwa" className="text-blue-600 hover:underline">
                Czynniki kształtujące cenę paliwa
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-5">
              <h3 className="text-lg font-medium mb-2">Paliwa Premium</h3>
              <p className="text-sm text-gray-600 mb-3">Czy warto tankować benzynę o wyższej liczbie oktanowej jak PB98?</p>
              <Link to="/paliwa-premium" className="text-blue-600 hover:underline">
                Zalety i wady paliw premium
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Oblicz Koszty Paliwa na Trasie</h2>
        <p className="mb-4">
          Planujesz podróż i chcesz wiedzieć, ile będzie kosztować paliwo? Nasz kalkulator kosztów paliwa pomoże 
          Ci precyzyjnie zaplanować budżet na paliwo. Wystarczy, że podasz dystans, średnie zużycie paliwa oraz 
          aktualną cenę paliwa, a otrzymasz dokładny koszt całej trasy.
        </p>
        <p className="mb-4">
          Dodatkowo, nasz kalkulator:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            Oblicza koszt podróży w przeliczeniu na jednego pasażera – idealne do podziału kosztów podczas wspólnych wyjazdów.
          </li>
          <li>
            Szacuje emisję CO2 związaną z podróżą – pozwala na świadome monitorowanie śladu węglowego.
          </li>
          <li>
            Umożliwia wybór różnych walut (PLN, EUR, USD) – przydatne podczas planowania podróży zagranicznych.
          </li>
        </ul>
        <p className="mb-4">
          Dzięki tym funkcjom możesz nie tylko zaplanować budżet na paliwo, ale również podjąć bardziej świadome 
          decyzje dotyczące transportu, mając na uwadze zarówno aspekty ekonomiczne, jak i ekologiczne.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Porady Dotyczące Oszczędzania Paliwa</h2>
        <p className="mb-4">
          Chcesz zmniejszyć zużycie paliwa i zaoszczędzić na kosztach podróży? Oto kilka sprawdzonych porad:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Utrzymuj stałą prędkość:</strong> Jazda ze stałą, umiarkowaną prędkością jest bardziej ekonomiczna 
            niż częste przyspieszanie i hamowanie.
          </li>
          <li>
            <strong>Sprawdzaj ciśnienie w oponach:</strong> Prawidłowo napompowane opony mogą zmniejszyć zużycie paliwa 
            nawet o 3%.
          </li>
          <li>
            <strong>Unikaj zbędnego obciążenia:</strong> Usuń z samochodu niepotrzebne przedmioty zwiększające jego wagę.
          </li>
          <li>
            <strong>Wyłączaj silnik na postoju:</strong> Jeśli zatrzymujesz się na dłużej niż minutę, wyłącz silnik.
          </li>
          <li>
            <strong>Planuj trasę:</strong> Unikaj korków i wybieraj trasy, na których będziesz mógł utrzymać stałą prędkość.
          </li>
          <li>
            <strong>Regularnie serwisuj samochód:</strong> Zadbany silnik pracuje wydajniej i spala mniej paliwa.
          </li>
        </ul>
        <p className="mb-4">
          Stosując się do tych wskazówek, możesz znacznie zmniejszyć zużycie paliwa, co przełoży się na wymierne 
          oszczędności finansowe oraz mniejszy wpływ na środowisko naturalne. Więcej szczegółowych porad znajdziesz w naszym 
          <Link to="/ekonomiczna-jazda" className="text-blue-600 hover:underline mx-1">
            poradniku ekonomicznej jazdy
          </Link>.
        </p>
      </section>
    </div>
  );
};

export default FuelInfoContent;
