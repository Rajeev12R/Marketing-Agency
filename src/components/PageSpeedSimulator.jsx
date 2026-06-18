import React, { useState, useEffect } from "react";
import { Play, Activity, ShieldAlert, Cpu, Sparkles } from "lucide-react";

const PageSpeedSimulator = () => {
  const [url, setUrl] = useState("");
  const [auditing, setAuditing] = useState(false);
  const [logIndex, setLogIndex] = useState(-1);
  const [showResults, setShowResults] = useState(false);
  const [speedVal, setSpeedVal] = useState(0);
  const [seoVal, setSeoVal] = useState(0);

  const logs = [
    "Pinging server nodes & measuring TTFB response times...",
    "Crawling site hierarchy for cannibalized keywords...",
    "Validating structured JSON-LD schemas...",
    "Scanning headers for JWT authorization filters...",
    "Compressing scripts & auditing asset sizes..."
  ];

  const runAudit = (e) => {
    e.preventDefault();
    if (!url) return;
    setAuditing(true);
    setLogIndex(0);
    setShowResults(false);
    setSpeedVal(0);
    setSeoVal(0);
  };

  useEffect(() => {
    if (auditing && logIndex >= 0 && logIndex < logs.length) {
      const timer = setTimeout(() => {
        setLogIndex(logIndex + 1);
      }, 750);
      return () => clearTimeout(timer);
    } else if (auditing && logIndex === logs.length) {
      setAuditing(false);
      setShowResults(true);
    }
  }, [auditing, logIndex]);

  useEffect(() => {
    if (showResults) {
      // Animate scores upward
      const interval = setInterval(() => {
        setSpeedVal((prev) => {
          if (prev >= 98) return 98;
          return prev + 1;
        });
        setSeoVal((prev) => {
          if (prev >= 100) return 100;
          return prev + 2;
        });
      }, 15);
      return () => clearInterval(interval);
    }
  }, [showResults]);

  return (
    <div className="bento-card border border-white/5 bg-[#0f0f13] w-full p-8 shadow-2xl relative">
      <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-600/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-6">
        <Activity className="h-4 w-4 text-emerald-400 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Site Performance Analyzer</span>
      </div>

      <h3 className="font-display text-2xl font-normal text-white mb-4 uppercase tracking-tight">Audit Your Platform</h3>
      <p className="text-[#9a9ab0] text-xs font-light mb-8 max-w-lg">
        Evaluate your website performance metrics. See how our web development and SEO optimizations can elevate load times and organic click rates.
      </p>

      {/* Input Form */}
      <form onSubmit={runAudit} className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          placeholder="Enter website url (e.g. yourbrand.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={auditing}
          className="flex-grow bg-black/60 border border-white/5 rounded-lg py-3 px-4 text-white text-xs placeholder-slate-700 focus:outline-none focus:border-indigo-500 transition-colors"
          required
        />
        <button
          type="submit"
          disabled={auditing || !url}
          className="btn-indigo py-3 px-6 rounded-lg text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          <Play className="h-3 w-3" />
          {auditing ? "AUDITING..." : "RUN SYSTEM AUDIT"}
        </button>
      </form>

      {/* Auditing logs */}
      {auditing && (
        <div className="p-4 rounded-lg bg-black/50 border border-white/5 font-mono text-[10px] space-y-2 text-slate-400 text-left">
          {logs.slice(0, logIndex + 1).map((log, index) => (
            <div key={index} className="flex gap-2 items-center">
              <span className={index === logIndex ? "text-[#818cf8]" : "text-emerald-400"}>
                {index === logIndex ? "❯" : "✓"}
              </span>
              <span className={index === logIndex ? "text-white animate-pulse" : ""}>{log}</span>
            </div>
          ))}
        </div>
      )}

      {/* Visual results */}
      {showResults && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/5">
          <div className="flex flex-col items-center p-4 rounded-xl bg-black/40 border border-white/5">
            <div className="relative w-20 h-20 flex items-center justify-center">
              {/* Radial circle overlay */}
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="34" className="stroke-white/5 fill-none" strokeWidth="4" />
                <circle cx="40" cy="40" r="34" className="stroke-emerald-400 fill-none transition-all duration-1000" strokeWidth="4" strokeDasharray="213" strokeDashoffset={213 - (213 * speedVal) / 100} />
              </svg>
              <span className="absolute text-lg font-bold text-white">{speedVal}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-4">PageSpeed score</span>
            <span className="text-[9px] font-bold text-emerald-400 mt-1">95+ Benchmark Met</span>
          </div>

          <div className="flex flex-col items-center p-4 rounded-xl bg-black/40 border border-white/5">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="34" className="stroke-white/5 fill-none" strokeWidth="4" />
                <circle cx="40" cy="40" r="34" className="stroke-indigo-400 fill-none transition-all duration-1000" strokeWidth="4" strokeDasharray="213" strokeDashoffset={213 - (213 * seoVal) / 100} />
              </svg>
              <span className="absolute text-lg font-bold text-white">{seoVal}%</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-4">SEO Architecture</span>
            <span className="text-[9px] font-bold text-indigo-400 mt-1">Zero Cannibalization</span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/40 border border-white/5">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2">
              <Cpu className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">API Middleware</span>
            <span className="text-[9px] font-bold text-[#f3f3f5] mt-1">100% Request Validated</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSpeedSimulator;
