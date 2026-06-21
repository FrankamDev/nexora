import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Send, CheckCircle2, MapPin, Clock, Activity } from 'lucide-react';

export function Contact() {
  const [selectedNuisible, setSelectedNuisible] = useState<string>('');
  const [selectedVille, setSelectedVille] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative min-h-screen pt-24 bg-white dark:bg-slate-950 transition-colors duration-500 flex flex-col justify-between overflow-hidden">
      
      {/* GRILLE TECHNIQUE EN ARRIÈRE-PLAN */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-lime-400/10 dark:bg-lime-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* BLOC GAUCHE : COORDINATIONS ET REASSURANCE */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div>
              <span className="text-[10px] font-bold tracking-widest text-lime-600 dark:text-lime-400 uppercase bg-lime-50 dark:bg-slate-900 px-3 py-1">
                ZÉRO ENGAGEMENT
              </span>
              <h3 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-slate-950 dark:text-white mt-4 leading-tight">
                Recevez votre <br />
                <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
                  Cotation sous 15 min
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light mt-4 leading-relaxed max-w-sm mx-auto lg:mx-0">
                Nos experts analysent vos données pour concevoir un plan d'éradication sur-mesure immédiat.
              </p>
            </div>

            {/* Micro-informations à puces épurées */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-slate-900">
                <MapPin className="w-4 h-4 text-lime-500 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Bureaux</h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light">Yaoundé & Douala</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-stone-50 dark:bg-slate-900">
                <Clock className="w-4 h-4 text-lime-500 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider">Disponibilité</h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light">24h / 24 — 7j / 7</p>
                </div>
              </div>
            </div>
          </div>

          {/* BLOC DROIT : FORMULAIRE INTERACTIF SANS COUTURE */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-stone-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {/* ÉTAPE 1 : CHOIX DU NUISIBLE (Badges tactiles) */}
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
                        1. Type de menace biologique :
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Cafards', 'Rats', 'Moustiques', 'Autre'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedNuisible(type)}
                            className={`py-3 text-xs font-bold uppercase tracking-wider transition-all border ${
                              selectedNuisible === type
                                ? 'bg-blue-950 text-white border-blue-950 dark:bg-lime-400 dark:text-slate-950 dark:border-lime-400'
                                : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-slate-300'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* ÉTAPE 2 : LOCALISATION */}
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
                        2. Zone d'intervention :
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Yaoundé', 'Douala', 'Autre'].map((ville) => (
                          <button
                            key={ville}
                            type="button"
                            onClick={() => setSelectedVille(ville)}
                            className={`py-2.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                              selectedVille === ville
                                ? 'bg-blue-950 text-white border-blue-950 dark:bg-lime-400 dark:text-slate-950 dark:border-lime-400'
                                : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-slate-300'
                            }`}
                          >
                            {ville}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* ÉTAPE 3 : COORDONNÉES */}
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block">
                        3. Vos Coordonnées :
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input 
                          type="tel" 
                          required
                          placeholder="N° de Téléphone (WhatsApp)" 
                          className="w-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 text-xs focus:outline-none focus:border-lime-400 text-slate-900 dark:text-white"
                        />
                        <input 
                          type="text" 
                          required
                          placeholder="Nom complet ou Entreprise" 
                          className="w-full bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-3 text-xs focus:outline-none focus:border-lime-400 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    {/* BOUTON D'ENVOI */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-lime-400 hover:bg-lime-500 text-slate-950 font-black text-xs tracking-widest uppercase transition-all shadow-xl shadow-lime-400/10 flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" /> Transmettre ma configuration
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-12 h-12 bg-lime-100 dark:bg-lime-950/50 text-lime-600 dark:text-lime-400 flex items-center justify-center mx-auto rounded-none">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">Données reçues</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-light max-w-xs mx-auto leading-relaxed">
                      Un ingénieur sanitaire Nexora vient de prendre en charge votre dossier. Vous allez être contacté sur votre mobile immédiatement.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>

      {/* FOOTER ÉDITORIAL INTÉGRÉ (Rendu architectural) */}
      <footer className="w-full bg-slate-950 border-t border-slate-900 px-4 sm:px-6 md:px-12 py-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo gauche */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-lime-400 rounded-none flex items-center justify-center">
              <Shield className="h-4 w-4 text-blue-900"/>
            </div>
            <span className="text-md font-black tracking-tight text-white">
              NEXO<span className="text-lime-500">RA</span>
            </span>
          </div>

          {/* Copyrights & Localisation */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-[11px] text-slate-500 font-light">
              © 2026 Nexora Assainissement. Tous droits réservés.
            </p>
            <p className="text-[9px] text-slate-600 font-bold tracking-widest uppercase flex items-center justify-center md:justify-end gap-1.5">
              <Activity className="w-2.5 h-2.5 text-lime-400" /> Normes Environnementales Camerounaises
            </p>
          </div>
          
        </div>
      </footer>

    </section>
  );
}