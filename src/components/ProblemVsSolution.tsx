import React from 'react';
import { 
  XCircle, 
  CheckCircle, 
  Clock, 
  Zap, 
  FileWarning, 
  Sparkles, 
  AlertCircle, 
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  HelpCircle,
  Compass
} from 'lucide-react';

export const ProblemVsSolution: React.FC = () => {
  const comparisons = [
    {
      metric: 'Data Sources & Latency',
      oldWay: {
        title: 'Fragmented Embassy Advisories',
        desc: 'Scouring 15+ governmental foreign office websites, outdated embassy bulletins, and sensationalist cable news 48–72 hours after events unfold.',
        icon: Clock,
      },
      argusWay: {
        title: 'Centralized Multi-Vector OSINT',
        desc: 'Continuous real-time ingestion across NOTAMs, satellite displacement feeds, local police telemetry, and multilingual news in <60 seconds.',
        icon: Zap,
      },
    },
    {
      metric: 'Risk Quantification',
      oldWay: {
        title: 'Vague Color Codes & Subjective Fear',
        desc: 'Broad "Do Not Travel" warnings covering entire 500,000 sq km countries because of an isolated political protest 800 km from safari or beach corridors.',
        icon: FileWarning,
      },
      argusWay: {
        title: 'Dynamic 0–10 Tourism Risk Scale',
        desc: 'Precise numeric indices segmented by tourism vertical: Aviation, Overland Transport, Hotel Zones, Excursions, and Border Gates.',
        icon: ShieldCheck,
      },
    },
    {
      metric: 'Decision-Making & SOPs',
      oldWay: {
        title: 'Paralysis & Blanket Cancellations',
        desc: 'Operations managers scramble blindly; panicking retail travel agencies demand 100% refunds; tens of thousands in unrecoverable deposits lost.',
        icon: TrendingDown,
      },
      argusWay: {
        title: 'Definitive Operational Postures',
        desc: 'Instant clarity with 4 actionable postures: CONTINUE, MONITOR, MODIFY, or SUSPEND — backed by automated client safety certificates.',
        icon: Compass,
      },
    },
    {
      metric: 'Executive Reporting',
      oldWay: {
        title: 'Manual 4-Hour Memo Drafts',
        desc: 'Operations staff waste entire mornings copy-pasting news articles to brief wholesale partners, airlines, and insurance underwriters.',
        icon: HelpCircle,
      },
      argusWay: {
        title: 'AI Executive Briefs in <60s',
        desc: 'Instant timestamped executive summaries highlighting safe corridors, mitigation steps, and contract-ready risk disclaimers.',
        icon: Sparkles,
      },
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#050810] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <span>PARADIGM SHIFT IN TOURISM RISK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stop Guessing with Embassy Bulletins.{' '}
            <span className="text-blue-500">Operate with Real-Time Precision.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Traditional travel advisories are designed for diplomatic bureaucracy — not commercial tour logistics. ARGUS delivers the operational resolution travel executives need to protect revenue and traveler safety.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The Old Way Box */}
          <div className="bg-[#0D121F] border border-rose-500/20 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">The Old Way</h3>
                  <p className="text-xs text-rose-300/80 font-mono">Reactive • Slow • Revenue-Destroying</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-rose-950/50 text-rose-400 border border-rose-500/30">
                Legacy Advisories
              </span>
            </div>

            <div className="space-y-6">
              {comparisons.map((c, idx) => (
                <div key={idx} className="space-y-1.5 bg-[#161C2C] p-4 rounded-xl border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">{c.metric}</div>
                  <h4 className="text-sm font-semibold text-rose-200 flex items-center space-x-2">
                    <c.oldWay.icon className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{c.oldWay.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{c.oldWay.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center text-xs font-mono text-rose-400 bg-rose-950/20 p-3 rounded-lg border border-rose-500/20">
              Result: 38% unneeded tour cancellations and irreversible margin loss.
            </div>
          </div>

          {/* The ARGUS Way Box */}
          <div className="bg-[#0D121F] border border-blue-500/30 rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl shadow-blue-950/50">
            {/* Subtle blue accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-blue-500/20 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">The ARGUS Way</h3>
                  <p className="text-xs text-blue-400 font-mono">Proactive • Real-Time • Revenue-Protecting</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30 font-bold">
                ARGUS Intelligence
              </span>
            </div>

            <div className="space-y-6 relative z-10">
              {comparisons.map((c, idx) => (
                <div key={idx} className="space-y-1.5 bg-[#161C2C] p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="text-[11px] font-mono text-blue-400 uppercase">{c.metric}</div>
                  <h4 className="text-sm font-semibold text-white flex items-center space-x-2">
                    <c.argusWay.icon className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{c.argusWay.title}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{c.argusWay.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center text-xs font-mono text-blue-400 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 font-semibold relative z-10">
              Result: 92% of affected bookings safely re-routed and retained.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
