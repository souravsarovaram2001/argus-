import React, { useState } from 'react';
import { 
  Scale, 
  Plus, 
  Trash2, 
  Check, 
  AlertTriangle, 
  ArrowRight, 
  Plane, 
  Building2, 
  Compass, 
  ShieldCheck, 
  FileText,
  Sparkles,
  Download
} from 'lucide-react';
import { COUNTRY_PROFILES, RISK_COLOR_MAP, OPERATIONAL_STATUS_CONFIG } from '../data/mockIntelligence';
import { CountryRiskProfile } from '../types';

interface DestinationComparisonToolProps {
  onOpenDemoModal: (planId?: string) => void;
}

export const DestinationComparisonTool: React.FC<DestinationComparisonToolProps> = ({
  onOpenDemoModal,
}) => {
  const [selectedCodes, setSelectedCodes] = useState<string[]>(['KEN', 'PER', 'EGY']);
  const [showExportNotice, setShowExportNotice] = useState(false);

  const selectedCountries: CountryRiskProfile[] = selectedCodes
    .map((code) => COUNTRY_PROFILES.find((c) => c.code === code))
    .filter((c): c is CountryRiskProfile => Boolean(c));

  const availableToAdd = COUNTRY_PROFILES.filter((c) => !selectedCodes.includes(c.code));

  const handleAddCountry = (code: string) => {
    if (selectedCodes.length < 4) {
      setSelectedCodes([...selectedCodes, code]);
    }
  };

  const handleRemoveCountry = (code: string) => {
    if (selectedCodes.length > 1) {
      setSelectedCodes(selectedCodes.filter((c) => c !== code));
    }
  };

  const handleExportComparison = () => {
    setShowExportNotice(true);
    setTimeout(() => setShowExportNotice(false), 3000);
  };

  return (
    <section id="compare-section" className="py-16 sm:py-24 bg-[#050810] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Scale className="w-3.5 h-3.5" />
            <span>PORTFOLIO RISK AUDITING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Destination Risk Comparison Engine
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Benchmark candidate tour destinations side-by-side before committing charter deposits, contracting hotel blocks, or submitting corporate travel bids.
          </p>
        </div>

        {/* Country Selector Toolbar */}
        <div className="bg-[#0D121F] border border-white/10 rounded-xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-slate-400 uppercase">Comparing:</span>
            <div className="flex flex-wrap items-center gap-2">
              {selectedCountries.map((c) => (
                <div 
                  key={c.code}
                  className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#161C2C] border border-white/10 text-xs font-mono text-white"
                >
                  <span>{c.name} ({c.code})</span>
                  {selectedCodes.length > 1 && (
                    <button
                      onClick={() => handleRemoveCountry(c.code)}
                      className="text-slate-400 hover:text-rose-400 ml-1"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {availableToAdd.length > 0 && selectedCodes.length < 4 && (
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono text-slate-400">Add Destination:</span>
              <select
                id="add-country-compare-select"
                onChange={(e) => {
                  if (e.target.value) {
                    handleAddCountry(e.target.value);
                    e.target.value = '';
                  }
                }}
                defaultValue=""
                className="bg-[#161C2C] border border-white/10 text-slate-200 text-xs font-mono rounded px-2.5 py-1 focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>Select Country...</option>
                {availableToAdd.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name} ({c.code}) - Score {c.score.toFixed(1)}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            id="export-compare-matrix-btn"
            onClick={handleExportComparison}
            className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-white bg-blue-600 hover:bg-blue-500 flex items-center space-x-1.5 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Comparison Matrix</span>
          </button>
        </div>

        {showExportNotice && (
          <div className="mb-6 p-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-xs font-mono text-emerald-300 text-center animate-fade-in">
            ✓ Multi-destination risk comparison dossier compiled. Download will initiate in enterprise trial.
          </div>
        )}

        {/* Side-by-Side Comparison Table */}
        <div className="bg-[#0D121F] border border-white/10 rounded-2xl overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/5 bg-[#050810]">
                <th className="p-4 sm:p-5 font-mono text-xs uppercase text-slate-400 w-1/4">
                  Assessment Metric
                </th>
                {selectedCountries.map((country) => {
                  const color = RISK_COLOR_MAP[country.level];
                  return (
                    <th key={country.code} className="p-4 sm:p-5 font-mono text-slate-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-base text-white">{country.name}</div>
                          <div className="text-xs text-slate-400">{country.region}</div>
                        </div>
                        <div className={`text-sm font-bold font-mono px-2 py-0.5 rounded border ${color.badge}`}>
                          {country.score.toFixed(1)}
                        </div>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-sans">
              {/* Row 1: Operational Posture */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-slate-400 font-semibold">
                  Operational Posture
                </td>
                {selectedCountries.map((c) => (
                  <td key={c.code} className="p-4 sm:p-5">
                    <span className={`inline-block text-xs font-mono font-bold px-2.5 py-1 rounded border ${OPERATIONAL_STATUS_CONFIG[c.status].color}`}>
                      {c.status}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 2: Tourism Vulnerability Index (0-100) */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-slate-400 font-semibold">
                  Tourism Vulnerability Index
                </td>
                {selectedCountries.map((c) => (
                  <td key={c.code} className="p-4 sm:p-5 font-mono">
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden max-w-[120px]">
                        <div 
                          className="h-full rounded-full"
                          style={{
                            width: `${c.tourismVulnerabilityIndex}%`,
                            backgroundColor: RISK_COLOR_MAP[c.level].hex
                          }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-300">
                        {c.tourismVulnerabilityIndex}/100
                      </span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 3: Aviation Status */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-slate-400 font-semibold flex items-center space-x-2">
                  <Plane className="w-3.5 h-3.5 text-blue-400" />
                  <span>Aviation Corridors</span>
                </td>
                {selectedCountries.map((c) => (
                  <td key={c.code} className="p-4 sm:p-5 text-xs text-slate-300 font-mono">
                    {c.impact.aviation.replace(/_/g, ' ')}
                  </td>
                ))}
              </tr>

              {/* Row 4: Ground Transit */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-slate-400 font-semibold flex items-center space-x-2">
                  <Compass className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Overland Transit</span>
                </td>
                {selectedCountries.map((c) => (
                  <td key={c.code} className="p-4 sm:p-5 text-xs text-slate-300 font-mono">
                    {c.impact.localTransit.replace(/_/g, ' ')}
                  </td>
                ))}
              </tr>

              {/* Row 5: Hotel & Resort Infrastructure */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-slate-400 font-semibold flex items-center space-x-2">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Hospitality & Lodging</span>
                </td>
                {selectedCountries.map((c) => (
                  <td key={c.code} className="p-4 sm:p-5 text-xs text-slate-300 font-mono">
                    {c.impact.hospitality.replace(/_/g, ' ')}
                  </td>
                ))}
              </tr>

              {/* Row 6: Safe Corridors Identified */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-slate-400 font-semibold">
                  Safe Leisure Corridors
                </td>
                {selectedCountries.map((c) => (
                  <td key={c.code} className="p-4 sm:p-5 text-xs text-slate-300">
                    <ul className="list-disc list-inside space-y-1">
                      {c.safeZones.slice(0, 2).map((z, idx) => (
                        <li key={idx} className="text-emerald-400/90">{z}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Row 7: Primary Operational Step */}
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-4 sm:p-5 font-mono text-xs text-slate-400 font-semibold">
                  Top Recommended Mitigation
                </td>
                {selectedCountries.map((c) => (
                  <td key={c.code} className="p-4 sm:p-5 text-xs text-slate-300 leading-relaxed">
                    {c.mitigationSteps[0] || 'Standard monitoring protocol.'}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 font-mono mb-3">
            Need custom portfolio benchmarking across 50+ tour routes simultaneously?
          </p>
          <button
            id="compare-enterprise-audit-btn"
            onClick={() => onOpenDemoModal('enterprise')}
            className="px-6 py-2.5 rounded-lg text-xs font-mono font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500 transition-all inline-flex items-center space-x-2 shadow-sm"
          >
            <span>Request Full Portfolio Risk Audit</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
