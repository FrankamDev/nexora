import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ShieldCheck, Leaf, Zap, Award, ArrowUpRight } from 'lucide-react';

interface GarantieItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  highlight: string;
}

export function Features() {
  const [activeTab, setActiveTab] = useState<string>('garantie');

  const garanties: GarantieItem[] = [
    {
      id: 'garantie',
      title: 'Garantie Écrit de 6 Mois',
      icon: <ShieldCheck className="w-5 h-5 text-lime-500" />,
      description: 'Si les nuisibles réapparaissent dans les 180 jours suivant notre traitement, nos équipes mobiles réinterviennent gratuitement chez vous, immédiatement.',
      highlight: 'Zéro frais supplémentaire.'
    },
    {
      id: 'bio',
      title: 'Sécurité & Produits Bio',
      icon: <Leaf className="w-5 h-5 text-lime-500" />,
      description: 'Nous utilisons exclusivement des formulations éco-responsables à faible impact environnemental, totalement inoffensives pour vos enfants et animaux de compagnie.',
      highlight: 'Certifié conforme aux normes internationales.'
    },
    {
      id: 'vitesse',
      title: 'Intervention Flash 2h',
      icon: <Zap className="w-5 h-5 text-lime-500" />,
      description: 'Nos techniciens basés stratégiquement à Douala et Yaoundé sont équipés de traceurs en temps réel pour garantir une arrivée sur les lieux en moins de deux heures.',
      highlight: 'Disponibilité absolue 24h/7.'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section id="features" className="relative min-h-screen py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      
      {/* BACKGROUND DE CORRÉLATION GRAPHIQUE */}
      <div className="absolute top-1/3 left-[-15%] w-[60vw] h-[60vw] max-w-[600px] bg-blue-300/10 dark:bg-blue-900/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-[45vw] h-[45vw] max-w-[500px] bg-lime-200/20 dark:bg-lime-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* BLOC GAUCHE : LES GRANDS CHIFFRES */}
          <motion.div 
            className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={itemVariants}
              className="col-span-2 p-6 md:p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-left relative group overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-slate-300 dark:text-slate-700 group-hover:text-lime-500 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <span className="text-4xl md:text-5xl font-black text-blue-950 dark:text-white block tracking-tight">
                99.4%
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-lime-600 dark:text-lime-400 block mt-2">
                Taux de réussite
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-1 leading-relaxed">
                Mesuré sur plus de 1 200 interventions post-suivi à Yaoundé et Douala.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-left"
            >
              <span className="text-3xl md:text-4xl font-black text-blue-950 dark:text-white block">
                +350
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mt-1">
                Résidences
              </span>
              <p className="text-[11px] text-slate-500 font-light mt-1">
                Familles définitivement protégées.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="p-6 bg-slate-950 text-white text-left relative"
            >
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
              <span className="text-3xl md:text-4xl font-black text-lime-400 block">
                120+
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mt-1">
                Bureaux & Hôtels
              </span>
              <p className="text-[11px] text-slate-300 font-light mt-1">
                Contrats de maintenance pro.
              </p>
            </motion.div>
          </motion.div>

          {/* BLOC DROIT : ENGAGEMENT INTERACTIF */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-50 dark:bg-slate-900 border border-lime-200/30 text-[10px] font-bold tracking-widest text-blue-950 dark:text-lime-400 uppercase mb-4"
            >
              <Award className="w-3.5 h-3.5 text-lime-500" /> Label de Sérénité Durable
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-[1.2] mb-6"
            >
              Pourquoi le Cameroun <br /> fait confiance à 
              <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent ml-2">
                NEXORA
              </span>
            </motion.h3>

            {/* Tabs */}
            <div className="w-full flex border-b border-slate-100 dark:border-slate-800 mb-6 overflow-x-auto scrollbar-none gap-2">
              {garanties.map((garantie) => (
                <button
                  key={garantie.id}
                  onClick={() => setActiveTab(garantie.id)}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all relative focus:outline-none ${
                    activeTab === garantie.id
                      ? 'border-blue-950 dark:border-lime-400 text-blue-950 dark:text-lime-400'
                      : 'border-transparent text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {garantie.title.split(' ')[0]} {garantie.id === 'bio' ? '& Bio' : ''}
                </button>
              ))}
            </div>

            {/* Contenu dynamique */}
            <div className="w-full min-h-[140px] bg-slate-50 dark:bg-slate-900/60 p-6 border border-slate-100 dark:border-slate-900 relative">
              <AnimatePresence mode="wait">
                {garanties.map((g) => 
                  g.id === activeTab && (
                    <motion.div
                      key={g.id}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
                    >
                      <div className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700 rounded-none flex items-center justify-center shrink-0 shadow-sm">
                        {g.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-1">{g.title}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-2">
                          {g.description}
                        </p>
                        <span className="text-[11px] font-semibold text-lime-600 dark:text-lime-400 bg-lime-500/10 dark:bg-lime-400/5 px-2 py-0.5">
                          💡 {g.highlight}
                        </span>
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}