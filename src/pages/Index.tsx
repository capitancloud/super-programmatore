import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MethodSection from "@/components/MethodSection";
import AppsGridSection from "@/components/AppsGridSection";
import InstructorSection from "@/components/InstructorSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <AppsGridSection />
      <InstructorSection />
      <PricingSection />
      <FinalCTA />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-sm text-muted-foreground">
          <span>© 2025 Eugenio Fontana. Tutti i diritti riservati.</span>
          <span className="text-signal font-display text-xs tracking-widest uppercase">
            Super Programmatore
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
