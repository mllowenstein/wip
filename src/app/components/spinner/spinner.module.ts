import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';
import { FricLowMaterialModule } from '../../material/index';

@NgModule({
  imports: [CommonModule, FricLowMaterialModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
  providers: [SpinnerService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SpinnerModule {}
