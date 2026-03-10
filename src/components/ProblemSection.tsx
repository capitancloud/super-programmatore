import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.15] mb-10">
            IL CODICE NON SI SCRIVE PIÙ.
            <br />
            <span className="text-signal">SI PROGETTA.</span>
          </h2>

          <div className="space-y-6 font-body text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              Lo sviluppo software sta attraversando la trasformazione più radicale dalla sua nascita. 
              L'intelligenza artificiale non è più un supporto: è diventata lo strumento principale 
              con cui si costruiscono applicazioni, servizi e prodotti digitali.
            </p>
            <p>
              Le aziende cercano una nuova figura professionale: qualcuno che sappia 
              <span className="text-foreground font-medium"> pensare come un architetto del software</span> e 
              usare l'AI per trasformare idee in sistemi funzionanti. Non servono anni di studio 
              su sintassi e framework. Serve una mentalità nuova.
            </p>
            <p>
              Questo percorso ti insegna esattamente questo. Non è un corso tradizionale. 
              È un sistema per acquisire la competenza più richiesta nel mercato tecnologico moderno.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
