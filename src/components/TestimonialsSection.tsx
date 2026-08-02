import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Zap } from 'lucide-react';

// 1. Interfaces strictes pour les structures de données
export interface TestimonialItem {
  id: string;
  image: string;
  name: string;
  position: string;
  company: string;
  text: string;
}

export interface TestimonialsData {
  badgeLabel: string;
  titleMain: string;
  titleHighlight: string;
  items: TestimonialItem[];
}

// 2. Mock des données centralisées
const MOCK_TESTIMONIALS_DATA: TestimonialsData = {
  badgeLabel: "CE QU'ILS EN DISENT",
  titleMain: "Des clients qui nous font ",
  titleHighlight: "confiance",
  items: [
    {
      id: "testi-1",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      name: "Sophie Laurent",
      position: "Directrice des Opérations",
      company: "Banque Verde",
      text: "OMIIE a complètement transformé notre siège social. L'approche à la fois architecturale et digitale a permis une adoption exceptionnelle par nos équipes. Le résultat dépasse largement nos attentes."
    },
    {
      id: "testi-2",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      name: "Marc Dubois",
      position: "CEO & Fondateur",
      company: "TechNova",
      text: "Travailler avec OMIIE a été une révélation. Ils ont su comprendre notre culture de croissance rapide tout en nous apportant une vision stratégique long terme sur l'utilisation de nos espaces physiques."
    },
    {
      id: "testi-3",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      name: "Aïcha Diallo",
      position: "Directrice Expérience Collaborateur",
      company: "Harmonie Group",
      text: "Enfin un partenaire qui pense vraiment 'humain' avant tout. Les espaces créés sont superbes, intelligents et surtout, nos collaborateurs s'y sentent profondément connectés."
    }
  ]
};

export default function TestimonialsSection() {
  const [data] = useState<TestimonialsData>(MOCK_TESTIMONIALS_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 pour gauche, 1 pour droite
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef(null);

  // Gestion robuste de l'auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % data.items.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, data.items.length]);

  const resetAutoPlayWithDelay = () => {
    setIsAutoPlaying(false);
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    
 
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + data.items.length) % data.items.length);
    resetAutoPlayWithDelay();
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % data.items.length);
    resetAutoPlayWithDelay();
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetAutoPlayWithDelay();
  };

  // Configuration des animations de glissement (Slide)
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 }
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100,
      transition: { opacity: { duration: 0.2 }, x: { duration: 0.3 } }
    })
  };

  const activeTestimonial = data.items[currentIndex];

  return (
    <section id="testimonials" className="relative py-16 md:py-28 bg-zinc-950 dark:bg-zinc-50 transition-colors duration-500 overflow-hidden border-b border-zinc-900 dark:border-zinc-200">
      
      {/* Background Épuré */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e1e21_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#e4e4e7_1.2px,transparent_1.2px)] bg-[size:32px_32px] md:bg-[size:48px_48px] opacity-30 dark:opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.02] dark:bg-emerald-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EN-TÊTE DE LA SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 mb-4 md:mb-6 shadow-md">
            <Zap className="text-emerald-500 fill-current" size={14} />
            <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] md:tracking-[2px] uppercase text-zinc-400 dark:text-zinc-500">
              {data.badgeLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight lg:tracking-tighter text-white dark:text-zinc-950 leading-[1.15]">
            {data.titleMain}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              {data.titleHighlight}
            </span>
          </h2>
        </div>

        {/* CADRE CARROUSEL AVEC ANIMATION DE CONTENU */}
        <div className="relative max-w-4xl mx-auto min-h-[360px] sm:min-h-[280px] md:min-h-[260px] flex items-center">
          
          <div className="w-full overflow-visible relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-zinc-900/40 dark:bg-white border border-zinc-900 dark:border-zinc-200/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl backdrop-blur-sm relative overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-center"
              >
                {/* Icône Quote Géante décorative */}
                <Quote size={140} className="absolute -top-6 -right-6 text-zinc-800/10 dark:text-zinc-200/20 pointer-events-none select-none transform rotate-12" />

                {/* Avatar / Portrait */}
                <div className="relative shrink-0 select-none">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full opacity-40 blur-sm group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={activeTestimonial.image} 
                    alt={activeTestimonial.name} 
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-zinc-950 dark:border-white shadow-md"
                  />
                </div>

                {/* Contenu textuel */}
                <div className="flex-1 text-center md:text-left relative z-10">
                  <p className="text-zinc-300 dark:text-zinc-600 text-sm md:text-base md:text-lg italic leading-relaxed font-medium mb-6">
                    "{activeTestimonial.text}"
                  </p>
                  
                  <div>
                    <h4 className="text-base font-bold text-white dark:text-zinc-950 tracking-tight">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {activeTestimonial.position} — <span className="text-emerald-400 dark:text-emerald-500 font-bold">{activeTestimonial.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FLÈCHES DE NAVIGATION STRUCTURELLES (Positionnement intelligent Desktop/Mobile) */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:left-[-24px] md:right-[-24px] md:top-1/2 md:-translate-y-1/2 flex md:justify-between gap-4 z-20">
            <button
              onClick={prevSlide}
              aria-label="Avis précédent"
              className="bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 text-zinc-400 dark:text-zinc-600 p-3 rounded-xl shadow-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Avis suivant"
              className="bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 text-zinc-400 dark:text-zinc-600 p-3 rounded-xl shadow-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* INDICATEURS DE POSITION / DOTS ACCESSIBLES */}
        <div className="flex justify-center gap-2 mt-20 md:mt-12">
          {data.items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Aller à l'avis numéro ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-emerald-500 w-6' 
                  : 'bg-zinc-800 dark:bg-zinc-300 w-2 hover:bg-zinc-700 dark:hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}