import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRouting } from './portfolio.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { MyOwnMaterialModule } from '../../core/material';
import { ModalModule } from '../../shared/modal/modal.module';
import { NotificationModule } from '../../shared/notification/notification.module';
import { NavbarModule } from "../../shared/navbar/navbar.module";

@NgModule({
  declarations: [
    PortfolioComponent,
    BusinessCardComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MyOwnMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NotificationModule,
    ModalModule,
    PortfolioRouting,
    NavbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PortfolioModule { }
