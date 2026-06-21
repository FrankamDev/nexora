import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Plus, Minus, ShieldQuestion, MessageSquare, PhoneCall } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export function Faq() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      id: 1,
      category: "Sécurité",
      question: "Vos produits sont-ils dangereux pour les enfants ou les animaux ?",
      answer: "Absolument pas. Nos gels ciblés et nos formulations bio-sourcées respectent scrupuleusement les normes phytosanitaires. Il n'est pas nécessaire de quitter votre domicile pour la majorité de nos traitements de dératisation et désinsectisation."
    },
    {
      id: 2,
      category: "Logistique",
      question: "En combien de temps pouvez-vous intervenir chez moi ?",
      answer: "Pour les urgences (invasions massives, nids de guêpes/frelons, rongeurs destructeurs), nos équipes mobiles interviennent en moins de 2 heures à Yaoundé et Douala. Pour un traitement préventif classique, nous planifions un rendez-vous sous 24 à 48 heures."
    },
    {
      id: 3,
      category: "Garantie",
      question: "Que se passe-t-il si les cafards ou les rats reviennent ?",
      answer: "Chaque intervention curative est accompagnée d'un certificat de garantie écrit de 6 mois. Si un seul nuisible ciblé réapparaît pendant cette période, nos techniciens reviennent appliquer un traitement de consolidation entièrement à nos frais."
    },
    {
      id: 4,
      category: "Tarifs",
      question: "Combien coûte une intervention de désinfection standard ?",
      answer: "Nos tarifs sont transparents et calculés sur-mesure selon la superficie en m² et le niveau d'infestation. Le devis initial est 100% gratuit et sans engagement. Aucun frais caché ne vous sera facturé après l'intervention."
    }
  ];

  return (
    <section id="faq" className="relative min-h-screen py-24 bg-stone-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      
      {/* EFFET VISUEL DE FOND - LIGNES & EFFETS DE LUMIÈRE */}
      <div className="absolute top-10 right-[-10%] w-[50vw] h-[50vw] bg-blue-300/10 dark:bg-blue-950/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-lime-300/10 dark:bg-lime-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-900 border border-blue-200/20 text-[10px] font-bold tracking-widest text-blue-900 dark:text-lime-400 uppercase mb-4"
          >
            <ShieldQuestion className="w-3.5 h-3.5 text-lime-500" /> Réponses d'Experts
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-tight"
          >
            Des questions ? <br />
            <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
              Nous levons vos doutes
            </span>
          </motion.h3>
        </div>

        {/* CONTENEUR FAQS & CTA LATÉRAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ACCORDÉONS FAQS (GAUCHE) */}
          <div className="lg:col-span-8 space-y-4 w-full">
            {faqData.map((item, index) => {
              const isOpen = openId === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white dark:bg-slate-900 border transition-all duration-300 ${
                    isOpen 
                      ? 'border-lime-400 dark:border-lime-500 shadow-md' 
                      : 'border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                  } rounded-none overflow-hidden`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full p-5 md:p-6 flex items-center justify-between text-left focus:outline-none select-none gap-4"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-bold tracking-widest text-lime-600 dark:text-lime-400 uppercase">
                        {item.category}
                      </span>
                      <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {item.question}
                      </h4>
                    </div>
                    
                    <div className={`w-8 h-8 rounded-none flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen 
                        ? 'bg-lime-400 text-slate-950 border-lime-400 rotate-180' 
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-700'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 md:px-6 md:pb-6 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed border-t border-slate-50 dark:border-slate-800/50 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CARD DE CONTACT DIRECT / URGENCE (DROITE) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 p-6 md:p-8 bg-blue-950 text-white border border-blue-900/40 rounded-none text-center lg:text-left relative overflow-hidden w-full"
          >
            {/* Texture technique subtile */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <div className="w-10 h-10 bg-lime-400 text-blue-950 flex items-center justify-center mb-6 shadow-md mx-auto lg:mx-0">
              <MessageSquare className="w-5 h-5" />
            </div>

            <h4 className="text-lg font-bold tracking-tight mb-2">Vous avez un cas spécifique ?</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
              Invasion massive dans une usine agroalimentaire, problème de puces de lit récurrent, ou besoin d'un protocole Haccp annuel ? Nos techniciens vous répondent en direct.
            </p>

            <div className="flex flex-col gap-3 w-full">
              <a 
                href="tel:+237600000000" 
                className="w-full py-3.5 bg-lime-400 hover:bg-lime-500 text-blue-950 font-bold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" /> Appeler un Expert
              </a>
              <a 
                href="#contact" 
                className="w-full py-3.5 bg-transparent border border-slate-700 hover:border-white text-white font-bold text-xs tracking-widest uppercase transition-colors text-center"
              >
                Poser une question par écrit
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}