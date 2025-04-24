
import React from 'react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Polityka Prywatności - Kalkulator Spalania Paliwa"
        description="Informacje o polityce prywatności na stronie kalkulator-spalaniapaliwa.pl"
        canonicalPath="/polityka-prywatnosci"
      />
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1>Polityka Prywatności</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Ostatnia aktualizacja: 7.04.2025</p>
            
            <h2>1. Wstęp</h2>
            <p>
              Niniejsza Polityka Prywatności określa zasady gromadzenia, przetwarzania i wykorzystywania danych przez serwis 
              kalkulator-spalaniapaliwa.pl. Przywiązujemy szczególną wagę do ochrony prywatności naszych użytkowników i 
              zapewniamy, że dane są przetwarzane zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem 
              Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
            </p>
            
            <h2>2. Administrator Danych</h2>
            <p>
              Administratorem danych jest kalkulator-spalaniapaliwa.pl.
            </p>
            
            <h2>3. Zakres Zbieranych Informacji</h2>
            <p>
              Nasz serwis nie wymaga rejestracji ani logowania. Wszystkie obliczenia wykonywane są lokalnie w przeglądarce 
              użytkownika. Nie przechowujemy żadnych danych wprowadzonych do kalkulatorów (takich jak dystans, zużycie paliwa, 
              ceny paliw) na naszych serwerach.
            </p>
            <p>
              Zbieramy jedynie anonimowe dane o ruchu na stronie za pomocą narzędzi analitycznych w celu poprawy jakości 
              naszych usług.
            </p>
            
            <h2>4. Pliki Cookies</h2>
            <p>
              Nasza strona wykorzystuje pliki cookies (ciasteczka), które są małymi plikami tekstowymi zapisywanymi na 
              urządzeniu użytkownika. Służą one do prawidłowego funkcjonowania strony, analizy ruchu oraz dostosowania 
              treści do preferencji użytkownika.
            </p>
            <p>
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej.
            </p>
            
            <h2>5. Google Analytics</h2>
            <p>
              Nasza strona korzysta z narzędzia Google Analytics, które zbiera anonimowe informacje na temat korzystania 
              z serwisu. Dane te nie pozwalają na identyfikację konkretnej osoby i są wykorzystywane wyłącznie w celach 
              statystycznych oraz poprawy jakości strony.
            </p>
            
            <h2>6. Prawa Użytkowników</h2>
            <p>
              Zgodnie z RODO, użytkownikom przysługują następujące prawa:
            </p>
            <ul>
              <li>Prawo dostępu do danych</li>
              <li>Prawo do sprostowania danych</li>
              <li>Prawo do usunięcia danych</li>
              <li>Prawo do ograniczenia przetwarzania</li>
              <li>Prawo do sprzeciwu</li>
              <li>Prawo do przenoszenia danych</li>
            </ul>
            <p>
              W przypadku pytań dotyczących ochrony prywatności, prosimy o kontakt.
            </p>
            
            <h2>7. Zmiany w Polityce Prywatności</h2>
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w Polityce Prywatności. Każda zmiana będzie publikowana na 
              tej stronie, a użytkownicy będą informowani o istotnych zmianach poprzez odpowiednie komunikaty na stronie.
            </p>
            
            <h2>8. Kontakt</h2>
            <p>
              W przypadku jakichkolwiek pytań dotyczących niniejszej Polityki Prywatności, prosimy o kontakt.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
