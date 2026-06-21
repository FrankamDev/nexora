import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Activity, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialisation du thème
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle thème avec animation
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg shadow-lg border-b border-slate-100 dark:border-slate-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-lime-400/30 group-hover:scale-110 group-active:scale-95 transition-all duration-300">
              <Shield className="h-5 w-5 text-blue-950 dark:text-blue-950" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-blue-950 dark:text-white">
              NEXO<span className="text-lime-500">RA</span>
            </span>
          </div>

          {/* LIENS DESKTOP */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#accueil"
              className="relative text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-950 dark:hover:text-white transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:bg-lime-500 after:w-0 hover:after:w-full after:transition-all"
            >
              Accueil
            </a>
            <Link
              to="/services"
              className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-white transition-colors duration-200"
            >
              Nos Services
            </Link>
            <Link
              to="/services237"
              className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-white transition-colors duration-200"
            >
              Urgence 237
            </Link>
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-white transition-colors duration-200"
            >
              Contact
            </a>

            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-300 active:scale-95"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-4 w-4 transition-transform duration-300" />
              ) : (
                <Moon className="h-4 w-4 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* CTA DESKTOP */}
          <div className="hidden md:block">
            <a
              href="tel:+237600000000"
              className="group inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 dark:bg-lime-400 dark:hover:bg-lime-500 text-white dark:text-slate-950 font-bold px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-900/20 dark:shadow-lime-400/30 hover:shadow-xl active:scale-[0.97]"
            >
              <Activity className="h-4 w-4 text-lime-400 dark:text-blue-950 group-hover:animate-pulse" />
              <span>Devis Rapide</span>
            </a>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-lime-500" />
              ) : (
                <Moon className="h-5 w-5 text-blue-950" />
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-blue-950 dark:text-white transition-transform duration-300 active:scale-90"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-6 py-8 space-y-6 shadow-xl">
          <a
            href="#accueil"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium text-blue-950 dark:text-slate-200 hover:text-lime-500 transition-colors"
          >
            Accueil
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-white transition-colors"
          >
            Nos Services
          </a>
          <Link
            to="/services237"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-white transition-colors"
          >
            Urgence 237
          </Link>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-medium text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-white transition-colors"
          >
            Contact
          </a>

          <a
            href="tel:+237600000000"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 bg-lime-400 hover:bg-lime-500 text-blue-950 font-bold py-4 rounded-2xl w-full shadow-lg shadow-lime-400/30 active:scale-[0.97] transition-all"
          >
            <Activity className="h-5 w-5" />
            Appeler Yaoundé / Douala
          </a>
        </div>
      </div>
    </nav>
  );
};