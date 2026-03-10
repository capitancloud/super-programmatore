import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="font-body text-sm text-primary hover:text-signal transition-colors mb-10 inline-flex items-center gap-2">
          ← Torna alla home
        </Link>

        <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight mt-8 mb-4">
          Cookie Policy
        </h1>
        <p className="font-body text-sm text-muted-foreground mb-12">
          Ultimo aggiornamento: 10 Marzo 2026
        </p>

        <div className="space-y-10 font-body text-muted-foreground leading-relaxed text-sm">
          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">1. Titolare del Trattamento</h2>
            <ul className="space-y-1">
              <li><strong className="text-foreground">Titolare:</strong> Eugenio Carlo Fontana</li>
              <li><strong className="text-foreground">Sede:</strong> Via Borgo Baldassarre Paoli 53 — 50022 Greve in Chianti (FI), Italia</li>
              <li><strong className="text-foreground">Partita IVA:</strong> 07097370485</li>
              <li><strong className="text-foreground">Codice Fiscale:</strong> FNTGCR88B12A564Z</li>
              <li><strong className="text-foreground">Email:</strong> superprogrammatore@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">2. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dall'utente inviano e registrano sul suo computer o dispositivo mobile, per essere poi ritrasmessi agli stessi siti alla visita successiva. Grazie ai cookie, un sito ricorda le azioni e le preferenze dell'utente (come login, lingua, dimensioni dei caratteri e altre impostazioni di visualizzazione) in modo che non debbano essere reimpostate quando l'utente torna a visitare il sito o naviga da una pagina all'altra.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">3. Tipologie di Cookie Utilizzati</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-2">3.1 Cookie Tecnici (Necessari)</h3>
                <p>
                  Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disattivati. Vengono impostati in risposta ad azioni effettuate dall'utente, come la gestione della sessione, la memorizzazione delle preferenze sulla privacy e il funzionamento di base del sito.
                </p>
                <div className="mt-3 border border-border bg-secondary/30 p-4">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground font-medium">Cookie</th>
                        <th className="text-left py-2 text-foreground font-medium">Finalità</th>
                        <th className="text-left py-2 text-foreground font-medium">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2">cookie-consent</td>
                        <td className="py-2">Memorizzazione scelta cookie dell'utente</td>
                        <td className="py-2">12 mesi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-2">3.2 Cookie Analitici</h3>
                <p>
                  Questi cookie ci permettono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali sono le pagine più e meno popolari e a vedere come i visitatori si muovono nel sito. Tutte le informazioni raccolte da questi cookie sono aggregate e quindi anonime.
                </p>
                <p className="mt-2">
                  Potremmo utilizzare servizi di terze parti come Google Analytics. In tal caso, gli indirizzi IP vengono anonimizzati e i dati sono trattati in forma aggregata.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-2">3.3 Cookie di Profilazione / Marketing</h3>
                <p>
                  Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari. Possono essere utilizzati da queste società per costruire un profilo dei tuoi interessi e mostrarti annunci pertinenti su altri siti. Non memorizzano direttamente informazioni personali, ma si basano sull'identificazione univoca del tuo browser e dispositivo. Se non consenti questi cookie, vedrai annunci meno mirati.
                </p>
              </div>

              <div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-2">3.4 Cookie di Terze Parti</h3>
                <p>Il sito potrebbe includere funzionalità fornite da terze parti che possono installare cookie propri:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li><strong className="text-foreground">Google Analytics:</strong> per l'analisi statistica del traffico web.</li>
                  <li><strong className="text-foreground">Stripe / PayPal:</strong> per la gestione sicura dei pagamenti.</li>
                  <li><strong className="text-foreground">YouTube / Vimeo:</strong> per l'incorporamento di video.</li>
                  <li><strong className="text-foreground">Discord:</strong> per widget e integrazioni della community.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">4. Base Giuridica</h2>
            <p>
              Ai sensi dell'art. 122 del D.Lgs. 196/2003 (Codice Privacy) e del Provvedimento del Garante per la protezione dei dati personali n. 229 dell'8 maggio 2014, nonché del Regolamento UE 2016/679 (GDPR):
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>I cookie tecnici non richiedono il consenso dell'utente e vengono installati automaticamente.</li>
              <li>I cookie analitici, di profilazione e di terze parti vengono installati solo previo consenso esplicito dell'utente, espresso tramite il banner cookie presente sul sito.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">5. Come Gestire i Cookie</h2>
            <p>L'utente può gestire le preferenze sui cookie in diversi modi:</p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-2">5.1 Tramite il Banner Cookie</h3>
                <p>Al primo accesso al sito, viene mostrato un banner che consente di accettare o rifiutare i cookie non tecnici.</p>
              </div>

              <div>
                <h3 className="font-display text-base uppercase tracking-tight text-foreground mb-2">5.2 Tramite le Impostazioni del Browser</h3>
                <p>È possibile gestire i cookie anche attraverso le impostazioni del proprio browser. Di seguito i link alle guide dei principali browser:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-signal">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-signal">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-signal">Apple Safari</a></li>
                  <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-signal">Microsoft Edge</a></li>
                </ul>
              </div>
            </div>

            <p className="mt-4">
              <strong className="text-foreground">Nota:</strong> la disabilitazione di cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">6. Conservazione dei Cookie</h2>
            <p>
              I cookie hanno una durata variabile a seconda della tipologia. I cookie di sessione vengono eliminati alla chiusura del browser. I cookie persistenti hanno una durata massima indicata nella tabella della sezione 3. L'utente può comunque eliminare i cookie in qualsiasi momento tramite le impostazioni del browser.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">7. Diritti dell'Utente</h2>
            <p>
              L'utente può esercitare i diritti previsti dagli artt. 15-22 del GDPR (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione) scrivendo a:{" "}
              <a href="mailto:superprogrammatore@gmail.com" className="text-primary underline hover:text-signal">superprogrammatore@gmail.com</a>
            </p>
            <p className="mt-3">
              Per maggiori informazioni sul trattamento dei dati personali, consultare la nostra{" "}
              <Link to="/privacy-policy" className="text-primary underline hover:text-signal">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg uppercase tracking-tight text-foreground mb-4">8. Aggiornamenti</h2>
            <p>
              La presente Cookie Policy può essere soggetta a modifiche e aggiornamenti. Le eventuali modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Si invita l'utente a consultare periodicamente questa pagina per restare aggiornato.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
