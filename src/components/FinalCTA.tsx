import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.15] mb-8">
            IL MERCATO NON ASPETTA.
            <br />
            <span className="text-signal">TU?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Le aziende stanno già cercando chi sa costruire software con l'AI. 
            Questa competenza non sarà opzionale ancora a lungo.
          </p>
          <a
            href="#offerta"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-body font-bold text-lg px-12 py-5 uppercase tracking-wider hover:brightness-110 transition-all"
          >
            Inizia il percorso — 97€
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
