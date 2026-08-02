import { motion } from "framer-motion";
import {
  Zap,
  Lightbulb,
  Monitor,
  Building2,
  Users,
  ArrowUpRight,
} from "lucide-react";

// ================= TYPES =================
export interface ServiceItem {
  id: string;
  iconType: "strategy" | "digital" | "solutions" | "human";
  title: string;
  desc: string;
  tag: string;
}

export interface ServicesData {
  badgeLabel: string;
  titleLight: string;
  titleGradient: string;
  titleEnd: string;
  description: string;
  ctaLabel: string;
  items: ServiceItem[];
}

// ================= MOCK DATA =================
const MOCK_SERVICES_DATA: ServicesData = {
  badgeLabel: "NOS EXPERTISES",
  titleLight: "Des solutions sur-mesure pour des environnements ",
  titleGradient: "intelligents",
  titleEnd: ".",
  description: "Nous intervenons à toutes les étapes de votre transformation : du conseil stratégique à l'accompagnement humain.",
  ctaLabel: "Discuter de votre projet",
  items: [
    {
      id: "srv-1",
      iconType: "strategy",
      title: "Conseil Stratégique",
      desc: "Audit complet de vos environnements de travail et définition d'une feuille de route personnalisée.",
      tag: "STRATÉGIE",
    },
    {
      id: "srv-2",
      iconType: "digital",
      title: "Transformation Digitale",
      desc: "Conception et déploiement d’interfaces intelligentes.",
      tag: "DIGITAL",
    },
    {
      id: "srv-3",
      iconType: "solutions",
      title: "Solutions Entreprises",
      desc: "Aménagement d'espaces hybrides et ergonomiques.",
      tag: "AMÉNAGEMENT",
    },
    {
      id: "srv-4",
      iconType: "human",
      title: "Accompagnement",
      desc: "Formation des équipes et optimisation continue.",
      tag: "HUMAIN",
    },
  ],
};

// ================= ICON MAP =================
const ICONS: Record<ServiceItem["iconType"], React.ComponentType<{ size?: number; className?: string }>> = {
  strategy: Lightbulb,
  digital: Monitor,
  solutions: Building2,
  human: Users,
};

// ================= ANIMATIONS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
} as const;

// ================= COMPONENT =================
export default function ServicesSection() {
  const data = MOCK_SERVICES_DATA;

  return (
    <section className="relative py-16 md:py-28 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#222226_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6">
            <Zap size={14} className="text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              {data.badgeLabel}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white leading-tight">
            {data.titleLight}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              {data.titleGradient}
            </span>
            {data.titleEnd}
          </h2>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            {data.description}
          </p>
        </div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.items.map((service) => {
            const Icon = ICONS[service.iconType];

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm overflow-hidden"
              >
                {/* TOP LINE */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                {/* ICON + TAG */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-emerald-500">
                    <Icon
                      size={24}
                      className="transition-transform group-hover:scale-110"
                    />
                  </div>

                  <span className="text-[10px] font-bold uppercase px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded">
                    {service.tag}
                  </span>
                </div>

                {/* TEXT */}
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  {service.desc}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 group-hover:text-emerald-500 transition-colors">
                  <span>En savoir plus</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="px-7 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-emerald-500 hover:text-white transition">
            {data.ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
