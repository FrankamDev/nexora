// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   ArrowUpRight,
//   Play,
//   CheckCircle2,
//   Shield,
//   TrendingUp,
// } from "lucide-react";

// // Types
// export interface TrustSignal {
//   id: string;
//   label: string;
//   type: "iso" | "security" | "productivity";
// }

// export interface HeroData {
//   badgeLabel: string;
//   titleLight: string;
//   titleGradient: string;
//   titleEnd: string;
//   description: string;
//   trustSignals: TrustSignal[];
// }

// // Mock Data
// const MOCK_HERO_DATA: HeroData = {
//   badgeLabel: "Intelligence Spatiale & Digitale",
//   titleLight: "Des ",
//   titleGradient: "espaces",
//   titleEnd: " qui pensent comme vous.",
//   description:
//     "OMIIE fusionne architecture physique et expérience numérique pour créer des environnements de travail intelligents, fluides et inspirants.",
//   trustSignals: [
//     { id: "1", label: "ISO 9241-210", type: "iso" },
//     { id: "2", label: "Sécurité Souveraine", type: "security" },
//     { id: "3", label: "+47% productivité", type: "productivity" },
//   ],
// };

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.12, delayChildren: 0.2 },
//   },
// } as const;

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 90,
//       damping: 18,
//     },
//   },
// } as const;

// export default function HeroSection() {
//   // const [activeTab, setActiveTab] = useState<'space' | 'interface'>('space');
//   const [data] = useState<HeroData>(MOCK_HERO_DATA);

//   const getIcon = (type: TrustSignal["type"]) => {
//     switch (type) {
//       case "iso":
//         return <CheckCircle2 size={16} className="text-emerald-500" />;
//       case "security":
//         return <Shield size={16} className="text-emerald-500" />;
//       case "productivity":
//         return <TrendingUp size={16} className="text-emerald-500" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-36 md:pb-20 overflow-hidden dark:bg-zinc-950 bg-white transition-colors duration-500"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] opacity-30 dark:opacity-40" />
//         <div className="absolute top-10 left-1/2 -translate-x-1/2 md:left-1/3 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[80px] md:blur-[140px]" />
//         <div className="absolute bottom-5 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-teal-500/10 dark:bg-teal-600/5 rounded-full blur-[70px] md:blur-[120px]" />
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
//         >
//           {/* LEFT COLUMN */}
//           <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md"
//             >
//               <div className="w-2 h-2 rounded-full bg-emerald-500 relative">
//                 <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping" />
//               </div>
//               <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] md:tracking-[2px] uppercase text-zinc-500 dark:text-zinc-400">
//                 {data.badgeLabel}
//               </span>
//               <Sparkles size={12} className="text-emerald-500" />
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.1] text-zinc-950 dark:text-white max-w-2xl"
//             >
//               {data.titleLight}
//               <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
//                 {data.titleGradient}
//               </span>
//               {data.titleEnd}
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed"
//             >
//               {data.description}
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2"
//             >
//               <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base shadow-lg shadow-emerald-500/20 transition-all"
//               >
//                 Démarrer un projet
//                 <ArrowUpRight
//                   size={18}
//                   className="group-hover:rotate-45 transition-transform"
//                 />
//               </motion.button>

//               <motion.button
//                 whileTap={{ scale: 0.98 }}
//                 className="group flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-800 px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base"
//               >
//                 <Play size={16} className="text-emerald-500" />
//                 Voir la démo
//               </motion.button>
//             </motion.div>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-4 text-xs md:text-sm border-t border-zinc-100 dark:border-zinc-900 w-full lg:w-auto"
//             >
//               {data.trustSignals.map((signal) => (
//                 <div
//                   key={signal.id}
//                   className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-medium"
//                 >
//                   {getIcon(signal.type)}
//                   <span>{signal.label}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN - À COMPLÉTER */}
//           <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0">
//             <motion.div variants={itemVariants} className="w-full max-w-md">
//               {/* Tu peux remettre ici ton mockup smartphone */}
//               <div className="text-center text-zinc-500 dark:text-zinc-400 py-12">
//                 [Mockup Smartphone à insérer ici]
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Play,
  CheckCircle2,
  Shield,
  TrendingUp,
} from "lucide-react";

// Types
export interface TrustSignal {
  id: string;
  label: string;
  type: "iso" | "security" | "productivity";
}

export interface HeroData {
  badgeLabel: string;
  titleLight: string;
  titleGradient: string;
  titleEnd: string;
  description: string;
  trustSignals: TrustSignal[];
}

// Mock Data
const MOCK_HERO_DATA: HeroData = {
  badgeLabel: "Intervention Rapide & Certifiée",
  titleLight: "Des ",
  titleGradient: "espaces",
  titleEnd: " sains et protégés.",
  description:
    "NEXORA élimine rats, cafards, moustiques et tous nuisibles à Yaoundé et Douala. Intervention d'urgence sous 2h, solutions éco-responsables et garantie 6 mois.",
  trustSignals: [
    { id: "1", label: "Garantie 6 mois", type: "iso" },
    { id: "2", label: "Produits certifiés", type: "security" },
    { id: "3", label: "Intervention sous 2h", type: "productivity" },
  ],
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
} as const;

export default function HeroSection() {
  // const [activeTab, setActiveTab] = useState<'space' | 'interface'>('space');
  const [data] = useState<HeroData>(MOCK_HERO_DATA);

  const getIcon = (type: TrustSignal["type"]) => {
    switch (type) {
      case "iso":
        return <CheckCircle2 size={16} className="text-emerald-500" />;
      case "security":
        return <Shield size={16} className="text-emerald-500" />;
      case "productivity":
        return <TrendingUp size={16} className="text-emerald-500" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-36 md:pb-20 overflow-hidden dark:bg-zinc-950 bg-white transition-colors duration-500"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] opacity-30 dark:opacity-40" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 md:left-1/3 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[80px] md:blur-[140px]" />
        <div className="absolute bottom-5 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-teal-500/10 dark:bg-teal-600/5 rounded-full blur-[70px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 relative">
                <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping" />
              </div>
              <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] md:tracking-[2px] uppercase text-zinc-500 dark:text-zinc-400">
                {data.badgeLabel}
              </span>
              <Sparkles size={12} className="text-emerald-500" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.1] text-zinc-950 dark:text-white max-w-2xl"
            >
              {data.titleLight}
              <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {data.titleGradient}
              </span>
              {data.titleEnd}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2"
            >
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base shadow-lg shadow-emerald-500/20 transition-all"
              >
                Demander une intervention
                <ArrowUpRight
                  size={18}
                  className="group-hover:rotate-45 transition-transform"
                />
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-800 px-6 py-3.5 rounded-xl font-semibold text-sm md:text-base"
              >
                <Play size={16} className="text-emerald-500" />
                Nos interventions
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-4 text-xs md:text-sm border-t border-zinc-100 dark:border-zinc-900 w-full lg:w-auto"
            >
              {data.trustSignals.map((signal) => (
                <div
                  key={signal.id}
                  className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-medium"
                >
                  {getIcon(signal.type)}
                  <span>{signal.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - À COMPLÉTER */}
          <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0">
            <motion.div variants={itemVariants} className="w-full max-w-md">
              {/* Tu peux remettre ici ton mockup smartphone */}
              <div className="text-center text-zinc-500 dark:text-zinc-400 py-12">
                [Mockup Smartphone à insérer ici]
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}