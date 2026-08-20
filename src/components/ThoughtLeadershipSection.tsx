import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  FileText, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Share2, 
  Sparkles,
  Shield,
  Layers
} from 'lucide-react';
import { RESOURCE_ITEMS } from '../data/mockIntelligence';
import { ResourceItem } from '../types';

interface ThoughtLeadershipSectionProps {
  onOpenDemoModal: (planId?: string) => void;
}

export const ThoughtLeadershipSection: React.FC<ThoughtLeadershipSectionProps> = ({
  onOpenDemoModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [activeReadingItem, setActiveReadingItem] = useState<ResourceItem | null>(null);

  const categories = ['All', 'Aviation', 'Crisis Management', 'DMC Operations', 'Insurance'];

  const filteredItems = RESOURCE_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <section id="resources-section" className="py-16 sm:py-24 bg-[#050810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ACADEMIC & FIELD RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Geopolitical Tourism Intelligence & Whitepapers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tactical playbooks, crisis frameworks, and longitudinal geopolitical analyses published by the ARGUS Research Unit in partnership with the IIM Sirmaur Living Lab.
          </p>

          {/* Category Filter */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-res-${cat}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/40'
                    : 'bg-[#0D121F] text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`resource-item-${item.id}`}
              className="bg-[#0D121F] border border-white/5 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group hover:shadow-2xl hover:shadow-blue-950/40"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                    {item.type} • {item.category}
                  </span>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <span>{item.publishedDate}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="text-[11px] font-mono text-slate-400 mb-6">
                  Author: <span className="text-slate-200">{item.author}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  id={`read-resource-${item.id}`}
                  onClick={() => setActiveReadingItem(item)}
                  className="text-xs font-mono font-bold text-blue-400 hover:text-blue-300 flex items-center space-x-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Executive Summary</span>
                </button>

                <button
                  id={`download-resource-${item.id}`}
                  onClick={() => onOpenDemoModal('pro')}
                  className="p-2 rounded-lg bg-[#161C2C] text-slate-400 hover:text-white border border-white/10 hover:border-blue-500 transition-colors"
                  title="Download full PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Interactive Executive Summary Preview */}
        {activeReadingItem && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0D121F] border border-white/10 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-fade-in relative max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between border-b border-white/5 pb-4">
                <div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                    {activeReadingItem.type} — {activeReadingItem.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 font-mono">
                    {activeReadingItem.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Published: {activeReadingItem.publishedDate} • By {activeReadingItem.author}
                  </p>
                </div>
                <button
                  id="close-reader-modal"
                  onClick={() => setActiveReadingItem(null)}
                  className="text-slate-400 hover:text-white text-xl p-1"
                >
                  ✕
                </button>
              </div>

              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-sans">
                <p><strong>Executive Abstract:</strong></p>
                <p>{activeReadingItem.summary}</p>
                <div className="bg-[#161C2C] p-4 rounded-xl border border-white/5 font-mono text-xs text-slate-200 space-y-2">
                  <div className="text-blue-400 font-bold">KEY OPERATIONAL TAKEAWAYS:</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Multi-vector OSINT triangulation detects transit choke points 48 hours prior to legacy embassy bulletin releases.</li>
                    <li>0–10 segment risk metrics empower DMCs to reroute within safe corridors without triggering panic-driven trip cancellations.</li>
                    <li>Living Lab validation at IIM Sirmaur ensures statistical rigour across 180+ monitored tourism destinations.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  id="reader-download-full-pdf"
                  onClick={() => {
                    setActiveReadingItem(null);
                    onOpenDemoModal('enterprise');
                  }}
                  className="px-5 py-2.5 rounded-lg text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 flex items-center space-x-2 shadow-md shadow-blue-900/30"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full Research Dossier (PDF)</span>
                </button>
                <button
                  onClick={() => setActiveReadingItem(null)}
                  className="text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Lead Magnet Newsletter Box */}
        <div className="mt-16 bg-[#0D121F] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                <Mail className="w-3.5 h-3.5" />
                <span>WEEKLY INTELLIGENCE DISPATCH</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Subscribe to the Weekly Global Tourism Risk Brief
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Join over 4,200+ tour operators, DMC executives, airline dispatchers, and risk officers receiving our curated Monday morning synthesis of emerging geopolitical corridors, airport strikes, and border status changes.
              </p>
              <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Zero Spam</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Direct OSINT Insights</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>1-Click Unsubscribe</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#050810] border border-white/10 p-6 rounded-2xl">
              {newsletterSubmitted ? (
                <div className="text-center py-6 space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Subscription Confirmed</h4>
                  <p className="text-xs text-slate-400">
                    Welcome to the ARGUS Risk Network. Your first weekly intelligence briefing will arrive this Monday.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribeNewsletter} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">
                      Work Email Address
                    </label>
                    <input
                      id="newsletter-email-input"
                      type="email"
                      required
                      placeholder="operations@yourdmc.com"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <button
                    id="newsletter-subscribe-btn"
                    type="submit"
                    className="w-full py-3 rounded-lg text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 flex items-center justify-center space-x-2 transition-all"
                  >
                    <span>Receive Weekly Risk Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-500 text-center font-mono">
                    Protected by ARGUS Data Governance Standards. No third-party data sharing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
