import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnMaterialModule } from '../../core/material';
import { BaseFormComponent } from './base/base-form.component';
import { FormService } from './form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseFormComponent],
  imports: [
    CommonModule,
    MyOwnMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FormService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class FormModule { }