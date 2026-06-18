import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "./Seo";
import StrategyConfigurator from "./StrategyConfigurator";
import PageSpeedSimulator from "./PageSpeedSimulator";

const Hero = () => {
  return (
    <div className="relative bg-[#070709] min-h-screen pt-28 pb-16 overflow-hidden">
      <Seo 
        title="Bento Strategy & Web Engineering Agency" 
        description="Wide Take is an elite, full-service digital marketing and creative agency. We design conversion-engineered web layouts, produce short video campaigns, and construct high-performance brand architectures."
        keywords="marketing agency, web development, SEO consulting, branding strategy, video editing"
      />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[120px] animate-ambient-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-600/5 blur-[100px] animate-ambient-glow pointer-events-none" style={{ animationDelay: "-4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left: Headline */}
          <div className="lg:col-span-7 text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="badge-indigo inline-block"
            >
              WIDE TAKE AGENCY • EST. Feb 2025
            </motion.div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-white leading-[1.1] tracking-tight">
              We engineer clean <br className="hidden sm:inline" />
              <span className="italic font-semibold text-[#818cf8]">digital growth</span> <br />
              systems.
            </h1>

            <p className="text-[#9a9ab0] text-sm sm:text-base max-w-lg leading-relaxed font-light">
              Combining conversion code with story video assets. Just like a <span className="text-white font-medium">WIDE TAKE</span> lens, keeping your code structures, design elements, and organic funnels neat and high-performance.
            </p>

            <div className="flex gap-4">
              <Link
                to="/services"
                className="btn-outline px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                Inspect Capabilities
              </Link>
            </div>
          </div>

          {/* Right: Interactive Configurator */}
          <div className="lg:col-span-5 w-full">
            <StrategyConfigurator />
          </div>
        </div>

        {/* Audit Simulator Row */}
        <div className="mt-16 max-w-4xl mx-auto border-t border-white/5 pt-16">
          <PageSpeedSimulator />
        </div>
      </div>
      
      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </div>
  );
};

export default Hero;
