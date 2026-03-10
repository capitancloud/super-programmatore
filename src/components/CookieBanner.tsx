import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 sm:p-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-body text-sm text-muted-foreground flex-1">
          Questo sito utilizza cookie tecnici e, previo tuo consenso, cookie di profilazione per migliorare la tua esperienza.
          Puoi leggere la nostra{" "}
          <Link to="/cookie-policy" className="text-primary underline hover:text-signal transition-colors">
            Cookie Policy
          </Link>{" "}
          e la{" "}
          <Link to="/privacy-policy" className="text-primary underline hover:text-signal transition-colors">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="font-body text-sm px-5 py-2.5 border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all"
          >
            Rifiuta
          </button>
          <button
            onClick={accept}
            className="font-body text-sm px-5 py-2.5 bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(51_100%_50%/0.2)] transition-all"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
