import React, { useState } from 'react';
import { 
  BarChart3, 
  Plane, 
  Sparkles, 
  BellRing, 
  Scale, 
  Compass, 
  ArrowRight, 
  Check, 
  Shield, 
  Layers, 
  Radio,
  FileCheck
} from 'lucide-react';

interface CoreFeaturesGridProps {
  onSelectFeature?: (featureId: string) => void;
  onOpenDemoModal: (planId?: string) => void;
}

export const CoreFeaturesGrid: React.FC<CoreFeaturesGridProps> = ({
  onSelectFeature,
  onOpenDemoModal,
}) => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      id: 'dynamic-scoring',
      icon: BarChart3,
      number: '01',
      title: 'Dynamic 0–10 Risk Scoring System',
      tag: 'Continuous Geopolitical Indexing',
      description: 'Unlike static 4-tier government warnings, ARGUS computes dynamic 0–10 risk scores updated continuously via weighted algorithmic triangulation of OSINT, border NOTAMs, and localized incident reports.',
      highlights: [
        'Granular 5-band color spectrum (Green 0–2 to Black 9–10)',
        'Segmented regional and provincial indices within countries',
        'Historical volatility tracking and trend direction (Rising/Stable/Falling)',
      ],
      badge: 'Core Engine',
    },
    {
      id: 'sector-impact',
      icon: Plane,
      number: '02',
      title: 'Tourism-Specific Impact Assessment',
      tag: 'Vertical Resolution',
      description: 'Geopolitical events affect tourism vectors differently. ARGUS independently audits and scores disruption across Aviation corridors, Rail & Overland transit, Hotel & Resort hubs, Excursion zones, and Border control posts.',
      highlights: [
        'Dedicated Bush airstrip and international airport status checks',
        'Overland road blockade & inter-city rail curfew telemetry',
        'Hospitality supply chain strain & perimeter security indexes',
      ],
      badge: 'Sector Granularity',
    },
    {
      id: 'ai-summaries',
      icon: Sparkles,
      number: '03',
      title: 'AI-Generated Executive Summaries',
      tag: 'NLP Synthesis <60s',
      description: 'Converts tens of thousands of multilingual raw news feeds, police dispatches, and flight alerts into clear, professional 1-minute executive briefings tailored for tour dispatchers and executive stakeholders.',
      highlights: [
        'Distills complex geopolitical tensions into plain operational English',
        'Automatically highlights verified safe corridors vs. caution zones',
        'Includes exportable client-ready safety verification memos',
      ],
      badge: 'AI-Powered',
    },
    {
      id: 'crisis-alerts',
      icon: BellRing,
      number: '04',
      title: 'Instant Crisis Alerts & Telemetry',
      tag: 'Multi-Channel Push',
      description: 'Zero-latency multi-channel notification engine. Receive instantaneous incident warnings directly via Webhook, SMS, Push, WhatsApp, and automated API feeds for traveler GPS geofences.',
      highlights: [
        'Sub-minute incident detection from signal ingestion to dispatch',
        'Customizable severity thresholds and destination watchlists',
        'Driver & tour director broadcast SMS dispatcher integration',
      ],
      badge: 'Real-Time Dispatch',
    },
    {
      id: 'destination-compare',
      icon: Scale,
      number: '05',
      title: 'Destination Risk Comparison Tool',
      tag: 'Itinerary Optimization',
      description: 'Benchmark multiple travel destinations side-by-side. Compare geopolitical stability, transit disruptions, emergency medical support scores, and insurance risk multipliers to balance group tour portfolios.',
      highlights: [
        'Multi-country side-by-side radar and matrix comparison',
        'Seasonal geopolitical volatility forecasting for itinerary design',
        'Underwriting & reinsurance risk correlation metrics',
      ],
      badge: 'Strategic Planning',
    },
    {
      id: 'actionable-sops',
      icon: Compass,
      number: '06',
      title: 'Actionable Operational Recommendations',
      tag: 'Standard Operating Procedures',
      description: 'Never leave operations managers wondering what to do next. Every alert delivers a clear posture (CONTINUE, MONITOR, MODIFY, or SUSPEND) accompanied by actionable SOP mitigation checklists.',
      highlights: [
        'Pre-engineered contingency rerouting blueprints',
        'Consular escalation contact matrices and emergency standby checklists',
        'Contractual force majeure legal compliance indicators',
      ],
      badge: 'Action-Driven',
    },
  ];

  return (
    <section id="features-section" className="py-16 sm:py-24 bg-[#050810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>ENTERPRISE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Six Pillars of Proactive Tourism Risk Intelligence
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineered from ground-truth Living Lab research at IIM Sirmaur to solve the high-stakes operational realities of global travel management.
          </p>
        </div>

        {/* 6-Grid Feature Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="bg-[#0D121F] border border-white/5 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#161C2C] border border-white/10 group-hover:border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-bold group-hover:text-blue-400 transition-colors">
                      {feature.number}
                    </span>
                  </div>

                  <div className="inline-block text-[11px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 mb-2 font-semibold">
                    {feature.tag}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5 mb-6">
                    {feature.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  id={`feature-cta-${feature.id}`}
                  onClick={() => onOpenDemoModal('pro')}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-mono font-bold text-slate-300 bg-white/5 hover:bg-blue-600 hover:text-white border border-white/10 hover:border-blue-500 flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>See Live in Demo Console</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Deep Dive Highlight Banner */}
        <div className="mt-12 bg-[#0D121F] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] pointer-events-none" />
          <div className="space-y-2 max-w-2xl relative z-10">
            <div className="flex items-center space-x-2">
              <Radio className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                GDS & Booking Engine Integration
              </span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Connect ARGUS Directly into Amadeus, Sabre, or Proprietary DMC ERPs
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Deliver proactive safety telemetry straight to your booking confirmation emails, passenger mobile apps, and ops room monitors via our developer-friendly REST and Webhook APIs.
            </p>
          </div>

          <div className="shrink-0 flex items-center space-x-3 relative z-10">
            <button
              id="feature-api-docs-btn"
              onClick={() => onOpenDemoModal('enterprise')}
              className="px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 transition-all"
            >
              Request API Specs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
