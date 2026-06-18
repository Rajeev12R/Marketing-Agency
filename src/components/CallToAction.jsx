import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-t from-black to-[#070709] py-24 relative overflow-hidden">
      {/* Decorative Grid or Shapes */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel p-12 sm:p-20 rounded-3xl border border-white/5 relative overflow-hidden bg-[#0f0f13]"
        >
          {/* Subtle glow border at top */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#818cf8]/20 to-transparent" />

          <h2 className="text-3xl sm:text-5xl font-normal font-display text-white mb-6 tracking-tight leading-tight uppercase">
            READY TO DOMINATE THE DIGITAL SPACE?
          </h2>
          <p className="text-sm text-[#9a9ab0] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Let's discuss how our capabilities in high-conversion web engineering, branding, and video curation can multiply your client acquisition metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center btn-indigo text-xs font-bold px-8 py-4 rounded-lg transition-all"
            >
              Book Strategy Session
            </Link>
            <Link
              to="/client-portfolio"
              className="w-full sm:w-auto text-center btn-outline text-xs font-bold px-8 py-4 rounded-lg transition-all"
            >
              Review Client Outcomes
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CallToAction
