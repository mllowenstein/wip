export interface ChartConfig {
  type: 'line' | 'bar' | 'combo' | 'scatter';
  id?: string;
  data: any[];
  title?: string;
  options?: Record<string, any>
}
