import React from 'react';
import PageWrapper from "../../utils/PageWrapper";

export default function Privacy() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-red-50 p-2 md:pr-50 md:pl-50 md:pt-10 md:pb-10">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Ultimo aggiornamento: 17/06/2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Titolare del trattamento</h2>
          <p>
            Il Titolare del trattamento è: Mario Rossi<br />
            <strong>Mario Rossi</strong><br />
            Sede: Via Roma 123, 00100 Roma (RM), Italia<br />
            Email: <a href="mailto:privacy@mariorossi.it" className="text-blue-600">privacy@mariorossi.it</a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Tipologie di dati raccolti</h2>
          <ul className="list-disc ml-6">
            <li>Dati forniti volontariamente (nome, email, contenuti postati...)</li>
            <li>Dati tecnici (IP, browser, sistema operativo...)</li>
            <li>Cookie e strumenti simili (vedi Cookie Policy)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Finalità del trattamento</h2>
          <ul className="list-disc ml-6">
            <li>Gestione account, forum e commenti</li>
            <li>Analisi statistiche del traffico</li>
            <li>Invio comunicazioni promozionali (previo consenso)</li>
            <li>Prevenzione abusi e frodi</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Base giuridica</h2>
          <p>
            Il trattamento si basa su: esecuzione contrattuale, consenso, obblighi legali, legittimo interesse.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Modalità del trattamento</h2>
          <p>
            I dati sono trattati con strumenti elettronici, in sicurezza e accessibili solo da personale autorizzato.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Conservazione dei dati</h2>
          <p>
            I dati sono conservati per la durata necessaria alla finalità, o finché non viene richiesta la cancellazione.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Comunicazione dei dati</h2>
          <p>
            I dati possono essere comunicati a fornitori tecnici, autorità competenti, altri utenti per contenuti pubblici.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Trasferimenti Extra-UE</h2>
          <p>
            Alcuni dati possono essere trasferiti in paesi terzi tramite strumenti come Google, nel rispetto del GDPR.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Diritti dell’utente</h2>
          <ul className="list-disc ml-6">
            <li>Accesso, modifica o cancellazione dei dati</li>
            <li>Limitazione e opposizione al trattamento</li>
            <li>Portabilità dei dati</li>
            <li>Reclamo al Garante Privacy</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Cookie</h2>
          <p>
            Questo sito usa cookie tecnici, analitici e di profilazione. Per maggiori informazioni vedi la <a href="/cookie-policy" className="text-blue-600">Cookie Policy</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">11. Modifiche</h2>
          <p>
            Il Titolare si riserva il diritto di aggiornare la presente informativa in qualsiasi momento.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}
