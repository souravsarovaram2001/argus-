import React, { useState } from 'react';
import { 
  Compass, 
  Building2, 
  Plane, 
  ShieldCheck, 
  Landmark, 
  Briefcase, 
  Check, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { USE_CASES_DATA } from '../data/mockIntelligence';

interface TargetAudienceTabsProps {
  onOpenDemoModal: (planId?: string) => void;
}

export const TargetAudienceTabs: React.FC<TargetAudienceTabsProps> = ({
  onOpenDemoModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>('dmc-operators');

  const iconsMap: Record<string, React.ElementType> = {
    'dmc-operators': Compass,
    'hotels-resorts': Building2,
    'airlines-charters': Plane,
    'travel-insurers': ShieldCheck,
    'tourism-boards': Landmark,
  };

  const selectedCase = USE_CASES_DATA.find((u) => u.id === activeTab) || USE_CASES_DATA[0];
  const ActiveIcon = iconsMap[selectedCase.id] || Compass;

  return (
    <section id="solutions-section" className="py-16 sm:py-24 bg-[#050810] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TAILORED INDUSTRY SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Every Stakeholder in the Global Tourism Ecosystem
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether dispatching safari convoys, managing 500-room coastal resorts, or underwriting billion-dollar trip cancellation risk portfolios.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
          {USE_CASES_DATA.map((useCase) => {
            const Icon = iconsMap[useCase.id] || Compass;
            const isActive = activeTab === useCase.id;
            return (
              <button
                key={useCase.id}
                id={`tab-usecase-${useCase.id}`}
                onClick={() => setActiveTab(useCase.id)}
                className={`flex items-center space-x-2.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-950/50 font-bold'
                    : 'bg-[#0D121F] text-slate-300 border-white/5 hover:border-white/10 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                <span>{useCase.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Box */}
        <div className="mt-8 bg-[#0D121F] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20">
                  {selectedCase.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedCase.headline}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedCase.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                  OPERATIONAL WORKFLOW HIGHLIGHTS:
                </span>
                {selectedCase.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="solution-demo-cta-btn"
                  onClick={() => onOpenDemoModal('pro')}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/30 flex items-center space-x-2 transition-all"
                >
                  <span>Request Customized {selectedCase.title} Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right KPI & Mock Workflow Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#050810] border border-white/10 rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <ActiveIcon className="w-4 h-4 text-blue-400" />
                  <span className="uppercase tracking-wider">Measured Operational Impact</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  VERIFIED
                </span>
              </div>

              {/* Huge KPI highlight */}
              <div className="bg-[#161C2C] border border-white/5 p-5 rounded-xl text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-400">
                  {selectedCase.metric}
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {selectedCase.metricLabel}
                </div>
              </div>

              {/* Sample Workflow Simulation */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="text-slate-400 uppercase text-[11px] tracking-wider">Simulated Event Execution:</div>
                <div className="p-3 bg-[#161C2C] rounded-lg border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-blue-400 font-semibold">T+00m: OSINT Signal Ingested</span>
                    <span className="text-slate-500">Auto-Validated</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    Multi-source corroboration cross-references police dispatch and local airport NOTAMs.
                  </p>
                </div>
                <div className="p-3 bg-[#161C2C] rounded-lg border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-emerald-400 font-semibold">T+01m: Dynamic Posture Issued</span>
                    <span className="text-slate-500">Action: MODIFY</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-sans">
                    GPS rerouting coordinates pushed directly to field tour director app and driver mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
