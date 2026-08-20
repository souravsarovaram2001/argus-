import React, { useState } from 'react';
import { 
  Shield, 
  CheckCircle2, 
  X, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Compass, 
  Mail, 
  Globe2,
  Lock
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
  onSuccessRedirectToDashboard?: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  initialPlanId = 'pro',
  onSuccessRedirectToDashboard,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    organizationType: 'DMC / Inbound Tour Operator',
    primaryRegion: 'East Africa',
    selectedPlan: initialPlanId,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleFinish = () => {
    setIsSubmitted(false);
    onClose();
    if (onSuccessRedirectToDashboard) {
      onSuccessRedirectToDashboard();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0D121F] border border-white/10 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
        <button
          id="close-demo-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-mono">
              Intelligence Node Provisioned
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName || 'Operations Leader'}</strong>. Your 14-day Professional trial credentials and personalized destination risk briefing for <strong>{formData.primaryRegion}</strong> have been generated.
            </p>
            <div className="p-3 bg-[#161C2C] rounded-lg border border-white/5 text-xs font-mono text-blue-400">
              Assigned Account SLA: 4-Hour Response • Living Lab Protocol Active
            </div>
            <div className="pt-4 flex justify-center">
              <button
                id="modal-enter-console-btn"
                onClick={handleFinish}
                className="px-6 py-3 rounded-xl text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 flex items-center space-x-2"
              >
                <span>Launch Live Risk Console Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-1 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                  14-DAY RISK INTELLIGENCE TRIAL
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white font-mono mt-2">
                Request ARGUS Platform Access
              </h3>
              <p className="text-xs text-slate-400">
                Deploy real-time 0–10 geopolitical scoring and automated AI executive briefings to your operations team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    Full Name *
                  </label>
                  <input
                    id="demo-form-name"
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    Work Email *
                  </label>
                  <input
                    id="demo-form-email"
                    type="email"
                    required
                    placeholder="s.jenkins@touroperator.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    Company / Organization *
                  </label>
                  <input
                    id="demo-form-company"
                    type="text"
                    required
                    placeholder="Serengeti Safari Logistics"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    Sector / Organization Type
                  </label>
                  <select
                    id="demo-form-orgtype"
                    value={formData.organizationType}
                    onChange={(e) => setFormData({ ...formData, organizationType: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 text-xs font-mono focus:outline-none focus:border-blue-500"
                  >
                    <option value="DMC / Inbound Tour Operator">DMC / Inbound Tour Operator</option>
                    <option value="Outbound Wholesale Tour Operator">Outbound Wholesale Tour Operator</option>
                    <option value="Airline / Charter Operator">Airline / Charter Operator</option>
                    <option value="Hotel / Resort Group">Hotel / Resort Group</option>
                    <option value="Travel Insurance Underwriter">Travel Insurance Underwriter</option>
                    <option value="Government Tourism Board">Government Tourism Board</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    Primary Region of Operational Focus
                  </label>
                  <select
                    id="demo-form-region"
                    value={formData.primaryRegion}
                    onChange={(e) => setFormData({ ...formData, primaryRegion: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 text-xs font-mono focus:outline-none focus:border-blue-500"
                  >
                    <option value="East Africa">East Africa (Kenya, Tanzania, Rwanda)</option>
                    <option value="Middle East & North Africa">Middle East & North Africa (Egypt, Jordan, UAE)</option>
                    <option value="South America">South America (Peru, Colombia, Argentina)</option>
                    <option value="Southeast Asia">Southeast Asia (Thailand, Vietnam, Indonesia)</option>
                    <option value="Europe">Europe (France, Greece, Turkey, Iceland)</option>
                    <option value="Global Portfolio">Global Multi-Region Portfolio</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">
                    Requested Tier
                  </label>
                  <select
                    id="demo-form-tier"
                    value={formData.selectedPlan}
                    onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 text-xs font-mono focus:outline-none focus:border-blue-500"
                  >
                    <option value="pro">Professional (₹4,999/mo - 14 Day Free Trial)</option>
                    <option value="enterprise">Enterprise (Custom APIs & White Label)</option>
                    <option value="free">Free Explorer (Research Edition)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">
                  Specific Operational Challenges (Optional)
                </label>
                <textarea
                  id="demo-form-notes"
                  rows={2}
                  placeholder="e.g. Need to reduce panic cancellations for upcoming safari season..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2">
                <button
                  id="demo-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Provisioning Intelligence Node...</span>
                  ) : (
                    <>
                      <span>Start 14-Day Free Trial / Schedule Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center font-mono">
                No credit card required. Certified under IIM Sirmaur Living Lab data standards.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
