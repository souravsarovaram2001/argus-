export type RiskLevel = 'LOW' | 'MODERATE' | 'ELEVATED' | 'HIGH' | 'CRITICAL';

export type OperationalStatus = 'CONTINUE' | 'MONITOR' | 'MODIFY' | 'SUSPEND';

export interface SectorImpact {
  aviation: 'NORMAL' | 'MINOR_DELAYS' | 'REROUTING_RECOMMENDED' | 'GROUNDED_RESTRICTED';
  localTransit: 'NORMAL' | 'LOCALIZED_CURFEW' | 'TRANSIT_STRIKES' | 'BLOCKED_CORRIDORS';
  hospitality: 'NORMAL' | 'SUPPLY_CHAIN_STRAIN' | 'HEIGHTENED_SECURITY' | 'EVACUATION_STANDBY';
  excursions: 'OPEN' | 'ADVISORY_RESTRICTED' | 'GUIDED_ONLY' | 'CLOSED';
  borders: 'OPEN' | 'ENHANCED_SCREENING' | 'VISA_SUSPENSION' | 'CLOSED';
}

export interface IntelligenceAlert {
  id: string;
  countryCode: string;
  countryName: string;
  region: string;
  title: string;
  summary: string;
  riskScore: number; // 0 to 10
  riskLevel: RiskLevel;
  operationalStatus: OperationalStatus;
  timestamp: string;
  sector: 'Aviation' | 'Civil Unrest' | 'Transit & Rail' | 'Hospitality' | 'Border & Customs' | 'Weather & Geo';
  sources: string[];
  recommendedAction: string;
  affectedDestinations: string[];
  coordinates: [number, number]; // [lat, lng]
}

export interface CountryRiskProfile {
  code: string;
  name: string;
  region: string;
  score: number; // 0-10
  level: RiskLevel;
  status: OperationalStatus;
  trend: 'UP' | 'DOWN' | 'STABLE';
  summary: string;
  impact: SectorImpact;
  lastUpdated: string;
  primaryThreats: string[];
  mitigationSteps: string[];
  safeZones: string[];
  cautionZones: string[];
  coordinates: [number, number];
  tourismVulnerabilityIndex: number; // 0-100
  recentAlertCount: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  target: string;
  priceMonthlyINR: number;
  priceAnnualINR: number;
  priceMonthlyUSD: number;
  priceAnnualUSD: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaAction: string;
}

export interface ResourceItem {
  id: string;
  type: 'Whitepaper' | 'Risk Brief' | 'Framework' | 'Webinar';
  title: string;
  readTime: string;
  publishedDate: string;
  author: string;
  category: 'Aviation' | 'Crisis Management' | 'DMC Operations' | 'Insurance';
  summary: string;
  downloadUrl?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatarUrl: string;
  verifiedAcademic: boolean;
}
