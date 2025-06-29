import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModalComponent } from './base/base-modal.component';
import { ModalService } from './modal.service';
import { MyOwnMaterialModule } from '../../core/material';
import { NestedModalComponent } from './nested-modal/nested-modal.component';

@NgModule({
  declarations: [
    BaseModalComponent,
    NestedModalComponent
  ],
  imports: [
    CommonModule,
    MyOwnMaterialModule,
  ],
  providers: [ModalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ModalModule { }
