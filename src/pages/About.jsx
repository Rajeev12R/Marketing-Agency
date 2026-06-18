import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Seo from "../components/Seo"
import rajeev from "../assets/rajeev.jpeg"
import arun from "../assets/arun3.jpeg"
import aditi from "../assets/aditi.jpeg"
import sneha from "../assets/sneha.jpg"

const TeamMember = ({ name, role, image }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.01] hover:border-[#818cf8]/35 transition-all shadow-xl"
  >
    <div className="aspect-[4/5] w-full overflow-hidden bg-[#0d0d11]">
      <img 
        src={image || "/placeholder.svg"} 
        alt={name} 
        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700" 
      />
    </div>
    <div className="p-5 bg-[#0f0f13] border-t border-white/5">
      <h3 className="text-base font-bold text-white mb-1">{name}</h3>
      <p className="text-[9px] uppercase tracking-widest text-[#818cf8] font-bold">{role}</p>
    </div>
  </motion.div>
)

const About = () => {
  const teamMembers = [
    {
      name: "Arun Changra",
      role: "Founder & CEO",
      image: arun,
    },
    {
      name: "Rajeev Ranjan",
      role: "Lead Full Stack Developer",
      image: rajeev,
    },
    {
      name: "Aditi Sable",
      role: "Lead Graphics Designer",
      image: aditi,
    },
    {
      name: "Sneha Tiwari",
      role: "Lead Content Writer",
      image: sneha,
    },
  ]

  return (
    <div className="bg-[#070709] min-h-screen pt-28 pb-16 relative overflow-hidden text-[#9a9ab0]">
      <Seo 
        title="Why WIDE TAKE" 
        description="Meet our team of visionary web developers, video editors, designers, and copywriters crafting premium campaigns."
        keywords="marketing team, web development specialists, videography leaders, agency story"
      />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8] bg-indigo-600/10 border border-indigo-500/15 px-4 py-1.5 rounded-md mb-6 inline-block">
              Vision Profile
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-normal text-white mb-6 uppercase tracking-tight leading-tight">
              We are a squad of digital <br />
              <span className="italic font-semibold text-[#818cf8]">innovators.</span>
            </h1>
            <p className="text-[#9a9ab0] font-light leading-relaxed text-base">
              Bridging high-performance technical engineering with sleek creative assets to multiply organic brand presence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-video bg-[#0d0d11] rounded-xl overflow-hidden border border-white/5 shadow-2xl relative"
          >
            <img src={teamMembers[0].image || "/placeholder.svg"} alt="Team CEO" className="w-full h-full object-cover grayscale opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-y border-white/5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-normal text-white mb-8 tracking-tight uppercase">Our Mission</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
              At <span className="text-white font-medium">WIDE TAKE</span>, we don’t just build marketing templates—we craft premium brand experiences. We believe that every client deserves to command authority and leave a lasting organic footprint in their sector. We are execution-focused developers, designers, and copywriters.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Our values prioritize continuous engineering, adapting to 2026 UX visual styles, and building robust REST integrations. What drives us is a deep commitment to delivering conversion results with total integrity.
            </p>
            <Link
              to="/contact"
              className="btn-indigo px-8 py-3.5 rounded-lg text-[10px] mt-6 inline-block font-bold"
            >
              Start Engagement
            </Link>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="p-6 rounded-xl bg-[#0f0f13] border border-white/5">
              <span className="text-[#818cf8] font-bold text-[10px] uppercase tracking-widest block mb-2">2023 Launch</span>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Introduced self-serve solutions to support local cafe franchises and boutique hospitality brands.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0f0f13] border border-white/5">
              <span className="text-[#818cf8] font-bold text-[10px] uppercase tracking-widest block mb-2">2024 Expansion</span>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Launched WIDE TAKE Connect to provide consulting scopes for school brands and lounge chains.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#0f0f13] border border-white/5">
              <span className="text-[#818cf8] font-bold text-[10px] uppercase tracking-widest block mb-2">Monthly Insights</span>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                We distribute insights in our newsletters and technical <Link to="/blog" className="text-white hover:text-[#818cf8] underline">insights blog</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Crew Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-display text-3xl sm:text-5xl font-normal text-white text-center mb-16 uppercase tracking-tight">Meet the Crew</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
