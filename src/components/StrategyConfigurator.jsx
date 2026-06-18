import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sliders, Calendar, Zap, Target } from "lucide-react";

const StrategyConfigurator = () => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState("Conversions"); // Conversions, SEO, Video
  const [audience, setAudience] = useState(250000); // 10k - 1M
  const [budgetTier, setBudgetTier] = useState(2); // 1: Seed, 2: Growth, 3: Scale

  const handleStartEngagement = () => {
    // Navigate to contact page and pass configurator selections
    navigate(`/contact?goal=${goal}&audience=${audience}&budget=${budgetTier === 1 ? "Seed" : budgetTier === 2 ? "Growth" : "Scale"}`);
  };

  // Calculations
  const getTimeline = () => {
    if (goal === "Conversions") return budgetTier === 3 ? "12 Weeks" : "8 Weeks";
    if (goal === "SEO") return "16 Weeks (Continuous)";
    return "4 Weeks";
  };

  const getDeliverables = () => {
    switch (goal) {
      case "Conversions":
        return ["Vite + React.js Core", "Node API Validations", "JWT Access Controls", "Bento Grid Dashboard"];
      case "SEO":
        return ["Metadata Injections", "Cannibalization Audit", "Link Equity Model", "LLM Citations Track"];
      case "Video":
        return ["10 Cinematic Shoots", "Short Reels Curation", "Sound Design Sequence", "Social Grid Schedule"];
      default:
        return [];
    }
  };

  const getEstimateOutcome = () => {
    const scaleFactor = (audience / 100000).toFixed(1);
    if (goal === "Conversions") return `+${(scaleFactor * 1.5).toFixed(1)}% Conversion Rate`;
    if (goal === "SEO") return `+${(scaleFactor * 12).toFixed(0)}k Organic Clicks/mo`;
    return `+${(scaleFactor * 35).toFixed(0)}k Short Form Reel Views`;
  };

  return (
    <div className="bento-card border border-white/5 bg-[#0f0f13] w-full p-6 sm:p-8 text-left shadow-2xl relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="h-4 w-4 text-[#818cf8]" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8]">Strategy Architect</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-white mb-6 uppercase tracking-tight">Configure Your Campaign</h3>

      {/* Goal Selector */}
      <div className="space-y-3 mb-6">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1. Primary Campaign Objective</label>
        <div className="grid grid-cols-3 gap-2">
          {["Conversions", "SEO", "Video"].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGoal(g)}
              className={`py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${
                goal === g
                  ? "bg-indigo-600/15 border-indigo-500 text-white"
                  : "bg-black/40 border-white/5 text-[#9a9ab0] hover:text-white"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Audience Slider */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          <span>2. Target Reach Audience</span>
          <span className="text-[#818cf8]">{(audience / 1000).toFixed(0)}k Users</span>
        </div>
        <input
          type="range"
          min={50000}
          max={1000000}
          step={50000}
          value={audience}
          onChange={(e) => setAudience(parseInt(e.target.value))}
          className="w-full accent-indigo-600 bg-black/50 h-1.5 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Budget Selector */}
      <div className="space-y-3 mb-8">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">3. Capital Commitment Tier</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { tier: 1, label: "Seed", range: "$5k-$15k" },
            { tier: 2, label: "Growth", range: "$15k-$40k" },
            { tier: 3, label: "Scale", range: "$40k+" }
          ].map((b) => (
            <button
              key={b.tier}
              type="button"
              onClick={() => setBudgetTier(b.tier)}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                budgetTier === b.tier
                  ? "bg-indigo-600/15 border-indigo-500 text-white"
                  : "bg-black/40 border-white/5 text-[#9a9ab0] hover:border-white/10"
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-widest">{b.label}</div>
              <div className="text-[9px] text-slate-500 font-semibold mt-0.5">{b.range}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Split Divider */}
      <div className="border-t border-white/5 py-4 my-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <Calendar className="h-4 w-4 text-[#818cf8] mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Sprint Timeline</div>
              <div className="text-xs text-white font-bold mt-0.5">{getTimeline()}</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Zap className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Metric Projection</div>
              <div className="text-xs text-emerald-400 font-bold mt-0.5">{getEstimateOutcome()}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Target className="h-3 w-3" /> Scope Deliverables
          </div>
          <div className="flex flex-wrap gap-1.5">
            {getDeliverables().map((d, index) => (
              <span key={index} className="text-[9px] font-semibold text-slate-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleStartEngagement}
        className="w-full btn-indigo py-3.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
      >
        Lock In Strategy Scope
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default StrategyConfigurator;
