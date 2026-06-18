import React from "react"
import { motion } from "framer-motion"
import { Globe, Video, Search, ShieldCheck, Cpu, Play } from "lucide-react"

const OutcomeCard = ({ icon: Icon, title, type, stack, description, metric, className }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className={`bento-card flex flex-col justify-between ${className}`}
  >
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[9px] uppercase font-bold tracking-widest text-[#818cf8] bg-indigo-600/10 border border-indigo-500/15 px-2.5 py-1 rounded-md">
          {type}
        </span>
      </div>
      
      <div>
        <h3 className="font-display text-xl sm:text-2xl font-normal text-white mb-2 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-[#9a9ab0] text-xs leading-relaxed font-light mb-4">{description}</p>
      </div>
    </div>

    <div className="border-t border-white/5 pt-4 mt-6 flex flex-wrap justify-between items-center gap-3">
      <div className="flex gap-1">
        {stack.map((s, index) => (
          <span key={index} className="text-[8px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            {s}
          </span>
        ))}
      </div>
      <div className="text-[10px] font-bold text-emerald-400 flex items-center gap-1 uppercase tracking-wider">
        <ShieldCheck className="h-3.5 w-3.5" />
        {metric}
      </div>
    </div>
  </motion.div>
)

const Services = () => {
  const outcomes = [
    {
      icon: Globe,
      type: "Infrastructure",
      title: "Conversion Engines",
      description: "Custom React.js applications configured with Rollup bundle code-splitting and asset compression. Delivers lightning-fast loads and high client engagement metrics.",
      stack: ["React.js", "Vite", "Tailwind CSS"],
      metric: "98 PageSpeed TTFB",
      className: "md:col-span-2 min-h-[280px]"
    },
    {
      icon: Cpu,
      type: "Backend Integration",
      title: "REST APIs & Middleware",
      description: "Express.js endpoints protected by validation middleware sanitization and JWT header authentication.",
      stack: ["Node.js", "Express", "JWT Auth"],
      metric: "0 Security Incidents",
      className: "md:col-span-1 min-h-[280px]"
    },
    {
      icon: Video,
      type: "Asset Production",
      title: "Video Curation Deck",
      description: "High-octane reels, visual layouts, and sound edits designed to target short-attention spans on social media grids.",
      stack: ["Cinema shoots", "Sound FX", "Color Grading"],
      metric: "300k+ Reel Views",
      className: "md:col-span-1 min-h-[280px]"
    },
    {
      icon: Search,
      type: "Visibility",
      title: "Visibility Accelerators",
      description: "On-page search optimization isolating keyword conflicts and injecting dynamic meta schemas. Designed to capture organic reach and increase citations from AI/LLM search engine layers.",
      stack: ["SEO Auditing", "Meta Schema", "GA4 Logs"],
      metric: "+120% Click Rates",
      className: "md:col-span-2 min-h-[280px]"
    }
  ]

  return (
    <div className="bg-[#070709] py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16 max-w-xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8] bg-indigo-600/10 border border-indigo-500/15 px-4 py-1.5 rounded-md">
            Capabilities Matrix
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-white mt-6 mb-4 uppercase tracking-tight leading-none">
            Outcome-Driven Infrastructure
          </h2>
          <p className="text-[#9a9ab0] text-sm font-light leading-relaxed">
            We do not just build layouts. We design secure full-stack infrastructures, write search-optimized content, and produce cinematic video assets.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((o, index) => (
            <OutcomeCard key={index} {...o} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
