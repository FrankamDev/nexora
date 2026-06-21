import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, Factory, ShieldCheck, ArrowRight, Layers, Sparkles, Check } from 'lucide-react';

interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  bgImage: string;
  targets: string[];
  features: string[];
}

export function NosServices() {
  const [activeTab, setActiveTab] = useState<string>('corporate');

  const categories: ServiceCategory[] = [
    {
      id: 'corporate',
      title: 'Entreprises & Bureaux',
      tagline: 'Protection de marque et audits de conformité',
      icon: <Building2 className="w-5 h-5" />,
      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
      targets: ['Sièges Sociaux & Banques', 'Hôtels & Restaurants (HACCP)', 'Cliniques & Établissements Privés'],
      features: ['Discrétion totale (véhicules banalisés)', 'Rapports d’intervention dématérialisés', 'Contrats annuels de maintenance préventive']
    },
    {
      id: 'residential',
      title: 'Résidences & Villas',
      tagline: 'Assainissement biologique et sérénité familiale',
      icon: <Home className="w-5 h-5" />,
      bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
      targets: ['Villas et Concessions privées', 'Appartements & Complexes résidentiels', 'Cités universitaires'],
      features: ['Traitements 100% bio-sourcés', 'Zéro évacuation de domicile requise', 'Garantie écrite de non-réapparition']
    },
    {
      id: 'industrial',
      title: 'Secteur Industriel',
      tagline: 'Ingénierie sanitaire de haute précision',
      icon: <Factory className="w-5 h-5" />,
      bgImage: 'https://images.unsplash.com/photo-1530604231867-a42c3c3044f1?auto=format&fit=crop&q=80&w=600',
      targets: ['Entrepôts agroalimentaires', 'Usines de transformation', 'Zones de stockage & Logistique'],
      features: ['Traitements par fumigation thermique', 'Contrôle drastique des rongeurs de soute', 'Traçabilité absolue conforme aux normes']
    }
  ];

  const activeData = categories.find(c => c.id === activeTab) || categories[0];

  return (
    <section id="services-global" className="relative min-h-screen py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500 flex items-center">
      
      {/* GRAPHISMES DE FOND FLUIDES */}
      <div className="absolute top-1/4 left-[-10%] w-[55vw] h-[55vw] bg-lime-400/10 dark:bg-lime-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-blue-300/10 dark:bg-blue-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* EN-TÊTE DE SECTION STYLE MAGAZINE DE LUXE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-end">
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 dark:bg-slate-900 border border-slate-200/40 text-[10px] font-bold tracking-widest text-blue-950 dark:text-lime-400 uppercase mb-4">
              <Layers className="w-3 h-3 text-lime-500" /> Pôles d'Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-none">
              Nos Secteurs <br />
              <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
                D'Intervention
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-center lg:text-right">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-sm mx-auto lg:ml-auto leading-relaxed">
              De l’appartement d'habitation aux complexes agro-industriels majeurs de Douala et Yaoundé, Nexora déploie des méthodologies scientifiques adaptées.
            </p>
          </div>
        </div>

        {/* COMPOSANT INTERACTIF PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* SÉLECTEUR VERTICAL/HORIZONTAL (Navigation réactive premium) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0">
            {categories.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-4 p-4 lg:p-6 text-left border transition-all duration-300 rounded-none shrink-0 lg:shrink w-auto lg:w-full focus:outline-none relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-950 dark:bg-slate-900 dark:border-slate-800'
                      : 'bg-stone-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-900 hover:bg-stone-100/50'
                  }`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center transition-colors ${
                    isSelected ? 'text-lime-400' : 'text-slate-400'
                  }`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider block">{cat.title.split(' ')[0]}</h4>
                    <span className="text-[10px] hidden lg:block font-light text-slate-400 dark:text-slate-500 mt-0.5">{cat.title.split(' ').slice(1).join(' ')}</span>
                  </div>
                  
                  {isSelected && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute right-0 top-0 bottom-0 w-[4px] bg-lime-400 hidden lg:block"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* TABLEAU DE BORD DYNAMIQUE DU PÔLE SÉLECTIONNÉ */}
          <div className="lg:col-span-8 bg-stone-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full"
              >
                {/* LISTE DES TEXTES ET SPÉCIFICATIONS */}
                <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-black tracking-widest text-lime-600 dark:text-lime-400 uppercase flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3 h-3" /> Pôle d'activité certifié
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white tracking-tight">
                      {activeData.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-1 italic">
                      « {activeData.tagline} »
                    </p>
                  </div>

                  {/* Espaces Cibler (Sous-sections) */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Périmètres types :</h5>
                    <div className="space-y-1.5">
                      {activeData.targets.map((tgt, i) => (
                        <div key={i} className="text-xs text-slate-900 dark:text-slate-200 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-950 dark:bg-lime-400" />
                          {tgt}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Avantages Inclus */}
                  <div className="space-y-2">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Normes et Garanties incluses :</h5>
                    <div className="space-y-1.5">
                      {activeData.features.map((feat, i) => (
                        <div key={i} className="text-xs text-slate-600 dark:text-slate-400 font-light flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-lime-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* IMAGE D'ILLUSTRATION AVEC EFFET ARCHITECTURAL (Droite) */}
                <div className="md:col-span-5 relative min-h-[180px] md:min-h-none overflow-hidden group">
                  <img 
                    src={activeData.bgImage} 
                    alt={activeData.title} 
                    className="w-full h-full object-cover grayscale dark:brightness-90 hover:grayscale-0 transition-all duration-700 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:hidden" />
                </div>

              </motion.div>
            </AnimatePresence>

            {/* BARRE D'ACTION BAS DE CARTE */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-lime-500" /> Sécurité Biocide Contrôlée
              </div>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-950 dark:bg-lime-400 text-white dark:text-slate-950 text-xs font-bold uppercase tracking-widest transition-all text-center flex items-center justify-center gap-2 hover:bg-lime-500"
              >
                <span>Planifier un audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}