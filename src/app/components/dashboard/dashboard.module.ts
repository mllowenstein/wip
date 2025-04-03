import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard.routing';
import { MyOwnMaterialModule } from '../../core/material';
import { ModalModule } from '../../shared/modal/modal.module';
import { NotificationModule } from '../../shared/notification/notification.module';
import { NavbarModule } from "../../shared/navbar/navbar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from '../../shared/chart/chart.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FeaturedComponent } from './featured/featured.component';

@NgModule({
  declarations: [DashboardComponent, SidebarComponent, ToolbarComponent, FeaturedComponent],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    HttpClientModule,
    MyOwnMaterialModule,
    ReactiveFormsModule,
    NotificationModule,
    DashboardRouting,
    NavbarModule,
    ChartModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
