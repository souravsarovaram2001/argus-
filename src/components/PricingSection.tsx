import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Building2, 
  Radio 
} from 'lucide-react';
import { PRICING_PLANS } from '../data/mockIntelligence';

interface PricingSectionProps {
  onOpenDemoModal: (planId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenDemoModal,
}) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  const faqs = [
    {
      q: 'How does ARGUS calculate the 0–10 risk score?',
      a: 'ARGUS uses a proprietary multi-vector ingestion engine combining OSINT (open-source intelligence), civil aviation NOTAMs, satellite displacement telemetry, and local police and transport reports. This raw data is synthesized through NLP algorithms and calibrated with Living Lab validation from IIM Sirmaur.',
    },
    {
      q: 'What is the 14-day free trial on the Professional tier?',
      a: 'You receive instant access to full real-time intelligence feeds, AI executive brief generation, destination comparison tools, and multi-channel incident push alerts for your operational team. No credit card is required to start.',
    },
    {
      q: 'Can we integrate ARGUS into our existing Tour CMS or GDS?',
      a: 'Yes. Enterprise subscribers receive full access to our RESTful APIs, Webhook event subscriptions, and SDKs to embed real-time safety scores directly into booking confirmation flows, passenger mobile apps, and ops dispatch screens.',
    },
    {
      q: 'Why ₹4,999 / month for DMCs and Tour Operators?',
      a: 'Preventing even a single unwarranted group tour cancellation of 12 passengers can save a DMC upwards of ₹8,00,000 to ₹15,00,000 ($10,000–$20,000) in lost non-refundable deposits and hotel prepayments. ARGUS pays for itself with one saved booking.',
    },
  ];

  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-[#050810] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENT ENTERPRISE PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Protect Revenue and Traveler Safety with Predictable Investment
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose the intelligence tier that matches your operational scale. From boutique researchers to global airline networks.
          </p>

          {/* Billing & Currency Toggles */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {/* Monthly / Annual Toggle */}
            <div className="bg-[#0D121F] border border-white/10 rounded-xl p-1.5 flex items-center space-x-2">
              <button
                id="billing-monthly-btn"
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  !isAnnual
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                id="billing-annual-btn"
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center space-x-1.5 transition-all ${
                  isAnnual
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  SAVE 20%
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="bg-[#0D121F] border border-white/10 rounded-xl p-1.5 flex items-center space-x-1 text-xs font-mono">
              <button
                id="currency-inr-btn"
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1 rounded ${
                  currency === 'INR' ? 'bg-[#161C2C] text-blue-400 font-bold border border-white/10' : 'text-slate-400'
                }`}
              >
                ₹ INR
              </button>
              <button
                id="currency-usd-btn"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded ${
                  currency === 'USD' ? 'bg-[#161C2C] text-blue-400 font-bold border border-white/10' : 'text-slate-400'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.id === 'pro';
            const price = currency === 'INR'
              ? (isAnnual ? plan.priceAnnualINR : plan.priceMonthlyINR)
              : (isAnnual ? plan.priceAnnualUSD : plan.priceMonthlyUSD);

            const displayPrice = plan.id === 'enterprise' 
              ? 'Custom' 
              : price === 0 
                ? 'Free' 
                : currency === 'INR' 
                  ? `₹${price.toLocaleString()}` 
                  : `$${price}`;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`rounded-2xl flex flex-col justify-between p-6 sm:p-8 transition-all relative ${
                  isPro
                    ? 'bg-[#0D121F] border-2 border-blue-500 shadow-2xl shadow-blue-950/60 scale-102 z-10'
                    : 'bg-[#0D121F] border border-white/10'
                }`}
              >
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-mono font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md shadow-blue-900/40">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    {!isPro && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161C2C] text-slate-400 border border-white/10">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 mb-6 min-h-[32px]">
                    {plan.target}
                  </p>

                  <div className="mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                        {displayPrice}
                      </span>
                      {plan.id !== 'free' && plan.id !== 'enterprise' && (
                        <span className="text-xs font-mono text-slate-400">
                          / month {isAnnual ? '(billed annually)' : ''}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 mt-2">{plan.description}</p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                      INCLUDED CAPABILITIES:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  id={`pricing-cta-${plan.id}`}
                  onClick={() => onOpenDemoModal(plan.id)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold font-mono flex items-center justify-center space-x-2 transition-all shadow-sm ${
                    isPro
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30'
                      : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-blue-500'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Enterprise Bespoke Quote Callout */}
        <div className="mt-12 bg-[#0D121F] border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need Custom Country Geofences or White-Label Reports?</h4>
              <p className="text-xs text-slate-400">
                We configure bespoke institutional intelligence nodes for airlines, insurance pools, and national tourism ministries.
              </p>
            </div>
          </div>
          <button
            id="enterprise-direct-sales-btn"
            onClick={() => onOpenDemoModal('enterprise')}
            className="px-4 py-2 rounded-lg text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 shrink-0"
          >
            Talk to Geopolitical Risk Specialist
          </button>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-16 pt-12 border-t border-white/5 max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Everything you need to know about ARGUS data feeds, SLAs, and licensing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0D121F] p-5 rounded-xl border border-white/5 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-start space-x-2">
                  <HelpCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
