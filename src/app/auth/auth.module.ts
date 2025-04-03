import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnMaterialModule } from '../core/material';
import { ModalModule } from '../shared/modal/modal.module';
import { FormModule } from '../shared/form/form.module';
import { AuthRouting } from './auth.routing';
import { AdminComponent } from './admin/admin.component';
import { NavbarModule } from '../shared/navbar/navbar.module';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnMaterialModule,
    ModalModule,
    FormModule,
    AuthRouting,
    NavbarModule
  ],
  providers: [AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AuthModule { }
