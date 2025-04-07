
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: "Jak obliczyć spalanie paliwa?",
      answer: "Aby obliczyć spalanie paliwa, podziel ilość zużytego paliwa (w litrach) przez przejechany dystans (w kilometrach), a następnie pomnóż przez 100. Otrzymasz wynik w litrach na 100 kilometrów (L/100km). Możesz również skorzystać z naszego kalkulatora, który zrobi to za Ciebie."
    },
    {
      question: "Czy kalkulator paliwa działa dla LPG?",
      answer: "Tak, nasz kalkulator obsługuje różne rodzaje paliwa, w tym benzynę, olej napędowy (diesel) oraz LPG. Wystarczy wybrać odpowiedni rodzaj paliwa z listy dostępnych opcji."
    },
    {
      question: "Jak zaoszczędzić na kosztach paliwa?",
      answer: "Aby zaoszczędzić na kosztach paliwa, warto stosować kilka prostych zasad: utrzymuj stałą, ekonomiczną prędkość, regularnie sprawdzaj ciśnienie w oponach, unikaj gwałtownego przyspieszania i hamowania, redukuj zbędny ciężar w samochodzie oraz planuj trasę, aby unikać korków i niepotrzebnych objazdów."
    },
    {
      question: "Dlaczego waga pasażerów wpływa na zużycie paliwa?",
      answer: "Każde dodatkowe 100 kg w samochodzie zwiększa zużycie paliwa o około 0,6 litra na 100 km. Wynika to z faktu, że silnik musi zużyć więcej energii, aby wprawić w ruch i utrzymać prędkość cięższego pojazdu. Dlatego w naszym kalkulatorze uwzględniamy liczbę pasażerów i ich średnią wagę."
    },
    {
      question: "Jak dokładny jest kalkulator emisji CO2?",
      answer: "Nasz kalkulator emisji CO2 wykorzystuje średnie wskaźniki emisji dla różnych typów paliw. Dla benzyny przyjmujemy współczynnik około 2,3 kg CO2 na litr, dla diesla około 2,7 kg CO2 na litr, a dla LPG około 1,6 kg CO2 na litr. Wartości te mogą nieznacznie różnić się w zależności od dokładnego składu paliwa i efektywności silnika, ale dają dobry przybliżony wynik emisji."
    },
    {
      question: "Czy mogę zapisać swoje obliczenia?",
      answer: "Na ten moment funkcja zapisywania obliczeń nie jest dostępna, ale planujemy dodać ją w przyszłości. Będzie można zapisywać zarówno ulubione trasy, jak i dane pojazdów dla szybszych i wygodniejszych obliczeń."
    },
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Najczęściej Zadawane Pytania</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
