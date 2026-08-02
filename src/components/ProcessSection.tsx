import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Search, Lightbulb, Hammer, TrendingUp, ArrowRight } from "lucide-react";

// ================= TYPES =================
export interface ProcessStep {
  number: number;
  iconType: "search" | "solution" | "build" | "optimize";
  title: string;
  desc: string;
}

export interface ProcessData {
  badgeLabel: string;
  titleMain: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  ctaLabel: string;
  steps: ProcessStep[];
}

// ================= MOCK DATA =================
const MOCK_PROCESS_DATA: ProcessData = {
  badgeLabel: "NOTRE MÉTHODOLOGIE",
  titleMain: "Un processus clair, ",
  titleHighlight: "efficace",
  titleEnd: " et transparent.",
  description: "Nous suivons une méthodologie éprouvée en 4 phases pour garantir le succès et la pérennité de chaque projet.",
  ctaLabel: "Lancer mon projet avec OMIIE",
  steps: [
    {
      number: 1,
      iconType: "search",
      title: "Analyse du besoin",
      desc: "Étude approfondie de vos environnements actuels, identification des points de friction et compréhension fine de vos objectifs stratégiques.",
    },
    {
      number: 2,
      iconType: "solution",
      title: "Proposition de solution",
      desc: "Présentation d'une stratégie sur-mesure avec des scénarios d'aménagement, des solutions technologiques et une estimation détaillée.",
    },
    {
      number: 3,
      iconType: "build",
      title: "Mise en œuvre",
      desc: "Exécution du projet avec une gestion agile : conception, aménagement, intégration technologique et formation des équipes.",
    },
    {
      number: 4,
      iconType: "optimize",
      title: "Suivi & Optimisation",
      desc: "Accompagnement post-projet avec suivi des performances, ajustements continus et optimisation pour maximiser le ROI.",
    },
  ],
};

// ================= COMPONENT =================
export default function ProcessSection() {
  const [data] = useState<ProcessData>(MOCK_PROCESS_DATA);

  const getIcon = (type: ProcessStep["iconType"]) => {
    switch (type) {
      case "search": return <Search size={22} />;
      case "solution": return <Lightbulb size={22} />;
      case "build": return <Hammer size={22} />;
      case "optimize": return <TrendingUp size={22} />;
      default: return null;
    }
  };

  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 14 },
    },
  } as const;

  return (
    <section id="process" className="relative py-16 md:py-28 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-500 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#222226_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:40px_40px] opacity-70 dark:opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-4 md:mb-6 shadow-sm"
          >
            <Zap className="text-emerald-500 fill-current" size={14} />
            <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] md:tracking-[2px] uppercase text-zinc-500 dark:text-zinc-400">
              {data.badgeLabel}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight lg:tracking-tighter text-zinc-950 dark:text-white mb-4 md:mb-6 leading-[1.15]"
          >
            {data.titleMain}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              {data.titleHighlight}
            </span>
            {data.titleEnd}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-medium"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 pl-6 sm:pl-8 lg:pl-0 border-l border-zinc-200 dark:border-zinc-800 lg:border-l-0"
        >
          {data.steps.map((step, index) => {
            const isLast = index === data.steps.length - 1;

            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="relative group select-none"
              >
                {!isLast && (
                  <div className="hidden lg:block absolute top-7 left-[calc(44px+1.5rem)] right-[-1.5rem] h-[2px] bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent border-t border-dashed border-zinc-300 dark:border-zinc-700 z-0 group-hover:from-emerald-500/40 transition-colors duration-500" />
                )}

                <div className="lg:hidden absolute -left-[calc(1.5rem+17px)] sm:-left-[calc(2rem+17px)] top-1 w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-colors duration-300">
                  {step.number}
                </div>

                <div className="relative bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 md:p-7 shadow-sm backdrop-blur-sm flex flex-col items-start transition-all duration-300 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/[0.01]">
                  
                  <span className="absolute bottom-2 right-4 text-7xl md:text-8xl font-black font-mono text-zinc-100 dark:text-zinc-900/40 select-none pointer-events-none group-hover:text-emerald-500/[0.03] transition-colors duration-500">
                    0{step.number}
                  </span>

                  <div className="flex items-center justify-between w-full mb-5 relative z-10">
                    <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-emerald-500 dark:text-emerald-400 border border-zinc-200/50 dark:border-zinc-800 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 shadow-sm transition-all duration-300">
                      {getIcon(step.iconType)}
                    </div>
                    <span className="hidden lg:inline-block font-mono text-xs font-bold text-zinc-400 dark:text-zinc-600 bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800 px-2 py-0.5 rounded">
                      PHASE 0{step.number}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white mb-2 tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14 md:mt-20">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-zinc-900 dark:bg-white hover:bg-emerald-500 dark:hover:bg-emerald-500 text-white dark:text-zinc-950 hover:text-white dark:hover:text-white px-7 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all shadow-md shadow-zinc-950/10 dark:shadow-none"
          >
            {data.ctaLabel}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}