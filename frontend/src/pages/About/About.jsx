import React from "react";
import PageWrapper from "../../utils/PageWrapper";


export default function About() {
  return (
    <PageWrapper>
        <div className="p-2 md:pr-5 md:pl-5 md:pt-10 lg:pb-10 lg:pr-50 lg:pl-50 lg:pt-10 lg:pb-10 min-h-screen bg-red-50 space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-2">Chi siamo</h2>
        <p className="text-xl">
          <strong>Scuola Ribelle</strong> è una piattaforma indipendente che rompe gli
          schemi dell'orientamento universitario tradizionale. Offriamo agli
          studenti strumenti scientifici e rigorosi per scegliere il proprio
          percorso accademico, lontano da consigli generici. Inoltre, mettiamo a disposizione uno spazio di
          discussione aperto, dove è possibile commentare e valutare corsi,
          facoltà e docenti, favorendo un dialogo costruttivo tra studenti.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-2">Da cosa nasce l'idea</h2>
        <p className="text-xl">
          L'idea di Scuola Ribelle nasce dall'esperienza diretta di studenti che
          si sono trovati a navigare un sistema universitario spesso opaco e
          poco trasparente. Abbiamo percepito la necessità di un cambiamento:
          fornire informazioni affidabili e creare una comunità dove gli
          studenti possano condividere le proprie esperienze, contribuendo a
          migliorare la qualità dell'istruzione superiore.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-2">Mission</h2>
        <p className="text-xl">
          La nostra missione è fornire agli studenti strumenti affidabili e
          basati su dati concreti per orientarsi nella scelta universitaria.
          Vogliamo creare una comunità attiva e consapevole, dove ogni studente
          possa esprimere la propria opinione, contribuendo a rendere
          l'università un luogo di crescita autentica e meritocratica.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-2">Vision</h2>
        <p className="text-xl">
          Immaginiamo un futuro in cui gli studenti siano protagonisti attivi
          del proprio percorso formativo, supportati da informazioni
          trasparenti e da una comunità solidale. Vogliamo contribuire a un
          sistema universitario più equo, trasparente e orientato davvero
          all'apprendimento e al futuro lavorativo degli studenti.
        </p>
      </section>
    </div>
    </PageWrapper>
  );
}
