import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// 1. Contrat de données TypeScript (Prêt pour la BDD / CMS)
export interface CTAData {
  titleLight: string;
  titleGradient: string;
  description: string;
  ctaLabel: string;
}

// 2. Mock des données centralisées
const MOCK_CTA_DATA: CTAData = {
  titleLight: "Prêt à passer à l’étape ",
  titleGradient: "supérieure ?",
  description: "Transformons ensemble vos idées en environnements de travail exceptionnels, intelligents et connectés.",
  ctaLabel: "Contactez OMIIE maintenant"
};

export default function CTASection() {
  const [data] = useState<CTAData>(MOCK_CTA_DATA);

  return (
    <section className="relative py-20 md:py-36 bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-white flex items-center justify-center overflow-hidden transition-colors duration-500 border-b border-zinc-200 dark:border-zinc-900">
      
      {/* Background immersif et technique */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#1f1f23_1.2px,transparent_1.2px)] bg-[size:48px_48px] md:bg-[size:60px_60px] opacity-60 dark:opacity-40" />
        {/* Halo lumineux d'arrière-plan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/[0.08] dark:bg-emerald-500/[0.05] rounded-full blur-[80px] md:blur-[120px]" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Titre responsive Mobile-First */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight md:tracking-[-2px] leading-[1.1] mb-6 md:mb-8"
        >
          {data.titleLight}
          <br className="hidden sm:block" /> 
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
            {data.titleGradient}
          </span>
        </motion.h2>

        {/* Description calibrée */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          {data.description}
        </motion.p>

        {/* Bouton d'action réactif et optimisé pour le pouce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, type: "spring" }}
        >
          <motion.button 
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-full sm:w-auto bg-zinc-900 dark:bg-white hover:bg-emerald-500 dark:hover:bg-emerald-500 text-white dark:text-zinc-950 hover:text-white dark:hover:text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl text-base md:text-lg font-bold flex items-center justify-center gap-3 mx-auto transition-all shadow-xl shadow-zinc-950/10 dark:shadow-none hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            {data.ctaLabel}
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </motion.button>
        </motion.div>
        
      </div>
    </section>
  );
}