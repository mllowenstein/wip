import { Component } from '@angular/core';
import { MyOwnMaterialModule } from '../../../core/material';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas/canvas.component';
import { GraphComponent } from './graph/graph.component';
import { GridComponent } from './grid/grid.component';
import { ChartComponent } from './chart/chart.component';
import { UploadComponent } from './upload/upload.component'

@Component({
  selector: 'mll-pocs',
  standalone: true,
  imports: [CommonModule, MyOwnMaterialModule, MatTabsModule, UploadComponent, CanvasComponent, GraphComponent, GridComponent, ChartComponent], //
  templateUrl: './pocs.component.html',
  styleUrl: './pocs.component.scss'
})
export class PocsComponent {

}
