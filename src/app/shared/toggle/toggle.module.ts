import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';

@NgModule({
  declarations: [
    ToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ToggleModule { }
