import { motion } from "framer-motion";

const modules = [
  {
    number: "01",
    title: "FONDAMENTA",
    description:
      "Comprendi come funzionano le web application dal primo principio. Architettura, protocolli, database, frontend e backend — senza scorciatoie.",
  },
  {
    number: "02",
    title: "IL METODO AI",
    description:
      "Impara le metodologie e le best practice per programmare con l'intelligenza artificiale. Prompt engineering, progettazione di sistemi, debugging assistito.",
  },
  {
    number: "03",
    title: "APPLICAZIONI REALI",
    description:
      "Progetti pratici guidati dove costruisci applicazioni complete nel mondo reale, dalla progettazione al deploy, usando l'AI come strumento primario.",
  },
  {
    number: "04",
    title: "ANALISI GUIDATA",
    description:
      "Studi approfonditi di applicazioni reali esistenti. Analizzi l'architettura, le scelte tecniche e impari a ragionare come un professionista.",
  },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.15] mb-20 text-center"
        >
          UN PERCORSO,
          <br />
          <span className="text-signal">NON UN VIDEOCORSO.</span>
        </motion.h2>

        <div className="space-y-0">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-t border-border py-10 grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-4 sm:gap-8"
            >
              <span className="font-display text-primary text-2xl">{mod.number}</span>
              <div>
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight mb-3">
                  {mod.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed max-w-xl">
                  {mod.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 border border-border p-8 sm:p-12"
        >
          <p className="font-body text-foreground text-lg leading-relaxed">
            Ore di formazione video approfondita. Spiegazioni dettagliate. Progetti reali. 
            Metodologie testate. Un sistema completo che ti porta dalle basi alla capacità 
            di <span className="text-signal font-semibold">progettare e sviluppare applicazioni professionali con l'AI</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
