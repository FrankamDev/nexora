import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Leaf,
  Award,
  
  MapPin,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

// ================= ANIMATIONS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 14 },
  },
} as const;

// ================= DATA =================
const values = [
  {
    icon: ShieldCheck,
    title: "Résultats garantis",
    desc: "Nous garantissons l’élimination des nuisibles jusqu’à 4 mois. Si le problème revient, nous revenons gratuitement.",
  },
  {
    icon: Clock,
    title: "Intervention sous 2h",
    desc: "Urgence rats, cafards ou infestation ? Notre équipe intervient rapidement à Yaoundé et Douala, 7j/7.",
  },
  {
    icon: Leaf,
    title: "Solutions éco-responsables",
    desc: "Nous utilisons des produits certifiés, efficaces et respectueux de la santé de votre famille et de l’environnement.",
  },
  {
    icon: Award,
    title: "Expertise locale",
    desc: "Une équipe formée aux réalités du Cameroun, qui connaît parfaitement les nuisibles de la région.",
  },
];

const stats = [
  { value: "500+", label: "Interventions réussies" },
  { value: "4 mois", label: "Garantie moyenne" },
  { value: "2h", label: "Délai d’intervention" },
  { value: "98%", label: "Clients satisfaits" },
];

// ================= COMPONENT =================
export default function AboutUs() {
  return (
    <>
    <section
      id="about"
      className="relative py-20 md:py-32 bg-white dark:bg-zinc-950 overflow-hidden transition-colors duration-500"
    >
      <Navbar />
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#222226_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========== HEADER ========== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6"
          >
            <Sparkles size={14} className="text-emerald-500" />
            <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] uppercase text-zinc-500 dark:text-zinc-400">
              À propos de NEXORA
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight text-zinc-950 dark:text-white leading-[1.15] mb-6"
          >
            Nous ne traitons pas seulement les nuisibles.{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Nous protégeons votre tranquillité.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          >
            NEXORA est l’entreprise de dératisation, désinsectisation et
            désinfection de confiance à Yaoundé et Douala. Rapide, propre,
            efficace et engagée pour votre santé.
          </motion.p>
        </motion.div>

        {/* ========== STATS ========== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-28"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-black text-emerald-500 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ========== STORY + VALUES ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-black text-zinc-950 dark:text-white leading-tight">
              Une équipe locale,{" "}
              <span className="text-emerald-500">des résultats concrets</span>
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Basés au cœur du Cameroun, nous connaissons parfaitement les
              nuisibles de la région et les conditions locales. Chaque
              intervention est réalisée par des techniciens formés, équipés et
              engagés à vous rendre un espace sain rapidement.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Que vous soyez un particulier, un restaurant, un hôtel ou une
              entreprise, nous adaptons nos traitements pour une efficacité
              maximale avec un minimum de désagrément.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Techniciens formés et équipés",
                "Produits certifiés et à faible odeur",
                "Suivi après intervention inclus",
                "Devis clair et sans surprise",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-500 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Values cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-zinc-950 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========== FINAL CTA BANNER ========== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-zinc-950 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />

          <div className="relative px-6 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-sm font-medium text-emerald-400">
                  Yaoundé & Douala
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
                Prêt à retrouver un espace sain ?
              </h3>
              <p className="text-zinc-400 text-sm md:text-base">
                Contactez-nous maintenant. Nous intervenons rapidement et vous
                garantissons un résultat durable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <motion.a
                href="/contact"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 transition-all"
              >
                Demander une intervention
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                href="https://wa.me/237690372977"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex w-full sm:w-auto items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#25D366] via-[#1EBE5D] to-[#128C7E] px-8 py-4 shadow-2xl shadow-green-500/30 transition-all duration-300"
              >
                {/* Effet lumineux */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                {/* Logo WhatsApp */}
                <motion.div
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl"
                >
                  <FaWhatsapp className="text-[#25D366] text-4xl" />
                </motion.div>

                {/* Texte */}
                <div className="relative ml-4 flex flex-col text-left">
                  <span className="text-xs uppercase tracking-widest text-white/80">
                    Assistance immédiate
                  </span>

                  <span className="text-lg font-extrabold text-white">
                    Discuter sur WhatsApp
                  </span>

                  <span className="text-sm text-white/90">
                    Réponse en quelques minutes
                  </span>
                </div>

                {/* Flèche */}
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                  className="relative ml-5 text-2xl font-bold text-white"
                >
                  →
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer/>

    </>
  );
}
