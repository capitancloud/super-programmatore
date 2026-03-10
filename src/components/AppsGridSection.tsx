import { motion } from "framer-motion";

const appLabels = [
  "HTTP Explorer", "DOM Visualizer", "State Machine", "API Tester",
  "CSS Grid Lab", "Auth Flow", "Database Schema", "React Lifecycle",
  "REST Builder", "Component Tree", "Event Loop", "Git Simulator",
  "Deploy Pipeline", "Query Builder", "Routing Lab", "Form Validator",
  "WebSocket Chat", "Cache Strategy", "JWT Decoder", "Responsive Tester",
  "Flexbox Arena", "Type Checker", "Error Handler", "Data Flow",
  "Fetch Inspector", "Promise Chain", "Regex Tester", "JSON Parser",
  "Cookie Manager", "Storage API", "Perf Monitor", "A11y Checker",
];

const sizes = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
];

const AppsGridSection = () => {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.15] mb-6">
            <span className="text-signal">30+</span> APPLICAZIONI
            <br />
            EDUCATIVE INTERATTIVE
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Non slides. Non PDF. Applicazioni web reali progettate per farti 
            comprendere ogni concetto in modo pratico e visuale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3"
        >
          {appLabels.map((label, i) => (
            <motion.div
              key={label}
              className={`group relative bg-secondary border border-border p-3 sm:p-4 flex flex-col justify-end min-h-[80px] sm:min-h-[100px] hover:border-primary/40 transition-colors duration-300 ${
                sizes[i % sizes.length]
              }`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Simulated UI lines */}
              <div className="absolute top-3 left-3 right-3 space-y-1.5 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="h-[2px] bg-foreground w-3/4" />
                <div className="h-[2px] bg-foreground w-1/2" />
                <div className="h-[2px] bg-primary w-1/3" />
              </div>
              <span className="font-body text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppsGridSection;
