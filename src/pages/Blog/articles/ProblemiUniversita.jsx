import React from "react";
import PageWrapper from "../../../utils/PageWrapper";

export default function ProblemiUniversita() {
  return (
    <PageWrapper>
      <div className="p-2 md:pr-5 md:pl-5 md:pt-10 lg:pb-10 lg:pr-50 lg:pl-50 lg:pt-10 lg:pb-10 min-h-screen bg-red-50 space-y-8">
        <article className="prose lg:prose-xl max-w-4xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6">
            I Problemi dell’Università Italiana
          </h1>

          <h2 className="text-2xl font-semibold mt-8">
            1. <strong>Underfinanziamento cronico</strong>
          </h2>
          <p>
            Secondo dati della CRUI e di ANVUR, l’Italia destina alle università
            una quota degli investimenti
            <strong> per la ricerca e l’istruzione </strong> sotto la media UE.
            Tagli significativi al{" "}
            <strong>Fondo di Finanziamento Ordinario</strong> (−13% tra
            2012‑14) hanno indebolito
            <strong> servizi</strong>, <strong>infrastrutture</strong> e{" "}
            <strong>diritto allo studio</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            2. <strong>Disuguaglianza sociale e classismo</strong>
          </h2>
          <p>
            Solo l’<strong>8%</strong> dei figli di genitori non laureati accede
            all’università, contro il 22% della media OCSE. Questo evidenzia
            una <strong>scarsa mobilità sociale</strong> e una struttura ancora
            <strong> elitaria e classista</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            3. <strong>Governance inefficace e burocrazia</strong>
          </h2>
          <p>
            La <strong>riforma Gelmini (2010)</strong> ha introdotto maggiore
            autonomia, ma ha lasciato inalterate molte dinamiche di{" "}
            <strong>governance centralizzata</strong>, con procedure
            <strong> rigide e poco trasparenti</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            4. <strong>Clientelismo e nepotismo</strong>
          </h2>
          <p>
            Il sistema di reclutamento favorisce{" "}
            <strong>raccomandazioni</strong> e <strong>favoritismi</strong>,
            scoraggiando i <strong>talenti</strong>. La riforma non ha eliminato
            le <strong>pratiche clientelari</strong>, che continuano a
            danneggiare la
            <strong> meritocrazia</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            5. <strong>Scarso collegamento con il mondo del lavoro</strong>
          </h2>
          <p>
            La mancanza di <strong>tirocini strutturati</strong> e di una reale
            connessione con le imprese limita l’<strong>occupabilità</strong>{" "}
            dei laureati. Questo contribuisce alla{" "}
            <strong>fuga di cervelli</strong> e a un generale disinteresse verso
            l’università.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            6. <strong>Divario Nord–Sud</strong>
          </h2>
          <p>
            Le <strong>università del Sud</strong> registrano risultati
            inferiori nei ranking di ricerca e innovazione. Il divario
            territoriale continua a crescere, con una distribuzione disomogenea
            di
            <strong> risorse e opportunità</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            7. <strong>Bassa internazionalizzazione</strong>
          </h2>
          <p>
            L’Italia attira <strong>pochi studenti internazionali</strong>{" "}
            rispetto alla media europea. La <strong>scarsa mobilità</strong>, le
            barriere linguistiche e la burocrazia ostacolano un’efficace
            <strong> internazionalizzazione</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            🛠️ Proposte di riforma
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Aumentare i finanziamenti pubblici</strong> per migliorare
              salari, infrastrutture e servizi.
            </li>
            <li>
              <strong>Riformare il reclutamento</strong> per premiare il merito
              e la trasparenza.
            </li>
            <li>
              <strong>Rafforzare i legami con le imprese</strong> e sviluppare
              percorsi professionalizzanti.
            </li>
            <li>
              <strong>Promuovere l’internazionalizzazione</strong> con doppi
              titoli, corsi in inglese e scambi globali.
            </li>
            <li>
              <strong>Ridurre il divario Nord–Sud</strong> con investimenti
              mirati e politiche di riequilibrio.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10">
            🔍 Considerazioni finali
          </h2>
          <p>
            L’università italiana si trova ad affrontare{" "}
            <strong>sfide strutturali profonde</strong>. Per garantire un
            sistema più <strong>equo, moderno ed efficace</strong>, servono
            riforme coraggiose, investimenti mirati e una nuova visione della
            formazione come <strong>bene pubblico</strong> strategico.
          </p>
        </article>
      </div>
    </PageWrapper>
  );
}
