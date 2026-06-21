
import { motion, type Variants } from 'framer-motion';
import { Sparkles, Star, Phone, MapPin } from 'lucide-react';

export function Hero() {
   
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] as const 
            }
        }
    };

    // Animation de flottaison corrigée et bien typée
    const floatAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            repeatType: "reverse" as const
        }
    };

    return (
        <section className="relative min-h-screen pt-28 pb-12 flex items-center justify-center bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            
            {/* Effets de Background Fluides */}
            <div className="absolute top-20 left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-lime-300/20 dark:bg-lime-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] bg-blue-300/20 dark:bg-blue-950/10 rounded-full blur-[150px] pointer-events-none" />
            
            {/* Grille technique */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* BLOC TEXTE ET ACTIONS */}
                <motion.div 
                    className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
                    initial="hidden"
                    animate="visible"
                    variants={{ 
                        visible: { 
                            transition: { staggerChildren: 0.12 } 
                        } 
                    }}
                >
                    <motion.div 
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-50 dark:bg-slate-900 border border-lime-200/30 dark:border-lime-500/10 text-[10px] md:text-xs font-semibold tracking-widest text-blue-950 dark:text-lime-400 uppercase mb-4 md:mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-lime-500 animate-pulse" />
                        Expertise & Désinfection Bio — Cameroun
                    </motion.div>

                    <motion.h1 
                        variants={fadeInUp}
                        className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-[1.15] sm:leading-[1.1]"
                    >
                        Protégez votre espace avec <br className="hidden sm:inline" />
                        <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-blue-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
                            NEXORA
                        </span>
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-light max-w-md sm:max-w-xl leading-relaxed"
                    >
                        Dites adieu aux cafards, rats, moustiques et autres nuisibles. Nexora assure des traitements de dératisation et désinfection certifiés, durables et sans danger pour votre environnement à Yaoundé et Douala.
                    </motion.p>

                    <motion.div 
                        variants={fadeInUp}
                        className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                        <a 
                            href="#devis" 
                            className="w-full sm:w-auto px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase text-slate-950 bg-lime-400 hover:bg-lime-500 dark:bg-lime-400 dark:hover:bg-lime-500 rounded-none transition-all duration-300 shadow-xl shadow-lime-400/10 flex items-center justify-center gap-3"
                        >
                            <Phone className="w-4 h-4" />
                            Urgence & Devis Gratuit
                        </a>
                        <a 
                            href="#services" 
                            className="w-full sm:w-auto px-8 py-3.5 text-[11px] font-bold tracking-widest uppercase text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-slate-950 dark:hover:border-lime-500 rounded-none transition-all duration-300 text-center"
                        >
                            Nos protocoles
                        </a>
                    </motion.div>

                    <motion.div 
                        variants={fadeInUp}
                        className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-row items-center gap-4 text-left"
                    >
                        <div className="flex -space-x-2.5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs">🛡️</div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-lime-500 text-lime-500" />
                                ))}
                                <span className="text-xs md:text-sm font-bold ml-1 text-slate-900 dark:text-white">4.9/5</span>
                            </div>
                            <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400">Plus de 350 entreprises et domiciles assainis</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ZONE VISUELLE : MOCKUP */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-none mx-auto py-6 lg:py-0">
                    
                    <motion.div 
                        animate={floatAnimation}
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="relative w-full aspect-[9/18.5] max-w-[250px] sm:max-w-[280px] rounded-[38px] sm:rounded-[45px] p-2 sm:p-2.5 bg-slate-950 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border-[3px] sm:border-4 border-slate-900 overflow-hidden"
                    >
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-3.5 bg-slate-950 rounded-full z-30" />

                        <div className="relative w-full h-full rounded-[30px] sm:rounded-[36px] overflow-hidden bg-slate-900">
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                                alt="Nexora intervention de désinfection" 
                                className="w-full h-full object-cover object-center pointer-events-none opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Floating Cards */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="absolute -right-2 sm:-right-4 top-1/4 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-100 dark:border-slate-800 shadow-lg rounded-none hidden sm:flex items-center gap-2.5 max-w-[180px]"
                    >
                        <div className="w-6 h-6 rounded-full bg-lime-100 text-lime-600 flex items-center justify-center text-xs font-bold">✓</div>
                        <div className="text-left">
                            <h4 className="text-[11px] font-bold text-slate-900 dark:text-white">100% Certifié</h4>
                            <p className="text-[9px] text-slate-500 dark:text-slate-400">Normes de sécurité phytosanitaires</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute -left-2 sm:-left-6 bottom-10 p-2.5 bg-blue-950 dark:bg-lime-400 text-white dark:text-slate-950 shadow-lg rounded-none hidden sm:flex flex-col text-center min-w-[130px]"
                    >
                        <span className="text-[9px] tracking-widest uppercase font-light opacity-80 dark:font-bold">Interventions</span>
                        <span className="text-xs font-bold flex items-center justify-center gap-1.5 mt-0.5">
                            <MapPin className="w-3 h-3 text-lime-400 dark:text-blue-950" />
                            Yaoundé / Douala
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}