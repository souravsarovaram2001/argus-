import React from 'react';
import { 
  Shield, 
  Landmark, 
  Cpu, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Quote, 
  Database,
  Search,
  CheckCheck
} from 'lucide-react';
import { TESTIMONIALS } from '../data/mockIntelligence';

interface AboutUsSectionProps {
  onOpenDemoModal: (planId?: string) => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  onOpenDemoModal,
}) => {
  return (
    <section id="about-section" className="py-16 sm:py-24 bg-[#050810] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Shield className="w-3.5 h-3.5" />
            <span>OUR INSTITUTIONAL MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Protecting Revenue, Traveler Safety, and Operational Continuity Across Global Tourism.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            ARGUS (formerly GeoShield) was created to bridge the dangerous chasm between abstract diplomatic foreign advisories and real-world commercial tourism logistics. We believe travel companies should never have to gamble on fragmented news when lives and multimillion-dollar tour programs are on the line.
          </p>
        </div>

        {/* Academic Heritage: IIM Sirmaur & Living Lab Origin */}
        <div className="bg-[#0D121F] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-2">
                <Landmark className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                  ACADEMIC FOUNDATION & LIVING LAB VALIDATION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Born at the Intersection of Design Thinking and Empirical Tourism Science
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                ARGUS originated through immersive Living Lab field research and Design Thinking incubation under academic guidance from the Indian Institute of Management Sirmaur (IIM Sirmaur).
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                By pairing statistical risk modeling with ground-level ethnographic interviews across tour operators in emerging tourism markets, our researchers identified the fatal flaws in legacy diplomatic warnings: <em>extreme latency, lack of geographic specificity, and complete absence of actionable operational posturing.</em>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#161C2C] p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold font-mono text-blue-400">IIM Sirmaur</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">Research Incubation</div>
                </div>
                <div className="bg-[#161C2C] p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold font-mono text-emerald-400">120+ DMCs</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">Living Lab Co-Design</div>
                </div>
                <div className="bg-[#161C2C] p-4 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold font-mono text-blue-300">99.9%</div>
                  <div className="text-xs text-slate-400 font-mono mt-1">Empirical Signal Reliability</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#050810] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-blue-400 font-bold">
                <Award className="w-4 h-4" />
                <span>LIVING LAB METHODOLOGY</span>
              </div>
              <div className="space-y-3 text-xs text-slate-300 font-sans">
                <div className="p-3 bg-[#161C2C] rounded-lg border border-white/5">
                  <strong className="text-white block mb-1">1. User-Centric Co-Creation</strong>
                  Continuous iterative feedback loops with active destination operations managers in Kenya, Peru, Egypt, and Southeast Asia.
                </div>
                <div className="p-3 bg-[#161C2C] rounded-lg border border-white/5">
                  <strong className="text-white block mb-1">2. Quantitative Calibration</strong>
                  Weighted mathematical formulas calibrating signal volume against verified on-the-ground disruption severity.
                </div>
                <div className="p-3 bg-[#161C2C] rounded-lg border border-white/5">
                  <strong className="text-white block mb-1">3. Peer-Reviewed Rigor</strong>
                  Adherence to rigorous ethical and data provenance standards in open-source intelligence gathering.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Tier Intelligence Architecture */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase text-blue-400 tracking-wider font-semibold">
              DATA GOVERNANCE & PROVENANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 3-Tier ARGUS Intelligence Pipeline
            </h3>
            <p className="text-slate-400 text-sm">
              How we transform millions of raw global data points into dependable operational guidance with 99.9% reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-[#0D121F] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono font-bold">
                01
              </div>
              <h4 className="text-base font-bold text-white flex items-center space-x-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span>Multi-Vector OSINT Ingestion</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated continuous harvesting of civil aviation NOTAMs, satellite synthetic aperture radar (SAR), local police dispatches, transport union notices, and multilingual local media in 42 languages.
              </p>
              <div className="text-[11px] font-mono text-blue-400 pt-2 border-t border-white/5 font-semibold">
                &gt; 42,000 sources ingested / hour
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0D121F] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono font-bold">
                02
              </div>
              <h4 className="text-base font-bold text-white flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>AI / NLP Tourism Relevance Filtering</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Proprietary machine learning models classify signals against tourism vulnerability taxonomies. Irrelevant domestic politics are discarded; aviation closures and road blockades are elevated instantly.
              </p>
              <div className="text-[11px] font-mono text-blue-400 pt-2 border-t border-white/5 font-semibold">
                &lt; 60 seconds processing latency
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0D121F] border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono font-bold">
                03
              </div>
              <h4 className="text-base font-bold text-white flex items-center space-x-2">
                <CheckCheck className="w-4 h-4 text-emerald-400" />
                <span>Human Analyst & Ground Verification</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Critical and Elevated severity events (Score &gt; 5.0) trigger immediate verification protocols with our regional correspondent network and ground DMC partners before posture updates are broadcast.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-white/5 font-semibold">
                99.9% verified operational accuracy
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof & Testimonials Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-blue-400 tracking-wider font-semibold">
              INDUSTRY SOCIAL PROOF
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Trusted by Tour Operators, Airlines, & Insurers Globally
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                id={`testimonial-${t.id}`}
                className="bg-[#0D121F] border border-white/5 rounded-2xl p-6 flex flex-col justify-between space-y-4 relative hover:border-blue-500/30 transition-all"
              >
                <Quote className="w-8 h-8 text-blue-500/20 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed relative z-10">
                  "{t.quote}"
                </p>

                <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                  <img
                    src={t.avatarUrl}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-blue-500/40"
                  />
                  <div>
                    <div className="font-bold text-xs text-white">{t.author}</div>
                    <div className="text-[11px] text-slate-400">{t.role}</div>
                    <div className="text-[10px] text-blue-400 font-mono">{t.company} • {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center bg-[#0D121F] border border-white/10 rounded-2xl p-8 sm:p-12 space-y-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-[100px] pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white relative z-10">
            Ready to Upgrade Your Tourism Operations to Proactive Risk Intelligence?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto relative z-10">
            Schedule a personalized walkthrough with an ARGUS geopolitical intelligence specialist or activate your 14-day Professional trial today.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              id="about-cta-demo-btn"
              onClick={() => onOpenDemoModal('pro')}
              className="px-6 py-3 rounded-xl text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/30 flex items-center space-x-2 transition-all"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
