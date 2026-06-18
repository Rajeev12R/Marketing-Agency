import React from "react";
import { motion } from "framer-motion";
import { Cpu, Video, Settings, Search, CheckSquare, Layers } from "lucide-react";
import Seo from "../components/Seo";

const SprintCard = ({ step, title, duration, description, deliverables, tools }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className="bento-card flex flex-col justify-between min-h-[340px]"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8] bg-indigo-600/10 border border-indigo-500/15 px-3 py-1 rounded-md">
          {step}
        </span>
        <span className="text-[9px] font-semibold text-slate-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded">
          {duration}
        </span>
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-normal text-white mb-3 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-[#9a9ab0] text-xs leading-relaxed font-light mb-6">{description}</p>
    </div>

    <div className="border-t border-white/5 pt-4 space-y-3">
      <div>
        <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1">
          <CheckSquare className="h-3 w-3 text-[#818cf8]" /> Deliverables
        </div>
        <div className="flex flex-wrap gap-1">
          {deliverables.map((d, index) => (
            <span key={index} className="text-[9px] font-semibold text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
              {d}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1">
          <Layers className="h-3 w-3 text-cyan-400" /> Stack & Tools
        </div>
        <div className="flex flex-wrap gap-1">
          {tools.map((t, index) => (
            <span key={index} className="text-[9px] font-bold text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10 uppercase">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

const HowWeWork = () => {
  const sprints = [
    {
      step: "Sprint 01",
      title: "Scoping & UI Design",
      duration: "Weeks 1 - 2",
      description: "Deconstructing project briefs, mapping out brand archetypes, and designing interface wireframes. We align campaign objectives before starting engineering cycles.",
      deliverables: ["CreativeBriefs", "FigmaMockups", "AssetInventory", "CampaignRoadmap"],
      tools: ["Figma", "Moodboards", "GridSystems"]
    },
    {
      step: "Sprint 02",
      title: "Cinematography Shoots",
      duration: "Weeks 3 - 4",
      description: "On-location visual capturing, reel scripting, and compiling video campaigns that target user attention spans.",
      deliverables: ["HD RawClips", "Reels Scripts", "SoundFX Matrices", "Color Grading Matrices"],
      tools: ["Sony A7SIII", "Adobe Premiere", "DaVinci Resolve"]
    },
    {
      step: "Sprint 03",
      title: "Full-Stack Development",
      duration: "Weeks 5 - 8",
      description: "Compiling React interfaces, wiring up Express routers, securing logins with JWT authorization filters, and sanitizing payloads with validation middleware.",
      deliverables: ["React App", "Express Router", "JWT Auth Middleware", "Validation Filters"],
      tools: ["React.js", "Vite", "Node.js", "Express", "JWT"]
    },
    {
      step: "Sprint 04",
      title: "Speed Audits & Launch",
      duration: "Weeks 9+",
      description: "Splitting bundle scripts to compress asset loads, executing PageSpeed diagnostics, setting XML indexing schemas, and analyzing visitor patterns.",
      deliverables: ["Vite Bundle Split", "95+ PageSpeed Audit", "Dynamic SEO Schemas", "GA4 Dashboard Setup"],
      tools: ["Vite Compiler", "Lighthouse", "Google Analytics"]
    }
  ]

  return (
    <div className="min-h-screen bg-[#070709] text-slate-300 pt-28 pb-16 relative overflow-hidden">
      <Seo 
        title="Execution Sprints" 
        description="Learn about our structured marketing and engineering processes. Scoping, visual production, React development, API architecture, and SEO tracking."
        keywords="marketing execution model, video shoots, UI/UX scoping, Node API validations, SEO tracking"
      />

      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mb-20 max-w-xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8] bg-indigo-600/10 border border-indigo-500/15 px-4 py-1.5 rounded-md">
            Execution Model
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-normal text-white mt-6 mb-4 leading-none uppercase">
            Sprints & Timelines
          </h1>
          <p className="text-[#9a9ab0] text-sm font-light leading-relaxed">
            We structure our delivery cycles into clear engineering sprints, mapping deliverables and toolsets to guarantee conversion targets.
          </p>
        </motion.div>

        {/* Bento Grid Sprints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sprints.map((s, index) => (
            <SprintCard key={index} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;