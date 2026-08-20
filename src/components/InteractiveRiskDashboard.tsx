import React, { useState, useMemo } from 'react';
import { 
  Activity, 
  Search, 
  Filter, 
  Compass, 
  Plane, 
  Building2, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Download, 
  ExternalLink, 
  ShieldAlert, 
  TrendingUp, 
  TrendingDown, 
  Minus,
  RefreshCw,
  Info,
  Layers,
  Radio,
  SlidersHorizontal,
  Share2
} from 'lucide-react';
import { 
  COUNTRY_PROFILES, 
  LIVE_INTELLIGENCE_ALERTS, 
  RISK_COLOR_MAP, 
  OPERATIONAL_STATUS_CONFIG 
} from '../data/mockIntelligence';
import { CountryRiskProfile, IntelligenceAlert, OperationalStatus, RiskLevel } from '../types';

interface InteractiveRiskDashboardProps {
  onOpenDemoModal: (planId?: string) => void;
  standalone?: boolean;
}

export const InteractiveRiskDashboard: React.FC<InteractiveRiskDashboardProps> = ({
  onOpenDemoModal,
  standalone = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('KEN');
  const [activeView, setActiveView] = useState<'map' | 'grid'>('map');
  const [isGeneratingAiBrief, setIsGeneratingAiBrief] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState<string | null>(null);
  const [alertFilterSector, setAlertFilterSector] = useState<string>('All');
  const [copiedLink, setCopiedLink] = useState(false);

  const selectedCountry = useMemo(() => {
    return COUNTRY_PROFILES.find((c) => c.code === selectedCountryCode) || COUNTRY_PROFILES[0];
  }, [selectedCountryCode]);

  const filteredCountries = useMemo(() => {
    return COUNTRY_PROFILES.filter((country) => {
      const matchesSearch = 
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.region.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
      const matchesStatus = selectedStatus === 'All' || country.status === selectedStatus;

      return matchesSearch && matchesRegion && matchesStatus;
    });
  }, [searchQuery, selectedRegion, selectedStatus]);

  const filteredAlerts = useMemo(() => {
    if (alertFilterSector === 'All') return LIVE_INTELLIGENCE_ALERTS;
    return LIVE_INTELLIGENCE_ALERTS.filter((a) => a.sector.toLowerCase().includes(alertFilterSector.toLowerCase()));
  }, [alertFilterSector]);

  const regions = ['All', 'East Africa', 'South America', 'Middle East & North Africa', 'Northern Europe', 'Western Europe', 'North America', 'Southeast Asia'];
  const statuses: ('All' | OperationalStatus)[] = ['All', 'CONTINUE', 'MONITOR', 'MODIFY', 'SUSPEND'];

  const handleGenerateAiBrief = (country: CountryRiskProfile) => {
    setIsGeneratingAiBrief(true);
    setGeneratedBrief(null);

    // Simulate real-time NLP / Gemini Executive synthesis under 1 minute
    setTimeout(() => {
      const brief = `[ARGUS EXECUTIVE MEMO — FOR TOUR OPERATORS & DMCs]
DESTINATION: ${country.name.toUpperCase()} (${country.code})
INDEX SCORE: ${country.score.toFixed(1)} / 10.0 [${country.level}]
OPERATIONAL POSTURE: ${country.status}
EVALUATION TIMESTAMP: ${new Date().toISOString()}

EXECUTIVE SUMMARY:
${country.summary}

TOURISM SECTOR DISRUPTION AUDIT:
• Aviation Corridor: ${country.impact.aviation.replace(/_/g, ' ')}
• Overland Transport: ${country.impact.localTransit.replace(/_/g, ' ')}
• Accommodation & Lodging: ${country.impact.hospitality.replace(/_/g, ' ')}
• Excursion Zones: ${country.impact.excursions.replace(/_/g, ' ')}

IMMEDIATE OPERATIONAL DIRECTIVES:
1. ${country.mitigationSteps[0] || 'Maintain continuous GPS telemetry on guest convoys.'}
2. ${country.mitigationSteps[1] || 'Enforce daytime-only highway transit schedules.'}
3. Client communication advisory: Reassure travelers that primary leisure zones (${country.safeZones.slice(0, 2).join(', ')}) remain insulated from disturbance.

AUTHORIZATION: Certified by ARGUS Geopolitical Ingestion Engine v3.4 (Academic Reference: IIM Sirmaur Living Lab).`;
      setGeneratedBrief(brief);
      setIsGeneratingAiBrief(false);
    }, 1200);
  };

  const handleShareBrief = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div id="interactive-risk-console" className="w-full bg-[#0D121F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Console Header Bar */}
      <div className="bg-[#050810] border-b border-white/5 px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-sans font-bold text-sm sm:text-base text-white tracking-wide uppercase">
                Live Intelligence Stream
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                PRO SIMULATOR
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Live Feed: 184 Countries • 0–10 Tourism Risk Scale • Sector Disruption Mapping
            </p>
          </div>
        </div>

        {/* View Switcher & Actions */}
        <div className="flex items-center space-x-2">
          <div className="bg-white/5 border border-white/10 rounded-lg p-1 flex items-center space-x-1">
            <button
              id="dashboard-view-map-btn"
              onClick={() => setActiveView('map')}
              className={`px-3 py-1 text-xs font-mono rounded flex items-center space-x-1.5 transition-colors ${
                activeView === 'map'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Map View</span>
            </button>
            <button
              id="dashboard-view-grid-btn"
              onClick={() => setActiveView('grid')}
              className={`px-3 py-1 text-xs font-mono rounded flex items-center space-x-1.5 transition-colors ${
                activeView === 'grid'
                  ? 'bg-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Grid Index</span>
            </button>
          </div>

          <button
            id="dashboard-cta-upgrade-btn"
            onClick={() => onOpenDemoModal('pro')}
            className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-900/20 transition-all hidden md:flex items-center space-x-1.5"
          >
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Connect Live API Feed</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Sub-bar */}
      <div className="bg-[#080D18] border-b border-white/5 px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Search */}
        <div className="relative min-w-[240px] flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="dashboard-country-search-input"
            type="text"
            placeholder="Search country, code (e.g. KEN, PER, EGY)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono text-xs"
          />
        </div>

        {/* Region Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-slate-500 font-mono text-[11px] shrink-0">Region:</span>
          <select
            id="dashboard-region-filter"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-[#161C2C] border border-white/10 text-slate-300 rounded px-2.5 py-1 text-xs font-mono focus:outline-none focus:border-blue-500"
          >
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>

          <span className="text-slate-500 font-mono text-[11px] shrink-0 ml-2">Posture:</span>
          <select
            id="dashboard-status-filter"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-[#161C2C] border border-white/10 text-slate-300 rounded px-2.5 py-1 text-xs font-mono focus:outline-none focus:border-blue-500"
          >
            {statuses.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Risk Scale Legend */}
        <div className="hidden xl:flex items-center space-x-3 font-mono text-[11px]">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-emerald-400">0–2.9 Low</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-yellow-400">3–4.9 Moderate</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            <span className="text-orange-400">5–6.9 Elevated</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="text-rose-400">7–8.9 High</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <span className="text-red-400">9–10 Critical</span>
          </div>
        </div>
      </div>

      {/* Main Console Content: 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left Column: Interactive Map or Country List (7 Cols) */}
        <div className="lg:col-span-7 border-r border-white/5 p-4 sm:p-6 bg-[#0B101D] flex flex-col justify-between">
          {activeView === 'map' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Threat Topology</span>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Click pin to inspect destination
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-500">
                  Showing {filteredCountries.length} active zones
                </div>
              </div>

              {/* Styled Interactive Geospatial Visualization Container */}
              <div className="relative w-full h-[320px] sm:h-[360px] bg-[#050810] border border-white/10 rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-4">
                {/* Background dot matrix */}
                <div className="absolute inset-0 dot-matrix opacity-25 pointer-events-none" />

                {/* Radar Sweep Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-blue-500/10 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-500/20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-blue-500/30 pointer-events-none" />

                {/* Stylized World Continent Silhouette Base */}
                <svg className="w-full h-full text-slate-800/40 opacity-40" viewBox="0 0 1000 500" fill="currentColor">
                  {/* North America */}
                  <path d="M150,80 Q220,60 280,110 Q260,180 200,200 Q150,220 120,150 Z" />
                  {/* South America */}
                  <path d="M260,250 Q320,270 300,380 Q260,430 240,360 Q220,290 260,250 Z" />
                  {/* Europe */}
                  <path d="M460,90 Q540,80 530,150 Q480,180 450,140 Z" />
                  {/* Africa */}
                  <path d="M470,190 Q560,190 560,320 Q500,400 460,320 Q440,240 470,190 Z" />
                  {/* Asia */}
                  <path d="M570,80 Q780,70 820,200 Q740,280 620,240 Q580,160 570,80 Z" />
                  {/* Australia */}
                  <path d="M760,330 Q840,320 830,400 Q760,420 740,370 Z" />
                </svg>

                {/* Map Pins */}
                <div className="absolute inset-0 p-6">
                  {filteredCountries.map((country) => {
                    const isSelected = country.code === selectedCountryCode;
                    const colorStyle = RISK_COLOR_MAP[country.level];

                    const xPercent = Math.min(Math.max(((country.coordinates[1] + 130) / 260) * 100, 10), 90);
                    const yPercent = Math.min(Math.max(((65 - country.coordinates[0]) / 120) * 100, 15), 85);

                    return (
                      <button
                        key={country.code}
                        id={`map-pin-${country.code}`}
                        onClick={() => setSelectedCountryCode(country.code)}
                        style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all z-20 focus:outline-none ${
                          isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                        }`}
                      >
                        <div className="relative flex items-center justify-center">
                          {country.score >= 5.0 && (
                            <span 
                              className="absolute w-6 h-6 rounded-full opacity-75 animate-ping"
                              style={{ backgroundColor: colorStyle.hex }}
                            />
                          )}
                          <div 
                            className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-mono font-bold shadow-lg ${
                              isSelected 
                                ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-110' 
                                : ''
                            }`}
                            style={{ 
                              backgroundColor: colorStyle.hex, 
                              borderColor: '#ffffff40',
                              color: country.score >= 7.0 ? '#ffffff' : '#0f172a'
                            }}
                          >
                            {country.score.toFixed(0)}
                          </div>
                        </div>

                        {/* Hover / Active Badge */}
                        <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider pointer-events-none transition-all shadow-md ${
                          isSelected
                            ? 'bg-[#161C2C] text-white border border-blue-500/50 opacity-100'
                            : 'bg-[#050810]/95 text-slate-300 border border-white/10 opacity-0 group-hover:opacity-100'
                        }`}>
                          {country.name} • {country.score.toFixed(1)}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Map Bottom Status Bar */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-[#050810]/90 px-2.5 py-1 rounded border border-white/5">
                  <div className="flex items-center space-x-2">
                    <Radio className="w-3 h-3 text-blue-400" />
                    <span>OSINT SATELLITE & NOTAM STREAM ACTIVE</span>
                  </div>
                  <span>LATENCY: 42s</span>
                </div>
              </div>

              {/* Quick Country Selector Bar */}
              <div>
                <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Quick Destination Selector:</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {COUNTRY_PROFILES.map((c) => {
                    const isSelected = c.code === selectedCountryCode;
                    const colorStyle = RISK_COLOR_MAP[c.level];
                    return (
                      <button
                        key={c.code}
                        id={`quick-select-${c.code}`}
                        onClick={() => setSelectedCountryCode(c.code)}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          isSelected
                            ? 'bg-[#1A2235] border-blue-500 ring-1 ring-blue-500/50 shadow-sm'
                            : 'bg-[#161C2C] border-white/5 hover:border-white/10 hover:bg-[#1A2235]/60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-white">{c.name}</span>
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${colorStyle.badge}`}>
                            {c.score.toFixed(1)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>{c.region}</span>
                          <span className={OPERATIONAL_STATUS_CONFIG[c.status].color.split(' ')[0]}>
                            {c.status}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Grid Index View */
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 uppercase">
                <span>Destination Risk Index Table</span>
                <span>{filteredCountries.length} Results</span>
              </div>
              <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
                {filteredCountries.map((c) => {
                  const isSelected = c.code === selectedCountryCode;
                  const colorStyle = RISK_COLOR_MAP[c.level];
                  return (
                    <div
                      key={c.code}
                      id={`grid-item-${c.code}`}
                      onClick={() => setSelectedCountryCode(c.code)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#1A2235] border-blue-500 shadow-md'
                          : 'bg-[#161C2C] border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className={`w-8 h-8 rounded flex items-center justify-center font-mono font-bold text-xs ${colorStyle.badge}`}>
                            {c.score.toFixed(1)}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-sm text-white">{c.name}</span>
                              <span className="text-xs text-slate-400 font-mono">({c.code})</span>
                            </div>
                            <span className="text-xs text-slate-400">{c.region}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className={`text-xs font-mono px-2 py-0.5 rounded border ${OPERATIONAL_STATUS_CONFIG[c.status].color}`}>
                            {c.status}
                          </span>
                          <button
                            id={`inspect-btn-${c.code}`}
                            className="text-xs text-blue-400 hover:text-blue-300 font-mono underline"
                          >
                            Inspect
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Live Alerts Mini Stream with Border-L-4 style from theme */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Live OSINT Alerts Ticker</span>
              </div>
              <div className="flex items-center space-x-1 text-[10px] font-mono text-slate-400">
                <span>Sector:</span>
                <select
                  id="dashboard-alert-sector-filter"
                  value={alertFilterSector}
                  onChange={(e) => setAlertFilterSector(e.target.value)}
                  className="bg-[#161C2C] text-slate-300 border border-white/10 rounded px-1.5 py-0.5 text-[10px]"
                >
                  <option value="All">All Sectors</option>
                  <option value="Aviation">Aviation</option>
                  <option value="Transit">Transit & Rail</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Border">Borders</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
              {filteredAlerts.slice(0, 3).map((alert) => {
                const borderClass = 
                  alert.severity === 'critical' ? 'border-red-500' :
                  alert.severity === 'high' ? 'border-orange-500' :
                  alert.severity === 'medium' ? 'border-yellow-500' : 'border-emerald-500';

                return (
                  <div
                    key={alert.id}
                    id={`alert-item-${alert.id}`}
                    onClick={() => setSelectedCountryCode(alert.countryCode)}
                    className={`p-2.5 rounded-r-lg bg-[#161C2C] border-l-4 ${borderClass} hover:bg-[#1A2235] cursor-pointer flex items-center justify-between text-xs transition-colors`}
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300">
                        {alert.countryCode}
                      </span>
                      <span className="truncate text-slate-200 text-[11px] font-medium">{alert.title}</span>
                    </div>
                    <div className="flex items-center space-x-2 shrink-0 text-[10px] font-mono text-slate-400">
                      <span className="text-blue-400">{alert.sector}</span>
                      <span>•</span>
                      <span>{alert.timestamp}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Selected Country Deep Dive & Actionable SOPs (5 Cols) */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-[#0D121F] flex flex-col justify-between space-y-4">
          {/* Header of Detail Pane */}
          <div>
            <div className="flex items-start justify-between pb-3 border-b border-white/5">
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="text-xl font-bold text-white font-mono">{selectedCountry.name}</h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    {selectedCountry.code}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{selectedCountry.region} • Refreshed {selectedCountry.lastUpdated}</p>
              </div>

              {/* 0-10 Score Badge */}
              <div className="text-right">
                <div className="flex items-center space-x-1.5 justify-end">
                  <span className="text-xs font-mono text-slate-400">RISK INDEX</span>
                  <div className={`text-xl font-bold font-mono px-2.5 py-0.5 rounded-lg border shadow-sm ${RISK_COLOR_MAP[selectedCountry.level].badge}`}>
                    {selectedCountry.score.toFixed(1)}
                  </div>
                </div>
                <span className={`text-[10px] font-mono ${RISK_COLOR_MAP[selectedCountry.level].text}`}>
                  {RISK_COLOR_MAP[selectedCountry.level].label}
                </span>
              </div>
            </div>

            {/* Destination Risk Gauge Bar (matching theme) */}
            <div className="mt-3 bg-[#1A2235] p-4 rounded-xl border border-white/5 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Destination Risk Index</span>
                <span className="text-base font-bold text-white">
                  {selectedCountry.score.toFixed(1)} <span className="text-slate-400 text-xs font-normal">/ 10</span>
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500 h-full transition-all duration-500"
                  style={{ width: `${(selectedCountry.score / 10) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-500 uppercase font-mono">
                <span>Safe</span>
                <span>Elevated</span>
                <span>Extreme</span>
              </div>
            </div>

            {/* Operational Posture Banner */}
            <div className={`mt-3 p-3 rounded-lg border flex items-center justify-between ${OPERATIONAL_STATUS_CONFIG[selectedCountry.status].color}`}>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider font-semibold">
                  RECOMMENDED OPERATIONAL POSTURE
                </div>
                <div className="text-sm font-bold font-mono mt-0.5">
                  POSTURE: {OPERATIONAL_STATUS_CONFIG[selectedCountry.status].label}
                </div>
              </div>
              <span className="text-xs max-w-[200px] text-right font-medium opacity-90 hidden sm:block">
                {OPERATIONAL_STATUS_CONFIG[selectedCountry.status].description}
              </span>
            </div>

            {/* Intelligence Summary */}
            <div className="mt-3 text-xs text-slate-300 leading-relaxed bg-[#161C2C] p-3 rounded-lg border border-white/5">
              <span className="font-mono text-blue-400 font-semibold block mb-1 uppercase tracking-wider">Operational Brief:</span>
              {selectedCountry.summary}
            </div>

            {/* Sector Impact Breakdown (Aviation, Transport, Hospitality, Excursions, Borders) */}
            <div className="mt-3">
              <div className="text-xs font-mono text-slate-400 uppercase mb-2 flex items-center justify-between">
                <span>TOURISM SECTOR IMPACT AUDIT</span>
                <span className="text-[10px] text-slate-500">5 Key Verticals</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-[#161C2C] p-2 rounded border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <Plane className="w-3.5 h-3.5 text-blue-400" />
                    <span>Aviation</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-200">
                    {selectedCountry.impact.aviation.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="bg-[#161C2C] p-2 rounded border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Lodging</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-200">
                    {selectedCountry.impact.hospitality.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="bg-[#161C2C] p-2 rounded border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <Compass className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Excursions</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-200">
                    {selectedCountry.impact.excursions.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="bg-[#161C2C] p-2 rounded border border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5 text-slate-300">
                    <ShieldAlert className="w-3.5 h-3.5 text-orange-400" />
                    <span>Borders</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-200">
                    {selectedCountry.impact.borders.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Tactical Safe vs Caution Zones */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-emerald-950/30 border border-emerald-500/30 p-2.5 rounded-lg">
                <div className="flex items-center space-x-1.5 text-emerald-400 font-mono font-semibold text-[11px] mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED SAFE CORRIDORS:</span>
                </div>
                <ul className="text-slate-300 text-[11px] space-y-1 list-disc list-inside">
                  {selectedCountry.safeZones.map((zone, i) => (
                    <li key={i} className="truncate">{zone}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-rose-950/30 border border-rose-500/30 p-2.5 rounded-lg">
                <div className="flex items-center space-x-1.5 text-rose-400 font-mono font-semibold text-[11px] mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>CAUTION / REROUTE ZONES:</span>
                </div>
                <ul className="text-slate-300 text-[11px] space-y-1 list-disc list-inside">
                  {selectedCountry.cautionZones.map((zone, i) => (
                    <li key={i} className="truncate">{zone}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mitigation Action Steps */}
            <div className="mt-3 bg-[#161C2C] p-3 rounded-lg border border-white/5">
              <div className="text-xs font-mono text-blue-400 font-semibold mb-1.5 uppercase tracking-wider">
                DMC / Tour Operator Protocol:
              </div>
              <ol className="text-xs text-slate-300 space-y-1 list-decimal list-inside leading-relaxed">
                {selectedCountry.mitigationSteps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* AI Executive Brief Generator Trigger & Generated Output */}
          <div className="pt-2 border-t border-white/5 space-y-2">
            {generatedBrief ? (
              <div className="bg-[#050810] p-3 rounded-lg border border-blue-500/40 text-xs font-mono text-slate-200 relative">
                <div className="flex items-center justify-between text-blue-400 pb-1.5 mb-1.5 border-b border-white/10 text-[11px]">
                  <span className="flex items-center space-x-1 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI EXECUTIVE INTELLIGENCE MEMO (SYNTHESIZED)</span>
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      id="copy-brief-btn"
                      onClick={handleShareBrief}
                      className="text-slate-400 hover:text-white flex items-center space-x-1"
                    >
                      <Share2 className="w-3 h-3" />
                      <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
                    </button>
                    <button
                      id="close-brief-btn"
                      onClick={() => setGeneratedBrief(null)}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-[11px] text-slate-300 max-h-48 overflow-y-auto leading-relaxed">
                  {generatedBrief}
                </pre>
              </div>
            ) : null}

            <div className="flex items-center space-x-2">
              <button
                id="generate-ai-brief-btn"
                onClick={() => handleGenerateAiBrief(selectedCountry)}
                disabled={isGeneratingAiBrief}
                className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold font-mono bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/30 transition-all disabled:opacity-50"
              >
                {isGeneratingAiBrief ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Synthesizing OSINT Signals (&lt;60s)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Generate AI Executive Brief for {selectedCountry.name}</span>
                  </>
                )}
              </button>

              <button
                id="request-custom-dossier-btn"
                onClick={() => onOpenDemoModal('enterprise')}
                className="py-2.5 px-3 rounded-lg text-xs font-medium font-mono text-slate-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 flex items-center space-x-1.5 transition-colors"
                title="Request full analyst dossier"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
