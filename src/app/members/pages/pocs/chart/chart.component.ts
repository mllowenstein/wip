// charting.component.ts
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from "@angular/core";
import {
  ChartComponent as ApexChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  NgApexchartsModule
} from "ng-apexcharts";
import { AgChartOptions, AgCharts } from 'ag-charts-community';
import { Marker } from 'ag-charts-community/dist/types/src/integrated-charts-scene';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'mll-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  @ViewChild('apex') apex!: ApexChartComponent;
  public apexOptions: Partial<ChartOptions>;

  constructor() {
    this.apexOptions = {
      series: [
        {
          name: 'Series 1',
          data: [1,2,3,4,5,6,7,8,9,10],
        },
      ],
      chart: {
        height: 300,
        type: 'bar'
      },
      title: {
        text: 'Demo Apex Chart'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
  }
}

// all available apexchart inputs:
// @Input() chart: ApexChart;
// @Input() annotations: ApexAnnotations;
// @Input() colors: string[];
// @Input() dataLabels: ApexDataLabels;
// @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries;
// @Input() stroke: ApexStroke;
// @Input() labels: string[];
// @Input() legend: ApexLegend;
// @Input() fill: ApexFill;
// @Input() tooltip: ApexTooltip;
// @Input() plotOptions: ApexPlotOptions;
// @Input() responsive: ApexResponsive[];
// @Input() xaxis: ApexXAxis;
// @Input() yaxis: ApexYAxis | ApexYAxis[];
// @Input() grid: ApexGrid;
// @Input() states: ApexStates;
// @Input() title: ApexTitleSubtitle;
// @Input() subtitle: ApexTitleSubtitle;
// @Input() theme: ApexTheme;
