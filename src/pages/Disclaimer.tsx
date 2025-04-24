
import React from 'react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';

const Disclaimer = () => {
  return (
    <>
      <SEOHead
        title="Zastrzeżenie Prawne - Kalkulator Spalania Paliwa"
        description="Informacje prawne dotyczące korzystania z kalkulatora spalania paliwa na stronie kalkulator-spalaniapaliwa.pl"
        canonicalPath="/zastrzezenie-prawne"
      />
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1>Zastrzeżenie Prawne</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Ostatnia aktualizacja: 7.04.2025</p>
            
            <h2>1. Informacje Ogólne</h2>
            <p>
              Niniejsze zastrzeżenie prawne określa warunki korzystania z serwisu internetowego kalkulator-spalaniapaliwa.pl 
              oraz dostępnych w nim kalkulatorów. Korzystanie z serwisu oznacza akceptację poniższych warunków.
            </p>
            
            <h2>2. Dokładność Obliczeń</h2>
            <p>
              Wszystkie kalkulatory dostępne na stronie kalkulator-spalaniapaliwa.pl dostarczają wyniki oparte na 
              wprowadzonych przez użytkownika danych oraz standardowych formułach matematycznych. Jednakże rzeczywiste 
              zużycie paliwa może różnić się od wyników uzyskanych za pomocą naszych kalkulatorów z powodu wielu czynników, 
              takich jak:
            </p>
            <ul>
              <li>Styl jazdy</li>
              <li>Warunki drogowe</li>
              <li>Warunki pogodowe</li>
              <li>Stan techniczny pojazdu</li>
              <li>Jakość paliwa</li>
              <li>Ukształtowanie terenu</li>
              <li>Ruch uliczny</li>
            </ul>
            <p>
              Dlatego też wyniki należy traktować jako przybliżone i szacunkowe, a nie jako gwarancję rzeczywistego 
              zużycia paliwa czy kosztów podróży.
            </p>
            
            <h2>3. Odpowiedzialność</h2>
            <p>
              Nie ponosimy odpowiedzialności za jakiekolwiek decyzje podjęte na podstawie wyników uzyskanych za pomocą 
              naszych kalkulatorów, ani za ewentualne straty finansowe lub inne szkody wynikające z wykorzystania informacji 
              dostępnych na stronie kalkulator-spalaniapaliwa.pl.
            </p>
            <p>
              Użytkownik korzysta z serwisu na własne ryzyko i odpowiedzialność.
            </p>
            
            <h2>4. Emisja CO2</h2>
            <p>
              Obliczenia emisji CO2 dostarczane przez nasz kalkulator są szacunkowe i opierają się na średnich wartościach 
              emisji dla różnych typów paliw. Rzeczywista emisja CO2 może różnić się w zależności od wielu czynników, w tym 
              efektywności silnika, stylu jazdy oraz dokładnego składu chemicznego paliwa.
            </p>
            
            <h2>5. Ceny Paliw</h2>
            <p>
              Domyślne ceny paliw dostępne w naszym kalkulatorze są regularnie aktualizowane, ale mogą nie odzwierciedlać 
              dokładnych cen na wszystkich stacjach paliw. W celu uzyskania najdokładniejszych wyników zalecamy wprowadzenie 
              aktualnych cen paliw obowiązujących na lokalnych stacjach.
            </p>
            
            <h2>6. Prawa Autorskie</h2>
            <p>
              Cała zawartość strony kalkulator-spalaniapaliwa.pl, w tym teksty, grafiki, logo, ikony i oprogramowanie, 
              jest własnością kalkulator-spalaniapaliwa.pl lub jej dostawców i jest chroniona prawem autorskim. Nieautoryzowane 
              wykorzystanie, kopiowanie lub rozpowszechnianie zawartości strony bez zgody właściciela jest zabronione.
            </p>
            
            <h2>7. Zmiany w Zastrzeżeniu Prawnym</h2>
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszym zastrzeżeniu prawnym. Użytkownicy są zachęcani 
              do regularnego sprawdzania tej strony w celu zapoznania się z aktualnymi warunkami.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Disclaimer;
