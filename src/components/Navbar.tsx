import React, { useState } from 'react';
import { 
  Shield, 
  Menu, 
  X, 
  Activity, 
  ChevronRight, 
  Globe2, 
  Lock, 
  Sparkles,
  Layers,
  BarChart3,
  BookOpen,
  Building,
  Scale
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openDemoModal: (planId?: string) => void;
  openLoginModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openDemoModal,
  openLoginModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Overview', icon: Globe2 },
    { id: 'dashboard', label: 'Live Risk Console', icon: Activity, badge: 'LIVE' },
    { id: 'features', label: 'Features', icon: Layers },
    { id: 'solutions', label: 'Solutions', icon: Building },
    { id: 'compare', label: 'Destination Compare', icon: Scale },
    { id: 'pricing', label: 'Pricing', icon: BarChart3 },
    { id: 'resources', label: 'Thought Leadership', icon: BookOpen },
    { id: 'about', label: 'About & Living Lab', icon: Shield },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#050810]/85 backdrop-blur-md border-b border-white/5">
      {/* Top Threat Telemetry Ticker Bar */}
      <div className="bg-[#050810] border-b border-white/5 py-1.5 px-4 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="flex items-center space-x-1.5 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 font-semibold uppercase tracking-wider">DEFCON-TOURISM 4</span>
            </div>
            <span className="text-slate-700">|</span>
            <span className="truncate hidden sm:inline text-slate-300">
              ARGUS OSINT ENGINE v3.4 • 184 Destinations Monitored • Academic Validation: IIM Sirmaur Living Lab
            </span>
          </div>

          <div className="flex items-center space-x-4 shrink-0 text-slate-400">
            <span className="hidden md:inline">Global Threat Status: <strong className="text-emerald-400 font-medium">STABLE</strong></span>
            <span className="text-slate-700 hidden md:inline">•</span>
            <span className="text-blue-400 font-medium">Live Feeds Active</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic shadow-md shadow-blue-900/30 group-hover:bg-blue-500 transition-colors">
              A
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-xl tracking-tight text-white uppercase font-sans">ARGUS</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Risk Intel
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-tight hidden sm:block">
                Geopolitical Intelligence • Tourism Operations
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              id="nav-login-btn"
              onClick={openLoginModal}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              Log In
            </button>

            <button
              id="nav-demo-btn"
              onClick={() => openDemoModal()}
              className="text-sm font-bold bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-white shadow-lg shadow-blue-900/30 flex items-center space-x-1 transition-all active:scale-98"
            >
              <span>Request a Demo</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D121F] border-b border-white/10 px-4 pt-2 pb-6 space-y-2">
          <div className="grid grid-cols-1 gap-1 pt-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-4 h-4 text-slate-400" />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
            <button
              id="mobile-login-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                openLoginModal();
              }}
              className="w-full py-2.5 rounded-lg text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 flex items-center justify-center space-x-2"
            >
              <Lock className="w-4 h-4 text-slate-400" />
              <span>Log In</span>
            </button>
            <button
              id="mobile-demo-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                openDemoModal();
              }}
              className="w-full py-2.5 rounded-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-900/30 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request a Demo / Free Trial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
