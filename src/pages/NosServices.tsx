import { motion } from "framer-motion";
import {
  Bug,
  Rat,
  SprayCan,
  ShieldCheck,
  Clock,
  Leaf,
  ArrowUpRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";

// ================= TYPES =================
interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  features: string[];
  tag: string;
  color: string;
}

// ================= DATA =================
const SERVICES: Service[] = [
  {
    id: "deratisation",
    title: "Dératisation",
    subtitle: "Rats & Souris",
    description:
      "Élimination complète et durable des rongeurs. Nous intervenons rapidement avec des méthodes ciblées et discrètes, adaptées aux particuliers comme aux professionnels.",
    image:
      "../../public/20260714_091228.jpg",
    icon: Rat,
    features: [
      "Diagnostic précis des points d’entrée",
      "Traitement sécurisé et efficace",
      "Garantie jusqu’à 4 mois",
      "Intervention discrète",
    ],
    tag: "URGENCE POSSIBLE",
    color: "emerald",
  },
  {
    id: "desinsectisation",
    title: "Désinsectisation",
    subtitle: "Cafards, fourmis, moustiques...",
    description:
      "Traitement professionnel contre tous types d’insectes nuisibles. Solutions adaptées selon l’espèce pour un résultat durable et respectueux de votre environnement.",
    image:
      "../../public/e.jpg",
    icon: Bug,
    features: [
      "Cafards & blattes",
      "Fourmis & termites",
      "Moustiques & guêpes",
      "Punaises de lit",
    ],
    tag: "TRAITEMENT CIBLÉ",
    color: "teal",
  },
  {
    id: "desinfection",
    title: "Désinfection",
    subtitle: "Locaux & surfaces",
    description:
      "Désinfection complète de vos locaux pour éliminer bactéries, virus et microbes. Idéal pour les bureaux, restaurants, cabinets médicaux et habitations.",
    image:
      "../../public/c.jpg",
    icon: SprayCan,
    features: [
      "Désinfection haute performance",
      "Produits certifiés",
      "Adapté aux espaces sensibles",
      "Résultat immédiat",
    ],
    tag: "HYGIÈNE TOTALE",
    color: "emerald",
  },
  {
    id: "prevention",
    title: "Prévention & Suivi",
    subtitle: "Contrats d’entretien",
    description:
      "Ne laissez plus les nuisibles revenir. Nos contrats de prévention assurent un suivi régulier et une protection continue de vos espaces.",
    image:
      "../../public/20260714_091230.jpg",
    icon: ShieldCheck,
    features: [
      "Visites périodiques",
      "Rapport d’intervention",
      "Conseils personnalisés",
      "Priorité en cas d’urgence",
    ],
    tag: "LONG TERME",
    color: "teal",
  },
];

// ================= ANIMATIONS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 16 },
  },
} as const;

// ================= COMPONENT =================
export default function NoServices() {
  return (
    <>
    <section
      id="services"
      className="relative py-20 md:py-32 bg-white dark:bg-zinc-950 overflow-hidden transition-colors duration-500"
    >
      <Navbar/>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#222226_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6"
          >
            <Zap size={14} className="text-emerald-500" />
            <span className="text-[10px] md:text-xs font-bold tracking-[1.5px] uppercase text-zinc-500 dark:text-zinc-400">
              Nos services complets
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 dark:text-white leading-tight mb-5"
          >
            Tout ce dont vous avez besoin pour un espace{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              sain et protégé
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            De l’urgence à la prévention, NEXORA couvre l’ensemble des besoins
            en dératisation, désinsectisation et désinfection à Yaoundé et
            Douala.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className="group relative bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-52 md:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold tracking-wider backdrop-blur-sm">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  <div className="mb-1">
                    <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-zinc-950 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-emerald-500 shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href="/contact" className="group/btn inline-flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-600 transition-colors">
                    Demander ce service
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: Clock,
              title: "Intervention sous 2h",
              desc: "Urgences prises en charge rapidement",
            },
            {
              icon: ShieldCheck,
              title: "Garantie 4 mois",
              desc: "Résultat assuré ou retour gratuit",
            },
            {
              icon: Leaf,
              title: "Produits certifiés",
              desc: "Solutions efficaces et éco-responsables",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-950 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
    <Footer />
      </>
  );
}
