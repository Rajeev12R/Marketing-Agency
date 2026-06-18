import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import sparshworldschool from "../assets/school.png";

// Import all images and videos for the slideshow
import schoolImage1 from "../assets/school_assets/1.jpeg";
import schoolImage2 from "../assets/school_assets/2.jpeg";
import schoolImage3 from "../assets/school_assets/3.jpeg";
import schoolImage4 from "../assets/school_assets/4.jpeg";
import schoolImage5 from "../assets/school_assets/5.jpeg";
import schoolImage6 from "../assets/school_assets/6.jpeg";
import schoolImage7 from "../assets/school_assets/7.jpeg";
import schoolImage8 from "../assets/school_assets/8.jpeg";
import schoolImage9 from "../assets/school_assets/9.jpeg";
import schoolImage10 from "../assets/school_assets/10.jpeg";

import sunnyImage2 from "../assets/sunny_assets/2.jpg";
import sunnyImage3 from "../assets/sunny_assets/3.jpg";
import sunnyImage4 from "../assets/sunny_assets/4.jpg";
import sunnyImage5 from "../assets/sunny_assets/5.jpg";
import sunnyVideo1 from "../assets/sunny_assets/1.mp4";

import gupshupImage2 from "../assets/gupshup_assets/2.jpg";
import gupshupImage3 from "../assets/gupshup_assets/3.jpg";
import gupshupImage4 from "../assets/gupshup_assets/4.jpg";
import gupshupImage5 from "../assets/gupshup_assets/5.jpg";
import gupshupImage6 from "../assets/gupshup_assets/6.jpg";
import gupshupImage7 from "../assets/gupshup_assets/7.jpg";
import gupshupVideo1 from "../assets/gupshup_assets/1.mp4";

import retroImage1 from "../assets/retro_assets/1.jpg";
import retroImage2 from "../assets/retro_assets/2.jpg";
import retroImage3 from "../assets/retro_assets/3.jpg";
import retroImage4 from "../assets/retro_assets/4.jpg";
import retroVideo1 from "../assets/retro_assets/1.mp4";

import retroMiniImage2 from "../assets/retromini_assets/2.jpg";
import retroMiniImage3 from "../assets/retromini_assets/3.png";
import retroMiniImage4 from "../assets/retromini_assets/4.png";
import retroMiniImage5 from "../assets/retromini_assets/5.png";
import retroMiniImage6 from "../assets/retromini_assets/6.png";
import retroMiniImage7 from "../assets/retromini_assets/7.png";
import retroMiniVideo1 from "../assets/retromini_assets/1.mp4";

import satvaImage1 from "../assets/satva_assets/1.jpg";
import satvaImage2 from "../assets/satva_assets/2.jpg";
import satvaImage3 from "../assets/satva_assets/3.jpg";
import satvaImage4 from "../assets/satva_assets/4.jpg";

