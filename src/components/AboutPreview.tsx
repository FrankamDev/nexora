import { useState } from 'react';
import type {ReactNode} from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Building2, Layers, ArrowRightCircle, CheckCircle2 } from 'lucide-react';

// Types
export interface Pillar {
  id: string;
  title: string;
  tagline: string;
  iconType: 'mission' | 'vision';
  desc: string;
  details: string[];
}

export interface AboutData {
  badgeLabel: string;
  titleLight: string;
  titleGradient: string;
  titleEnd: string;
  description: string;
  pillars: Pillar[];
}

// Mock Data
const MOCK_ABOUT_DATA: AboutData = {
  badgeLabel: "L'ADN d'OMIIE",
  titleLight: "Nous créons des ",
  titleGradient: "environnements intelligents",
  titleEnd: ".",
  description: "Là où l'architecture physique rencontre l'expérience numérique pour donner naissance à des lieux de travail vivants et performants.",
  pillars: [
    {
      id: "pillar-1",
      title: "Notre Mission",
      tagline: "Optimiser l'existant, connecter les énergies",
      iconType: "mission",
      desc: "Nous concevons des environnements d'entreprise d'une fluidité absolue. En restructurant vos milieux physiques et en intégrant des interfaces de contrôle agiles, nous permettons à vos talents de se concentrer sur ce qu'ils font de mieux.",
      details: [
        "Réduction des frictions spatiales quotidiennes",
        "Éradication des silos applicatifs",
        "Espaces ergonomiques sains et durables"
      ]
    },
    {
      id: "pillar-2",
      title: "Notre Vision",
      tagline: "L'harmonie totale entre l'Humain et son cadre",
      iconType: "vision",
      desc: "Nous projetons un monde où les bureaux physiques et les outils digitaux ne forment qu'un seul écosystème respirant, intelligent et auto-adaptatif.",
      details: [
        "Infrastructures auto-modulables en temps réel",
        "Souveraineté et sécurité absolue des données",
        "Empreinte carbone structurelle optimisée"
      ]
    }
  ]
};

export default function AboutPreview() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [data] = useState<AboutData>(MOCK_ABOUT_DATA);

  const getIcon = (type: 'mission' | 'vision'): ReactNode => {
    switch (type) {
      case 'mission': return <Target size={22} />;
      case 'vision': return <Eye size={22} />;
      default: return null;
    }
  };

  return (
    <section id="about" className="relative py-16 md:py-28 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
      
      {/* Background Subtil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_0.8px,transparent_1px)] dark:bg-[radial-gradient(#27272a_0.8px,transparent_1px)] [background-size:24px_24px] md:[background-size:28px_28px] opacity-40" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-4 md:mb-6 shadow-sm">
            <Building2 size={14} className="text-emerald-500" />
            <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] md:tracking-[2px] uppercase text-zinc-500 dark:text-zinc-400">
              {data.badgeLabel}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight lg:tracking-tighter text-zinc-950 dark:text-white leading-tight mb-4 max-w-2xl mx-auto">
            {data.titleLight}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent">
              {data.titleGradient}
            </span>
            {data.titleEnd}
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          
          {/* VISUAL SCHÉMATIQUE */}
          <div className="lg:col-span-5 flex justify-center order-first lg:order-none">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl shadow-zinc-200/50 dark:shadow-none flex flex-col">
                
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <div className="font-mono text-[9px] md:text-xs tracking-widest text-zinc-400 dark:text-zinc-500 font-bold">ARCHITECTURE MAP</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] md:text-xs text-emerald-500 font-bold tracking-wider">LIVE</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8 relative py-4">
                  {/* Layer 1 */}
                  <div className="group relative bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 transition-colors hover:border-emerald-500/50">
                    <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-white dark:bg-zinc-900 text-[8px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 rounded border border-zinc-100 dark:border-zinc-800">PHYSICAL</div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                        <Layers size={16} />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <div className="h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full w-3/4" />
                        <div className="h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="group relative bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 transition-colors hover:border-emerald-500/50">
                    <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-white dark:bg-zinc-900 text-[8px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 rounded border border-zinc-100 dark:border-zinc-800">DIGITAL</div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                        <Target size={16} />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <motion.div 
                          initial={{ width: "30%" }} 
                          animate={{ width: "83%" }} 
                          transition={{ duration: 1.5, ease: "easeOut" }} 
                          className="h-1.5 bg-emerald-500 rounded-full" 
                        />
                        <div className="h-1 bg-emerald-500/40 rounded-full w-2/3" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-8 top-[28%] bottom-[28%] w-0.5 bg-gradient-to-b from-emerald-500 to-transparent opacity-50" />
                </div>

                <div className="text-center text-[9px] font-mono text-zinc-400 dark:text-zinc-500 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 select-none">
                  ALIGNEMENT TOTAL • SYNCHRONISATION CONTINUE
                </div>
              </div>
            </div>
          </div>

          {/* CONTENU TEXTUEL */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Tabs */}
            <div className="bg-zinc-200/60 dark:bg-zinc-900 p-1 rounded-xl flex mb-6 md:mb-8 max-w-md w-full mx-auto lg:mx-0">
              {data.pillars.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 py-2 px-3 text-xs md:text-sm font-bold rounded-lg transition-all relative ${
                    activeStep === idx 
                      ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm' 
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                  }`}
                >
                  {pillar.title}
                </button>
              ))}
            </div>

            {/* Contenu Dynamique */}
            <div className="min-h-[260px] sm:min-h-[220px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-center lg:text-left"
                >
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-4 md:mb-6">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/10 shrink-0">
                      {getIcon(data.pillars[activeStep].iconType)}
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="text-xl md:text-2xl font-extrabold text-zinc-950 dark:text-white">
                        {data.pillars[activeStep].tagline}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                        {data.pillars[activeStep].desc}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 max-w-xl mx-auto lg:mx-0 text-left">
                    {data.pillars[activeStep].details.map((detail, i) => (
                      <motion.li 
                        initial={{ opacity: 0, y: 5 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: i * 0.05 }}
                        key={i} 
                        className="flex items-start gap-2.5"
                      >
                        <div className="mt-1 w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={12} className="text-emerald-500" />
                        </div>
                        <span className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm font-medium leading-normal">
                          {detail}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bouton CTA */}
            <div className="mt-6 md:mt-8 text-center lg:text-left">
              <motion.button 
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-white dark:bg-zinc-900 hover:bg-emerald-500 dark:hover:bg-emerald-500 text-zinc-950 dark:text-white hover:text-white dark:hover:text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all border border-zinc-200 dark:border-zinc-800 shadow-sm"
              >
                Découvrir notre approche
                <ArrowRightCircle size={16} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}