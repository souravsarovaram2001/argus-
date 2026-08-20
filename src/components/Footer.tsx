import React from 'react';
import { 
  Shield, 
  Globe2, 
  Linkedin, 
  Mail, 
  Landmark, 
  ExternalLink, 
  Lock, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenDemoModal: (planId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDemoModal,
}) => {
  return (
    <footer className="bg-[#050810] border-t border-white/5 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Academic Heritage */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#0D121F] border border-white/10 text-blue-400">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg text-white font-mono tracking-wider">ARGUS</span>
                <span className="text-[10px] uppercase font-mono ml-2 px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Risk Intel
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Proactive geopolitical risk intelligence service transforming fragmented global signals into real-time 0–10 risk indices and actionable operational recommendations for tour operators, DMCs, airlines, and hospitality brands.
            </p>

            {/* Academic badge */}
            <div className="p-3 rounded-xl bg-[#0D121F] border border-white/5 space-y-1 text-[11px] font-mono">
              <div className="flex items-center space-x-1.5 text-blue-400 font-semibold">
                <Landmark className="w-3.5 h-3.5" />
                <span>ACADEMIC FOUNDATION:</span>
              </div>
              <p className="text-slate-300">
                Incubated via Design Thinking &amp; Living Lab research under guidance from Indian Institute of Management Sirmaur (IIM Sirmaur).
              </p>
            </div>
          </div>

          {/* Col 2: Platform & Features */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Platform &amp; Tools
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-blue-400 transition-colors">
                  Live Risk Console
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('compare')} className="hover:text-blue-400 transition-colors">
                  Destination Risk Compare
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-blue-400 transition-colors">
                  0–10 Scoring System
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-blue-400 transition-colors">
                  Tourism Sector Impact
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-blue-400 transition-colors">
                  AI Executive Summaries
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDemoModal('enterprise')} className="hover:text-blue-400 transition-colors">
                  Enterprise REST / Webhook API
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Industry Solutions */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Industry Verticals
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-blue-400 transition-colors">
                  Tour Operators &amp; DMCs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-blue-400 transition-colors">
                  Hotel Chains &amp; Resorts
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-blue-400 transition-colors">
                  Airlines &amp; Air Charters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-blue-400 transition-colors">
                  Travel Insurance Underwriters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-blue-400 transition-colors">
                  Government Tourism Boards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-blue-400 transition-colors">
                  Professional Tier (₹4,999/mo)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Intelligence & Legal */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Research &amp; Governance
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-blue-400 transition-colors">
                  Geopolitical Risk Briefs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-blue-400 transition-colors">
                  Living Lab Whitepapers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  3-Tier OSINT Methodology
                </button>
              </li>
              <li>
                <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">
                  Privacy &amp; Data Ethics
                </a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">
                  Terms of Service &amp; SLAs
                </a>
              </li>
              <li>
                <a href="#governance" onClick={(e) => e.preventDefault()} className="hover:text-blue-400 transition-colors">
                  OSINT Attribution Protocol
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Contact */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} ARGUS Intelligence Technologies. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:intelligence@argus-risk.com"
              className="flex items-center space-x-1.5 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>intelligence@argus-risk.com</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn ARGUS Risk</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
