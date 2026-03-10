import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="font-body text-sm text-primary hover:text-signal transition-colors mb-10 inline-flex items-center gap-2">
          ← Torna alla home
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight mt-8 mb-4">
          Privacy Policy
        </h1>
        <p className="font-body text-sm text-muted-foreground mb-12">
          Ultimo aggiornamento: 10 Marzo 2026
        </p>

        <div className="space-y-10 font-body text-muted-foreground leading-relaxed text-sm">
          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">1. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento dei dati personali è:
            </p>
            <ul className="mt-3 space-y-1">
              <li><strong className="text-foreground">Titolare:</strong> Eugenio Carlo Fontana</li>
              <li><strong className="text-foreground">Sede:</strong> Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI), Italia</li>
              <li><strong className="text-foreground">Partita IVA:</strong> 07097370485</li>
              <li><strong className="text-foreground">Codice Fiscale:</strong> FNTGCR88B12A564Z</li>
              <li><strong className="text-foreground">Email:</strong> superprogrammatore@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">2. Tipologie di Dati Raccolti</h2>
            <p>Il Titolare raccoglie, direttamente o tramite terze parti, le seguenti tipologie di dati personali:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong className="text-foreground">Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate, orari di accesso, sorgente di riferimento e altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.</li>
              <li><strong className="text-foreground">Dati forniti volontariamente dall'utente:</strong> nome, cognome, indirizzo email e qualsiasi altro dato comunicato tramite form di contatto, iscrizione a newsletter o acquisto di prodotti/servizi.</li>
              <li><strong className="text-foreground">Dati di pagamento:</strong> in caso di acquisto, i dati di pagamento vengono gestiti esclusivamente da processori di pagamento terzi (es. Stripe, PayPal) e non vengono memorizzati sui nostri server.</li>
              <li><strong className="text-foreground">Cookie e tecnologie di tracciamento:</strong> come descritto nella nostra <Link to="/cookie-policy" className="text-primary underline hover:text-signal">Cookie Policy</Link>.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">3. Finalità del Trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong className="text-foreground">Erogazione del servizio:</strong> gestione dell'account, accesso ai contenuti formativi, rilascio dell'attestato, assistenza tecnica.</li>
              <li><strong className="text-foreground">Comunicazioni commerciali:</strong> previo consenso esplicito, invio di newsletter, aggiornamenti sul percorso formativo, offerte promozionali.</li>
              <li><strong className="text-foreground">Adempimenti legali:</strong> adempimento di obblighi previsti dalla legge, da regolamenti o dalla normativa comunitaria.</li>
              <li><strong className="text-foreground">Analisi e miglioramento:</strong> analisi statistiche anonime e aggregate per migliorare il servizio e l'esperienza utente.</li>
              <li><strong className="text-foreground">Gestione pagamenti:</strong> elaborazione delle transazioni e fatturazione.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">4. Base Giuridica del Trattamento</h2>
            <p>Il trattamento dei dati personali si basa sulle seguenti basi giuridiche ai sensi del Regolamento UE 2016/679 (GDPR):</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong className="text-foreground">Consenso:</strong> per l'invio di comunicazioni commerciali e l'utilizzo di cookie non tecnici (art. 6, par. 1, lett. a).</li>
              <li><strong className="text-foreground">Esecuzione contrattuale:</strong> per l'erogazione del servizio acquistato (art. 6, par. 1, lett. b).</li>
              <li><strong className="text-foreground">Obbligo legale:</strong> per adempimenti fiscali e contabili (art. 6, par. 1, lett. c).</li>
              <li><strong className="text-foreground">Interesse legittimo:</strong> per la prevenzione di frodi e la sicurezza del servizio (art. 6, par. 1, lett. f).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">5. Modalità di Trattamento</h2>
            <p>
              Il trattamento dei dati viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e logiche strettamente correlate alle finalità indicate. Sono adottate misure di sicurezza tecniche e organizzative adeguate per proteggere i dati da accessi non autorizzati, perdita, distruzione o alterazione.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">6. Conservazione dei Dati</h2>
            <p>I dati personali sono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong className="text-foreground">Dati contrattuali:</strong> per tutta la durata del rapporto contrattuale e per i 10 anni successivi (obblighi fiscali).</li>
              <li><strong className="text-foreground">Dati di navigazione:</strong> massimo 26 mesi dalla raccolta.</li>
              <li><strong className="text-foreground">Dati per finalità di marketing:</strong> fino alla revoca del consenso da parte dell'utente.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">7. Comunicazione e Diffusione dei Dati</h2>
            <p>I dati personali possono essere comunicati a:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Fornitori di servizi tecnici e informatici (hosting, email marketing, analytics).</li>
              <li>Processori di pagamento (Stripe, PayPal o equivalenti).</li>
              <li>Consulenti fiscali e legali per adempimenti di legge.</li>
              <li>Autorità competenti nei casi previsti dalla legge.</li>
            </ul>
            <p className="mt-3">I dati non saranno in alcun caso venduti a terzi né diffusi in modo indiscriminato.</p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">8. Trasferimento dei Dati</h2>
            <p>
              Alcuni dei fornitori di servizi utilizzati potrebbero avere sede al di fuori dell'Unione Europea (ad es. negli USA). In tali casi, il trasferimento dei dati avviene nel rispetto delle garanzie previste dal GDPR, incluse le Clausole Contrattuali Standard approvate dalla Commissione Europea o l'adesione al EU-US Data Privacy Framework.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">9. Diritti dell'Interessato</h2>
            <p>Ai sensi degli artt. 15-22 del GDPR, l'utente ha diritto di:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong className="text-foreground">Accesso:</strong> ottenere conferma del trattamento e copia dei propri dati.</li>
              <li><strong className="text-foreground">Rettifica:</strong> chiedere la correzione di dati inesatti o incompleti.</li>
              <li><strong className="text-foreground">Cancellazione:</strong> richiedere la cancellazione dei propri dati ("diritto all'oblio").</li>
              <li><strong className="text-foreground">Limitazione:</strong> ottenere la limitazione del trattamento.</li>
              <li><strong className="text-foreground">Portabilità:</strong> ricevere i propri dati in formato strutturato e leggibile da dispositivo automatico.</li>
              <li><strong className="text-foreground">Opposizione:</strong> opporsi al trattamento per motivi legittimi.</li>
              <li><strong className="text-foreground">Revoca del consenso:</strong> revocare in qualsiasi momento il consenso prestato.</li>
            </ul>
            <p className="mt-3">
              Per esercitare i propri diritti, scrivere a: <a href="mailto:superprogrammatore@gmail.com" className="text-primary underline hover:text-signal">superprogrammatore@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">10. Reclamo all'Autorità Garante</h2>
            <p>
              L'utente ha il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it) qualora ritenga che il trattamento dei propri dati violi il Regolamento UE 2016/679.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">11. Modifiche alla Privacy Policy</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla presente Privacy Policy in qualunque momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Si consiglia di consultare periodicamente questa pagina.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
