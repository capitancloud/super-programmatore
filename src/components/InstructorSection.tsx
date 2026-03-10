import { motion } from "framer-motion";

const InstructorSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.15] mb-16">
            CHI C'È
            <br />
            <span className="text-signal">DIETRO QUESTO PROGETTO.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-10 items-start">
            {/* Portrait placeholder - monochrome, architectural */}
            <div className="w-[200px] h-[260px] bg-secondary border border-border flex items-end justify-center overflow-hidden mx-auto sm:mx-0">
              <div className="w-full h-full flex flex-col items-center justify-center p-6">
                <div className="text-6xl font-display text-primary leading-none">EF</div>
                <div className="w-12 h-[1px] bg-primary mt-4" />
              </div>
            </div>

            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p className="text-foreground text-lg font-medium">
                Eugenio Fontana
              </p>
              <p>
                Formatore nel settore tecnologico con anni di esperienza nella formazione 
                su programmazione, cloud computing e cybersecurity.
              </p>
              <p>
                Questo progetto nasce dall'esperienza diretta nella formazione e dalla 
                convinzione che il modo tradizionale di insegnare programmazione sia 
                diventato obsoleto. L'AI ha cambiato le regole. Chi si adatta per primo, vince.
              </p>
              <p>
                Il metodo che ho sviluppato combina 
                <span className="text-foreground"> spiegazione teorica, applicazioni interattive 
                e costruzione di progetti reali</span> — un approccio che non troverai 
                in nessun altro corso online.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
