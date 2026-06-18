import React from 'react'
import { motion } from 'framer-motion'
import Seo from "../components/Seo"
import ProposalArchitect from "../components/ProposalArchitect"

const Contact = () => {
  return (
    <div className="bg-[#070709] min-h-screen pt-28 pb-16 relative overflow-hidden text-[#9a9ab0]">
      <Seo 
        title="Proposal Architect" 
        description="Book a strategy session with WIDE TAKE. Submit your company scope, timeline, and goals to our secure lead center."
        keywords="contact marketing agency, book web developers, video editing inquiry, branding briefing"
      />
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8] bg-indigo-600/10 border border-indigo-500/15 px-4 py-1.5 rounded-md mb-6 inline-block">
            Briefing Intake
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-normal text-white mt-4 mb-6 uppercase tracking-tight leading-none">
            Get in Touch
          </h1>
          <p className="text-[#9a9ab0] text-sm max-w-xl mx-auto font-light leading-relaxed">
            Ready to structure your brand? Submit details about your campaign and timeline. Our team will review the details and respond within 12 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bento-card p-8 sm:p-12 border border-white/5 relative bg-[#0f0f13] shadow-2xl"
        >
          {/* Subtle glow border at top */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

          {/* Render Multi-Step Intake Proposal Builder */}
          <ProposalArchitect />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