const LogoScroll = () => {
  const clients = [
    "SPARSH WORLD SCHOOL", "SUNNY SIDE UP", "GUPSHUP @ CHHAT", 
    "RETRO CAFE", "RETRO MINI", "SATVA LOUNGE"
  ];

  const tickerItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="w-full overflow-hidden bg-black/20 border-y border-white/5 py-8 relative z-10 mb-16">
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex gap-16 text-slate-500 font-mono text-[10px] font-bold tracking-[0.2em] items-center animate-infinite-scroll"
          animate={{ x: [0, -800] }}
          transition={{ 
            ease: "linear", 
            duration: 25, 
            repeat: Infinity 
          }}
        >
          {tickerItems.map((name, index) => (
            <div key={index} className="flex items-center gap-4">
              <span>{name}</span>
              <span className="w-1 h-1 rounded-full bg-indigo-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ImageSlider = ({ images, videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const items = [...videos, ...images];
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback((e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        goToNext();
      }
    }, 5000);
  }, [goToNext, isPaused]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div 
      className="relative w-full h-full min-h-[220px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {index < videos.length ? (
            <video
              src={item}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img src={item || "/placeholder.svg"} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          )}
        </motion.div>
      ))}
      
      {/* Navigation Buttons */}
      <motion.button
        onClick={goToPrevious}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/60 text-white p-1.5 rounded-md hover:bg-indigo-600 hover:text-white transition-all border border-white/5 z-20"
        whileHover={{ scale: 1.05 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={goToNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/60 text-white p-1.5 rounded-md hover:bg-indigo-600 hover:text-white transition-all border border-white/5 z-20"
        whileHover={{ scale: 1.05 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3.5 h-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Navigation Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-1 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              goToSlide(index);
            }}
            className={`h-0.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#818cf8] w-4' : 'bg-white/20 w-1'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { id: "All", label: "All Cases" },
    { id: "Education", label: "Education" },
    { id: "Dining", label: "Dining & Lounges" },
    { id: "Cafe", label: "Cafe Franchises" }
  ];

  const cases = [
    {
      title: "Sparsh World School",
      category: "INTERNATIONAL EDUCATION BRAND",
      filterTag: "Education",
      description: "Implemented standard branding matrices, drafted unified school slogans, structured vector logo layouts, and organized monthly Facebook/Instagram grids.",
      metrics: ["+180% Inquiries", "+98% Speed Load"],
      images: [schoolImage1, schoolImage2, schoolImage3, schoolImage4, schoolImage5, schoolImage6, schoolImage7, schoolImage8, schoolImage9, schoolImage10],
      videos: [],
    },
    {
      title: "Sunny Side Up",
      category: "RESTAURANT & FINE DINING",
      filterTag: "Dining",
      description: "Filmed high-definition culinary promo clips and edited viral reels targeting short-attention span audiences.",
      metrics: ["300k+ Reel Views", "+35% Registrations"],
      images: [sunnyImage2, sunnyImage3, sunnyImage4, sunnyImage5],
      videos: [sunnyVideo1],
    },
    {
      title: "GupShup @ chhat",
      category: "ROOFTOP LOUNGE",
      filterTag: "Dining",
      description: "Scoped promotional reels and managed grid aesthetics to highlight weekend bookings and menu launches.",
      metrics: ["250k+ Social Reach", "Sold Out Weekends"],
      images: [gupshupImage2, gupshupImage3, gupshupImage4, gupshupImage5, gupshupImage6, gupshupImage7],
      videos: [gupshupVideo1],
    },
    {
      title: "Retro Cafe",
      category: "CAFE VENTURE",
      filterTag: "Cafe",
      description: "Produced local video campaigns and graphical content grids to drive footfall and menu item awareness.",
      metrics: ["150k+ Social Reach", "+20% Footfalls"],
      images: [retroImage1, retroImage2, retroImage3, retroImage4],
      videos: [retroVideo1],
    },
    {
      title: "Retro Mini",
      category: "MINI CAFE FRANCHISE",
      filterTag: "Cafe",
      description: "Developed visual identity templates and promotional materials supporting regional franchise launch schedules.",
      metrics: ["120k+ Local Reach", "Franchise Launched"],
      images: [retroMiniImage2, retroMiniImage3, retroMiniImage4, retroMiniImage5, retroMiniImage6, retroMiniImage7],
      videos: [retroMiniVideo1],
    },
    {
      title: "Satva Lounge",
      category: "BAR & LOUNGE",
      filterTag: "Dining",
      description: "Coordinated video editing assets and creative direction guidelines for event promotions.",
      metrics: ["80k+ Impressions", "Unified Branding"],
      images: [satvaImage1, satvaImage2, satvaImage3, satvaImage4],
      videos: [],
    },
  ];

  const filteredCases = activeFilter === "All" 
    ? cases 
    : cases.filter(c => c.filterTag === activeFilter);

  const getGridSpan = (index, total) => {
    if (activeFilter !== "All") return "col-span-1";
    if (index === 0) return "lg:col-span-2 lg:row-span-1";
    if (index === 5) return "lg:col-span-2 lg:row-span-1";
    return "col-span-1";
  };

  return (
    <div className="bg-[#070709] min-h-screen relative overflow-hidden">
      <Seo 
        title="Client Portfolio" 
        description="Browse through WIDE TAKE marketing achievements, featuring restaurant shoots, international school branding, cafe campaigns, and web assets."
        keywords="marketing case studies, school branding, restaurant campaigns, video curation, cafe marketing"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-2xl"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/15 text-[10px] font-bold tracking-widest text-[#818cf8] uppercase mb-8"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Case Archives
          </motion.div>
          <motion.h1
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-white mb-8 tracking-tight uppercase leading-none"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            CLIENT OUTCOMES & METRICS
          </motion.h1>
          <motion.p
            className="text-[#9a9ab0] text-sm leading-relaxed font-light mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore how cafe ventures, lounge systems, and educational networks leverage the execution model at <span className="text-white font-medium">WIDE TAKE</span> to scale visibility.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/contact"
              className="btn-indigo px-8 py-4 rounded-lg text-xs font-bold"
            >
              Start Engagement
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <LogoScroll />

      {/* Main Grid Cases Redesign */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-start items-center mb-12 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${
                activeFilter === cat.id
                  ? "bg-indigo-600 border-indigo-500 text-white font-bold"
                  : "bg-[#0f0f13] border-white/5 text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredCases.map((study, index) => {
            const spanClass = getGridSpan(index, filteredCases.length);
            return (
              <motion.div
                key={study.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`bento-card p-0 flex flex-col justify-between group overflow-hidden ${spanClass}`}
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/5">
                  <span className="absolute top-4 left-4 z-20 text-[9px] font-bold tracking-widest text-[#818cf8] bg-indigo-600/10 border border-indigo-500/15 px-2.5 py-1 rounded-md">
                    {study.category}
                  </span>
                  <ImageSlider images={study.images} videos={study.videos} />
                </div>

                {/* Text Details */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display text-2xl font-normal text-white mb-4 uppercase tracking-tight group-hover:text-[#818cf8] transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-[#9a9ab0] text-xs leading-relaxed font-light mb-8">
                      {study.description}
                    </p>
                  </div>
                  
                  {/* Performance Indicators */}
                  <div className="flex gap-2 border-t border-white/5 pt-6 mt-auto">
                    {study.metrics.map((m, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-bold text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3.5 py-1.5 rounded-lg uppercase tracking-wider"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;