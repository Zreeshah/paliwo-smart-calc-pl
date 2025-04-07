
import React from 'react';

const HomeContent: React.FC = () => {
  return (
    <div className="mt-12 space-y-12">
      <section>
        <h2>Jak Działa Nasz Kalkulator Paliwa?</h2>
        <p>
          Nasz kalkulator spalania paliwa to proste i intuicyjne narzędzie, które pozwala szybko obliczyć zużycie 
          paliwa Twojego samochodu oraz koszty podróży. Wystarczy wprowadzić kilka podstawowych danych, takich jak 
          przejechany dystans, ilość zużytego paliwa oraz typ paliwa. Kalkulator automatycznie przeliczy wartości 
          i przedstawi Ci wynik w postaci średniego zużycia paliwa na 100 kilometrów.
        </p>
        <p>
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
        <p>
          Po wykonaniu tych prostych kroków otrzymasz wynik w postaci średniego zużycia paliwa na 100 km. Możesz 
          również skorzystać z naszej bazy pojazdów, aby szybko porównać zużycie paliwa dla różnych modeli samochodów.
        </p>
      </section>

      <section>
        <h2>Kalkulator Spalania Paliwa dla Twojego Samochodu</h2>
        <p>
          Nasze narzędzie jest dostosowane do różnych typów pojazdów i rodzajów paliw. Niezależnie od tego, czy 
          jeździsz samochodem benzynowym, dieslem czy zasilanym LPG, nasz kalkulator pomoże Ci precyzyjnie obliczyć 
          zużycie paliwa. Dzięki wbudowanej bazie popularnych modeli samochodów możesz również szybko porównać 
          swój wynik ze średnimi wartościami dla danego pojazdu.
        </p>
        <p>
          Dodatkowo, w kalkulatorze kosztów paliwa uwzględniamy dodatkowe czynniki, które mają wpływ na zużycie, 
          takie jak liczba pasażerów i ich waga. Każde dodatkowe 100 kg w samochodzie zwiększa zużycie paliwa 
          o około 0,6 litra na 100 km, co może znacząco wpłynąć na koszty dłuższych podróży.
        </p>
      </section>

      <section>
        <h2>Oblicz Koszty Paliwa na Trasie</h2>
        <p>
          Planujesz podróż i chcesz wiedzieć, ile będzie kosztować paliwo? Nasz kalkulator kosztów paliwa pomoże 
          Ci precyzyjnie zaplanować budżet na paliwo. Wystarczy, że podasz dystans, średnie zużycie paliwa oraz 
          aktualną cenę paliwa, a otrzymasz dokładny koszt całej trasy.
        </p>
        <p>
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
        <p>
          Dzięki tym funkcjom możesz nie tylko zaplanować budżet na paliwo, ale również podjąć bardziej świadome 
          decyzje dotyczące transportu, mając na uwadze zarówno aspekty ekonomiczne, jak i ekologiczne.
        </p>
      </section>

      <section>
        <h2>Porady Dotyczące Oszczędzania Paliwa</h2>
        <p>
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
        <p>
          Stosując się do tych wskazówek, możesz znacznie zmniejszyć zużycie paliwa, co przełoży się na wymierne 
          oszczędności finansowe oraz mniejszy wpływ na środowisko naturalne.
        </p>
      </section>
    </div>
  );
};

export default HomeContent;
