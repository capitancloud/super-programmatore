import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TITLE = "DIVENTA UN ARCHITETTO DI SISTEMI AI";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);
  const [blinkCount, setBlinkCount] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // Initial blink phase
  useEffect(() => {
    if (blinkCount < 4) {
      const timer = setTimeout(() => setBlinkCount((c) => c + 1), 400);
      return () => clearTimeout(timer);
    } else {
      setStartTyping(true);
    }
  }, [blinkCount]);

  // Typing phase
  useEffect(() => {
    if (!startTyping) return;
    if (displayedText.length < TITLE.length) {
      const timer = setTimeout(() => {
        setDisplayedText(TITLE.slice(0, displayedText.length + 1));
      }, 45);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setTypingDone(true), 300);
    }
  }, [displayedText, startTyping]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle light beam from top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.03] blur-[120px] rounded-full" />

      <div className="max-w-4xl text-center">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight leading-[1.1] min-h-[2.5em]">
          <span className="text-foreground">{displayedText}</span>
          <span
            className={`inline-block w-[3px] h-[0.85em] bg-primary align-middle ml-1 ${
              showCursor ? "cursor-blink" : "opacity-0"
            }`}
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={typingDone ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8"
        >
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Il futuro dello sviluppo software non appartiene a chi scrive codice.
            <br />
            Appartiene a chi sa <span className="text-signal font-semibold">comandare l'intelligenza artificiale</span> per costruirlo.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#offerta"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-body font-bold text-lg px-10 py-4 uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Inizia ora — 97€
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center border border-muted-foreground/30 text-foreground font-body font-medium text-base px-8 py-4 hover:border-foreground/50 transition-all"
            >
              Scopri il metodo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={typingDone ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-muted-foreground/30 mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
