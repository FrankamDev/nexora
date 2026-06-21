import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, Mail, MapPin, ArrowUp, ShieldCheck, Activity } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import { Link } from 'react-router-dom';

export function Footer() {
  const [localTime, setLocalTime] = useState<string>('');

  // Gestion dynamique de l'horloge locale (GMT+1 pour le Cameroun)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Africa/Douala'
      });
      setLocalTime(timeString);
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-stone-50 dark:bg-slate-950 text-slate-900 dark:text-white pt-24 pb-12 overflow-hidden border-t border-slate-200 dark:border-slate-900/60 transition-colors duration-500">
      
      {/* TRACEURS ET RADAR GRAPHIQUE EN ARRIÈRE-PLAN */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000003_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-lime-500/5 dark:bg-lime-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* BLOC SUPÉRIEUR : LE RADAR DE SÉRÉNITÉ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-slate-200 dark:border-slate-900 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-500/10 dark:bg-lime-400/10 border border-lime-500/20 dark:border-lime-400/20 text-[9px] font-black tracking-widest text-lime-700 dark:text-lime-400 uppercase">
              <Activity className="w-3 h-3 animate-pulse" /> Réseau Sanitaire National Connecté
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans font-light tracking-tight leading-tight text-slate-950 dark:text-white">
              Prêt à sécuriser <br className="sm:hidden" /> votre infrastructure ? <br />
              <span className="font-black text-blue-950 dark:text-lime-400 uppercase tracking-wide">
                Nos brigades sont en alerte.
              </span>
            </h3>
          </div>

          {/* LA CARD DE STATUT TEMPS RÉEL (Effet App Hybride) */}
          <div className="lg:col-span-5 w-full max-w-sm mx-auto lg:ml-auto">
            <div className="bg-white dark:bg-stone-900/50 border border-slate-200 dark:border-slate-900 p-5 relative overflow-hidden shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-lime-500/10 to-transparent pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-lime-500 dark:bg-lime-400 animate-ping" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Statut Réseau</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-950 dark:text-lime-400 bg-stone-50 dark:bg-slate-950 px-2 py-0.5 border border-slate-200 dark:border-slate-900">
                  Douala / Yaoundé : {localTime || 'En ligne'}
                </span>
              </div>

              <p className="text-xs font-light text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                4 équipes mobiles actuellement en patrouille de désinfection préventive. Temps d’approche moyen réduit.
              </p>
            </div>
          </div>

        </div>

        {/* BLOC CENTRAL : LA GRILLE DE NAVIGATION EN ARCHITECTURE PLATTE */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-16 text-left">
          
          {/* COLONNE LOGO & ENGAGEMENT */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-950 dark:bg-lime-400 text-white dark:text-slate-950 flex items-center justify-center font-black">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-black tracking-tight text-slate-950 dark:text-white">
                NEXO<span className="text-lime-600 dark:text-lime-400">RA</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-xs">
              Ingénierie de pointe en dératisation, désinsectisation et décontamination biologique pour particuliers et industries exigeantes au Cameroun.
            </p>
            {/* Boutons Sociaux */}
            <div className="flex gap-2">
              <Link to="/" className="w-9 h-9 bg-stone-900  text-slate-600 dark:text-white hover:bg-blue-950 hover:text-white dark:hover:bg-lime-400 dark:hover:text-slate-950 transition-colors flex items-center justify-center border border-slate-200 dark:border-slate-900 shadow-sm dark:shadow-none">
                <FaFacebook className="w-4 h-4" />
              </Link>
              <a href="#" className="w-9 h-9 bg-stone-900 dark:bg-white text-slate-600 dark:text-white hover:bg-blue-950 hover:text-white dark:hover:bg-lime-400 dark:hover:text-slate-950 transition-colors flex items-center justify-center border border-slate-200 dark:border-slate-900 shadow-sm dark:shadow-none">
                <LiaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLONNE LIENS NAV : L'OFFRE SANITAIRE */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-450 dark:text-slate-500">Nos Secteurs</h5>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-light">
              <li><a href="#services-global" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Entreprises & Sièges</a></li>
              <li><a href="#services-global" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Hôtels & Restauration (HACCP)</a></li>
              <li><a href="#services-global" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Complexes Industriels</a></li>
              <li><a href="#services-global" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Résidences & Villas</a></li>
            </ul>
          </div>

          {/* COLONNE LIENS NAV : LEGAL & COMPLIANCE */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-450 dark:text-slate-500">Garanties</h5>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400 font-light">
              <li><a href="#features" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Charte Bio-Sécurité</a></li>
              <li><a href="#features" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Contrats de 6 Mois</a></li>
              <li><a href="#faq" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Centre d'aide / FAQ</a></li>
              <li><a href="#contact" className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors">Demande de Devis</a></li>
            </ul>
          </div>

          {/* COLONNE DIRECTE : QUARTIER GÉNÉRAL CORPO */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-450 dark:text-slate-500">Coordonnées directes</h5>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400 font-light">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
                <span className="text-slate-800 dark:text-slate-300">Bonapriso, Douala / Bastos, Yaoundé</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
                <a href="tel:+237600000000" className="hover:text-slate-950 dark:hover:text-white font-medium text-slate-800 dark:text-slate-300">+237 6xx xx xx xx</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400 shrink-0" />
                <a href="mailto:contact@nexora-cm.com" className="hover:text-slate-950 dark:hover:text-white text-slate-800 dark:text-slate-300">contact@nexora-cm.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BLOC INFERIEUR : COPYRIGHT & RETOUR HAUT DE PAGE */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[11px] text-slate-500 dark:text-slate-500 font-light">
            <span>© 2026 Nexora Assainissement. Tous droits réservés.</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-800">|</span>
            <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-500 dark:text-slate-600 tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-lime-600 dark:text-lime-500/70" /> Agrément Phyto-Sanitaire N°023/MINADER
            </span>
          </div>

          {/* LE BOUTON HAUT DE ÉCRAN */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white dark:bg-stone-900 border border-slate-200 dark:border-slate-900 text-slate-500 dark:text-slate-400 hover:text-lime-600 dark:hover:text-lime-400 hover:border-slate-300 dark:hover:border-slate-800 shadow-sm dark:shadow-none transition-all focus:outline-none flex items-center justify-center rounded-none group"
            aria-label="Retourner en haut de la page"
          >
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}