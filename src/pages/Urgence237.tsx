import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Zap, MapPin, AlertTriangle, Clock, ShieldCheck } from 'lucide-react';

interface EmergencyLevel {
  id: string;
  title: string;
  timeframe: string;
  intensity: 'critical' | 'high';
  example: string;
  icon: React.ReactNode;
}

export function Urgence237() {
  const [selectedCrisis, setSelectedCrisis] = useState<string>('invasion');
  const [currentTimeStr, setCurrentTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        timeZone: 'Africa/Douala' 
      };
      setCurrentTimeStr(now.toLocaleTimeString('fr-FR', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const crisisLevels: EmergencyLevel[] = [
    {
      id: 'invasion',
      title: 'Invasion Massive',
      timeframe: 'Intervention < 1h30',
      intensity: 'critical',
      example: 'Cafards, rongeurs ou termites envahissant cuisine, stock ou locaux professionnels.',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      id: 'nids',
      title: 'Nids de Guêpes / Frelons',
      timeframe: 'Intervention < 2h',
      intensity: 'critical',
      example: 'Nid actif près des enfants, terrasses ou zones de passage.',
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      id: 'pro',
      title: 'Menace sur Activité Commerciale',
      timeframe: 'Intervention < 1h',
      intensity: 'high',
      example: 'Risque de fermeture administrative ou perte de clients.',
      icon: <Zap className="w-5 h-5" />
    }
  ];

  const activeCrisis = crisisLevels.find(c => c.id === selectedCrisis) || crisisLevels[0];

  return (
    <section id="urgences" className="relative min-h-screen py-20 bg-stone-950 text-white overflow-hidden flex items-center">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#991b1b_0%,transparent_50%)] opacity-40" />
      <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-rose-600/10 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-lime-400/10 rounded-full blur-[120px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* Header Status */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
            <span className="text-sm font-bold tracking-widest uppercase text-rose-400">
              CELLULE DE CRISE 237 • {currentTimeStr || '24h/24'}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none mb-4">
            URGENCE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-400 to-lime-400">NEXORA 237</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-400 font-light">
            Intervention rapide et certifiée contre les infestations. Chaque minute compte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT - Crisis Selector */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              {crisisLevels.map((crisis, index) => (
                <motion.button
                  key={crisis.id}
                  onClick={() => setSelectedCrisis(crisis.id)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full group p-6 flex items-center justify-between border transition-all rounded-2xl ${
                    selectedCrisis === crisis.id 
                      ? 'bg-white text-slate-950 border-white shadow-2xl shadow-rose-500/30' 
                      : 'bg-stone-900/60 border-stone-700 hover:border-rose-500/50 hover:bg-stone-900'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-3 rounded-xl transition-colors ${selectedCrisis === crisis.id ? 'bg-rose-500 text-white' : 'bg-stone-800 text-slate-400 group-hover:text-rose-400'}`}>
                      {crisis.icon}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-lg">{crisis.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{crisis.example}</p>
                    </div>
                  </div>
                  
                  <div className={`px-5 py-2 text-sm font-bold rounded-xl transition-all ${
                    selectedCrisis === crisis.id ? 'bg-rose-600 text-white' : 'bg-stone-800 text-slate-400'
                  }`}>
                    {crisis.timeframe}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-800">
              {[
                "Intervention en moins de 2h",
                "Produits homologués",
                "Garantie de résultat",
                "Techniciens formés"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-lime-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Emergency Action */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Pulsing Rings */}
              <motion.div 
                animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2.8, repeat: Infinity }}
                className="absolute inset-0 border-4 border-rose-500/30 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }}
                className="absolute inset-8 border-4 border-lime-400/30 rounded-full"
              />

              {/* Main Emergency Button */}
              <motion.a
  href="https://wa.me/237690461830?text=Bonjour%20Nexora%2C%20j'ai%20une%20URGENCE%20avec%20des%20nuisibles%20%28cafards%2C%20rats%2C%20gu%C3%AApes...%29.%20Pouvez-vous%20intervenir%20rapidement%20%3F%20Merci%20beaucoup."
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="relative z-10 w-[230px] h-[230px] bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-full flex flex-col items-center justify-center shadow-[0_0_80px_-10px] shadow-emerald-500 hover:shadow-emerald-600 transition-all duration-300 group"
>
  <div className="absolute -top-2 -right-2 bg-white text-emerald-600 text-xs font-black px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
    <Clock className="w-3 h-3" /> 24/7
  </div>

  {/* Icône WhatsApp */}
  <div className="w-16 h-16 mb-3 text-white group-active:scale-110 transition-transform">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.67-1.612-.92-2.206-.25-.594-.51-.513-.67-.52-.18-.007-.385-.01-.595-.01-.21 0-.55.08-.837.4-.286.32-.943 1.005-.943 2.507 0 1.502.965 2.95 1.1 3.15.134.2 1.89 3.08 4.58 4.32 2.69 1.24 2.69.82 3.18.77.49-.05 1.58-.646 1.8-1.27.22-.624.22-1.16.15-1.27-.07-.11-.26-.18-.52-.3z"/>
      <path d="M12 2C6.48 2 2 6.59 2 12.253c0 2.04.62 3.93 1.68 5.49L2 22l4.34-1.14c1.48.82 3.2 1.29 5.01 1.29 5.52 0 10-4.59 10-10.253C22 6.59 17.52 2 12 2zm0 18.5c-1.6 0-3.13-.5-4.45-1.36l-.32-.2-3.3.86.88-3.24-.22-.35C4.3 14.8 3.75 13.45 3.75 12c0-4.56 3.7-8.25 8.25-8.25S20.25 7.44 20.25 12 16.55 20.25 12 20.25z"/>
    </svg>
  </div>

  <div className="text-center">
    <div className="text-sm font-black tracking-[3px] text-emerald-100">MESSAGE WHATSAPP</div>
    <div className="text-2xl font-black mt-1">SOS NEXORA</div>
  </div>
</motion.a>

              {/* Location */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-stone-900 px-6 py-3 rounded-2xl border border-slate-700 text-sm"
              >
                <MapPin className="w-5 h-5 text-lime-400" />
                <span>Yaoundé • Douala • Cameroun</span>
              </motion.div>
            </div>

            {/* Dynamic Description */}
            <div className="mt-12 w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCrisis.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-stone-900/70 border border-slate-700 p-6 rounded-3xl"
                >
                  <p className="text-rose-400 text-sm font-bold tracking-widest mb-3">
                    DÉPLOIEMENT IMMÉDIAT — {activeCrisis.timeframe}
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    {activeCrisis.example}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}