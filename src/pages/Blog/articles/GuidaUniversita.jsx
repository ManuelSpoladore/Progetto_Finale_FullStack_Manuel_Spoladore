import React from "react";
import PageWrapper from "../../../utils/PageWrapper";

export default function GuidaUniversita() {
  return (
    <PageWrapper>
      <div className="p-2 md:pr-5 md:pl-5 md:pt-10 lg:pb-10 lg:pr-50 lg:pl-50 lg:pt-10 lg:pb-10 min-h-screen bg-red-50 space-y-8">
        <article className="prose lg:prose-xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-4">
            Guida alla <strong>Scelta Universitaria</strong>
          </h1>

          <p>
            La <strong>scelta dell’università</strong> è uno dei passaggi più importanti nella
            vita di uno studente. Non si tratta solo di decidere <strong>cosa studiare</strong>,
            ma anche di immaginare che tipo di persona si vuole diventare. In
            questa guida esploreremo i principali <strong>fattori da considerare</strong> per
            fare una <strong>scelta consapevole</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            1. <strong>Conoscere sé stessi</strong>
          </h2>
          <p>
            Prima di scegliere un <strong>corso di laurea</strong> o un <strong>ateneo</strong>, è fondamentale
            porsi alcune domande:
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Quali sono i miei interessi principali?</strong></li>
            <li><strong>Preferisco attività teoriche o pratiche?</strong></li>
            <li><strong>Come mi vedo tra 5 o 10 anni?</strong></li>
          </ul>
          <p>
            La <strong>consapevolezza</strong> dei propri <strong>punti di forza</strong>, delle <strong>passioni</strong> e dei
            <strong>limiti</strong> è il primo passo per evitare scelte dettate da <strong>pressioni esterne</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            2. <strong>Esplorare i corsi di laurea</strong>
          </h2>
          <p>
            Ogni <strong>corso</strong> ha un <strong>piano di studi</strong> specifico: leggi attentamente i
            <strong>programmi</strong>, guarda i <strong>nomi degli insegnamenti</strong> e informati sulle
            <strong>modalità di esame</strong>.
          </p>
          <ul className="list-disc pl-6">
            <li><strong>Consulta i siti ufficiali</strong> delle università</li>
            <li><strong>Partecipa agli open day</strong> o agli incontri di orientamento</li>
            <li><strong>Chiedi pareri</strong> a studenti o laureati dei corsi che ti interessano</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            3. <strong>Valutare l’ateneo e i servizi</strong>
          </h2>
          <p>
            Non tutte le <strong>università</strong> sono uguali: alcune puntano di più sulla 
            <strong>ricerca</strong>, altre sulle <strong>collaborazioni con il mondo del lavoro</strong>.
          </p>
          <p><strong>Verifica aspetti</strong> come:</p>
          <ul className="list-disc pl-6">
            <li>La <strong>qualità della didattica</strong> e le <strong>classifiche</strong> (ranking)</li>
            <li>
              I <strong>servizi per gli studenti</strong> (tutoraggio, tirocini, Erasmus,
              supporto psicologico)
            </li>
            <li>La <strong>posizione geografica</strong> e il <strong>costo della vita</strong></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            4. <strong>Considerare gli sbocchi lavorativi</strong>
          </h2>
          <p>
            Anche se nessuno può prevedere il futuro, è utile sapere quali sono
            gli <strong>sbocchi tipici</strong> di un corso:
          </p>
          <ul className="list-disc pl-6">
            <li>Ci sono <strong>professioni ben definite</strong> legate a questo percorso?</li>
            <li>Qual è il <strong>tasso di occupazione</strong> dei laureati a 1 o 5 anni?</li>
            <li>
              Esistono <strong>master</strong> o <strong>specializzazioni</strong> richieste dopo la laurea?
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            5. <strong>Non avere paura di cambiare</strong>
          </h2>
          <p>
            Una <strong>scelta universitaria</strong> non è irreversibile. <strong>Cambiare corso</strong>, <strong>ateneo</strong>
             o persino <strong>ambito</strong> è possibile e talvolta necessario. Molti studenti
            trovano la loro <strong>strada</strong> dopo uno o due tentativi.
          </p>
          <p className="italic">
            <strong>Meglio ricalcolare la rotta</strong> che rimanere fermi in un porto che non
            ci appartiene.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            <strong>Conclusione</strong>
          </h2>
          <p>
            <strong>Scegliere l’università</strong> non è un quiz con una sola risposta corretta.
            È un <strong>percorso personale</strong> che richiede <strong>riflessione</strong>, <strong>ascolto</strong> e un
            pizzico di <strong>coraggio</strong>. <strong>Informarsi</strong>, <strong>chiedere</strong> e <strong>prendersi il tempo</strong>
            giusto sono già segnali di <strong>maturità</strong>. Qualsiasi strada sceglierai,
            che sia lineare o piena di curve, sarà parte della tua <strong>crescita</strong>.
          </p>
        </article>
      </div>
    </PageWrapper>
  );
}