import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnMaterialModule } from '../../core/material';
import { ModalModule } from '../../shared/modal/modal.module';
import { NotificationModule } from '../../shared/notification/notification.module';
import { ContactRouting } from './contact.routing';
import { NavbarModule } from "../../shared/navbar/navbar.module";

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    HttpClientModule,
    MyOwnMaterialModule,
    ReactiveFormsModule,
    ContactRouting,
    NotificationModule,
    NavbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ContactModule { }
