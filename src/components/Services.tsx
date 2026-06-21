import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ShieldAlert, Crosshair, CheckCircle2, ArrowRight, Eye, Sparkles } from 'lucide-react';

interface NuisibleService {
  id: string;
  title: string;
  subtitle: string;
  dangerLevel: 'Critique' | 'Élevé' | 'Modéré';
  description: string;
  protocol: string[];
  icon: string;
  accentColor: string;
}

const NUISIBLES_DATA: NuisibleService[] = [
  {
    id: 'cafards',
    title: 'Blattes & Cafards',
    subtitle: 'Vecteurs de bactéries',
    dangerLevel: 'Critique',
    description: 'Invasion rapide dans les cuisines, restaurants et entrepôts à Yaoundé et Douala en raison de l\'humidité.',
    protocol: ['Application de gel d\'éradication invisible', 'Destruction des poches d\'œufs (oothèques)', 'Barrière moléculaire longue durée'],
    icon: '🪳',
    accentColor: 'from-lime-400 to-emerald-500'
  },
  {
    id: 'rats',
    title: 'Rongeurs & Rats',
    subtitle: 'Dégâts matériels et sanitaires',
    dangerLevel: 'Critique',
    description: 'Câbles rongés, cloisons perforées et risques de maladies. Solutions de piégeage et sécurisation hermétique.',
    protocol: ['Audit des points d\'intrusion', 'Mise en place de postes d\'appâtage sécurisés', 'Colmatage structurel des accès'],
    icon: '🐀',
    accentColor: 'from-blue-600 to-blue-900'
  },
  {
    id: 'insectes',
    title: 'Moustiques & Volants',
    subtitle: 'Prévention Paludisme / Dengue',
    dangerLevel: 'Élevé',
    description: 'Traitements extérieurs et intérieurs pour sécuriser vos concessions et vos cours pendant les saisons des pluies.',
    protocol: ['Nébulisation thermique (Fogging)', 'Traitement des gîtes larvaires', 'Répulsif environnemental bio'],
    icon: '🦟',
    accentColor: 'from-lime-500 via-emerald-400 to-blue-600'
  }
];

export function Services() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section id="services" className="relative min-h-screen py-24 bg-stone-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute top-40 right-[-10%] w-[45vw] h-[45vw] max-w-[500px] bg-lime-300/10 dark:bg-lime-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[50vw] h-[50vw] max-w-[500px] bg-blue-300/10 dark:bg-blue-950/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* EN-TÊTE */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <div className="lg:col-span-8 text-center lg:text-left">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-900 border border-blue-200/20 text-[10px] font-bold tracking-widest text-blue-900 dark:text-lime-400 uppercase mb-4">
              <Crosshair className="w-3 h-3 animate-spin" /> Protocoles de ciblage
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-tight">
              Identification & <br />
              <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
                Spectre d'Action
              </span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 text-center lg:text-right">
            <motion.p variants={fadeInUp} className="text-sm text-slate-500 dark:text-slate-400 font-light max-w-sm mx-auto lg:ml-auto leading-relaxed">
              Chaque menace demande une méthodologie chirurgicale. Nos produits éliminent les nuisibles sans altérer la qualité de l'air de vos espaces de vie.
            </motion.p>
          </div>
        </motion.div>

        {/* GRILLE DES SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {NUISIBLES_DATA.map((nuisible, index) => {
            const isExpanded = activeCard === nuisible.id;

            return (
              <motion.div
                key={nuisible.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                layout
                className={`group relative w-full overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-none transition-shadow duration-300 ${
                  isExpanded ? 'shadow-2xl ring-1 ring-lime-400/50' : 'shadow-sm hover:shadow-xl'
                }`}
              >
                {/* En-tête de la carte */}
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl filter drop-shadow-sm select-none">
                    {nuisible.icon}
                  </div>
                  <span className={`text-[9px] tracking-widest font-bold uppercase px-2.5 py-1 ${
                    nuisible.dangerLevel === 'Critique' 
                      ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400' 
                      : 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400'
                  }`}>
                    Danger: {nuisible.dangerLevel}
                  </span>
                </div>

                {/* Titres */}
                <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-1">
                  {nuisible.title}
                </h3>
                <p className="text-xs font-medium text-lime-600 dark:text-lime-400 mb-4 tracking-wide">
                  {nuisible.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light mb-6 leading-relaxed">
                  {nuisible.description}
                </p>

                {/* Protocole */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" as const }}
                      className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-4 overflow-hidden"
                    >
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-blue-950 dark:text-slate-300 flex items-center gap-2 mb-3">
                        <ShieldAlert className="w-3.5 h-3.5 text-lime-500" /> Protocole Nexora Hysacam
                      </h4>
                      <ul className="space-y-2.5">
                        {nuisible.protocol.map((step, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 font-light"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-lime-500 shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bouton d'action */}
                <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800/50 flex justify-between items-center">
                  <button
                    onClick={() => setActiveCard(isExpanded ? null : nuisible.id)}
                    className="text-[11px] font-bold tracking-wider uppercase text-blue-950 dark:text-lime-400 flex items-center gap-1.5 group focus:outline-none"
                  >
                    <span>{isExpanded ? 'Fermer le protocole' : 'Voir le protocole'}</span>
                    <Eye className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <a 
                    href="#contact" 
                    className={`w-8 h-8 rounded-full bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white transition-all duration-300 ${
                      isExpanded ? 'bg-lime-400 text-slate-950 shadow-lg scale-110' : 'hover:bg-lime-400 hover:text-slate-950'
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Ligne décorative */}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${nuisible.accentColor} w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`} />
              </motion.div>
            );
          })}
        </div>

        {/* COMPTEUR DE SÉRÉNITÉ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 md:p-8 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 bg-lime-400 text-slate-950 rounded-none flex items-center justify-center font-bold text-lg shadow-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base">Besoin d'une éradication immédiate ou d'un devis urgent ?</h4>
              <p className="text-xs text-slate-400 font-light">Nos équipes mobiles interviennent sous 2h à Bastos, Akwa, Bonapriso, et partout ailleurs.</p>
            </div>
          </div>
          <a href="tel:+237600000000" className="w-full md:w-auto px-6 py-3 bg-lime-400 hover:bg-lime-500 text-slate-950 text-xs font-bold tracking-widest uppercase transition-all text-center">
            Appel d'urgence 24/7
          </a>
        </motion.div>

      </div>
    </section>
  );
}