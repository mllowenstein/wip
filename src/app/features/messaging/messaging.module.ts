import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingComponent } from './messaging.component';
import { MessagingRouting } from './messaging.routing';


@NgModule({
  declarations: [
    MessagingComponent
  ],
  imports: [
    CommonModule,
    MessagingRouting
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MessagingModule { }
