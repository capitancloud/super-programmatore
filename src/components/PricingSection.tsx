import { motion } from "framer-motion";

const PricingSection = () => {
  return (
    <section id="offerta" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.15] mb-6">
            OFFERTA DI LANCIO
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
            Il valore completo del programma è 997€. Per il lancio, accedi all'intero 
            percorso a una frazione del prezzo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-border p-8 sm:p-14 max-w-lg mx-auto"
        >
          <div className="mb-8">
            <span className="font-body text-muted-foreground line-through text-xl">997€</span>
            <div className="mt-3 flex items-baseline justify-center gap-2">
              <span className="font-display text-6xl sm:text-7xl text-signal leading-none">97</span>
              <span className="font-display text-2xl text-signal">€</span>
            </div>
            <p className="font-body text-muted-foreground text-sm mt-3 uppercase tracking-wider">
              Accesso completo al percorso
            </p>
          </div>

          <div className="space-y-3 text-left font-body text-sm text-muted-foreground mb-10 max-w-xs mx-auto">
            {[
              "Ore di formazione video approfondita",
              "30+ applicazioni educative interattive",
              "Progetti pratici nel mondo reale",
              "Metodologie AI per lo sviluppo software",
              "Analisi guidata di applicazioni reali",
              "Accesso a tutti gli aggiornamenti futuri",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-signal font-bold mt-0.5">—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex w-full items-center justify-center bg-primary text-primary-foreground font-body font-bold text-lg px-10 py-4 uppercase tracking-wider hover:brightness-110 transition-all"
          >
            Accedi ora — 97€
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
