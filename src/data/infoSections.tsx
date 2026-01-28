import React from 'react';
import { Heart } from 'lucide-react';

const heart = <Heart className="text-custom-red inline-block h-5 w-5" />;

export interface Section {
  id: string;
  title: string;
  content: React.ReactNode[];
}

export const infoSections: Section[] = [
  {
    id: 'barn',
    title: 'Barn',
    content: [
      <>
        Vi älskar era barn, men har valt att göra vår dag till en vuxenfest. Vi
        hoppas på er förståelse! Ammande barn är såklart välkomna.
      </>,
    ],
  },
  {
    id: 'boende',
    title: 'Boende',
    content: [
      <>
        Det finns möjlighet att boka hotell på Vaxholms Kastell efter bröllopet.
        Du bokar rum genom att välja rumstyp i{' '}
        <a
          href="#osa"
          className="text-custom-red font-bold hover:text-red-800 hover:underline"
        >
          OSA-formuläret
        </a>{' '}
        längst ner på sidan. Du kan välja mellan enkelrum (500 kr) eller
        dubbelrum (1000 kr). All betalning sker på plats. Mer information om
        hotellet finns på Vaxholms Kastells hemsida:{' '}
        <a
          href="https://www.kastellet.com/kontakt-och-information/"
          className="text-custom-red font-bold hover:text-red-800 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Här
        </a>
      </>,
      <>
        Information om incheckning och andra detaljer skickas ut via mail
        närmare bröllopsdatumet.
      </>,
    ],
  },
  {
    id: 'brollopsgavor',
    title: 'Bröllopsgåvor',
    content: [
      <>
        Den största gåvan är om ni vill komma och fira med oss {heart} Vi blir
        även jätteglada för ett litet bidrag till vår smekmånad. Detta kan
        swishas till Frank Castello på 070-000 00 00.
      </>,
    ],
  },
  {
    id: 'ceremoni',
    title: 'Ceremoni och Fest',
    content: [
      <>
        <span className="font-bold">Datum och tid:</span> 25 juli 2026, vigseln
        börjar kl 14:00. Kom 15 minuter tidigare för att hitta er plats.
      </>,
      <>
        <span className="font-bold">Plats:</span>{' '}
        <a
          href="https://maps.app.goo.gl/F9myAKboFd6aHXHE9"
          className="text-custom-red font-bold hover:text-red-800 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vaxholms Kastell, Vaxholm
        </a>
      </>,
      <>
        <span className="font-bold">Efter vigseln:</span> är det fest på samma
        plats, med mingel, mat, dryck och lek!
      </>,
    ],
  },
  {
    id: 'kladkod',
    title: 'Klädkod',
    content: [
      <>
        <span className="font-bold">Sommarfin:</span> Innebär en välklädd men
        avslappnad stil med somrig känsla. Ljusa färger, luftiga material och
        festliga plagg passar utmärkt. Välj exempelvis kostym, klänning, kjol,
        skjorta, kavaj eller elegant byxdress – det viktigaste är att klädseln
        känns fin och bekväm.
      </>,
    ],
  },
  {
    id: 'mat',
    title: 'Mat, dryck och allergier',
    content: [
      <>
        Vi kommer att äta och dricka gott! Om du har allergier eller särskild
        kost, skriv detta i din{' '}
        <a
          href="#osa"
          className="text-custom-red font-bold hover:text-red-800 hover:underline"
        >
          OSA
        </a>{' '}
        så ordnar vi det.
      </>,
    ],
  },
  {
    id: 'tal',
    title: 'Tal',
    content: [
      <>
        Om du vill hålla ett tal under middagen, hör av dig till våra
        toastmadames Max och Olivia{' '}
        <span className="font-bold">senast den 11 juli</span>, på{' '}
        <a
          href="mailto:toastmaster@gmail.com"
          className="text-custom-red pointer-events-none font-bold hover:text-red-800 hover:underline"
        >
          toastmaster@gmail.com
        </a>
        . Skriv &quot;Tal&quot; i ämnesraden. Mikrofon, projektor och dator
        kommer finnas. Se till att få med detta i mailet:{' '}
        <ul className="info-list">
          <li>Namn</li>
          <li>Telefonnummer</li>
          <li>Relation till brudparet</li>
          <li>Ungefär hur lång tid talet är (max 3 min)</li>
          <li>Om du behöver utrustning (t.ex. projektor)</li>
          <li>
            Övrig information eller önskemål till toastmadames, tex om du vill
            bli presenterad på ett särskilt sätt eller om du har en föredragen
            placering i talordningen.
          </li>
        </ul>
      </>,
    ],
  },
  {
    id: 'transport',
    title: 'Transport och Parkering',
    content: [
      <>
        <span className="font-bold">Bil till Vaxholm:</span> Följ länsväg 274
        norrut som enkelt nås från E18. Resan tar ca 35-45 minuter från
        Stockholm city, beroende på trafik. I Vaxholm finns gott om
        parkeringsplatser nära centrum och kajen.
      </>,
      <>
        <span className="font-bold">Åk båt till Vaxholm:</span> Waxholmsbolaget
        trafikerar dagligen från Strömkajen vid Grand Hôtel i Stockholm. Resan
        tar ungefär 50 minuter och redan ombord börjar skärgårdsupplevelsen.
        Under perioden maj-september kan du även resa snabbt och smidigt med
        Cinderellabåtarna som avgår från Strandvägen i Stockholm.
      </>,
    ],
  },
];
