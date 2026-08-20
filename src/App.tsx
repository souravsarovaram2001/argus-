import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { OverviewSection } from './components/OverviewSection';
import { CoreFeaturesGrid } from './components/CoreFeaturesGrid';
import { TargetAudienceTabs } from './components/TargetAudienceTabs';
import { InteractiveRiskDashboard } from './components/InteractiveRiskDashboard';
import { DestinationComparisonTool } from './components/DestinationComparisonTool';
import { PricingSection } from './components/PricingSection';
import { ThoughtLeadershipSection } from './components/ThoughtLeadershipSection';
import { AboutUsSection } from './components/AboutUsSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { LoginModal } from './components/LoginModal';
import { Radio } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [selectedDemoPlan, setSelectedDemoPlan] = useState<string>('pro');
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  const handleOpenDemoModal = (planId?: string) => {
    setSelectedDemoPlan(planId || 'pro');
    setDemoModalOpen(true);
  };

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleLoginSuccess = () => {
    setActiveTab('dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
                <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                <span>REAL-TIME TELEMETRY FEED ACTIVE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Global Tourism Geopolitical Risk Console
              </h1>
              <p className="text-sm text-slate-400">
                Monitor 184 destinations, audit vertical sector impacts (Aviation, Rail, Lodging, Excursions), and generate AI executive memos in under 60 seconds.
              </p>
            </div>
            <InteractiveRiskDashboard onOpenDemoModal={handleOpenDemoModal} standalone />
          </div>
        );

      case 'features':
        return (
          <div className="space-y-12 animate-fade-in">
            <CoreFeaturesGrid onOpenDemoModal={handleOpenDemoModal} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white font-mono">
                  Test the Features in the Live Console
                </h3>
              </div>
              <InteractiveRiskDashboard onOpenDemoModal={handleOpenDemoModal} />
            </div>
          </div>
        );

      case 'solutions':
        return (
          <div className="space-y-12 animate-fade-in">
            <TargetAudienceTabs onOpenDemoModal={handleOpenDemoModal} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <DestinationComparisonTool onOpenDemoModal={handleOpenDemoModal} />
            </div>
          </div>
        );

      case 'compare':
        return (
          <div className="animate-fade-in">
            <DestinationComparisonTool onOpenDemoModal={handleOpenDemoModal} />
          </div>
        );

      case 'pricing':
        return (
          <div className="animate-fade-in">
            <PricingSection onOpenDemoModal={handleOpenDemoModal} />
          </div>
        );

      case 'resources':
        return (
          <div className="animate-fade-in">
            <ThoughtLeadershipSection onOpenDemoModal={handleOpenDemoModal} />
          </div>
        );

      case 'about':
        return (
          <div className="animate-fade-in">
            <AboutUsSection onOpenDemoModal={handleOpenDemoModal} />
          </div>
        );

      case 'home':
      default:
        return (
          <div className="animate-fade-in">
            <OverviewSection
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenDemoModal={handleOpenDemoModal}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050810] text-[#E0E2E7] flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openDemoModal={handleOpenDemoModal}
        openLoginModal={handleOpenLoginModal}
      />

      {/* Main Page Content Body */}
      <main className="flex-1">
        {renderActiveView()}
      </main>

      {/* Enterprise SaaS Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Lead Capture / 14-Day Free Trial Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialPlanId={selectedDemoPlan}
        onSuccessRedirectToDashboard={() => {
          setActiveTab('dashboard');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Enterprise SSO / Login Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
