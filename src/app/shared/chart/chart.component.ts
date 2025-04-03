import { Component, Input } from '@angular/core';
import { ChartConfig } from './chart.model';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

@Component({
  selector: 'mll-chart',
  standalone: false,
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  @Input() config!: ChartConfig;
}
