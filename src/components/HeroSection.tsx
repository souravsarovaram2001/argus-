import React from 'react';
import { 
  Shield, 
  ArrowRight, 
  Activity, 
  CheckCircle2, 
  Globe2, 
  AlertOctagon, 
  Cpu, 
  FileCheck, 
  Sparkles,
  Lock,
  Building,
  Plane
} from 'lucide-react';
import { InteractiveRiskDashboard } from './InteractiveRiskDashboard';

interface HeroSectionProps {
  onExploreDashboard: () => void;
  onOpenDemoModal: (planId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDashboard,
  onOpenDemoModal,
}) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-[#050810]">
      {/* Background Subtle Geopolitical Grid Lines & Gradient Accent */}
      <div className="absolute inset-0 dot-matrix opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-semibold">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="tracking-wide uppercase font-mono">
              ENTERPRISE RISK INTELLIGENCE
            </span>
            <span className="text-slate-600 font-mono">•</span>
            <span className="text-slate-300 font-normal">
              Validated by IIM Sirmaur Living Lab
            </span>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Turn Geopolitical Uncertainty Into{' '}
            <span className="text-blue-500">
              Operational Clarity.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            The real-time geopolitical intelligence dashboard built specifically for tour operators, DMCs, airlines, and hospitality brands.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="hero-explore-dashboard-cta"
              onClick={onExploreDashboard}
              className="w-full sm:w-auto bg-white text-black font-bold px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-200 transition-all shadow-lg shadow-white/5 active:scale-98"
            >
              <span>Explore Live Risk Dashboard</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <button
              id="hero-schedule-demo-cta"
              onClick={() => onOpenDemoModal()}
              className="w-full sm:w-auto border border-white/10 bg-white/5 font-bold px-8 py-3.5 rounded-lg hover:bg-white/10 text-white flex items-center justify-center gap-2 transition-all"
            >
              <span>Schedule a Demo</span>
            </button>
          </div>

          {/* Value Micro-Props */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>0–10 Tourism Risk Scale</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>4 Postures: Continue / Monitor / Modify / Suspend</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>&lt;60s AI Executive Summaries</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>OSINT + Ground Truth Verification</span>
            </div>
          </div>
        </div>

        {/* Live Risk Intelligence Console Embedded Directly in the Hero */}
        <div className="mt-12 lg:mt-16">
          <div className="text-center mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
              Interactive Terminal Preview • Click Any Country to Test Real-Time Risk Triangulation
            </span>
          </div>
          <InteractiveRiskDashboard onOpenDemoModal={onOpenDemoModal} />
        </div>

        {/* Institutional Backing & Metrics Bar */}
        <div className="mt-14 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Data Reliability</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">&lt; 1 MIN</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">AI Summary Speed</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">180+</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Countries Monitored</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">IIM Sirmaur</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Academic Heritage</div>
          </div>
        </div>
      </div>
    </section>
  );
};
