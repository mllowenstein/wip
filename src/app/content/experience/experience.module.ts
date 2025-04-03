import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOwnMaterialModule } from '../../core/material';

@NgModule({
  declarations: [
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnMaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ExperienceModule { }
