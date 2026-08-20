import React, { useState } from 'react';
import { 
  Shield, 
  ArrowRight, 
  Activity, 
  CheckCircle2, 
  Globe2, 
  AlertTriangle, 
  Cpu, 
  Plane, 
  Building2, 
  Compass, 
  Sparkles, 
  Landmark, 
  Scale, 
  Layers, 
  ChevronRight,
  TrendingDown,
  Clock,
  Zap,
  Radio,
  FileText,
  MapPin,
  Check
} from 'lucide-react';
import { COUNTRY_PROFILES, RISK_COLOR_MAP, OPERATIONAL_STATUS_CONFIG } from '../data/mockIntelligence';
import { CountryRiskProfile } from '../types';

interface OverviewSectionProps {
  onNavigate: (tabId: string) => void;
  onOpenDemoModal: (planId?: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  onNavigate,
  onOpenDemoModal,
}) => {
  // Spotlight destinations for the concise interactive radar
  const spotlightDestinations = ['KEN', 'EGY', 'PER', 'FRA', 'THA'];
  const [selectedCode, setSelectedCode] = useState<string>('KEN');

  const selectedCountry = COUNTRY_PROFILES.find((c) => c.code === selectedCode) || COUNTRY_PROFILES[0];
  const riskMeta = RISK_COLOR_MAP[selectedCountry.level] || RISK_COLOR_MAP.MODERATE;
  const statusMeta = OPERATIONAL_STATUS_CONFIG[selectedCountry.status] || OPERATIONAL_STATUS_CONFIG.MONITOR;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-12 overflow-hidden bg-[#050810]">
        <div className="absolute inset-0 dot-matrix opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-blue-600/20 blur-[130px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-semibold">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="tracking-wide uppercase font-mono">ENTERPRISE RISK INTELLIGENCE</span>
            <span className="text-slate-600 font-mono">•</span>
            <span className="text-slate-300 font-normal">Validated by IIM Sirmaur Living Lab</span>
          </div>

          {/* Heading */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Proactive Geopolitical Risk Intelligence for{' '}
              <span className="text-blue-500">Tourism Operations</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Convert fragmented global signals into real-time 0–10 risk indices, sector impact matrices, and actionable operational postures in under 60 seconds.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              id="hero-overview-console-btn"
              onClick={() => onNavigate('dashboard')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/30 active:scale-98 text-sm"
            >
              <Activity className="w-4 h-4" />
              <span>Launch Live Risk Console</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              id="hero-overview-demo-btn"
              onClick={() => onOpenDemoModal('pro')}
              className="w-full sm:w-auto border border-white/10 bg-[#0D121F] hover:bg-[#161C2C] font-semibold px-7 py-3.5 rounded-xl text-slate-200 flex items-center justify-center gap-2 transition-all text-sm"
            >
              <span>Schedule Enterprise Demo</span>
            </button>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 text-left">
            <div className="bg-[#0D121F] border border-white/5 p-4 rounded-xl">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">184</div>
              <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">Destinations Monitored</div>
            </div>
            <div className="bg-[#0D121F] border border-white/5 p-4 rounded-xl">
              <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">&lt; 60s</div>
              <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">AI Summary Latency</div>
            </div>
            <div className="bg-[#0D121F] border border-white/5 p-4 rounded-xl">
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">99.9%</div>
              <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">Signal Accuracy</div>
            </div>
            <div className="bg-[#0D121F] border border-white/5 p-4 rounded-xl">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">IIM Sirmaur</div>
              <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">Living Lab Validated</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPACT LIVE RISK RADAR WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D121F] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-blue-400 font-semibold mb-1">
                <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span>LIVE TELEMETRY RADAR (QUICK PREVIEW)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Active Destination Threat Index
              </h2>
            </div>

            {/* Destination Selector Tabs */}
            <div className="flex items-center flex-wrap gap-1.5 bg-[#050810] p-1.5 rounded-xl border border-white/5">
              {spotlightDestinations.map((code) => {
                const c = COUNTRY_PROFILES.find((item) => item.code === code);
                if (!c) return null;
                const isSelected = selectedCode === code;
                return (
                  <button
                    key={code}
                    id={`overview-radar-${code}`}
                    onClick={() => setSelectedCode(code)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center space-x-1.5 ${
                      isSelected
                        ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/30'
                        : 'text-slate-400 hover:text-white hover:bg-[#161C2C]'
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className={`text-[10px] px-1 py-0.2 rounded ${isSelected ? 'bg-black/20 text-white' : 'text-slate-400'}`}>
                      {c.score.toFixed(1)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Card Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Score & Posture */}
            <div className="lg:col-span-4 bg-[#161C2C] border border-white/5 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400">{selectedCountry.region}</span>
                  <h3 className="text-2xl font-bold text-white">{selectedCountry.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold font-mono text-white">
                    {selectedCountry.score.toFixed(1)}
                    <span className="text-xs text-slate-500 font-sans ml-1">/10</span>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${riskMeta.badge}`}>
                    {selectedCountry.level}
                  </span>
                </div>
              </div>

              {/* Actionable Posture Badge */}
              <div className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between ${statusMeta.color}`}>
                <div>
                  <div className="text-[10px] uppercase opacity-75">Operational Posture:</div>
                  <div className="font-bold text-sm tracking-wider">{selectedCountry.status}</div>
                </div>
                <Compass className="w-5 h-5 opacity-80" />
              </div>

              {/* Sector Status Mini-Grid */}
              <div className="space-y-1.5 pt-2 border-t border-white/5">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Sector Impact:</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="p-2 bg-[#0D121F] rounded border border-white/5 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center space-x-1">
                      <Plane className="w-3 h-3 text-blue-400" />
                      <span>Aviation</span>
                    </span>
                    <span className="text-emerald-400 font-bold">{selectedCountry.impact.aviation}</span>
                  </div>
                  <div className="p-2 bg-[#0D121F] rounded border border-white/5 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center space-x-1">
                      <Building2 className="w-3 h-3 text-blue-400" />
                      <span>Hotels</span>
                    </span>
                    <span className="text-emerald-400 font-bold">{selectedCountry.impact.hospitality}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Operational Briefing & Mitigations */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-[#161C2C] border border-white/5 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-blue-400 font-bold">OPERATIONAL INTELLIGENCE BRIEF:</span>
                  <span>Updated {selectedCountry.lastUpdated}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {selectedCountry.summary}
                </p>

                <div className="pt-2 border-t border-white/5 space-y-2">
                  <div className="text-[11px] font-mono text-blue-400 font-bold uppercase">Recommended Mitigation Directives:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCountry.mitigationSteps.slice(0, 2).map((step, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-[#0D121F] border border-white/5 text-xs text-slate-300 flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA to open full console */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <div className="text-xs font-mono text-slate-400">
                  Full intelligence dossiers include safe corridor maps, AI client memos, and NOTAM alerts.
                </div>
                <button
                  id="overview-launch-full-console-btn"
                  onClick={() => onNavigate('dashboard')}
                  className="px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold flex items-center space-x-1.5 transition-all shrink-0"
                >
                  <span>Open Full Analysis in Console</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARADIGM SHIFT: THE OLD WAY VS THE ARGUS WAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-mono uppercase text-blue-400 tracking-wider font-semibold">
            THE PARADIGM SHIFT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Why Embassy Advisories Fail Tourism Operations
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Government warnings are designed for diplomatic bureaucracy. ARGUS delivers the operational resolution travel executives need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Legacy Box */}
          <div className="bg-[#0D121F] border border-rose-500/20 rounded-2xl p-6 space-y-4">
            <div className="flex items-center space-x-2 text-rose-400 font-mono text-xs font-bold pb-3 border-b border-rose-500/20">
              <Clock className="w-4 h-4" />
              <span>THE OLD WAY: DIPLOMATIC EMBASSY BULLETINS</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span><strong>48–72h Latency:</strong> Bureaucratic sign-offs delay notices long after events occur on the ground.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span><strong>Broad Countrywide Bans:</strong> Color-codes an entire 500,000 sq km nation due to an isolated protest 800 km away.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">✕</span>
                <span><strong>Panic Cancellations:</strong> Retail agencies demand 100% refunds; unrecoverable non-refundable tour deposits lost.</span>
              </li>
            </ul>
            <div className="pt-2 text-[11px] font-mono text-rose-400 bg-rose-950/20 p-2.5 rounded-lg border border-rose-500/20 text-center">
              Average Loss: 38% preventable tour cancellations per season.
            </div>
          </div>

          {/* ARGUS Box */}
          <div className="bg-[#0D121F] border border-blue-500/30 rounded-2xl p-6 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[60px] pointer-events-none" />
            <div className="flex items-center space-x-2 text-blue-400 font-mono text-xs font-bold pb-3 border-b border-blue-500/20 relative z-10">
              <Zap className="w-4 h-4" />
              <span>THE ARGUS WAY: REAL-TIME GEOPOLITICAL OSINT</span>
            </div>
            <ul className="space-y-3 text-xs text-slate-300 relative z-10">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold">✓</span>
                <span><strong>&lt;60s Processing:</strong> Continuous ingestion across NOTAMs, satellite SAR, transit unions, and local police feeds.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold">✓</span>
                <span><strong>0–10 Sector Indices:</strong> Distinct ratings for Aviation, Lodging, Overland Highways, and Excursions.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 font-bold">✓</span>
                <span><strong>Operational Postures:</strong> 4 clear SOPs (Continue / Monitor / Modify / Suspend) to safely re-route itineraries.</span>
              </li>
            </ul>
            <div className="pt-2 text-[11px] font-mono text-blue-400 bg-blue-500/10 p-2.5 rounded-lg border border-blue-500/20 text-center font-bold relative z-10">
              Result: 92% of affected passenger bookings safely preserved.
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLATFORM PILLARS (QUICK JUMP LINKS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-mono uppercase text-blue-400 tracking-wider font-semibold">
            PLATFORM CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Built Specifically for Travel &amp; Tourism Workflows
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => onNavigate('features')}
            className="bg-[#0D121F] border border-white/5 hover:border-blue-500/40 p-6 rounded-2xl space-y-3 cursor-pointer group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
              <span>0–10 Scoring &amp; AI Summaries</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Granular numerical indices calibrated against tourism vulnerability parameters with automated one-click executive client briefings.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('solutions')}
            className="bg-[#0D121F] border border-white/5 hover:border-blue-500/40 p-6 rounded-2xl space-y-3 cursor-pointer group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
              <span>Tailored Industry Solutions</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated playbooks and monitoring consoles for Inbound DMCs, Wholesale Operators, Airlines, Hotel Groups, and Underwriters.
            </p>
          </div>

          <div 
            onClick={() => onNavigate('compare')}
            className="bg-[#0D121F] border border-white/5 hover:border-blue-500/40 p-6 rounded-2xl space-y-3 cursor-pointer group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
              <span>Multi-Country Risk Comparison</span>
              <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Audit risk scores across adjacent destinations simultaneously to reroute flight charter legs and safari itineraries safely.
            </p>
          </div>
        </div>
      </section>

      {/* 5. ACADEMIC HERITAGE & TRIAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D121F] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                <Landmark className="w-3.5 h-3.5" />
                <span>ACADEMIC LIVING LAB HERITAGE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Co-Created with 120+ Inbound DMCs Under Academic Rigor
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Incubated via empirical field research under guidance from Indian Institute of Management Sirmaur (IIM Sirmaur). Every risk score adheres to peer-reviewed data provenance standards.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                id="overview-bottom-trial-btn"
                onClick={() => onOpenDemoModal('pro')}
                className="w-full py-3.5 px-6 rounded-xl text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/30 flex items-center justify-center space-x-2 transition-all"
              >
                <span>Start 14-Day Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="overview-bottom-explore-pricing-btn"
                onClick={() => onNavigate('pricing')}
                className="w-full py-3.5 px-6 rounded-xl text-xs font-mono font-semibold text-slate-300 bg-[#161C2C] hover:bg-[#161C2C]/80 border border-white/5 flex items-center justify-center space-x-1 transition-all"
              >
                <span>View Subscription Plans (₹4,999/mo)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
