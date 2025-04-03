import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudComponent } from './cloud.component';
import { CloudRouting } from './cloud.routing';


@NgModule({
  declarations: [
    CloudComponent
  ],
  imports: [
    CommonModule,
    CloudRouting,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CloudModule { }
