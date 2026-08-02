import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  category: string;
  client?: string;
}

export default function ProjectCard({ 
  image, 
  title, 
  desc, 
  category, 
  client 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -12 }}
      className="group relative bg-zinc-900 dark:bg-white overflow-hidden rounded-3xl border border-zinc-800 dark:border-zinc-200 shadow-xl"
    >
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-5 right-5 px-4 py-1.5 text-xs font-mono tracking-widest bg-black/70 text-white rounded-full backdrop-blur-md z-10">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        {client && (
          <p className="text-xs text-[#00B074] font-medium tracking-widest mb-1">{client}</p>
        )}
        
        <h3 className="text-2xl font-bold text-white dark:text-zinc-950 mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-zinc-400 dark:text-zinc-500 line-clamp-2 mb-6">
          {desc}
        </p>

        <motion.button 
          whileHover={{ gap: "12px" }}
          className="flex items-center gap-2 text-sm font-semibold text-[#00B074] hover:text-emerald-400 transition-colors group-hover:gap-3"
        >
          Voir le projet
          <ArrowRight 
            size={18} 
            className="transition-transform group-hover:translate-x-1" 
          />
        </motion.button>
      </div>
    </motion.div>
  );
}