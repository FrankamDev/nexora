import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin,  ChevronDown, Send } from 'lucide-react';
import { LiaLinkedin } from 'react-icons/lia';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

// 1. Contrats de données TypeScript (Prêt pour ton API / Base de données)
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContactInfo {
  address: string;
  cityCountry: string;
  phone: string;
  phoneDisplay: string;
  email: string;
}

export interface FooterData {
  description: string;
  navigation: FooterLink[];
  services: FooterLink[];
  contact: FooterContactInfo;
}

// 2. Mock des données centralisées simulant l'API
const MOCK_FOOTER_DATA: FooterData = {
  description: "Nous concevons les environnements de travail de demain : intelligents, profondément humains et hautement performants.",
  navigation: [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#portfolio' },
    { label: 'Expertise', href: '#expertise' },
  ],
  services: [
    { label: 'Conseil Stratégique', href: '#services' },
    { label: 'Transformation Digitale', href: '#services' },
    { label: 'Aménagement d’Espaces', href: '#services' },
    { label: 'Accompagnement', href: '#services' },
  ],
  contact: {
    address: "237 Avenue de l’Innovation",
    cityCountry: "Yaoundé & Douala, Cameroun",
    phone: "+237690461830",
    phoneDisplay: "+237 690 46 18 30",
    email: "contact@omiie.fr"
  }
};

export default function Footer() {
  const [data] = useState<FooterData>(MOCK_FOOTER_DATA);
  const [emailInput, setEmailInput] = useState<string>('');
  
  // États de gestion des accordéons réactifs sur mobile uniquement
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique future de traitement de base de données (ex: fetch('/api/newsletter'))
    alert(`Inscrit avec succès : ${emailInput}`);
    setEmailInput('');
  };

  return (
    <footer className="bg-zinc-950 dark:bg-zinc-50 border-t border-zinc-900 dark:border-zinc-200 pt-16 pb-8 md:pt-24 md:pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLONNE LOGO + BRAND DESCRIPTION */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <span className="text-white font-black text-lg tracking-tighter">O</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white dark:text-zinc-950">
                OMIIE
              </span>
            </div>

            <p className="text-zinc-400 dark:text-zinc-500 text-sm md:text-base leading-relaxed max-w-sm font-medium">
              {data.description}
            </p>

            {/* Réintégration Premium des Icônes Sociales Intégrées (Évite la dépendance externe) */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: <LiaLinkedin size={18} />, href: '#' },
                { icon: <BsTwitter size={18} />, href: '#' },
                { icon: <BsInstagram size={18} />, href: '#' },
                { icon: <FaFacebook size={18} />, href: '#' },
              ].map((social, i) => (
                <motion.a 
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={i} 
                  href={social.href} 
                  className="p-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-400 dark:text-zinc-500 hover:text-emerald-500 dark:hover:text-emerald-500 hover:bg-zinc-900 border border-zinc-800/80 dark:border-zinc-200/60 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* MENUS RESPONSIVES (Accordéons sur mobile, Grilles classiques sur PC) */}
          
          {/* Colonne Navigation */}
          <div className="lg:col-span-2 border-b border-zinc-900 dark:border-zinc-200/60 lg:border-none pb-4 lg:pb-0">
            <button 
              onClick={() => toggleSection('nav')}
              className="flex items-center justify-between w-full lg:cursor-default text-left font-bold text-white dark:text-zinc-950 text-sm tracking-wide uppercase font-mono mb-0 lg:mb-5 focus:outline-none"
            >
              <span>Navigation</span>
              <ChevronDown size={16} className={`lg:hidden transition-transform duration-300 ${openSection === 'nav' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="hidden lg:block">
              <ul className="space-y-3 text-sm font-medium text-zinc-400 dark:text-zinc-500">
                {data.navigation.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:text-emerald-400 dark:hover:text-emerald-500 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <AnimatePresence>
              {openSection === 'nav' && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden mt-3">
                  <ul className="space-y-2.5 text-sm font-medium text-zinc-400 dark:text-zinc-500 pb-2">
                    {data.navigation.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="block py-1 active:text-emerald-500">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Colonne Services */}
          <div className="lg:col-span-2 border-b border-zinc-900 dark:border-zinc-200/60 lg:border-none pb-4 lg:pb-0">
            <button 
              onClick={() => toggleSection('services')}
              className="flex items-center justify-between w-full lg:cursor-default text-left font-bold text-white dark:text-zinc-950 text-sm tracking-wide uppercase font-mono mb-0 lg:mb-5 focus:outline-none"
            >
              <span>Services</span>
              <ChevronDown size={16} className={`lg:hidden transition-transform duration-300 ${openSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="hidden lg:block">
              <ul className="space-y-3 text-sm font-medium text-zinc-400 dark:text-zinc-500">
                {data.services.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="hover:text-emerald-400 dark:hover:text-emerald-500 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <AnimatePresence>
              {openSection === 'services' && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden mt-3">
                  <ul className="space-y-2.5 text-sm font-medium text-zinc-400 dark:text-zinc-500 pb-2">
                    {data.services.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="block py-1 active:text-emerald-500">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COLONNE COORDONNÉES DE CONTACT & NEWSLETTER */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-bold text-white dark:text-zinc-950 text-sm tracking-wide uppercase font-mono hidden lg:block mb-5">Contact</h4>
            
            <div className="space-y-4 text-xs md:text-sm text-zinc-400 dark:text-zinc-500 font-medium">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-emerald-500 shrink-0" />
                <div>
                  <p className="text-white dark:text-zinc-950 font-bold">{data.contact.address}</p>
                  <p>{data.contact.cityCountry}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500 shrink-0" />
                <a href={`tel:${data.contact.phone}`} className="hover:text-emerald-500 transition-colors">{data.contact.phoneDisplay}</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-500 shrink-0" />
                <a href={`mailto:${data.contact.email}`} className="hover:text-emerald-500 transition-colors font-semibold">
                  {data.contact.email}
                </a>
              </div>
            </div>

            {/* Newsletter Bloc Tactile */}
            <form onSubmit={handleNewsletterSubmit} className="pt-4 border-t border-zinc-900 dark:border-zinc-200/80 lg:border-none">
              <label htmlFor="footer-email" className="block text-xs font-bold text-white dark:text-zinc-950 uppercase font-mono mb-2.5">
                Restez informé
              </label>
              <div className="relative flex items-center max-w-md">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Votre adresse email"
                  className="bg-zinc-900 dark:bg-zinc-100 border border-zinc-800 dark:border-zinc-200 text-white dark:text-zinc-950 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/40 w-full text-xs font-medium placeholder-zinc-500 dark:placeholder-zinc-400"
                />
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-1.5 p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors flex items-center justify-center shadow"
                >
                  <Send size={14} />
                </motion.button>
              </div>
            </form>
          </div>

        </div>

        {/* REZ-DE-CHAUSSÉE / BOTTOM INFOS BAR */}
        <div className="border-t border-zinc-900 dark:border-zinc-200/80 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] md:text-xs font-medium text-zinc-500 dark:text-zinc-400">
          <p>© 2026 OMIIE. Tous droits réservés.</p>
          
          <div className="flex gap-4 md:gap-6 order-last md:order-none">
            <a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white dark:hover:text-zinc-950 transition-colors">CGV</a>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 font-mono text-[10px] text-center md:text-right select-none">
            Conçu avec passion pour l’avenir du travail.
          </p>
        </div>

      </div>
    </footer>
  );
}