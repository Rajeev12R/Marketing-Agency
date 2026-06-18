import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CheckCircle2, ChevronRight, ChevronLeft, Target, Calendar, CreditCard, User } from "lucide-react";

const API_BASE_URL = "http://localhost:3000";

const ProposalArchitect = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    goal: "Conversions",
    timeline: "Standard",
    budget: "Growth",
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    description: "",
    newsletter: false
  });

  // Read URL query params on mount to pre-fill strategy configurator inputs
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlGoal = params.get("goal");
    const urlBudget = params.get("budget");

    if (urlGoal || urlBudget) {
      setFormData((prev) => ({
        ...prev,
        goal: urlGoal || prev.goal,
        budget: urlBudget || prev.budget
      }));
      // Auto-jump to credentials input steps if pre-configured
      setStep(3);
    }
  }, [location.search]);

  const handleGoalSelect = (goal) => {
    setFormData((prev) => ({ ...prev, goal }));
  };

  const handleTimelineSelect = (timeline) => {
    setFormData((prev) => ({ ...prev, timeline }));
  };

  const handleBudgetSelect = (budget) => {
    setFormData((prev) => ({ ...prev, budget }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Formulate final message structure incorporating multi-step selections
    const consolidatedMessage = `[PROPOSAL INQUIRY] 
Objective: ${formData.goal}
Timeline Urgency: ${formData.timeline}
Budget Segment: ${formData.budget}

Brief details: 
${formData.description}`;

    const submissionPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      website: formData.website,
      message: consolidatedMessage,
      newsletter: formData.newsletter
    };

    try {
      const response = await fetch(`${API_BASE_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionPayload),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Proposal brief registered successfully!");
        setFormData({
          goal: "Conversions",
          timeline: "Standard",
          budget: "Growth",
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          website: "",
          description: "",
          newsletter: false
        });
        setStep(5); // Show success screen
      } else {
        throw new Error(data.message || "Failed to submit lead");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to connect to backend server.");
    } finally {
      setSubmitting(false);
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="w-full">
      {/* Step Indicator */}
      {step < 5 && (
        <div className="flex justify-between items-center mb-10 max-w-md mx-auto">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all ${
                step >= s 
                  ? "bg-indigo-600 border-indigo-500 text-white font-bold" 
                  : "bg-black/40 border-white/5 text-slate-500"
              }`}>
                {s}
              </span>
              {s < 4 && <div className={`h-px w-8 sm:w-16 bg-white/5 ${step > s ? "bg-indigo-600/30" : ""}`} />}
            </div>
          ))}
        </div>
      )}

      {step === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-left">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-[#818cf8]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8]">Step 1 / 4</span>
          </div>
          <h2 className="font-display text-2xl text-white uppercase tracking-tight">Select Objective</h2>
          <p className="text-slate-400 text-xs font-light mb-6">What is the primary objective of your next marketing or software cycle?</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: "Conversions", title: "Conversions", desc: "Performance web dev, landing layouts, conversion optimization." },
              { id: "SEO", title: "Technical SEO", desc: "Keyword Cannibalization audits, metadata schemes, LLM traffic indexes." },
              { id: "Video", title: "Video Curation", desc: "Short reels edits, sound design scripts, cinematography shoots." }
            ].map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => handleGoalSelect(o.id)}
                className={`p-6 rounded-xl border text-left transition-all ${
                  formData.goal === o.id
                    ? "bg-indigo-600/15 border-indigo-500 text-white"
                    : "bg-black/40 border-white/5 text-[#9a9ab0] hover:border-white/10"
                }`}
              >
                <div className="font-bold text-sm text-white">{o.title}</div>
                <div className="text-[10px] text-slate-500 mt-2 font-light leading-relaxed">{o.desc}</div>
              </button>
            ))}
          </div>

          <div className="flex justify-end pt-6">
            <button onClick={nextStep} className="btn-indigo py-3 px-6 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer">
              Continue <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-left">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-[#818cf8]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8]">Step 2 / 4</span>
          </div>
          <h2 className="font-display text-2xl text-white uppercase tracking-tight">Timeline & Budget Scopes</h2>
          <p className="text-slate-400 text-xs font-light mb-6">Select your timeframe urgency and estimated capital commitment tier.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Campaign Urgency</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: "Urgent", label: "Urgent Scope (< 2 weeks)" },
                  { id: "Standard", label: "Standard Scope (4-8 weeks)" },
                  { id: "Retainer", label: "Monthly Retainer Services" }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleTimelineSelect(t.id)}
                    className={`py-3.5 px-4 rounded-lg border text-left text-xs font-semibold uppercase tracking-wider transition-all ${
                      formData.timeline === t.id
                        ? "bg-indigo-600/15 border-indigo-500 text-white"
                        : "bg-black/40 border-white/5 text-[#9a9ab0] hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Capital Commitment</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: "Seed", label: "Seed Segment ($5k-$15k)" },
                  { id: "Growth", label: "Growth Segment ($15k-$40k)" },
                  { id: "Scale", label: "Scale Segment ($40k+)" }
                ].map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => handleBudgetSelect(b.id)}
                    className={`py-3.5 px-4 rounded-lg border text-left text-xs font-semibold uppercase tracking-wider transition-all ${
                      formData.budget === b.id
                        ? "bg-indigo-600/15 border-indigo-500 text-white"
                        : "bg-black/40 border-white/5 text-[#9a9ab0] hover:text-white"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-6 border-t border-white/5">
            <button onClick={prevStep} className="btn-outline py-3 px-6 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer">
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
            <button onClick={nextStep} className="btn-indigo py-3 px-6 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer">
              Continue <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-left">
          <div className="flex items-center gap-2 mb-2">
            <User className="h-4 w-4 text-[#818cf8]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8]">Step 3 / 4</span>
          </div>
          <h2 className="font-display text-2xl text-white uppercase tracking-tight">Identity Details</h2>
          <p className="text-slate-400 text-xs font-light mb-6">Let us know about you and your brand franchise.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-black/60 border border-white/5 rounded-lg py-3.5 px-4 text-white placeholder-slate-800 focus:outline-none focus:border-indigo-500 text-xs transition-colors"
                placeholder="Aarav"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-black/60 border border-white/5 rounded-lg py-3.5 px-4 text-white placeholder-slate-800 focus:outline-none focus:border-indigo-500 text-xs transition-colors"
                placeholder="Sharma"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Business Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-black/60 border border-white/5 rounded-lg py-3.5 px-4 text-white placeholder-slate-800 focus:outline-none focus:border-indigo-500 text-xs transition-colors"
                placeholder="email@company.com"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Company</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-black/60 border border-white/5 rounded-lg py-3.5 px-4 text-white placeholder-slate-800 focus:outline-none focus:border-indigo-500 text-xs transition-colors"
                placeholder="Sparsh World School"
              />
            </div>
          </div>

          <div className="flex justify-between pt-6 border-t border-white/5">
            <button onClick={prevStep} className="btn-outline py-3 px-6 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer">
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
            <button 
              onClick={nextStep} 
              disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.company}
              className="btn-indigo py-3 px-6 rounded-lg text-xs font-bold flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              Continue <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 text-left">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="h-4 w-4 text-[#818cf8]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#818cf8]">Step 4 / 4</span>
          </div>
          <h2 className="font-display text-2xl text-white uppercase tracking-tight">Scope Specification</h2>
          <p className="text-slate-400 text-xs font-light mb-6">Review parameters and describe project details.</p>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 space-y-2 mb-6">
            <div><strong>Selected Goal:</strong> {formData.goal}</div>
            <div><strong>Timeline Urgency:</strong> {formData.timeline}</div>
            <div><strong>Capital Tier:</strong> {formData.budget}</div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Scope Details</label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                className="w-full bg-black/60 border border-white/5 rounded-lg py-3.5 px-4 text-white placeholder-slate-800 focus:outline-none focus:border-indigo-500 h-32 resize-none text-xs leading-relaxed"
                placeholder="Describe your design parameters, timelines, and deliverables..."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 bg-black border border-white/5 rounded text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <label htmlFor="newsletter" className="ml-3 text-[11px] text-[#9a9ab0] leading-relaxed cursor-pointer select-none">
                Subscribe me to WIDE TAKE monthly marketing newsletter strategy insights.
              </label>
            </div>
          </div>

          <div className="flex justify-between pt-6 border-t border-white/5">
            <button onClick={prevStep} className="btn-outline py-3 px-6 rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer">
              <ChevronLeft className="h-4 w-4" /> Back
            </button>
            <button 
              onClick={handleSubmit} 
              disabled={submitting || !formData.description}
              className="btn-indigo py-3 px-8 rounded-lg text-xs font-bold flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {submitting ? "SUBMITTING PROPOSAL..." : "SUBMIT PROPOSAL"}
            </button>
          </div>
        </motion.div>
      )}

      {step === 5 && (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="font-display text-3xl text-white uppercase tracking-tight">Scope Registered!</h2>
          <p className="text-slate-400 text-xs font-light max-w-sm mx-auto leading-relaxed">
            Your proposal brief has been saved in the Lead Center. Our strategy architect will review parameters and ping you in 12 hours.
          </p>
          <div className="pt-4">
            <button onClick={() => setStep(1)} className="btn-outline py-3 px-6 rounded-lg text-xs font-bold cursor-pointer">
              Submit Another Brief
            </button>
          </div>
        </motion.div>
      )}

      <ToastContainer />
    </div>
  );
};

export default ProposalArchitect;
