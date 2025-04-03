import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { NotificationModule } from '../notification/notification.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnMaterialModule } from '../../core/material';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [
    ChartComponent,
    BarChartComponent,
    LineChartComponent,
    ScatterChartComponent,
    ComboChartComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    HttpClientModule,
    MyOwnMaterialModule,
    ReactiveFormsModule,
    NotificationModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ChartModule { }
