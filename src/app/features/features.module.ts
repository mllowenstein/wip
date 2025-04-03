import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogModule } from './blog/blog.module';
import { CloudModule } from './cloud/cloud.module';
import { MyOwnMaterialModule } from '../core/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../shared/modal/modal.module';
import { NotificationModule } from '../shared/notification/notification.module';
import { AnalysisModule } from './analysis/analysis.module';
import { MessagingModule } from './messaging/messaging.module';
import { FormModule } from '../shared/form/form.module';
import { FeaturesRouting } from './features.routing';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    AnalysisModule,
    BlogModule,
    CloudModule,
    MessagingModule,
    MyOwnMaterialModule,
    NotificationModule,
    FormModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    FeaturesRouting,
  ],
  exports: [FeaturesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class FeaturesModule { }
