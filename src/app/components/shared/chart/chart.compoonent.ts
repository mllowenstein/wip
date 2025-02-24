import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { MyOwnMaterialModule } from '../../../core/material';
import { MatButtonModule } from '@angular/material/button';

Chart.register(...registerables);

@Component({
  selector: 'mll-chart',
  standalone: true,
  templateUrl: './chart.compoonent.html',
  styleUrl: './chart.compoonent.scss',
  imports: [CommonModule, MyOwnMaterialModule, MatButtonModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ChartComponent implements OnInit {
  @Input() myData: any[] = [];
  chart!: Chart;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const canvas = document.getElementById('careerChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: this.myData.map((stat) => stat.data),
        datasets: [
          {
            label: 'Stock Price',
            data: this.myData.map((sp) => sp.price),
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderWidth: 2,
            fill: true,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });
  }
}
