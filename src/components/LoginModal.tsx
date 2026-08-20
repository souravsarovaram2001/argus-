import React, { useState } from 'react';
import { Lock, X, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('demo.analyst@argus-intel.com');
  const [password, setPassword] = useState('••••••••••••');
  const [role, setRole] = useState<'dmc' | 'airline' | 'insurer'>('dmc');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
      onClose();
    }, 800);
  };

  const handleQuickDemoFill = (selectedRole: 'dmc' | 'airline' | 'insurer') => {
    setRole(selectedRole);
    if (selectedRole === 'dmc') {
      setEmail('ops.director@silkroutedmc.com');
    } else if (selectedRole === 'airline') {
      setEmail('dispatch@aerotrans-med.com');
    } else {
      setEmail('underwriting@horizon-travelrisk.com');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0D121F] border border-white/10 rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <button
          id="close-login-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#161C2C] border border-white/10 flex items-center justify-center text-blue-400 mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white font-mono">
            ARGUS Enterprise Portal
          </h3>
          <p className="text-xs text-slate-400">
            Sign in to access your organization's real-time risk intelligence stream.
          </p>
        </div>

        {/* Quick Demo Persona Switcher */}
        <div className="bg-[#161C2C] p-3 rounded-xl border border-white/5 space-y-1.5 text-xs font-mono">
          <span className="text-[10px] text-blue-400 uppercase font-semibold">Test with Demo Persona:</span>
          <div className="grid grid-cols-3 gap-1.5">
            <button
              type="button"
              id="persona-dmc-btn"
              onClick={() => handleQuickDemoFill('dmc')}
              className={`p-1.5 rounded text-[10px] border transition-colors ${
                role === 'dmc'
                  ? 'bg-blue-600 text-white border-blue-500 font-bold'
                  : 'bg-[#0D121F] text-slate-300 border-white/5 hover:bg-[#161C2C]'
              }`}
            >
              DMC Ops
            </button>
            <button
              type="button"
              id="persona-airline-btn"
              onClick={() => handleQuickDemoFill('airline')}
              className={`p-1.5 rounded text-[10px] border transition-colors ${
                role === 'airline'
                  ? 'bg-blue-600 text-white border-blue-500 font-bold'
                  : 'bg-[#0D121F] text-slate-300 border-white/5 hover:bg-[#161C2C]'
              }`}
            >
              Airline
            </button>
            <button
              type="button"
              id="persona-insurer-btn"
              onClick={() => handleQuickDemoFill('insurer')}
              className={`p-1.5 rounded text-[10px] border transition-colors ${
                role === 'insurer'
                  ? 'bg-blue-600 text-white border-blue-500 font-bold'
                  : 'bg-[#0D121F] text-slate-300 border-white/5 hover:bg-[#161C2C]'
              }`}
            >
              Underwriter
            </button>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1">
              Enterprise Email
            </label>
            <input
              id="login-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 text-xs font-mono focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-mono text-slate-300">
                Password
              </label>
              <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[11px] text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="login-password-input"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2 rounded-lg bg-[#161C2C] border border-white/10 text-slate-200 text-xs font-mono focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            id="login-submit-btn"
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 rounded-xl text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
          >
            {isLoading ? (
              <span>Authenticating SSO / 2FA...</span>
            ) : (
              <>
                <span>Sign In to Console</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
          SOC2 Type II Certified • 256-Bit TLS Encryption
        </div>
      </div>
    </div>
  );
};
