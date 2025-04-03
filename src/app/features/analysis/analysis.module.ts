import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis.component';
import { AnalysisRouting } from './analysis.routing';

@NgModule({
  declarations: [
    AnalysisComponent
  ],
  imports: [
    CommonModule,
    AnalysisRouting
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AnalysisModule { }
