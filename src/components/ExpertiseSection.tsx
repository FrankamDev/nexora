import { useState } from "react";
import type {ReactNode} from "react";
import { motion } from "framer-motion";
import { Zap, Lightbulb, Target, Cpu, Users, ArrowRight } from "lucide-react";

// ================= TYPES =================
export interface ExpertiseItem {
  id: string;
  iconType: "innovation" | "strategy" | "technology" | "organization";
  title: string;
  desc: string;
  tag: string;
}

export interface ExpertiseData {
  badgeLabel: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  ctaLabel: string;
  items: ExpertiseItem[];
}

// ================= MOCK DATA =================
const MOCK_EXPERTISE_DATA: ExpertiseData = {
  badgeLabel: "NOS DOMAINES D'EXPERTISE",
  titleMain: "Une expertise globale au service de vos ",
  titleHighlight: "environnements",
  description: "Nous maîtrisons l'ensemble des dimensions nécessaires à la création d'espaces de travail intelligents et performants.",
  ctaLabel: "Découvrir nos réalisations",
  items: [
    {
      id: "exp-1",
      iconType: "innovation",
      title: "Innovation",
      desc: "Conception d'expériences uniques et création de solutions avant-gardistes qui anticipent les besoins futurs des organisations.",
      tag: "CRÉATIVITÉ",
    },
    {
      id: "exp-2",
      iconType: "strategy",
      title: "Stratégie",
      desc: "Définition de visions claires et d'une feuille de route alignée sur vos objectifs business et culturels.",
      tag: "VISION",
    },
    {
      id: "exp-3",
      iconType: "technology",
      title: "Technologie",
      desc: "Intégration intelligente de solutions digitales et physiques pour créer des environnements connectés et performants.",
      tag: "INGÉNIERIE",
    },
    {
      id: "exp-4",
      iconType: "organization",
      title: "Organisation",
      desc: "Optimisation des processus humains et structuration d'équipes pour une collaboration fluide et productive.",
      tag: "HUMAIN",
    },
  ],
};

// ================= ICON MAP =================
const ICONS: Record<ExpertiseItem["iconType"], React.ComponentType<{ size?: number; className?: string }>> = {
  innovation: Lightbulb,
  strategy: Target,
  technology: Cpu,
  organization: Users,
};

// ================= ANIMATIONS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 70, damping: 15 } 
  }
} as const;

export default function ExpertiseSection() {
  const [data] = useState<ExpertiseData>(MOCK_EXPERTISE_DATA);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (type: ExpertiseItem["iconType"], isHovered: boolean): ReactNode => {
    const IconComponent = ICONS[type];
    const iconClass = `transition-all duration-500 ${isHovered ? "scale-110 rotate-6" : ""}`;
    
    return <IconComponent size={24} className={iconClass} />;
  };

  return (
    <section id="expertise" className="relative py-16 md:py-28 bg-zinc-950 dark:bg-zinc-50 transition-colors duration-500 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e1e21_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#e4e4e7_1.2px,transparent_1.2px)] bg-[size:32px_32px] md:bg-[size:48px_48px] opacity-40 dark:opacity-60" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-emerald-500/[0.03] dark:bg-emerald-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-24"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 dark:bg-white border border-zinc-800 dark:border-zinc-200 mb-4 md:mb-6 shadow-xl">
            <Zap size={14} className="text-emerald-500 fill-current" />
            <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] md:tracking-[2px] uppercase text-zinc-400 dark:text-zinc-500">
              {data.badgeLabel}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight lg:tracking-tighter text-white dark:text-zinc-950 mb-4 md:mb-6 leading-[1.15]">
            {data.titleMain}
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-1 md:bottom-2 h-2 md:h-3 bg-emerald-500/20 -skew-x-6" />
              <span className="relative text-emerald-400 dark:text-emerald-500">{data.titleHighlight}</span>
            </span>
          </h2>

          <p className="text-zinc-400 dark:text-zinc-500 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-medium">
            {data.description}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6"
        >
          {data.items.map((item, index) => {
            const isHovered = hoveredId === item.id;
            const gridColumnClass = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative ${gridColumnClass} bg-zinc-900/40 dark:bg-white border border-zinc-800 dark:border-zinc-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 backdrop-blur-sm select-none hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/[0.02]`}
              >
                <div className={`absolute -inset-px bg-gradient-to-br from-emerald-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

                <div>
                  <div className="flex justify-between items-center mb-6 md:mb-8">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${isHovered ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "bg-zinc-800 dark:bg-zinc-100 text-emerald-400 dark:text-emerald-500"}`}>
                      {getIcon(item.iconType, isHovered)}
                    </div>
                    <span className="font-mono text-[9px] font-bold tracking-widest bg-zinc-800 dark:bg-zinc-100 text-zinc-400 dark:text-zinc-500 px-2.5 py-1 rounded-md border border-zinc-700/50 dark:border-zinc-200/40">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white dark:text-zinc-950 mb-3 tracking-tight group-hover:text-emerald-400 dark:group-hover:text-emerald-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-400 dark:text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xl font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/60 dark:border-zinc-100 flex items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-400 dark:group-hover:text-emerald-500 transition-colors duration-300">
                  <span>Explorer le pôle</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12 md:mt-20"
        >
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="button"
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-white dark:bg-zinc-900 hover:bg-emerald-500 dark:hover:bg-emerald-500 text-zinc-950 dark:text-white hover:text-white dark:hover:text-white px-7 py-4 rounded-xl text-sm font-bold transition-all shadow-md shadow-black/10 border border-zinc-200 dark:border-zinc-800"
          >
            {data.ctaLabel}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}