
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { getImagePath } from '@/utils/imagePaths';

const LPG = () => {
  return (
    <>
      <Helmet>
        <title>Co to jest LPG? Wszystko o Płynnym Paliwie Gazowym</title>
        <meta name="description" content="Dowiedz się wszystkiego o LPG - składzie, właściwościach, zaletach i zastosowaniu płynnego paliwa gazowego. Czy warto zainwestować w instalację LPG?" />
        <link rel="canonical" href="https://www.kalkulator-spalaniapaliwa.pl/lpg" />
      </Helmet>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Co to jest LPG? Wszystko o Płynnym Paliwie Gazowym</h1>
          
          <div className="my-8">
            <img 
              src={getImagePath("lpg-fuel.jpg")} 
              alt="Co to jest LPG?" 
              className="mx-auto max-w-full h-auto rounded-lg shadow-md" 
            />
          </div>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Czym Jest LPG i Jak Się Je Otrzymuje?</h2>
          <p className="mb-6"><strong>LPG</strong>, czyli z angielskiego <em>Liquefied Petroleum Gas</em> (płynne paliwo gazowe), to popularna alternatywa dla benzyny i oleju napędowego. Jak powstaje <strong>płynne paliwo gazowe</strong>? Otrzymuje się je jako produkt uboczny podczas rafinacji ropy naftowej oraz ze złóż gazu ziemnego. Składa się głównie z mieszaniny propanu (C3H8) i butanu (C4H10), co czyni je ekologicznym i ekonomicznym wyborem dla kierowców. Dowiedz się więcej o <strong>LPG</strong> i sprawdź, jak nasz <strong>kalkulator spalania paliwa</strong> pomoże Ci obliczyć <strong>koszty paliwa</strong>!</p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-semibold mb-4">Skład i Przechowywanie LPG</h2>
          <p className="mb-4"><strong>Płynne paliwo gazowe</strong> jest przechowywane w specjalnych zbiornikach ciśnieniowych w samochodach pod ciśnieniem od 0,1 do 0,2 MPa. Aby dostosować się do różnych temperatur otoczenia, skład LPG zmienia się w zależności od pory roku:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p><strong>Zima</strong>: Mieszanka A – wyższa zawartość propanu dla lepszej prężności w niskich temperaturach.</p>
            </li>
            <li>
              <p><strong>Lato</strong>: Mieszanka B – niższa prężność, dostosowana do cieplejszych warunków.</p>
            </li>
          </ul>
          <p className="mb-6">Norma Europejska określa cztery rodzaje mieszanek (A, B, C, D), a ich wybór zależy od klimatu i przepisów krajowych. Ze względów bezpieczeństwa zbiorniki LPG napełnia się tylko do 80% objętości, przy ciśnieniu ok. 0,6 MPa. Dzięki temu <strong>instalacja LPG</strong> jest bezpieczna i niezawodna. Chcesz wiedzieć, jak to wpływa na <strong>spalanie paliwa</strong>? Skorzystaj z naszego kalkulatora!</p>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-semibold mb-4">Właściwości LPG – Liczba Oktanowa i Wartość Opałowa</h2>
          <p className="mb-4"><strong>Liczba oktanowa LPG</strong> waha się od 90 do 120, co czyni je bardziej odpornym na spalanie stukowe niż większość benzyn (PB95 czy PB98). Inne kluczowe parametry:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p><strong>Wartość opałowa</strong>: 46 MJ/kg (dla benzyny 43,9 MJ/kg).</p>
            </li>
            <li>
              <p><strong>Gęstość</strong>: 0,557 kg/dm³.</p>
            </li>
          </ul>
          <p className="mb-6">Dzięki tym właściwościom LPG sprawdza się w silnikach benzynowych (gaźnikowych, z wtryskiem jedno- i wielopunktowym), a nawet w silnikach dwusuwowych czy dieslach z odpowiednią <strong>instalacją LPG</strong>. To paliwo łączy wydajność z niższymi <strong>kosztami paliwa</strong> – idealne dla oszczędnych kierowców.</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Tankowanie LPG – Na Co Zwrócić Uwagę?</h3>
          <p className="mb-4"><strong>Tankowanie LPG</strong> w Polsce jest proste dzięki zunifikowanym końcówkom dystrybutorów. Za granicą mogą jednak występować różnice – wtedy przydają się uniwersalne adaptery. W Europie planuje się wprowadzenie „euro connectora", który ujednolici systemy tankowania na stacjach LPG. Kilka wskazówek:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p>Wybieraj stacje sieciowe (np. Orlen, Shell, BP) – oferują lepszą jakość paliwa dzięki kontrolom i czyszczeniu instalacji.</p>
            </li>
            <li>
              <p>Unikaj stacji „no name" – istnieje większe ryzyko zanieczyszczeń, które mogą uszkodzić <strong>instalację LPG</strong>.</p>
            </li>
          </ul>
          <p className="mb-6">Dobrej jakości LPG to mniejsze <strong>spalanie paliwa</strong> i dłuższa żywotność silnika. Oblicz swoje zużycie z naszym <strong>kalkulatorem spalania paliwa</strong>!</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Zalety i Zastosowanie LPG</h3>
          <p className="mb-4">Dlaczego <strong>płynne paliwo gazowe</strong> zyskuje popularność? Oto korzyści:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p><strong>Niższe koszty paliwa</strong>: LPG jest tańsze od benzyny i diesla.</p>
            </li>
            <li>
              <p><strong>Ekologia</strong>: Emituje mniej CO2 niż tradycyjne paliwa.</p>
            </li>
            <li>
              <p><strong>Uniwersalność</strong>: Pasuje do wielu typów silników po założeniu <strong>instalacji LPG</strong>.</p>
            </li>
          </ul>
          <p className="mb-6">W Polsce liczba aut z LPG rośnie – w 2011 roku było ich już 2,5 miliona. Liderami w użyciu LPG na świecie są Belgia, Holandia, Wielka Brytania, Włochy, Korea Południowa i Indie. To dowód, że <strong>LPG</strong> to przyszłościowe rozwiązanie dla kierowców.</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Jak LPG Wpływa na Spalanie Paliwa?</h3>
          <p className="mb-4">Zużycie LPG może być nieco wyższe niż benzyny (np. 10-20% więcej litrów na 100 km), ale niższa cena rekompensuje różnicę. Przykładowo:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p>Benzyna: 8 l/100 km po 5,9 zł/l = 47,2 zł.</p>
            </li>
            <li>
              <p>LPG: 9,6 l/100 km po 2,8 zł/l = 26,88 zł.</p>
            </li>
          </ul>
          <p className="mb-6">Chcesz dokładnie obliczyć <strong>spalanie paliwa</strong> i <strong>koszty paliwa</strong> dla swojego auta? Nasz <strong>kalkulator spalania paliwa</strong> pokaże Ci, ile oszczędzisz na LPG!</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Czy Warto Zainstalować LPG?</h3>
          <p className="mb-4"><strong>Instalacja LPG</strong> to opłacalna inwestycja, jeśli:</p>
          <ul className="list-disc pl-6 space-y-2 my-4">
            <li>
              <p>Pokonujesz duże dystanse rocznie (powyżej 15-20 tys. km).</p>
            </li>
            <li>
              <p>Szukasz tańszej alternatywy dla benzyny.</p>
            </li>
            <li>
              <p>Zależy Ci na ekologicznym paliwie.</p>
            </li>
          </ul>
          <p className="mb-6">Koszty instalacji zwracają się zazwyczaj po 1-2 latach, a potem cieszyć się niższymi <strong>kosztami paliwa</strong>. Sprawdź, czy to się opłaca w Twoim przypadku – wpisz dane do naszego kalkulatora!</p>
          
          <Separator className="my-8" />
          
          <h3 className="text-xl font-medium mb-4 text-gray-700">Podsumowanie: LPG w Praktyce</h3>
          <p className="mb-6"><strong>LPG</strong> to ekonomiczne i ekologiczne <strong>płynne paliwo gazowe</strong>, które zdobywa coraz więcej zwolenników. Wysoka <strong>liczba oktanowa LPG</strong>, łatwa dostępność i niższe ceny sprawiają, że to świetna opcja dla kierowców. Niezależnie od tego, czy masz silnik benzynowy, czy myślisz o przeróbce diesla, <strong>instalacja LPG</strong> może być strzałem w dziesiątkę. Oblicz swoje oszczędności z naszym <strong>kalkulatorem spalania paliwa</strong> i przekonaj się, jak LPG zmienia jazdę na lepsze!</p>
        </div>
      </Layout>
    </>
  );
};

export default LPG;
