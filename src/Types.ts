export interface IndicatorDataType {
  indicator: string;
  yearlyData: {
    year: number;
    value: number;
  }[];
}
export interface CountryGroupDataType {
  'Alpha-3 code': string;
  'Country or Area': string;
  'Group 1': string;
  'Group 2': string;
  LDC: boolean;
  LLDC: boolean;
  'Latitude (average)': number;
  'Longitude (average)': number;
  SIDS: boolean;
  'Income group': string;
  indicators: IndicatorDataType[];
}

export interface SubRegionsDataType {
  key: string;
  region: string;
}
