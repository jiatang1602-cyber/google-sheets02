export interface SurveyRow {
  timestamp: string;
  customerName: string;
  contact: string;
  frequency: string;
  tasteFlavor: number | null;
  qualityStability: number | null;
  freshness: number | null;
  packagingIntegrity: number | null;
  deliveryTimeliness: number | null;
  orderFulfillment: number | null;
  csResponseSpeed: number | null;
  afterSalesHandling: number | null;
  priceReasonableness: number | null;
  suggestions: string;
}

export interface MetricAverage {
  key: keyof SurveyRow;
  label: string;
  category: 'product' | 'logistics' | 'service';
  average: number;
}

export interface DashboardStats {
  totalResponses: number;
  frequencyDistribution: Record<string, number>;
  averages: MetricAverage[];
  categoryAverages: {
    product: number;
    logistics: number;
    service: number;
    overall: number;
  };
  timeSeriesData: {
    date: string;
    count: number;
    averageScore: number;
  }[];
}

export interface TrendAnalysis {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  generatedAt: string;
}
